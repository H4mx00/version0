import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { PDFParse } from "pdf-parse";
import multer from "multer";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

// OpenRouter endpoint
const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";

// Multer setup for memory storage
const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

// Initialize Supabase on backend
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const supabase = (supabaseUrl && supabaseKey) ? createClient(supabaseUrl, supabaseKey) : null;

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Use JSON middleware
  app.use(express.json());

  // New SECURE ATS Checker endpoint
  app.post("/api/ats-checker", upload.single("resume"), async (req, res): Promise<any> => {
    let fileName: string | null = null;
    
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      const buffer = req.file.buffer;
      fileName = `guest-${Date.now()}-${req.file.originalname.replace(/[^a-zA-Z0-9.-]/g, "_")}`;

      // 1. ALWAYS UPLOAD TO SUPABASE FIRST (as requested)
      if (supabase) {
        const { error: uploadError } = await supabase.storage
          .from("guests-ats-uploads")
          .upload(fileName, buffer, {
            contentType: "application/pdf",
            upsert: true
          });
        
        if (uploadError) {
          console.error("Backend Supabase upload error:", uploadError);
        }
      }

      // 2. Parse the PDF from buffer (already in memory)
      const parser = new PDFParse({ data: buffer });
      const textResult = await parser.getText();
      const text = textResult.text || "";
      await parser.destroy();

      if (!text.trim()) {
        throw new Error("Could not extract text from PDF. It might be an image-only PDF.");
      }

      // 3. Call OpenRouter
      const openRouterKey = process.env.OPENROUTER_API_KEY;
      if (!openRouterKey) {
        throw new Error("OpenRouter configuration missing on server.");
      }

      const prompt = `Act as a Next-Generation ATS (Applicant Tracking System) used by top-tier European Tech firms. 
Your goal is to perform a deep-scan of the provided CV text and generate a structured JSON report.

FIRST: Determine if the text provided is actually a Resume/CV. 
If it is NOT a resume, return ONLY this JSON: {"isResume": false}

If it IS a resume, return this STRICT JSON OUTPUT FORMAT:
{
  "isResume": true,
  "GlobalScore": {
    "design": number,
    "structure": number,
    "content": number,
    "total": number
  },
  "KeyImprovement": {
    "CriticalIssue": {
      "Title": "Short punchy title (max 5 words)",
      "Description": "Explain the major flaw and why it stops recruiters from hiring."
    },
    "HighAccuracy": {
      "Title": "Short punchy title (max 5 words)",
      "Description": "Identify a specific missing keyword or metric that would boost the score instantly."
    }
  }
}

SCORING RULES:
- Design: Evaluate white space, section headers, and machine-readability (0-100).
- Structure: Check for Reverse-Chronological order and contact information placement (0-100).
- Content: Analyze keyword density, quantifiable metrics (e.g., %, $), and skill-role alignment (0-100).
- GlobalScore: The weighted average of the three above.

Resume Text to analyze:
${text.substring(0, 10000)}
`;

      const aiResponse = await fetch(OPENROUTER_API_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${openRouterKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://europecv.com",
          "X-Title": "EuropeCV ATS Checker"
        },
        body: JSON.stringify({
          model: "openrouter/free",
          messages: [
            { role: "system", content: "You are a senior HR technology expert and ATS algorithm specialist. You communicate only in JSON." },
            { role: "user", content: prompt }
          ],
          response_format: { type: "json_object" }
        })
      });

      if (!aiResponse.ok) {
        const errorText = await aiResponse.text();
        throw new Error(`OpenRouter API failed: ${aiResponse.status} ${errorText}`);
      }

      const aiData = await aiResponse.json();
      const content = aiData.choices?.[0]?.message?.content;
      
      if (!content) {
        throw new Error("No response from AI model.");
      }

      let parsedResult;
      try {
        parsedResult = JSON.parse(content);
      } catch (e) {
        const match = content.match(/\{[\s\S]*\}/);
        if (match) {
          parsedResult = JSON.parse(match[0]);
        } else {
          throw new Error("Failed to parse AI response as JSON.");
        }
      }

      // Final JSON to return
      res.json(parsedResult);

    } catch (error: any) {
      console.error("ATS Checker Backend Error:", error);
      res.status(500).json({ error: error.message });
    } finally {
      // 4. ALWAYS DELETE FROM SUPABASE (as requested: if not resume delete, if resume delete after result)
      if (fileName && supabase) {
        try {
          const { error: deleteError } = await supabase.storage
            .from("guests-ats-uploads")
            .remove([fileName]);
          
          if (deleteError) {
            console.error("Cleanup deletion error:", deleteError);
          } else {
            console.log(`Successfully cleaned up guest file: ${fileName}`);
          }
        } catch (e) {
          console.error("Unexpected error during cleanup:", e);
        }
      }
    }
  });

  // Keep old endpoint for backwards compatibility or repurpose
  app.post("/api/check-resume", async (req, res): Promise<any> => {
    res.status(410).json({ error: "Endpoint deprecated. Use /api/ats-checker with multipart/form-data instead." });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
