import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Briefcase, Sparkles, Send, Mail, ArrowRight } from 'lucide-react';
import { PublicConfig } from '../../config/PublicConfig';
import { Link } from 'react-router-dom';

export function CoverLetterSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const samples = PublicConfig.sections.coverLetter.items;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % samples.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [samples.length]);

  const activeSample = samples[activeIdx];

  return (
    <section className="py-24 sm:py-32 bg-white relative border-t border-slate-200">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-3 justify-center mb-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200">
               <Mail className="w-3.5 h-3.5 text-slate-600" />
               <span className="text-[10px] font-bold text-slate-700 uppercase tracking-[0.2em]">{PublicConfig.sections.coverLetter.badge}</span>
            </div>
          </div>
          <h3 className="text-[28px] sm:text-[32px] lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            {PublicConfig.sections.coverLetter.titlePlain}
            <span className="relative inline-block ml-2">
              <span className="text-blue-600">
                {PublicConfig.sections.coverLetter.titleHighlight}
              </span>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-1 left-0 h-1.5 bg-blue-500/30 rounded-full"
              />
            </span>
          </h3>
          <p className="text-[14px] sm:text-[15px] text-slate-500 font-medium leading-relaxed max-w-xl mx-auto">
            {PublicConfig.sections.coverLetter.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
            {/* Left: Job Postings List */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="space-y-4">
               {samples.map((sample, idx) => (
                <div 
                   key={sample.id}
                   onClick={() => setActiveIdx(idx)}
                   className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                     idx === activeIdx 
                       ? 'border-blue-200 bg-slate-50 shadow-lg ring-1 ring-blue-500/10 scale-[1.02]' 
                       : 'border-slate-200/60 bg-white hover:border-slate-300 hover:bg-slate-50/50 shadow-sm'
                   }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        idx === activeIdx ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                      }`}>
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className={`font-bold leading-tight ${idx === activeIdx ? 'text-slate-900' : 'text-slate-700'}`}>{sample.role}</h4>
                        <div className="text-[12px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mt-1">
                          {sample.company} • {sample.location}, <img src={`https://flagcdn.com/w20/${sample.flagCode}.png`} alt={sample.flagCode} className="w-[14px] h-[10px] rounded-[1px] object-cover" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-[13px] text-slate-600 flex-1 leading-relaxed font-medium line-clamp-3">
                    {sample.jd}
                  </p>
                </div>
              ))}
            </div>
            
          </div>

          {/* Right: Generated Cover Letter */}
          <div className="lg:col-span-7 bg-slate-50 rounded-[2rem] border border-slate-200/60 shadow-inner overflow-hidden flex flex-col h-[500px]">
             <div className="bg-white border-b border-slate-200/60 px-6 py-4 flex items-center justify-between z-10 relative">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50/80 rounded-xl flex items-center justify-center border border-blue-100">
                     <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                     <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tailored using AI</div>
                     <div className="text-[14px] font-bold text-slate-900">Generated Cover Letter</div>
                  </div>
               </div>
               <Link to="/login" className="flex items-center gap-2 text-slate-900 font-bold hover:text-blue-600 transition-all duration-300 group cursor-pointer">
                <Mail className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-all" />
                <span>Start now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="flex-1 p-8 sm:p-10 overflow-y-auto bg-slate-50 font-serif text-[13px] md:text-[14px] leading-[1.8] text-slate-600 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSample.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 max-w-2xl font-medium"
                >
                  {activeSample.cl.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </motion.div>
              </AnimatePresence>
               <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
