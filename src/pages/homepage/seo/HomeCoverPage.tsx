import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, CheckCircle2, Zap, LayoutTemplate, MessageSquare, 
  ArrowRight, FileText, Globe, Star, FileJson, Target,
  Upload, Download, ChevronRight, PenTool
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { getFAQsByTitle } from '../../../constants/faqData';
import { SEO } from '../../../components/common/SEO';

export function HomeCoverPage({ title }: { title: string }) {
  const faqs = getFAQsByTitle(title);

  const tools = [
    { name: "ATS Optimizer", icon: <Target className="w-5 h-5 text-blue-600" />, desc: "Ensures your cover letter hits all the right notes for recruiter algorithms." },
    { name: "AI Writer", icon: <PenTool className="w-5 h-5 text-blue-600" />, desc: "Advanced language models trained on successful job applications." },
    { name: "Multilingual Support", icon: <Globe className="w-5 h-5 text-blue-600" />, desc: "Generate cover letters in English, German, French, and more." },
    { name: "Matching Engine", icon: <Zap className="w-5 h-5 text-blue-600" />, desc: "Perfectly aligns your experience with the job posting requirements." }
  ];

  const highlightTitle = (text: string) => {
    const parts = text.split(/(Cover Letter)/gi);
    return parts.map((part, i) => 
      part.toLowerCase() === 'cover letter' ? (
        <span key={i} className="relative inline-block text-blue-600 px-2 lg:mx-1">
          {part}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute -bottom-1 left-0 h-1.5 bg-blue-500/30 rounded-full"
          />
        </span>
      ) : part
    );
  };

  return (
    <div className="min-h-screen bg-white pt-24 sm:pt-32 pb-20">
      <SEO 
        title="AI Cover Letter Generator | Tailored for EU Jobs | EuropeCV"
        description="Create high-impact cover letters with AI. Tailored to your resume and the specific job description for maximum recruiter engagement in Europe."
      />
      {/* Decorative background elements - reduced visibility */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-b from-blue-50/20 to-transparent -z-10 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CENTERED Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-8"
          >
            <Shield className="w-3.5 h-3.5 text-blue-500" /> High-Performance AI Writing
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight leading-[1.05] mb-8"
          >
            {highlightTitle(title)}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 leading-relaxed font-medium mb-10 max-w-2xl mx-auto"
          >
            Turn job descriptions into interview invites. Build a professional European-standard cover letter that perfectly matches your skills to the role.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <Link 
              to="/login" 
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/10 active:scale-95 group"
            >
              Build My Cover Letter
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="flex items-center gap-6 text-xs font-bold text-slate-400 mt-4">
               <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Professional Formats</span>
               <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> ATS Optimized</span>
               <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Privacy First</span>
            </div>
          </motion.div>
        </div>

        {/* Large Visual Preview - Cleaned up */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative mb-32"
        >
          <div className="bg-white rounded-[40px] border border-slate-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] p-4 sm:p-10 max-w-5xl mx-auto relative overflow-hidden group">
             <div className="flex border-b border-slate-100 pb-8 mb-8 items-start justify-between">
                <div className="space-y-4">
                   <div className="h-4 bg-slate-900 rounded-md w-48"></div>
                   <div className="h-2 bg-slate-300 rounded-md w-32"></div>
                </div>
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                   <MessageSquare className="w-6 h-6" />
                </div>
             </div>
             
             <div className="grid md:grid-cols-3 gap-10">
                <div className="md:col-span-2 space-y-6">
                   <div className="space-y-2">
                      <div className="h-2 bg-slate-100 rounded-full w-full"></div>
                      <div className="h-2 bg-slate-100 rounded-full w-full"></div>
                      <div className="h-2 bg-slate-100 rounded-full w-4/5"></div>
                   </div>
                   <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative group-hover:border-blue-200 transition-colors">
                      <div className="flex items-center gap-2 mb-4">
                        <Zap className="w-4 h-4 text-blue-600" />
                        <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">AI Context Injected</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-slate-200 rounded-full w-full"></div>
                        <div className="h-2 bg-slate-200 rounded-full w-11/12"></div>
                      </div>
                   </div>
                   <div className="space-y-2">
                      <div className="h-2 bg-slate-100 rounded-full w-full"></div>
                      <div className="h-2 bg-slate-100 rounded-full w-2/3"></div>
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="p-4 rounded-xl bg-blue-50/30 border border-blue-100/50 italic text-[11px] text-blue-700/70 leading-relaxed">
                     "The AI automatically extracted keywords from the job description and linked them to my previous experience."
                   </div>
                   <div className="flex flex-col gap-2">
                      <div className="h-8 bg-blue-600 rounded-lg w-full"></div>
                      <div className="h-8 bg-slate-100 rounded-lg w-full"></div>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>

        {/* How it Works - Blue Style */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4">How it Works</h2>
            <p className="text-slate-600 font-medium">Generate a professional, matched cover letter in 3 simple steps.</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-4">
            {[
              { step: "1", icon: <Upload className="w-6 h-6 text-blue-600" />, title: "Select Your CV", desc: "Choose a CV from your profile to extract your core strengths." },
              { step: "2", icon: <FileText className="w-6 h-6 text-blue-600" />, title: "Paste Job Text", desc: "Copy the description of the role you're applying for." },
              { step: "3", icon: <Zap className="w-6 h-6 text-blue-600" />, title: "AI Generates Letter", desc: "Our AI writes a tailored narrative matching your profile to the job." }
            ].map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="relative w-full max-w-[320px] bg-slate-50 rounded-[32px] p-8 pt-12 border border-slate-200/60 flex flex-col items-start transition-all hover:bg-white hover:shadow-[0_20px_50px_-12px_rgba(37,99,235,0.1)] group">
                  <div className="absolute top-6 right-8 text-4xl font-black text-blue-100 group-hover:text-blue-200 transition-colors">
                    {item.step}
                  </div>
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-slate-100">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                {idx < 2 && (
                  <div className="hidden lg:flex items-center justify-center px-4">
                    <div className="w-12 h-[2px] bg-blue-100"></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bento Terminology Section */}
        <div className="mb-32">
           <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900 p-10 rounded-[40px] text-white flex flex-col justify-between">
                <h3 className="text-3xl font-black mb-6 tracking-tight">Why do I need a Cover Letter?</h3>
                <p className="text-slate-400 text-lg leading-relaxed font-medium">
                  While your CV lists your facts, the cover letter tells your story. It demonstrates your personality and your specific interest in how your unique combination of skills solves the employer's specific problems.
                </p>
              </div>
              <div className="bg-blue-600 p-10 rounded-[40px] text-white flex flex-col justify-between">
                <h3 className="text-3xl font-black mb-6 tracking-tight">What is a Motivation Letter?</h3>
                <p className="text-blue-100 text-lg leading-relaxed font-medium">
                  In many European countries, a cover letter is called a "Motivation Letter". The focus is slightly more on why you want the role and how you fit the company culture.
                </p>
              </div>
           </div>
        </div>

        {/* Minimal Tool List */}
        <div className="mb-32 py-20 bg-slate-50 rounded-[64px]">
           <div className="max-w-4xl mx-auto px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">Application Intelligence</h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
                {tools.map((tool, idx) => (
                  <div key={idx} className="flex gap-5 group">
                    <div className="shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-200 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      {tool.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{tool.name}</h3>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">{tool.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* Simple FAQ */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">FAQ</h2>
          </div>
          <div className="divide-y divide-slate-200">
             {faqs.map((faq, idx) => (
               <div key={idx} className="py-8">
                 <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.q}</h3>
                 <p className="text-slate-600 font-medium leading-relaxed">{faq.a}</p>
               </div>
             ))}
          </div>
        </div>

      </div>
    </div>
  );
}
