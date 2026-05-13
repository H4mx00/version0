/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { 
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  FileText,
  User,
  ShieldCheck,
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { PublicConfig } from '../../config/PublicConfig';

export function Demo() {
  const [sliderPosition, setSliderPosition] = useState(65);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scale, setScale] = useState(1);

  // Responsive scaling based on container width
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      // We want to scale the 600px width content to fit the container
      if (width < 600) {
        setScale(width / 600);
      } else {
        setScale(1);
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Automated slider movement
  useEffect(() => {
    if (isHovered) return;
    
    let startTime = Date.now();
    const duration = 4000;
    
    const animate = () => {
      if (isHovered) return;
      const elapsed = Date.now() - startTime;
      const progress = (elapsed % duration) / duration;
      // Smooth sine wave movement between 20 and 80
      const pos = 50 + Math.sin(progress * Math.PI * 2) * 30;
      setSliderPosition(pos);
      requestAnimationFrame(animate);
    };

    const handle = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(handle);
  }, [isHovered]);

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(x, 0), 100));
  };

  const { comparison } = PublicConfig.demo;

  return (
    <div className="flex flex-col gap-3 lg:ml-auto lg:mr-0 max-w-lg w-full transition-all duration-700">
      {/* EU Standards Above Demo */}
      <div className="flex items-center justify-between gap-4 px-4 opacity-80">
        <div>
          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{PublicConfig.hero.trustedBy.text}</span>
          <p className="text-[10px] font-black text-slate-900 mt-0.5">EU Market Optimized</p>
        </div>
        <div className="text-right">
          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Standard</span>
          <p className="text-[10px] font-black text-slate-900 mt-0.5">EU-2026 / Europass</p>
        </div>
      </div>

      <div className="relative w-full mx-auto">
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative z-10 bg-white rounded-2xl sm:rounded-3xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] border border-slate-200 overflow-hidden select-none cursor-ew-resize h-[380px] sm:h-[460px] flex flex-col transition-all duration-500 hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] hover:border-slate-200"
        >
          {/* Browser Header */}
          <div className="bg-white/90 backdrop-blur-md px-5 py-3 flex items-center justify-between border-b border-slate-100 flex-shrink-0 relative z-40">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
            </div>
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-3 py-1 rounded-full shadow-inner">
              <ShieldCheck className="w-2.5 h-2.5 text-blue-500" />
              <span className="text-[9px] font-mono text-slate-400 tracking-tight">{PublicConfig.demo.header}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden sm:block w-6 h-px bg-slate-100" />
              <div className="w-3.5 h-3.5 rounded-full bg-slate-100 border border-slate-200" />
            </div>
          </div>

          {/* Comparison Area */}
          <div className="flex-1 relative overflow-hidden bg-slate-100">
            
            {/* AFTER Content (The base layer) */}
            <div className="absolute inset-0 bg-white">
              <div 
                className="origin-top-left"
                style={{ 
                  transform: `scale(${scale})`,
                  width: '600px'
                }}
              >
                <ResumeContent 
                  data={comparison.after} 
                  name={comparison.name} 
                  role={comparison.role}
                  isAfter={true}
                />
              </div>
            </div>

            {/* BEFORE Content (The overlay layer) */}
            <div 
              className="absolute inset-0 bg-white overflow-hidden" 
              style={{ width: `${sliderPosition}%`, borderRight: '1px solid rgba(0,0,0,0.1)' }}
            >
              <div 
                className="origin-top-left"
                style={{ 
                  transform: `scale(${scale})`,
                  width: '600px'
                }}
              >
                <ResumeContent 
                  data={comparison.before} 
                  name={comparison.name} 
                  role={comparison.role}
                  isAfter={false}
                />
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 z-30 flex items-center justify-center cursor-ew-resize"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="h-full w-[1px] bg-slate-900 group-hover:bg-blue-600 transition-colors flex items-center justify-center">
                 <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl hover:bg-blue-600 transition-all duration-300">
                    <div className="flex items-center gap-1">
                      <ChevronLeft className="w-4 h-4" />
                      <div className="w-px h-4 bg-white/20" />
                      <ChevronRight className="w-4 h-4" />
                    </div>
                 </div>
              </div>
            </div>

            {/* Floating Labels */}
            <div className="absolute top-4 sm:top-8 left-4 sm:left-8 z-40">
               <div className="bg-rose-50 border border-rose-100 text-rose-500 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[8px] sm:text-[10px] font-black uppercase tracking-widest shadow-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                  Rejected
               </div>
            </div>
            <div className="absolute top-4 sm:top-8 right-4 sm:right-8 z-40">
               <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[8px] sm:text-[10px] font-black uppercase tracking-widest shadow-sm flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-emerald-500" />
                  Interviewed
               </div>
            </div>
          </div>


          {/* Bottom Bar Stats */}
           <div className="bg-white border-t border-slate-100 px-4 sm:px-8 py-3 sm:py-3.5 flex flex-col xs:flex-row items-center justify-between gap-4 flex-shrink-0">
             <div className="flex items-center gap-6 sm:gap-8">
                <div className="flex flex-col">
                   <span className="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-widest">ATS Match</span>
                   <div className="flex items-center gap-1.5">
                      <Zap className="w-3 h-3 text-amber-500 fill-amber-500" />
                      <span className="text-[11px] sm:text-xs font-bold text-slate-900">98% Match</span>
                   </div>
                </div>
                <div className="flex flex-col">
                   <span className="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-widest">Results</span>
                   <div className="flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-emerald-500 fill-emerald-200" />
                      <span className="text-[11px] sm:text-xs font-bold text-slate-900">11 seconds</span>
                   </div>
                </div>
             </div>
             <button className="flex items-center gap-2 text-slate-900 hover:text-blue-600 transition-all font-bold cursor-pointer group">
               <Sparkles className="w-4 h-4 text-blue-600" />
               <span>Optimize Resume Now</span>
               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlagIcon({ code }: { code: string, key?: string }) {
  return (
    <div className="w-6 h-4.5 rounded-sm overflow-hidden shadow-sm border border-slate-200">
      <img 
        src={`https://flagcdn.com/w40/${code.toLowerCase()}.png`} 
        alt={code}
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

function ResumeContent({ data, name, role, isAfter }: { data: any, name: string, role: string, isAfter: boolean }) {
  return (
    <div className="p-6 sm:p-10 lg:p-12 space-y-6 sm:space-y-8 min-w-[320px] sm:min-w-[600px] origin-top-left">
      {/* Resume Header */}
      <div className="border-b-2 border-slate-100 pb-6 text-center space-y-1.5">
         <h1 className="text-2xl font-black text-slate-900 tracking-tighter">{name}</h1>
         <p className={`text-[10px] font-black uppercase tracking-[0.3em] ${isAfter ? 'text-blue-600' : 'text-slate-400'}`}>
           {role}
         </p>
      </div>

      {/* Summary */}
      <div className="space-y-2">
         <h2 className="text-[9px] font-bold uppercase tracking-widest text-slate-400 italic">Professional Profile</h2>
         <p className={`text-sm leading-relaxed ${isAfter ? 'text-slate-800 font-medium' : 'text-slate-500'}`}>
           {isAfter ? (
             <span>
               Results-driven Product Designer with <span className="text-blue-700 bg-blue-50/50 px-1 rounded">5+ years experience</span> specializing in high-scale B2B SaaS platforms. Expertise in complex design systems...
             </span>
           ) : data.summary}
         </p>
      </div>

      {/* Experience */}
      <div className="space-y-5">
         <h2 className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Relevant Experience</h2>
         {data.experience.map((exp: any, i: number) => (
           <div key={i} className="space-y-3">
              <div className="flex justify-between items-baseline underline decoration-slate-100 underline-offset-4">
                 <h3 className="text-sm font-bold text-slate-900">{exp.title}</h3>
                 <span className="text-[9px] font-semibold text-slate-400">2021 — PRESENT</span>
              </div>
              <ul className="space-y-2.5">
                 {exp.points.map((point: any, j: number) => (
                    <li key={j} className="flex flex-col gap-1 group">
                       <div className="flex gap-2.5 text-xs leading-relaxed">
                          <div className="mt-1 flex-shrink-0">
                             <div className={`w-2 h-2 rounded-full shadow-sm ring-4 ${
                                isAfter 
                                  ? (point.color === 'blue' ? 'bg-blue-500 ring-blue-50' : point.color === 'purple' ? 'bg-sky-500 ring-sky-50' : 'bg-blue-400 ring-blue-50') 
                                  : 'bg-slate-300 ring-slate-50'
                             }`} />
                          </div>
                          <span className={isAfter ? 'text-slate-900 font-semibold' : 'text-slate-500'}>
                            {isAfter ? point.text : point}
                          </span>
                       </div>
                       {isAfter && point.suggestion && (
                         <div className="ml-4.5 flex items-center gap-2">
                           <div className="h-px w-3 bg-slate-200" />
                           <span className={`text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md shadow-sm flex items-center gap-1.5 border ${
                             point.color === 'blue' ? 'bg-blue-600 text-white border-blue-400' : 
                             point.color === 'purple' ? 'bg-sky-600 text-white border-sky-400' : 
                             point.color === 'green' ? 'bg-blue-500 text-white border-blue-300' :
                             'bg-blue-600 text-white border-blue-400'
                           }`}>
                             <Sparkles className="w-2 h-2" />
                             {point.suggestion}
                           </span>
                         </div>
                       )}
                    </li>
                 ))}
              </ul>
           </div>
         ))}
      </div>

      {/* Skills Sub-section (AI Only) */}
      {isAfter && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5"
        >
           {['Figma Variables', 'Design Systems', 'B2B SaaS', 'Tailwind', 'UX Audit'].map(tag => (
             <span key={tag} className="text-[8px] font-bold bg-slate-900 text-white px-1.5 py-0.5 rounded uppercase tracking-tighter">
               {tag}
             </span>
           ))}
        </motion.div>
      )}
    </div>
  );
}
