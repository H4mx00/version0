export const getFAQsByTitle = (title: string) => {
  const t = title.toLowerCase();

  // 15. Free Resume Templates
  if (t === 'free resume templates') {
    return [
      {
        q: "How can I get free resume templates?",
        a: "Simply sign up for a free account on EuropeCV. You'll gain immediate access to our library of professional, ATS-optimized templates that you can use to build your CV at no cost."
      },
      {
        q: "What is the difference between free and premium templates?",
        a: "Free templates provide clean, standard layouts perfect for most industries. Premium templates often feature more advanced design elements, specialized sections, and deeper AI-driven customization options to help you stand out in competitive fields."
      },
      {
        q: "Can I download these free templates as PDF?",
        a: "Yes! All resumes built with our templates—including the free ones—can be exported as professionally formatted PDFs, ready to be sent to recruiters or uploaded to job portals."
      }
    ];
  }

  // 1. AI Resume Builder
  if (t === 'ai resume builder') {
    return [
      {
        q: "How does the AI Resume Builder create content?",
        a: "The builder uses advanced natural language processing to transform your basic work history into high-impact professional bullets. It suggests power verbs and quantifyable achievements based on your industry."
      },
      {
        q: "Can I start with an existing file?",
        a: "Yes, you can upload your old resume and our AI builder will automatically parse the data, mapping it to a modern layout that you can then refine with AI suggestions."
      },
      {
        q: "Is the AI-generated resume really better?",
        a: "Statistically, resumes optimized with AI see a 3x higher response rate. Our builder ensures your content is balanced, professional, and contains the keywords recruiters are looking for."
      }
    ];
  }

  // 2. AI CV Generator
  if (t === 'ai cv generator') {
    return [
      {
        q: "How fast is the AI CV Generator?",
        a: "You can generate a complete, professional CV in under 5 minutes. The AI handles the heavy lifting of writing and formatting, allowing you to focus on choosing the best template."
      },
      {
        q: "Does the generator support global formats?",
        a: "Yes, the AI CV Generator can produce documents tailored for European (Europass), North American, and Asian markets, adjusting terminology and layout accordingly."
      },
      {
        q: "Can I generate multiple versions?",
        a: "Absolutely. You can generate different versions of your CV for different career paths or industries, all managed from a single dashboard."
      }
    ];
  }

  // 3. ATS Resume Optimizer
  if (t === 'ats resume optimizer') {
    return [
      {
        q: "How does the ATS Resume Optimizer work?",
        a: "It simulates how an Applicant Tracking System sees your resume. It checks for readability, keyword density, and formatting issues that might cause your CV to be rejected by automated filters."
      },
      {
        q: "What kind of 'score' does it give?",
        a: "You receive an optimization score out of 100, with detailed feedback on how to improve. We recommend aiming for a score above 85 for the best chance of passing human review."
      },
      {
        q: "Does it help with keyword stuffing?",
        a: "Our optimizer helps you integrate keywords naturally. We discourage 'keyword stuffing' as it can be flagged by modern systems; instead, we show you where to place relevant skills contextually."
      }
    ];
  }

  // 4. AI Resume Tailoring
  if (t === 'ai resume tailoring') {
    return [
      {
        q: "Why is AI resume tailoring effective?",
        a: "Generic resumes rarely stand out. Tailoring ensures that every line of your CV speaks directly to the job you're applying for, significantly increasing your 'match' score in recruiter software."
      },
      {
        q: "Does tailoring change my entire resume?",
        a: "The AI identifies the most critical 20-30% of your resume that needs adjustment—like your summary and key skills—to align with a specific role while keeping your core history intact."
      },
      {
        q: "How many resumes should I tailor?",
        a: "For the best results, you should tailor your resume for every significant job application. Our AI makes this process take seconds rather than hours."
      }
    ];
  }

  // 5. Resume to Job Description AI
  if (t === 'resume to job description ai') {
    return [
      {
        q: "How do I map my resume to a job description?",
        a: "Simply paste the job link or text. Our AI performs a 'gap analysis' between your profile and the requirements, highlighting exactly what's missing or what needs more emphasis."
      },
      {
        q: "Can it tell me if I'm underqualified?",
        a: "It gives you an honest assessment of your fit. If there's a skill gap, it suggests how to bridge it or highlights 'transferable skills' you have that might compensate."
      },
      {
        q: "Does it work with LinkedIn job descriptions?",
        a: "Yes, it works with any text-based job description from LinkedIn, Indeed, Glassdoor, or company career pages."
      }
    ];
  }

  // 6. AI Job Application Tool
  if (t === 'ai job application tool') {
    return [
      {
        q: "What does the AI Job Application tool include?",
        a: "It's a comprehensive suite: resume tailoring, cover letter generation, and even AI-suggested answers for common application form questions."
      },
      {
        q: "Can it generate follow-up emails?",
        a: "Yes! The tool can draft professional follow-up emails to recruiters after an interview or application submission, tailored to the specific role and company culture."
      },
      {
        q: "Does it help with LinkedIn outreach?",
        a: "The tool includes templates and AI generation for networking messages, helping you connect with hiring managers or potential teammates effectively."
      }
    ];
  }

  // 7. Europass CV Builder AI
  if (t === 'europass cv builder ai') {
    return [
      {
        q: "Is the AI Europass Builder better than the official one?",
        a: "While the official one is a great standard, our AI version adds smart writing assistance, better layout customization, and internal ATS checks while strictly following the official Europass XML/PDF schema."
      },
      {
        q: "Will my CV be recognized in all EU countries?",
        a: "Yes. The Europass format is the most recognized standard across the European Union. Our AI ensures all mandatory sections are correctly filled according to EU guidelines."
      },
      {
        q: "Can I import my data from the official Europass portal?",
        a: "Yes, you can upload your existing Europass PDF and our AI will instantly upgrade it with better descriptions and a more modern (but compliant) aesthetic."
      }
    ];
  }

  // 8. ATS-Friendly Resume Maker
  if (t === 'ats-friendly resume maker') {
    return [
      {
        q: "What makes a resume 'ATS-friendly'?",
        a: "It's about simplicity and structure. Our maker uses clean, single-column layouts (or optimized multi-column), standard headings, and system-compatible fonts that software can easily decode."
      },
      {
        q: "Can I use colors and icons in an ATS resume?",
        a: "Yes! Modern ATS engines can handle colors and basic icons. Our templates are designed to be visually appealing to humans while remaining perfectly readable for machines."
      },
      {
        q: "Do you provide ATS-safe fonts?",
        a: "All fonts included in our maker are carefully selected to be universally readable by all major Applicant Tracking Systems like Workday, Greenhouse, and Lever."
      }
    ];
  }

  // 9. AI CV Writer
  if (t === 'ai cv writer') {
    return [
      {
        q: "Does the AI CV Writer write everything from scratch?",
        a: "It's a collaborative process. You provide the raw facts (dates, titles), and the AI writer crafts professional narratives, bullet points, and summaries that highlight your impact."
      },
      {
        q: "Can the AI writer handle different industries?",
        a: "Yes, our models are trained on millions of high-performing resumes across tech, healthcare, finance, creative arts, and more."
      },
      {
        q: "Is the tone of the writing adjustable?",
        a: "Certainly. You can tell the AI to be more 'creative', 'formal', or 'direct' depending on the company you are targeting."
      }
    ];
  }

  // 10. Resume Optimization AI
  if (t === 'resume optimization ai') {
    return [
      {
        q: "What exactly is 'Resume Optimization'?",
        a: "It's the process of refining your CV's language, layout, and keywords to perform better in digital screens. Our AI looks for 'weak' words and replaces them with high-impact alternatives."
      },
      {
        q: "How often should I optimize my resume?",
        a: "We recommend a quick optimization check every time you add a new experience or when you haven't seen an interview invite in two weeks."
      },
      {
        q: "Does it help with formatting errors?",
        a: "Yes, it automatically detects and fixes common issues like inconsistent date formats, redundant sections, or excessive white space."
      }
    ];
  }

  // 11. Online Resume Builder
  if (t === 'online resume builder') {
    return [
      {
        q: "Do I need to install anything to build my resume?",
        a: "No, everything happens in your browser. Our online builder is accessible from any device, allowing you to edit and download your CV wherever you are."
      },
      {
        q: "Is my progress saved online?",
        a: "Yes, all changes are saved in real-time to your secure EuropeCV account, so you never have to worry about losing your work."
      },
      {
        q: "Can I share a live link to my resume?",
        a: "Yes, our online builder allows you to generate a private, shareable link that you can send to recruiters or include in your email signature."
      }
    ];
  }

  // 12. Free Resume Builder
  if (t === 'free resume builder') {
    return [
      {
        q: "Is there a limit to how many resumes I can build for free?",
        a: "Our free tier allows you to create and manage one master resume with full AI capabilities. You can update it as often as you like at no cost."
      },
      {
        q: "What features are included in the free builder?",
        a: "You get access to professional templates, the basic AI writing assistant, and high-quality PDF downloads without watermarks."
      },
      {
        q: "Are there hidden costs when I try to download?",
        a: "No 'paywalls' for basic downloads. We believe everyone should have a professional CV, so we keep our core builder free forever."
      }
    ];
  }

  // 13. Free Resume Maker
  if (t === 'free resume maker') {
    return [
      {
        q: "How do I start making a resume for free?",
        a: "Just click 'Get Started'. No credit card is required. You can pick a template and start entering your details immediately."
      },
      {
        q: "Does 'free' mean low quality?",
        a: "Not at all. Our free templates are the same ones used by professionals landing jobs at Google and Amazon. They are simply our gift to the job-seeking community."
      },
      {
        q: "Can I print my resume directly from the maker?",
        a: "Yes, once you're done making your resume, you can download it as a print-ready PDF that looks perfect on standard A4 or Letter paper."
      }
    ];
  }

  // 14. Resume Editor
  if (t === 'resume editor') {
    return [
      {
        q: "How flexible is the resume editor?",
        a: "Extremely. You can drag and drop sections, change margin sizes, font scales, and colors instantly. It's built for those who want total control over their aesthetic."
      },
      {
        q: "Can I add custom sections in the editor?",
        a: "Yes. Whether it's 'Publications', 'Volunteering', or 'Hobbies', you can add custom blocks to showcase what makes you unique."
      },
      {
        q: "Is there an undo/redo feature?",
        a: "Yes, the editor tracks your changes, allowing you to experiment freely with different looks and content without fear."
      }
    ];
  }

  // 16. Create Resume
  if (t === 'create resume') {
    return [
      {
        q: "How do I create a professional resume from scratch?",
        a: "Our guided process takes you through every section—Summary, Experience, Education, and Skills—providing real-time tips and AI-generated suggestions as you go."
      },
      {
        q: "How long does it take to create a resume?",
        a: "First-time users usually finish a high-quality resume in about 15 minutes. If you import an existing LinkedIn profile, it can take less than 2 minutes."
      },
      {
        q: "What information do I need to start?",
        a: "Just your basic work history and contact info. Our AI can help you 'fill in the blanks' for job descriptions if you can't remember exactly how to phrase your past roles."
      }
    ];
  }

  // 17. Convert Resume
  if (t === 'convert resume') {
    return [
      {
        q: "What file types can I convert?",
        a: "You can upload PDF, DOC, DOCX, and even TXT files. Our converter uses OCR to accurately extract text from even 'flat' PDF images."
      },
      {
        q: "Will the conversion mess up my dates and titles?",
        a: "Our AI specifically looks for chronological patterns and hierarchy. It identifies job titles, companies, and dates with 99% accuracy, allowing you to move into a new template seamlessly."
      },
      {
        q: "Can I convert my resume into a different language?",
        a: "Yes, the conversion process also offers an optional translation step, allowing you to move from an old English PDF to a fresh German CV in one workflow."
      }
    ];
  }

  // 18. AI Resume
  if (t === 'ai resume') {
    return [
      {
        q: "What makes an AI-powered resume different from a traditional one?",
        a: "An AI resume is built using data-driven insights from thousands of successful hires. It ensures your language is optimized for both human recruiters and computer algorithms, increasing your chances of landing an interview."
      },
      {
        q: "Can I use AI to write my professional summary?",
        a: "Yes! Our AI can draft a powerful, 2-3 sentence summary that highlights your biggest career wins and value proposition based on your target industry and experience level."
      },
      {
        q: "Will an AI resume look too generic to recruiters?",
        a: "Not with EuropeCV. We use AI to refine and amplify your specific accomplishments, ensuring the content is authentically yours but polished to a professional industry standard."
      }
    ];
  }

  // 19. AI Cover Letter
  if (t === 'ai cover letter') {
    return [
      {
        q: "Should I submit a cover letter with every application?",
        a: "Yes, a cover letter provides context that a resume cannot. Our AI helps you draft personalized letters that bridge the gap between your work history and the specific job requirements."
      },
      {
        q: "How does the AI ensure the cover letter matches my voice?",
        a: "You can select your preferred tone—Professional, Creative, or Enthusiastic—and the AI will adjust its vocabulary and sentence structure to match your unique personality."
      },
      {
        q: "Is it acceptable to recruiters to use AI-generated cover letters?",
        a: "Hiring managers value clear, professional communication. AI acts as a sophisticated writing tool to help you articulate your genuine interest and qualifications clearly and concisely."
      }
    ];
  }

  // 20. AI Cover Letter Generator
  if (t === 'ai cover letter generator') {
    return [
      {
        q: "How does the AI Cover Letter Generator know what to write?",
        a: "The generator analyzes your CV and the job description you provide, identifying the best 'match points' between your skills and the employer's needs to create a targeted first draft."
      },
      {
        q: "Does it follow standard business letter formats?",
        a: "Absolutely. Our generator ensures proper header structure, professional salutations, and a clean three-paragraph layout as expected by corporate recruiters."
      },
      {
        q: "Can I generate different versions for different companies?",
        a: "Yes. You can generate unlimited variations, allowing you to highlight different aspects of your background depending on each company's specific culture and role requirements."
      }
    ];
  }

  // 21. Cover Letter from Job Description AI
  if (t === 'cover letter from job description ai') {
    return [
      {
        q: "Why should I use the job description to generate my cover letter?",
        a: "A letter that directly references the job description shows you've done your homework. Our AI identifies the specific keywords and 'pain points' in the ad and addresses them directly."
      },
      {
        q: "How does the AI extract requirements from a long job post?",
        a: "Our models are trained to ignore 'fluff' and focus on the core competencies, responsibilities, and required qualifications mentioned in the job posting."
      },
      {
        q: "Can it handle complex or vaguely written job descriptions?",
        a: "Yes. Even if a job post is brief or disorganized, our AI can infer the primary goals of the role and suggest relevant professional experiences from your CV to highlight."
      }
    ];
  }

  // 22. Personalized Cover Letter AI
  if (t === 'personalized cover letter ai') {
    return [
      {
        q: "How personal can the AI cover letter actually get?",
        a: "The AI looks for unique intersections between your career path and the role. It avoids canned phrases and instead uses your specific achievements to build a narrative of why you're a fit."
      },
      {
        q: "Does it use my CV data to personalize the letter?",
        a: "Yes, it pulls specific results and skills from your profile so the cover letter serves as a perfect companion to your CV, rather than just repeating it verbatim."
      },
      {
        q: "Can I add custom stories or specific achievements to the AI draft?",
        a: "Definitely. We provide a simple editor where you can inject specific anecdotes or 'soft' skills that add that final layer of human personality to the AI-generated draft."
      }
    ];
  }

  // 23. ATS Cover Letter Builder
  if (t === 'ats cover letter builder') {
    return [
      {
        q: "Do Applicant Tracking Systems really read cover letters?",
        a: "Many modern ATS platforms scan cover letters for keywords just like they do with resumes. Our builder ensures your letter is search-optimized for those critical algorithms."
      },
      {
        q: "What makes a cover letter 'ATS-friendly'?",
        a: "It's about having a clear text-based structure and specific industry keywords. We avoid complex graphics or non-standard formatting that might confuse the software."
      },
      {
        q: "Will an ATS-optimized cover letter still look good to a human?",
        a: "Yes. Our templates balances 'machine readability' with clean, professional typography that looks excellent when a recruiter eventually opens the PDF."
      }
    ];
  }

  // 24. Job-Specific Cover Letter AI
  if (t === 'job-specific cover letter ai') {
    return [
      {
        q: "Why is a job-specific letter better than a general one?",
        a: "General letters often signal lack of effort. A job-specific letter proves your interest in *this* particular role and *this* company, which is a major factor in hiring decisions."
      },
      {
        q: "How does the AI specialize my background for a new career path?",
        a: "The AI identifies 'transferable skills' and rephrases your past successes in the language of the new industry you're targeting."
      },
      {
        q: "Can I mention specific company values in my letter?",
        a: "Yes, our assistant can suggest places in the letter to insert your research about the company's culture, mission, or recent successes."
      }
    ];
  }

  // 25. AI Application Letter Writer
  if (t === 'ai application letter writer') {
    return [
      {
        q: "Is an application letter different from a cover letter?",
        a: "They are essentially the same, focusing on introducing yourself and highlighting your fit. Our writer handles the nuances required for formal job applications across various sectors."
      },
      {
        q: "What tone should my application letter use?",
        a: "Most corporate roles require a 'Confident Professional' tone. Our writer ensures you sound authoritative but approachable, striking the perfect balance for a first impression."
      },
      {
        q: "Can it write letters of interest for companies not currently hiring?",
        a: "Yes. You can use the builder to create a 'Letter of Interest' that focuses on your general skills and your strong desire to work for a specific organization."
      }
    ];
  }

  // 26. Cover Letter Generator
  if (t === 'cover letter generator') {
    return [
      {
        q: "How much faster is using the generator compared to writing manually?",
        a: "Most users spend 30-60 minutes on a cover letter. Our generator produces a highly polished, relevant draft in about 45 seconds, which you can then quickly refine."
      },
      {
        q: "What cover letter templates are available?",
        a: "We offer several modern, professional templates that perfectly match our resume styles, ensuring a consistent 'personal brand' across your entire application."
      },
      {
        q: "In what formats can I download my generated letter?",
        a: "You can export your cover letter as a professionally formatted PDF or as plain text to paste directly into an online application portal."
      }
    ];
  }

  // 27. Cover Letter Templates
  if (t === 'cover letter templates') {
    return [
      {
        q: "What defines a great cover letter template?",
        a: "A great template is professional, clean, and has clear hierarchy. It should have a well-defined header for contact info and sufficient white space for readability."
      },
      {
        q: "Are these templates free to use?",
        a: "Yes, we provide several professionally designed cover letter templates for free to all EuropeCV users to help you start your job search effectively."
      },
      {
        q: "Can I change the colors and fonts of the template?",
        a: "Absolutely. Our editor allows you to customize the aesthetic of your cover letter to match your resume or to fit the specific vibe of the company you're pursuing."
      }
    ];
  }

  // 28. Cover Letter Examples
  if (t === 'cover letter examples') {
    return [
      {
        q: "How should I use your cover letter examples?",
        a: "Think of them as structural blueprints. Look at how they transition between paragraphs and how they quantify their successes; then, use our AI to apply those patterns to your own data."
      },
      {
        q: "Are these examples from real successful applications?",
        a: "Yes, our examples are based on high-performing letters that have successfully landed interviews at major global companies across various industries."
      },
      {
        q: "Can I use an example as a starting point for my own letter?",
        a: "Yes. You can select an example that matches your experience level and use it as a 'structural seed' for our AI to populate with your specific career details."
      }
    ];
  }

  // 29. ATS Checker
  if (t === 'ats checker') {
    return [
      {
        q: "What exactly does the ATS Checker look for?",
        a: "It scans for font compatibility, section header clarity, keyword matches, and potential formatting roadblocks that might cause software to discard your application."
      },
      {
        q: "Should I aim for 100% on the ATS score?",
        a: "While a high score is good, don't sacrifice human readability for a perfect machine score. An 85-95% score is usually ideal for both machines and humans."
      },
      {
        q: "Is the ATS Checker's feedback specific to my industry?",
        a: "Yes, our checker compares your content against common hiring standards for your specific job title and industry sector to give you more relevant advice."
      }
    ];
  }

  // 30. ATS Resume Tips
  if (t === 'ats resume tips') {
    return [
      {
        q: "What are the most important ATS tips for 2024?",
        a: "Use standard headers (like 'Work Experience'), avoid text in tables or graphics, and ensure your contact information is clearly visible in the main body, not just the header."
      },
      {
        q: "Should my resume always be a single column for ATS?",
        a: "While single-column is the safest, many modern ATS platforms can handle simple two-column layouts. Our templates are tested to work in both formats."
      },
      {
        q: "How should I handle acronyms for ATS compliance?",
        a: "The best practice is to include both the acronym and the full term (e.g., 'Search Engine Optimization (SEO)') to ensure you match whatever keyword the recruiter used."
      }
    ];
  }

  // 31. Resume Writing Services
  if (t === 'resume writing services') {
    return [
      {
        q: "Is an AI writing service better than a human resume writer?",
        a: "AI is significantly faster and more affordable. While a human offers personal coaching, our AI draws from a much larger database of successful resumes to provide statistically proven language."
      },
      {
        q: "What is included in your AI resume writing service?",
        a: "You get full content generation, ATS optimization, template selection, and real-time editing tools—everything you need to produce a high-tier CV without the high consultant fees."
      },
      {
        q: "How consistent are the writing results across different career levels?",
        a: "Very consistent. Whether you're an entry-level student or a C-suite executive, the AI adjusts its vocabulary and strategy to match the seniority and expectations of your target role."
      }
    ];
  }

  // 32. Resume Format Guide
  if (t === 'resume format guide') {
    return [
      {
        q: "Which resume format is best for my situation?",
        a: "If you have a steady work history, use 'Reverse Chronological'. If you're changing careers or have gaps, a 'Functional' or 'Hybrid' format may better highlight your skills."
      },
      {
        q: "When should I use a functional resume format?",
        a: "Use it if your skills are more impressive than your job titles. It's especially useful for career changers, freelancers, or those re-entering the workforce after a long break."
      },
      {
        q: "Is a hybrid resume format actually the most effective?",
        a: "For most mid-to-senior professionals, yes. It allows you to highlight your most relevant skills at the top while still providing the clear career timeline that recruiters expect."
      }
    ];
  }

  // 33. How to Make a Resume
  if (t === 'how to make a resume') {
    return [
      {
        q: "What is the very first step in making a resume?",
        a: "Start by listing your 'raw data': your job titles, dates, education, and specific wins. Don't worry about wording yet—just get the facts down before using our AI to polish them."
      },
      {
        q: "What sections are absolutely mandatory in a professional resume?",
        a: "You must include: Contact Info, Professional Summary, Work Experience, Education, and Skills. Everything else (like Projects or Volunteering) is optional."
      },
      {
        q: "How long should a resume be for most applications?",
        a: "Ideally 1 page for every 10 years of experience. For 90% of applicants, a concise 1-page resume is more effective than a long, unfocused document."
      }
    ];
  }

  // 34. Europass CV
  if (t === 'europass cv') {
    return [
      {
        q: "What exactly defines a 'Europass' CV?",
        a: "The Europass is the official EU standard for describing skills and qualifications. It uses a specific grid-based layout and a standardized language for personal information and work history."
      },
      {
        q: "Who should use a Europass CV?",
        a: "It is essential for anyone applying to public sector jobs, international organizations, or academic positions within Europe. It is also a very safe choice for general international applicants."
      },
      {
        q: "How do I ensure my CV is Europass compliant?",
        a: "By using our specialized Europass builder, your CV automatically follows the required structure, font choices, and XML metadata required by the European Commission."
      }
    ];
  }

  // 35. Europass with AI
  if (t === 'europass with ai') {
    return [
      {
        q: "How does AI make the Europass CV better?",
        a: "Standard Europass CVs often look bland. Our AI helps you craft more impactful bullet points while maintaining the strict structural requirements that make it a 'Europass'."
      },
      {
        q: "Will the AI-generated content break Europass compliance?",
        a: "No. Our AI understands the constraints of the Europass framework. It optimizes the *content* within the *structure*, ensuring your CV is both compliant and compelling."
      },
      {
        q: "Can AI help me translate my Europass into other EU languages?",
        a: "Yes. Our AI can instantly translate your entire Europass into German, French, Italian, and 20+ other European languages while preserving the official format."
      }
    ];
  }

  // 36. Europass Template
  if (t === 'europass template') {
    return [
      {
        q: "Where can I find the latest Europass template?",
        a: "EuropeCV provides the most up-to-date, AI-enhanced version of the official Europass template directly in our builder interface."
      },
      {
        q: "Is the Europass template officially recognized?",
        a: "Yes, our templates are designed to meet the exact specifications of the CEDEFOP (European Centre for the Development of Vocational Training) standards."
      },
      {
        q: "Can I customize the look of my Europass?",
        a: "While Europass has strict structural rules, our builder allows subtle customization of white space and typography to make your document more readable than the standard portal output."
      }
    ];
  }

  // 37. Europass Format Rules
  if (t === 'europass format rules') {
    return [
      {
        q: "What are the key formatting rules for Europass?",
        a: "Europass requires a very specific left-column alignment for dates and headers, the use of the CEFR standard for languages, and a specific order for personal details."
      },
      {
        q: "Should I include a photo on my Europass CV?",
        a: "It depends on the country. Most Central European countries expect a photo on a Europass, while UK and Ireland recruiters often prefer no photo for anti-discrimination reasons."
      },
      {
        q: "How do I correctly list my language levels in Europass?",
        a: "You must use the Common European Framework of Reference for Languages (A1 to C2). Our builder includes a dropdown to help you select your level for speaking, reading, and writing."
      }
    ];
  }

  // 38. Europass Online Editor
  if (t === 'europass online editor') {
    return [
      {
        q: "Why use your online Europass editor instead of a Word doc?",
        a: "Word documents can't easily handle the complex grid requirements of Europass. Our specialized web editor ensures your columns never break and your spacing is always perfect."
      },
      {
        q: "Can I save multiple drafts of my Europass online?",
        a: "Yes. Our platform allows you to keep different versions of your Europass (e.g., in different languages or for different job types) in one centralized workspace."
      },
      {
        q: "Is the editor compatible with mobile browsers?",
        a: "Yes. While we recommend a desktop for final formatting, our editor allows you to update your contact info or add a new skill to your Europass while on the go."
      }
    ];
  }

  // 39. Europass PDF
  if (t === 'europass pdf') {
    return [
      {
        q: "How do I turn my CV into a Europass-compliant PDF?",
        a: "Once you finish editing in our builder, simply click 'Download'. Our system generates a high-fidelity PDF that meets all EU digital standards."
      },
      {
        q: "Can I edit the PDF after I download it?",
        a: "PDFs are fixed for viewing. To make changes, simply return to the EuropeCV editor, update your details, and download a new, updated PDF in seconds."
      },
      {
        q: "Does the PDF include Europass metadata?",
        a: "Yes. Our system can optionally include the official Europass XML metadata inside the PDF, making it 'smart' and readable by official European job portals."
      }
    ];
  }

  // 40. Europass XML
  if (t === 'europass xml') {
    return [
      {
        q: "What is a Europass XML file used for?",
        a: "XML is a machine-readable format. It's used to import your data directly into some European job sites so you don't have to fill out their application forms manually."
      },
      {
        q: "How do I get an XML version of my CV?",
        a: "In the export options of our Europass builder, you can choose to download your CV data in the official Europass XML schema."
      },
      {
        q: "Can I upload an XML file to EuropeCV to update my profile?",
        a: "Yes! If you have an existing Europass XML file from the official portal, you can upload it here and our AI will instantly populate your new, improved CV."
      }
    ];
  }

  // 41. Europass Examples
  if (t === 'europass examples') {
    return [
      {
        q: "Where can I see Europass examples for different job roles?",
        a: "We provide a library of 'Perfect Europass' examples for engineers, teachers, doctors, and students, showing you exactly how to populate each standardized section."
      },
      {
        q: "What makes a Europass example particularly 'good'?",
        a: "A good example fills the standardized boxes without over-cluttering them. It uses the CEFR language levels correctly and lists competencies in a clear, scannable way."
      },
      {
        q: "Can I copy the structure of a specific Europass example?",
        a: "Yes. Our builder allows you to load an example structure and then replace the placeholder text with your own career information using AI assistance."
      }
    ];
  }

  // 42. Europass vs Resume
  if (t === 'europass vs resume') {
    return [
      {
        q: "When should I use a Europass instead of a standard resume?",
        a: "Use Europass for any role in the European public sector, academia, or if you're applying for an EU mobility program. Use a standard resume for private sector tech or creative roles."
      },
      {
        q: "Are the length requirements different for Europass and resumes?",
        a: "Yes. Standard resumes are strictly 1-2 pages. A Europass CV can be much longer, as it is designed to be a comprehensive record of your lifelong learning and professional journey."
      },
      {
        q: "Do some European countries hate the Europass format?",
        a: "Hate is a strong word, but in countries like Sweden or the Netherlands, many private sector recruiters prefer a more compact, modern 'resume' over the bulkier Europass format."
      }
    ];
  }

  // 43. Europass in English
  if (t === 'europass in english') {
    return [
      {
        q: "Is there a specific 'English' standard for a Europass CV?",
        a: "While the structure remains the same, an English Europass requires careful use of corporate English terminology. Our AI ensures your language is natural for an English-speaking hiring manager."
      },
      {
        q: "Should I use British or American spelling for an English Europass?",
        a: "Generally, use British spelling (e.g., 'Organised' instead of 'Organized') for jobs in most of Europe. However, if you are targeting an American multi-national company, US English is fine."
      },
      {
        q: "How do I describe non-English qualifications in an English Europass?",
        a: "Our AI helps you provide a brief 'English equivalent' description in brackets next to your local degree or certification name to help the recruiter understand its value."
      }
    ];
  }

  // 44. Europass for Students
  if (t === 'europass for students') {
    return [
      {
        q: "Is Europass a good choice for someone with no work experience?",
        a: "Yes. Europass allows students to expand the 'Education and Training' and 'Digital Skills' sections, which is perfect for highlighting your potential when your work history is short."
      },
      {
        q: "How should a student highlight projects or volunteering in Europass?",
        a: "Europass has dedicated sections for 'Volunteering' and 'Projects'. These are just as visible as work experience, making it ideal for showing off extracurricular activities."
      },
      {
        q: "Can I use Europass to apply for an Erasmus+ program?",
        a: "Absolutely. Europass is the standard for the Erasmus+ and EVS programs. Our builder ensures all the fields required by the mobility portals are correctly filled."
      }
    ];
  }

  // 45. Translate CV English
  if (t.includes('translate') && t.includes('english')) {
    return [
      {
        q: "How accurate is the professional translation to English?",
        a: "Our AI uses deep-context models specifically trained on UK and US professional terminology. It distinguishes between industry-specific jargon and ensures your accomplishments sound native to English-speaking recruiters."
      },
      {
        q: "Does it support both British and American English?",
        a: "Yes. You can specify your target market, and the generator will adjust spelling and terminology (e.g., 'CV' for UK vs. 'Resume' for US) to match local expectations."
      },
      {
        q: "Will my translated CV be ATS-compliant in English-speaking countries?",
        a: "Absolutely. Our templates and translations are structured to pass the strictest ATS screens used by major global corporations in the UK, USA, Canada, and Australia."
      }
    ];
  }

  // 46. Lebenslauf auf Deutsch
  if (t.includes('lebenslauf') && t.includes('deutsch')) {
    return [
      {
        q: "Wie präzise ist die Übersetzung meines Lebenslaufs ins Deutsche?",
        a: "Unsere KI ist auf deutsches Business-Vokabular und Rekrutierungsstandards in Deutschland, Österreich und der Schweiz spezialisiert. Sie erkennt Fachbegriffe und übersetzt sie kontextgerecht."
      },
      {
        q: "Berücksichtigt das Tool das deutsche Lebenslauf-Format?",
        a: "Ja. Das System optimiert den Inhalt für den deutschsprachigen Arbeitsmarkt, einschließlich der korrekten Darstellung von Abschlüssen und Berufsbezeichnungen."
      },
      {
        q: "Kann ich meinen Lebenslauf direkt auf Deutsch herunterladen?",
        a: "Ja, nach der Übersetzung können Sie Ihren Lebenslauf in einem professionellen, für DACH-Regionen optimierten Design als PDF exportieren."
      }
    ];
  }

  // 47. Traduire CV Français
  if (t.includes('traduire') && t.includes('français')) {
    return [
      {
        q: "Quelle est la qualité de la traduction de mon CV en français ?",
        a: "Notre IA utilise des modèles entraînés sur le vocabulaire professionnel français. Elle adapte vos expériences en utilisant les termes exacts recherchés par les recruteurs en France, en Belgique ou en Suisse."
      },
      {
        q: "Le CV traduit respecte-t-il les normes françaises ?",
        a: "Oui, la traduction prend en compte les nuances du marché francophone. Nous veillons à ce que les intitulés de postes et les diplômes soient traduits de manière cohérente avec le système local."
      },
      {
        q: "Puis-je traduire mon CV du français vers une autre langue ?",
        a: "Absolument. Notre plateforme prend en charge la traduction bidirectionnelle entre le français et plus de 20 autres langues européennes."
      }
    ];
  }

  // 48. Traducir CV Español
  if (t.includes('traducir') && t.includes('español')) {
    return [
      {
        q: "¿Qué tan precisa es la traducción de mi CV al español?",
        a: "Nuestra IA está optimizada para el lenguaje profesional de España y Latinoamérica. Traduce términos técnicos y logros de manera que suenen naturales para los reclutadores hispanohablantes."
      },
      {
        q: "¿El CV traducido es compatible con los sistemas ATS en España?",
        a: "Sí. Generamos documentos estructurados que los sistemas de seguimiento de candidatos (ATS) pueden leer perfectamente, asegurando que tus palabras clave sean detectadas."
      },
      {
        q: "¿Puedo elegir entre español de España o de Latinoamérica?",
        a: "Nuestra IA adapta el tono para que sea profesional y neutral, lo que lo hace efectivo para cualquier mercado de habla hispana a nivel global."
      }
    ];
  }

  // 49. Tradurre CV Italiano
  if (t.includes('tradurre') && t.includes('italiano')) {
    return [
      {
        q: "Quanto è accurata la traduzione del mio CV in italiano?",
        a: "La nostra IA utilizza modelli addestrati sul linguaggio aziendale italiano. Non si limita a tradurre parole, ma adatta il contesto per rendere il tuo profilo interessante per le aziende italiane."
      },
      {
        q: "Vengono rispettati gli standard del mercato del lavoro italiano?",
        a: "Certamente. La traduzione include la corretta terminologia per i titoli di studio e le responsabilità lavorative, seguendo le convenzioni del mercato locale."
      },
      {
        q: "Posso esportare il CV tradotto in formato PDF?",
        a: "Sì, una volta completata la traduzione, puoi scaricare il tuo nuovo CV in italiano utilizzando uno dei nostri template professionali approvati dai recruiter."
      }
    ];
  }

  // 50. Traduzir CV Português
  if (t.includes('traduzir') && t.includes('português')) {
    return [
      {
        q: "A tradução do meu currículo para português é confiável?",
        a: "Sim. A nossa IA é treinada com vocabulário profissional de Portugal e do Brasil, garantindo que os seus termos técnicos e conquistas sejam traduzidos com precisão e fluidez."
      },
      {
        q: "O currículo traduzido mantém a formatação original?",
        a: "Sim. O nosso motor de tradução extrai o conteúdo, traduz o significado e mantém a estrutura profissional nos nossos modelos otimizados para o mercado."
      },
      {
        q: "Como a IA lida com as diferenças entre o português de Portugal e o do Brasil?",
        a: "A IA utiliza um tom profissional neutro e ajusta a terminologia para ser amplamente aceite em qualquer mercado lusófono, priorizando a clareza para os recrutadores."
      }
    ];
  }

  // 51. CV Nederlands vertalen
  if (t.includes('nederlands') && t.includes('vertalen')) {
    return [
      {
        q: "Hoe professioneel is de vertaling van mijn CV naar het Nederlands?",
        a: "Onze AI maakt gebruik van gespecialiseerde modellen die getraind zijn op de Nederlandse zakelijke markt. Het begrijpt de context van je werkervaring en gebruikt de juiste vakterminologie."
      },
      {
        q: "Wordt er rekening gehouden met Nederlands-Vlaamse nuances?",
        a: "Ja, de AI hanteert een professionele standaard die zowel in Nederland als in België (Vlaanderen) uitstekend wordt ontvangen door recruiters."
      },
      {
        q: "Blijft mijn CV ATS-vriendelijk na de vertaling?",
        a: "Zeker. We zorgen ervoor dat alle belangrijke zoekwoorden ook in het Nederlands optimaal worden gebruikt, zodat je CV goed scoort bij geautomatiseerde selectiesystemen."
      }
    ];
  }

  // 52. Översätt CV Svenska
  if (t.includes('översätt') && t.includes('svenska')) {
    return [
      {
        q: "Hur bra är AI-översättningen av mitt CV till svenska?",
        a: "Vår AI är tränad på svensk professionell terminologi. Den förstår nyanserna i den svenska arbetsmarknaden och ser till att din erfarenhet beskrivs på ett korrekt och slagkraftigt sätt."
      },
      {
        q: "Bevaras min CV-layout vid översättning till svenska?",
        a: "Ja, vårt system behåller den professionella strukturen. Innehållet översätts och placeras direkt i våra beprövade mallar."
      },
      {
        q: "Kan jag ladda ner mitt svenska CV som PDF?",
        a: "Självklart. Efter översättningen kan du direkt exportera ditt CV till en snygg och professionell PDF som är redo att skickas till svenska arbetsgivare."
      }
    ];
  }

  // 53. Oversæt CV Dansk
  if (t.includes('oversæt') && t.includes('dansk')) {
    return [
      {
        q: "Hvor nøjagtig er oversættelsen af mit CV til dansk?",
        a: "Vores AI benytter avancerede sprogmodeller trænet specifikt på det danske arbejdsmarked. Den sikrer, at dine faglige kompetencer og titler bliver oversat korrekt og professionelt."
      },
      {
        q: "Forstår AI'en danske jobtitler og uddannelsesniveauer?",
        a: "Ja, systemet er gearet til det danske marked og vil finde de mest præcise danske ækvivalenter til dine internationale erfaringer."
      },
      {
        q: "Er det oversatte CV klar til brug hos danske rekrutteringsbureauer?",
        a: "Helt bestemt. Oversættelsen er af høj kvalitet og præsenteres i layouts, som danske arbejdsgivere foretrækker."
      }
    ];
  }

  // 54. Oversett CV Norsk
  if (t.includes('oversett') && t.includes('norsk')) {
    return [
      {
        q: "Hvor god er den norske oversettelsen av CV-en min?",
        a: "Vår KI bruker modeller trent på norsk forretningsspråk. Den sørger for at dine prestasjoner og ansvarsområder blir oversatt til naturlig og profesjonelt norsk."
      },
      {
        q: "Støtter dere oversettelse til både bokmål og nynorsk?",
        a: "Standardinnstillingen er profesjonelt bokmål, som er det mest brukte språket i norsk næringsliv og rekruttering."
      },
      {
        q: "Vil norske rekrutteringssystemer (ATS) kunne lese CV-en?",
        a: "Ja, de norske oversettelsene er fullt ut ATS-vennlige og strukturert slik at norske arbeidsgivere enkelt kan finne informasjonen de leter etter."
      }
    ];
  }

  // 55. Käännä CV Suomi
  if (t.includes('käännä') && t.includes('suomi')) {
    return [
      {
        q: "Kuinka tarkka on CV:n käännös suomeksi?",
        a: "Tekoälyymme on koulutettu suomalaisen työelämän sanastoon ja standardeihin. Se huomioi ammattitermien vivahteet ja varmistaa, että profiilisi kuulostaa ammattimaiselta."
      },
      {
        q: "Pystyykö tekoäly kääntämään tekniset termit oikein suomeksi?",
        a: "Kyllä, järjestelmä tunnistaa eri alojen tekniset termit ja löytää niille sopivimmat suomenkieliset vastineet välttäen suoria, usein kömpelöitä sanakirjakäännöksiä."
      },
      {
        q: "Säilyykö CV:n asettelu käännöksen aikana?",
        a: "Kyllä. Tekoäly kääntää sisällön ja sijoittaa sen automaattisesti ammattimaiseen pohjaan, joten sinun ei tarvitse huolehtia muotoilusta."
      }
    ];
  }

  // 56. Przetłumacz CV Polski
  if (t.includes('przetłumacz') && t.includes('polski')) {
    return [
      {
        q: "Jak dokładne jest tłumaczenie CV na język polski?",
        a: "Nasza sztuczna inteligencja korzysta z modeli wyspecjalizowanych w polskim słownictwie biznesowym. Rozpoznaje branżowy żargon i dostosowuje go do standardów polskiego rynku pracy."
      },
      {
        q: "Czy tłumaczenie uwzględnia polskie stopnie naukowe i tytuły?",
        a: "Tak, system stara się dopasować międzynarodowe stopnie naukowe do ich polskich odpowiedników, zachowując profesjonalny charakter dokumentu."
      },
      {
        q: "Czy po przetłumaczeniu CV nadal będzie czytelne dla systemów ATS?",
        a: "Oczywiście. Wszystkie nasze szablony i tłumaczenia są zoptymalizowane pod kątem systemów ATS stosowanych przez największe firmy w Polsce."
      }
    ];
  }

  // 57. Přeložit CV Čeština
  if (t.includes('přeložit') && t.includes('čeština')) {
    return [
      {
        q: "Jak kvalitní je překlad CV do češtiny?",
        a: "Naše AI pracuje s českým odborným názvoslovím. Rozumí kontextu vaší práce a zajišťuje, aby výsledný text zněl přirozeně a profesionálně pro české personalisty."
      },
      {
        q: "Bude můj životopis v češtině splňovat místní standardy?",
        a: "Ano, překlad i formátování jsou navrženy tak, aby odpovídaly očekáváním na českém pracovním trhu, včetně správného uvádění dosaženého vzdělání."
      },
      {
        q: "Mohu si přeložené CV stáhnout v PDF?",
        a: "Ano, po dokončení překladu si můžete své nové české CV stáhnout v čistém a profesionálním designu připraveném k tisku nebo odeslaniu."
      }
    ];
  }

  // 58. Preložiť CV Slovenčina
  if (t.includes('preložiť') && t.includes('slovenčina')) {
    return [
      {
        q: "Je preklad životopisu do slovenčiny profesionálny?",
        a: "Áno, naša umelá inteligencia je trénovaná na slovenskú obchodnú terminológiu. Dbá na to, aby vaše úspechy v životopise zneli presvedčivo a odborne správne."
      },
      {
        q: "Podporuje nástroj slovenské diakritické znamienka a gramatiku?",
        a: "Systém plne podporuje slovenčinu vrátane všetkých písmen s dĺžňami a mäkčeňmi, čo zaručuje gramaticky bezchybný výsledok."
      },
      {
        q: "Bude slovenské CV kompatibilné so systémami ATS?",
        a: "Áno, preklady aj šablóny sú optimalizované pre ATS systémy používané zamestnávateľmi na Slovensku a v zahraničí."
      }
    ];
  }

  // 59. CV Magyar fordítása
  if (t.includes('magyar') && t.includes('fordítás')) {
    return [
      {
        q: "Mennyire pontos az önéletrajz magyar nyelvű fordítása?",
        a: "A mesterséges intelligenciánk a magyar szakmai nyelv sajátosságaira van kiképezve. Pontosan fordítja le a munkaköri leírásokat és az eredményeket, hogy azok hitelesen csengjenek a magyar toborzók számára."
      },
      {
        q: "A fordítás során megmarad az eredeti önéletrajz elrendezése?",
        a: "Igen. A rendszer kiolvassa az adatokat, lefordítja őket, majd behelyezi a professzionális sablonjainkba, így a formázással nem kell foglalkoznia."
      },
      {
        q: "A magyar nyelvű dokumentum letölthető PDF formátumban?",
        a: "Természetesen. A fordítás végeztével azonnal letöltheti új, magyar nyelvű önéletrajzát nyomtatásra kész, professzionális PDF fájlként."
      }
    ];
  }

  // 60. Traducere CV Română
  if (t.includes('traducere') && t.includes('română')) {
    return [
      {
        q: "Cât de precisă este traducerea CV-ului în limba română?",
        a: "Inteligența noastră artificială folosește terminologia profesională specifică pieței din România. Traduce realizările tale astfel încât să aibă impactul maxim asupra recrutorilor locali."
      },
      {
        q: "Sunt incluse literele cu diacritice în traducerea finală?",
        a: "Da, sistemul nostru generează un text corect din punct de vedere gramatical, incluzând toate diacriticele limbii române pentru un aspect profesional impecabil."
      },
      {
        q: "CV-ul tradus va fi acceptat de platformele de recrutare din România?",
        a: "Absolut. Documentele noastre sunt structurate pentru a fi citite corect de sistemele ATS utilizate de companiile românești și multinaționale."
      }
    ];
  }

  // 61. Μετάφραση CV Ελληνικά
  // Greek (Μετάφραση CV Ελληνικά)
  if (t.includes('μετάφραση') && t.includes('ελληνικά')) {
    return [
      {
        q: "Πόσο ακριβής είναι η μετάφραση του βιογραφικού μου στα ελληνικά;",
        a: "Η τεχνητή νοημοσύνη μας είναι εκπαιδευμένη στην ελληνική επαγγελματική ορολογία. Μεταφράζει την εμπειρία σας έτσι ώστε να φαίνεται φυσική και επαγγελματική για την ελληνική αγορά εργασίας."
      },
      {
        q: "Η μετάφραση περιλαμβάνει τη σωστή απόδοση των τίτλων σπουδών;",
        a: "Ναι, το σύστημα προσπαθεί να αντιστοιχίσει διεθνείς τίτλους σπουδών με τους αντίστοιχους ελληνικούς όρους, διατηρώντας την εγκυρότητα του εγγράφου."
      },
      {
        q: "Μπορώ να κατεβάσω το μεταφρασμένο βιογραφικό σε PDF;",
        a: "Βεβαίως. Μετά τη μετάφραση, μπορείτε να εξάγετε το βιογραφικό σας σε ένα επαγγελματικό πρότυπο PDF, έτοιμο για αποστολή σε εργοδότες."
      }
    ];
  }

  // 62. Превод на CV Български
  // Bulgarian (Превод на CV Български)
  if (t.includes('превод') && t.includes('български')) {
    return [
      {
        q: "Колко точен е преводът на моето CV на български език;",
        a: "Нашият изкуствен интелект е обучен на българската професионална терминология. Той адаптира вашия опит така, че да звучи естествено за българските мениджъρι по подбор."
      },
      {
        q: "Ще бъде ли преведеното CV ATS-съвместимо в България?",
        a: "Да. Нашите шаблони и преводи са структурирани така, че да преминават успешно през ATS системите, използвани от големите компании в България."
      },
      {
        q: "Мога ли να преведа моето CV от български на английски?",
        a: "Абсолютно. Платформата поддържа двуποсочен превод между български и над 20 други езика."
      }
    ];
  }

  // 63. Prevedi CV Hrvatski
  // Croatian (Prevedi CV Hrvatski)
  if (t.includes('prevedi') && t.includes('hrvatski')) {
    return [
      {
        q: "Koliko je točan prijevod životopisa na hrvatski jezik?",
        a: "Naša umjetna inteligencija koristi modele obučene na hrvatskoj poslovnoj terminologiji. Prilagođava vašu povijest rada tako da zvuči profesionalno domaćim poslodavcima."
      },
      {
        q: "Podržava li sustav hrvatska dijakritička obilježja?",
        a: "Da, generirani tekst u potpunosti podržava sva hrvatska slova (č, ć, ž, š, đ) i gramatička pravila."
      },
      {
        q: "Mogu li preuzeti prevedeni CV u PDF formatu?",
        a: "Naravno. Nakon prijevoda, svoj novi životopis na hrvatskom jeziku možete preuzeti kao profesionalno dizajniran PDF dokument."
      }
    ];
  }

  // 64. Prevedi CV Srpski
  // Serbian (Prevedi CV Srpski)
  if (t.includes('prevedi') && t.includes('srpski')) {
    return [
      {
        q: "Koliko je precizan prevod biografije na srpski jezik?",
        a: "Naša AI koristi modele obučene za srpski poslovni rečnik. Prevodi vaše uspehe i veštine tako da zvuče prirodno i autoritativno za poslodavce u Srbiji."
      },
      {
        q: "Da li se prevod vrši na ćirilici ili latinici?",
        a: "Standardni format je profesionalna latinica, koja je najčešće korišćeno pismo u modernom poslovanju i rekruting sistemima u regionu."
      },
      {
        q: "Dali će prevod CV-a biti ATS-pouzdan?",
        a: "Da, svi naši šabloni i prevodi su optimizovani da ih sistemi za automatsku obradu prijava (ATS) mogu nesmetano pročitati."
      }
    ];
  }

  // 65. Prevedi CV Slovenščina
  // Slovenian (Prevedi CV Slovenščina)
  if (t.includes('prevedi') && t.includes('slovenščina')) {
    return [
      {
        q: "Kako natančen je prevod življenjepisa v slovenščino?",
        a: "Umetna inteligenca uporablja modele, naučene na slovenski poslovni terminologiji. Vaše izkušnje predstavi na način, ki je najbolj prepričljiv za slovenske delodajalce."
      },
      {
        q: "Ali sistem pravilno uporablja slovensko sklanjatev in slovnico?",
        a: "Da, naša AI je zasnovana tako, da upošteva kompleksnost slovenske slovnice, kar zagotavlja profesionalen in brezhiben dokument."
      },
      {
        q: "Ali lahko prevedeni CV prenesem kot PDF?",
        a: "Seveda. Po končanem prevodu lahko svoj novi slovenski življenjepis prenesete v profesionalni obliki PDF, pripravljeni za prijavo na delo."
      }
    ];
  }

  // 66. CV Lietuvių vertimas
  // Lithuanian (CV Lietuvių vertimas)
  if (t.includes('lietuvių') && t.includes('vertimas')) {
    return [
      {
        q: "Kiek tikslus yra CV vertimas į lietuvių kalbą?",
        a: "Mūsų DI naudoja modelius, pritaikytus Lietuvos verslo terminologijai. Jūsų patirtis išverčiama taip, kad ji skambėtų natūraliai ir profesionaliai vietos darbdaviams."
      },
      {
        q: "Ar DI taisyklingai naudoja lietuvių kalbos linksnius ir galūnes?",
        a: "Taip, sistema sukurta valdyti sudėtingą lietuvių kalbos gramatiką, užtikrinant, kad jūsų gyvenimo aprašymas būtų nepriekaištingas."
      },
      {
        q: "Ar išverstas CV bus tinkamas ATS sistemoms Lietuvoje?",
        a: "Taip, mūsų šablonai ir vertimai yra sukurti taip, kad juos lengvai atpažintų didžiųjų įmonių naudojamos atrankos programos."
      }
    ];
  }

  // 67. CV Latviešu tulkojums
  // Latvian (CV Latviešu tulkojums)
  if (t.includes('latviešu') && t.includes('tulkojums')) {
    return [
      {
        q: "Cik precīzs ir CV tulkojums latviešu valodā?",
        a: "Mūsu mākslīgais intelekts izmanto modeļus, kas apmācīti latviešu biznesa terminoloģijā. Jūsu pieredze tiek tulkota tā, lai tā skanētu dabiski un pārliecinoši Latvijas darba tirgū."
      },
      {
        q: "Vai tulkojumā tiek ievērota latviešu valodas gramatika un locījumi?",
        a: "Jā, DI spēj apstrādāt latviešu valodas gramatikas sarežģītību, nodrošinot profesionālu un kļūdu brīvu rezultātu."
      },
      {
        q: "Vai es varu lejupielādēt tulkoto CV PDF formātā?",
        a: "Protams. Pēc tulkošanas beigām jūs varat nekavējoties lejupielādēt savu jauno CV latviešu valodā kā PDF failu."
      }
    ];
  }

  // 68. CV Eesti tõlkimine
  // Estonian (CV Eesti tõlkimine)
  if (t.includes('eesti') && t.includes('tõlkimine')) {
    return [
      {
        q: "Kui täpne on CV tõlge eesti keelde?",
        a: "Meie tekoäly kasutab mudeleid, mis on kohandatud Eesti tööjõuturu ja äriterminoloogia jaoks. Sinu kogemus tõlgitakse nii, et see kõlab Eesti värbajate jaoks professionaalselt."
      },
      {
        q: "Kas süsteem toetab eesti keele täpitähti ja grammatikat?",
        a: "Jah, genereeritud tekst toetab täielikult eesti keele erimärke ja järgib korrektselt grammatikajuhiseid."
      },
      {
        q: "Kas tõlgitud CV on ATS-sõbralik?",
        a: "Jah, kõik meie mallid ja eestikeelsed tõlked on optimeeritud nii, et automaatsed värbamissüsteemid saaksid neid täpselt lugeda."
      }
    ];
  }

  // Handle generic categories if the specific title didn't match
  if (t.includes('ats')) {
    return [
      {
        q: "What exactly is an ATS-friendly resume?",
        a: "An ATS-friendly resume is specifically designed to be read by Applicant Tracking Systems. It uses standard fonts, clear headings, and a layout that allows the software to accurately parse your work history and skills."
      },
      {
        q: "How does the AI optimize my resume for ATS?",
        a: "The tool scans your CV for keywords found in the job description and suggests optimizations. It also ensures the formatting (like tables and columns) is structured in a way that modern ATS algorithms prefer."
      },
      {
        q: "Does using an ATS-optimized CV guarantee an interview?",
        a: "While no tool can guarantee an interview, an ATS-optimized CV significantly increases your chances by ensuring your application actually reaches the recruiter's desk instead of being filtered out by automated software."
      }
    ];
  }

  if (t.includes('tailor') || t.includes('job description')) {
    return [
      {
        q: "Why is resume tailoring important?",
        a: "Tailoring your resume shows recruiters that you have specifically read the job description and have the exact skills they are looking for. It greatly improves your relevance score in both AI and human reviews."
      },
      {
        q: "How do I map my resume to a job description using AI?",
        a: "Simply paste the job description into our tool. Our AI will identify the core requirements and suggest specific changes to your resume—such as highlighting relevant skills or rephrasing experiences—to align with the role."
      },
      {
        q: "Can I tailor my resume for multiple jobs?",
        a: "Yes. You can save different versions of your resume in your library, each tailored to a specific job or industry, allowing you to stay organized during a broad job search."
      }
    ];
  }

  if (t.includes('cover letter')) {
    return [
      {
        q: "How does the AI cover letter generator work?",
        a: "Our AI analyzes both your CV and the specific job description you provide. It identifies the most relevant skills and experiences from your background and weaves them into a compelling narrative that addresses the employer's specific needs."
      },
      {
        q: "Are the cover letters generated ATS-friendly?",
        a: "Yes. Much like our resumes, the AI-generated cover letters use professional language and structures that are easily parsed by Applicant Tracking Systems. We ensure the right keywords are naturally integrated."
      },
      {
        q: "Can I edit the cover letter after it's generated?",
        a: "Absolutely. Think of the AI generation as a highly advanced first draft. You can fully customize, edit, and refine the content to ensure it perfectly matches your personal voice and specific intent."
      }
    ];
  }

  if (t.includes('europass')) {
    return [
      {
        q: "Is this AI builder fully Europass compatible?",
        a: "Yes. Our templates are designed to follow the official European Union standard for CVs, ensuring that your document is recognized and accepted by employers across the EU."
      },
      {
        q: "Why should I use AI for my Europass CV instead of the official editor?",
        a: "While the official editor provides a standard layout, our AI builder goes further by helping you write better descriptions, optimizing for ATS, and providing a more modern user experience with real-time suggestions."
      },
      {
        q: "Is Europass better than a regular resume format?",
        a: "In Europe, Europass is often the preferred (and sometimes required) standard for government or academic roles. For private sector roles, it provides a trusted, familiar structure that helps recruiters find information quickly."
      }
    ];
  }

  if (t.includes('ai cv') || t.includes('ai resume') || t.includes('writer')) {
    return [
      {
        q: "How does AI help with writing my CV?",
        a: "Our AI writer can generate professional summaries, write descriptive bullet points for your work history, and suggest the best skills to highlight based on your career goals."
      },
      {
        q: "Is AI-generated content safe to use in job applications?",
        a: "Yes. Our AI is designed to act as a co-writer, helping you articulate your own real achievements more effectively. We recommend reviewing and personalizing the AI suggestions to ensure they accurately reflect your unique experience."
      },
      {
        q: "Can I edit the AI-generated suggestions?",
        a: "Definitely. You have full control over all content. Use the AI to overcome writer's block or find the right professional tone, then refine the text as much as you like."
      }
    ];
  }

  // Default fallback FAQs
  return [
    {
      q: "How does this platform help me find a job?",
      a: "EuropeCV provides AI-powered tools to create, optimize, and tailor your job applications. By ensuring your CV is both human-readable and ATS-friendly, we help you get past the initial screening and into the interview room."
    },
    {
      q: "Is my data secure?",
      a: "We take your privacy seriously. Your data is stored securely and is never shared with third parties without your consent. We are fully compliant with European data protection standards (GDPR)."
    },
    {
      q: "How do I get started?",
      a: "Simply click 'Create Your CV' and sign up for a free account. You can upload an existing resume or start from scratch using our guided AI builder."
    }
  ];
};
