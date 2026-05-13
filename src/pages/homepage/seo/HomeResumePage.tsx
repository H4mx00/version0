import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, CheckCircle2, Zap, LayoutTemplate, MessageSquare, 
  ArrowRight, FileText, Globe, Star, FileJson, Target,
  Upload, Download, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { getFAQsByTitle } from '../../../constants/faqData';
import { SEO } from '../../../components/common/SEO';

export function HomeResumePage({ title }: { title: string }) {
  const faqs = getFAQsByTitle(title);

  const tools = [
    { name: "ATS Resume Optimizer", icon: <Target className="w-5 h-5 text-blue-600" />, desc: "Scans and scores your CV against modern Applicant Tracking Systems.", color: "bg-blue-50 border-blue-100" },
    { name: "Smart Cover Letter", icon: <MessageSquare className="w-5 h-5 text-purple-600" />, desc: "Generates tailored cover letters mapped to the target job description.", color: "bg-purple-50 border-purple-100" },
    { name: "CV Translation Tool", icon: <Globe className="w-5 h-5 text-emerald-600" />, desc: "Perfectly localizes your CV for German, French, Spanish, and other EU markets.", color: "bg-emerald-50 border-emerald-100" },
    { name: "European Format Templates", icon: <LayoutTemplate className="w-5 h-5 text-amber-600" />, desc: "Beautiful, clean templates designed specifically for European recruiters.", color: "bg-amber-50 border-amber-100" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 sm:pt-32 pb-20">
      <SEO 
        title="AI Resume Builder & European CV Maker | EuropeCV"
        description="Build an ATS-friendly European CV in minutes with AI. Optimize your resume for 2026 hiring standards and land more interviews across Europe."
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 md:mb-32">
          
          {/* RIGHT: Visuals & Demos */}
          <div className="order-2 lg:order-2 relative">
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-30 transform -translate-x-10 translate-y-10"></div>
            
            <div className="relative grid sm:grid-cols-2 gap-5 items-center">
              {/* Before CV */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-red-100 text-red-600 px-2 py-1 text-[10px] font-bold rounded-bl-lg">Scraping Error</div>
                <div className="text-xs font-black text-slate-400 mb-4 uppercase tracking-wider">Generic Format</div>
                <div className="space-y-3 opacity-50 grayscale">
                  <div className="w-12 h-12 rounded-full bg-slate-200 mb-3"></div>
                  <div className="h-2 bg-slate-200 rounded w-3/4"></div>
                  <div className="h-2 bg-slate-200 rounded w-1/2 mb-6"></div>
                  <div className="space-y-1.5 flex flex-wrap">
                    <div className="h-1.5 bg-slate-200 rounded w-full"></div>
                    <div className="h-1.5 bg-slate-200 rounded w-5/6"></div>
                    <div className="h-1.5 bg-slate-200 rounded w-full mt-2"></div>
                  </div>
                </div>
              </motion.div>

              {/* After CV */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-2xl border border-blue-200 shadow-xl relative overflow-hidden ring-4 ring-blue-50 z-10 transform sm:-translate-x-4"
              >
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1.5 text-[10px] font-black tracking-wider rounded-bl-xl shadow-sm flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> ATS Approved
                </div>
                <div className="text-xs font-black text-blue-600 mb-5 uppercase tracking-wider flex items-center gap-1">
                  <Zap className="w-3 h-3" /> EuropeCV Optimized
                </div>
                <div className="space-y-4">
                   <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                     <div className="w-10 h-10 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-xs">AI</div>
                     <div>
                       <div className="h-2 bg-slate-800 rounded w-24 mb-1.5"></div>
                       <div className="h-1.5 bg-blue-600 rounded w-16"></div>
                     </div>
                   </div>
                   <div className="space-y-2">
                     <div className="flex gap-2 items-center">
                       <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                       <div className="h-1.5 bg-slate-200 rounded w-full"></div>
                     </div>
                     <div className="flex gap-2 items-center">
                       <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                       <div className="h-1.5 bg-slate-200 rounded w-5/6"></div>
                     </div>
                     <div className="flex gap-2 items-center mt-3">
                        <div className="px-2 py-0.5 rounded bg-amber-100 text-[8px] font-bold text-amber-700">Keyword</div>
                        <div className="px-2 py-0.5 rounded bg-blue-100 text-[8px] font-bold text-blue-700">Matched</div>
                     </div>
                   </div>
                </div>
              </motion.div>
            </div>
            
            {/* Trust Badges */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 }}
               className="mt-8 flex flex-wrap gap-4 items-center justify-center sm:justify-start"
            >
               <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                 <div className="flex -space-x-2">
                   {[1,2,3,4,5].map(i => (
                     <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center">
                       <Star className="w-3 h-3 text-blue-500 fill-current" />
                     </div>
                   ))}
                 </div>
                 <span>Loved by EU Job Seekers</span>
               </div>
            </motion.div>

          </div>
          
          {/* LEFT: Text Content */}
          <div className="order-1 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex flex-wrap gap-2 mb-6 uppercase tracking-wider text-[10px] font-bold"
            >
              <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 flex items-center gap-1.5"><Shield className="w-3 h-3" /> ATS-Optimized App</span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3" /> Europass Alternative</span>
              <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 flex items-center gap-1.5"><Zap className="w-3 h-3" /> AI-Powered Platform</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.12] mb-6 capitalize"
            >
              {title.toLowerCase()}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 leading-relaxed font-medium mb-8"
            >
              Build your professional resume in minutes. As an ultimate Europass CV alternative, our European ATS-friendly resume maker leverages AI to tailor your profile for maximum visibility. Unlock your career potential with advanced CV generation, AI cover letter crafting, and intelligent layout optimization today.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-3"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/login" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95 group"
                >
                  Create Your CV Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <p className="text-xs font-bold text-slate-500 ml-1">Free Signup - 3 Bonus Credits - No Card Required</p>
            </motion.div>
            
            <motion.ul 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="mt-8 space-y-3 text-sm font-medium text-slate-500"
            >
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Free to explore and build</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> SEO-optimized resume templates</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 100% Data secure for European users</li>
            </motion.ul>
          </div>
          
        </div>

        {/* Steps Section */}
        <div className="mb-24 pt-16 border-t border-slate-200">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">Few Steps to build AI Resume</h2>
            <p className="text-slate-600 font-medium text-lg">Get your professional CV ready in minutes with our AI-powered process.</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-2">
            {[
              { step: "1", icon: <Upload className="w-6 h-6 text-blue-600" />, title: "Select Your CV", desc: "Choose a CV from your library or create one first." },
              { step: "2", icon: <FileText className="w-6 h-6 text-blue-600" />, title: "Paste Job Description", desc: "Copy the job posting text. AI extracts requirements." },
              { step: "3", icon: <LayoutTemplate className="w-6 h-6 text-blue-600" />, title: "Choose Template", desc: "Select a professional design that fits your industry." },
              { step: "4", icon: <Download className="w-6 h-6 text-blue-600" />, title: "Download PDF", desc: "Get a professionally formatted PDF ready to submit." }
            ].map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="relative w-full max-w-[280px] bg-white rounded-[32px] p-8 pt-10 border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] flex flex-col items-center text-center transition-all hover:shadow-[0_20px_50px_-12px_rgba(59,130,246,0.12)] hover:-translate-y-1">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-black shadow-lg shadow-blue-600/30">
                    {item.step}
                  </div>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:flex items-center justify-center px-2">
                    <ArrowRight className="w-5 h-5 text-slate-300" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Terminology Section */}
        <div className="max-w-4xl mx-auto mb-24 pt-16 border-t border-slate-200">
           <div className="space-y-12">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-3">What is CV?</h3>
                <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                  A CV (Curriculum Vitae) is a comprehensive document detailing the whole course of your career. In Europe, a CV is the standard format for job applications and is expected to be detailed, chronological, and formatted according to specific regional standards.
                </p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-3">What's the difference between Resume and CV?</h3>
                <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                  While often used interchangeably globally, a Resume is typically a concise, one-to-two-page document highlighting relevant skills and experience tailored to a specific job (common in the US). A CV is generally more comprehensive and detailed, covering your entire educational and professional history (the standard in Europe and academia).
                </p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-3">What is Cover Letter / Motivation Letter?</h3>
                <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                  A cover letter (or motivation letter) is a personalized document submitted alongside your CV. It introduces you, explains your motivation for applying, and highlights specific experiences that make you the ideal candidate for the role. It provides the narrative behind the facts in your CV.
                </p>
              </div>
           </div>
        </div>

        {/* Tools Section */}
        <div className="mb-24 pt-16 border-t border-slate-200">
           <div className="text-center mb-12">
             <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">Our Resume Optimization AI Toolkit</h2>
             <p className="text-slate-600 font-medium">Everything you need for successful cross-border job applications.</p>
           </div>
           
           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
             {tools.map((tool, idx) => (
               <div key={idx} className={`p-6 rounded-2xl border ${tool.color} bg-opacity-50 flex flex-col items-center text-center hover:scale-[1.02] transition-transform`}>
                 <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                   {tool.icon}
                 </div>
                 <h3 className="text-base font-bold text-slate-900 mb-2">{tool.name}</h3>
                 <p className="text-xs text-slate-600 font-medium leading-relaxed">{tool.desc}</p>
               </div>
             ))}
           </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
             {faqs.map((faq, idx) => (
               <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                 <h3 className="text-lg font-bold text-slate-900 mb-2 pr-8">{faq.q}</h3>
                 <p className="text-sm text-slate-600 font-medium leading-relaxed">{faq.a}</p>
               </div>
             ))}
          </div>
        </div>

      </div>
    </div>
  );
}
