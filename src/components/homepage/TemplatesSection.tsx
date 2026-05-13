import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, Zap, Star, Quote, User, FileText, ArrowRight } from 'lucide-react';
import { PublicConfig } from '../../config/PublicConfig';
import { Link } from 'react-router-dom';

const COLORS = [
  { id: 'slate', name: 'Slate', bg: 'bg-slate-800', text: 'text-slate-600', light: 'bg-slate-50', border: 'border-slate-200', line: 'bg-slate-200', accent: 'text-slate-500' },
  { id: 'blue', name: 'Blue', bg: 'bg-blue-600', text: 'text-blue-600', light: 'bg-blue-50/50', border: 'border-blue-200', line: 'bg-blue-200', accent: 'text-blue-500' },
  { id: 'indigo', name: 'Indigo', bg: 'bg-indigo-600', text: 'text-indigo-600', light: 'bg-indigo-50/50', border: 'border-indigo-200', line: 'bg-indigo-200', accent: 'text-indigo-500' },
  { id: 'emerald', name: 'Emerald', bg: 'bg-emerald-600', text: 'text-emerald-600', light: 'bg-emerald-50/50', border: 'border-emerald-200', line: 'bg-emerald-200', accent: 'text-emerald-500' },
  { id: 'rose', name: 'Rose', bg: 'bg-rose-600', text: 'text-rose-600', light: 'bg-rose-50/50', border: 'border-rose-200', line: 'bg-rose-200', accent: 'text-rose-500' },
  { id: 'amber', name: 'Amber', bg: 'bg-amber-600', text: 'text-amber-600', light: 'bg-amber-50/50', border: 'border-amber-200', line: 'bg-amber-200', accent: 'text-amber-500' },
];

const ICON_MAP: Record<string, any> = {
  'centered-classic': User,
  'ats-pure': ShieldCheck,
  'sidebar-premium': Zap,
  'header-bold': Star
};

export function TemplatesSection() {
  const templates = PublicConfig.templates.items;
  const reviews = PublicConfig.reviews.items;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(COLORS[0]); // Default to Slate

  const ActiveIcon = ICON_MAP[templates[currentIndex].id] || User;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % templates.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [templates.length]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % templates.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + templates.length) % templates.length);

  return (
    <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 bg-white relative overflow-hidden" id="templates">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Info Panel & Heading */}
          <div className="lg:col-span-5 space-y-10 lg:space-y-12">
            <div>
              <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                {PublicConfig.sections.templates.titlePlain}
                <span className="relative inline-block ml-2">
                  <span className="text-blue-600">
                    {PublicConfig.sections.templates.titleHighlight}
                  </span>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute -bottom-1 left-0 h-1.5 bg-blue-500/30 rounded-full"
                  />
                </span>
              </h2>
              <p className="text-[15px] lg:text-[16px] text-slate-500 font-medium leading-relaxed max-w-lg mb-10">
                {PublicConfig.sections.templates.description}
              </p>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                  key={templates[currentIndex].id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <div className={`inline-flex items-center gap-2 px-3 py-1 ${selectedColor.light} border ${selectedColor.border} rounded-lg`}>
                    <span className={`text-[10px] font-bold ${selectedColor.text} uppercase tracking-widest`}>
                      {templates[currentIndex].badge}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg ${selectedColor.light} border ${selectedColor.border}`}>
                      <ActiveIcon className={`w-5 h-5 ${selectedColor.text}`} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      {templates[currentIndex].name}
                    </h3>
                  </div>
                  
                  <p className="text-slate-500 font-medium leading-relaxed text-base">
                    {templates[currentIndex].desc}
                  </p>
                  
                  <ul className="space-y-2">
                    {templates[currentIndex].features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-slate-600 text-sm font-bold">
                        <div className={`w-5 h-5 rounded-full ${selectedColor.light} flex items-center justify-center`}>
                          <CheckCircle2 className={`w-3 h-3 ${selectedColor.text}`} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 flex flex-col gap-3">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Select Theme</span>
                    <div className="flex gap-2">
                      {COLORS.map((c) => (
                        <button
                          key={c.id}
                          onClick={() => setSelectedColor(c)}
                          className={`w-7 h-7 rounded-sm ${c.bg} shadow-sm transition-transform hover:scale-105 flex items-center justify-center cursor-pointer ${selectedColor.id === c.id ? `ring-2 ring-offset-2 ${c.id === 'slate' ? 'ring-slate-400' : 'ring-' + c.id + '-400'}` : ''}`}
                          title={c.name}
                        >
                          {selectedColor.id === c.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 flex items-center gap-3">
                    {templates.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                          idx === currentIndex ? `w-12 ${selectedColor.bg}` : 'w-4 bg-slate-200 hover:bg-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Visual Panel */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="flex justify-end gap-2 mb-4">
                <button 
                  onClick={prev}
                  className={`p-2.5 rounded-full border border-slate-200 hover:bg-slate-50 transition-all active:scale-95 group shadow-sm bg-white/80 backdrop-blur-sm z-10 cursor-pointer`}
                  aria-label="Previous template"
                >
                  <ChevronLeft className={`w-5 h-5 text-slate-400 group-hover:${selectedColor.text}`} />
                </button>
                <button 
                  onClick={next}
                  className={`p-2.5 rounded-full border border-slate-200 hover:bg-slate-50 transition-all active:scale-95 group shadow-sm bg-white/80 backdrop-blur-sm z-10 cursor-pointer`}
                  aria-label="Next template"
                >
                  <ChevronRight className={`w-5 h-5 text-slate-400 group-hover:${selectedColor.text}`} />
                </button>
              </div>
              <div className="relative aspect-[4/5] sm:aspect-[1.2/1]">
                <div className="absolute inset-0 bg-slate-50 rounded-[2.5rem] -rotate-1 border border-slate-100" />
                <div className="absolute inset-2 bg-white rounded-[2rem] shadow-xl shadow-slate-200 border border-slate-100 flex items-center justify-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={templates[currentIndex].id}
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 1.05, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "circOut" }}
                      className="w-full h-full flex items-center justify-center p-6"
                    >
                      {/* Interactive Visual Representation */}
                      <div className={`w-full max-w-[340px] aspect-[1/1.414] bg-white border ${selectedColor.border} rounded shadow-lg flex transition-all duration-500 overflow-hidden relative`}>
                        
                        {/* 1. Centered Classic Layout (Jordan Taylor Image 1 style) */}
                        {templates[currentIndex].id === 'centered-classic' && (
                          <div className="flex-1 flex flex-col p-6 overflow-hidden">
                            {/* Profile Header */}
                            <div className="flex flex-col items-center text-center gap-2.5 mb-5 relative">
                              {/* Accent Top Bar */}
                              <div className={`absolute top-0 inset-x-0 h-1.5 rounded-t-sm opacity-80 ${selectedColor.bg}`} />
                              
                              {templates[currentIndex].mock.image && (
                                <div className={`w-16 h-16 rounded-full border-2 ${selectedColor.border} shadow-md overflow-hidden bg-slate-100 z-10 mt-2`}>
                                  <img src={templates[currentIndex].mock.image} alt="" className="w-full h-full object-cover" />
                                </div>
                              )}
                              <div className={!templates[currentIndex].mock.image ? "mt-4 space-y-0.5" : "space-y-0.5"}>
                                <h4 className={`text-[14px] font-black ${selectedColor.text} leading-tight`}>{templates[currentIndex].mock.name}</h4>
                                <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">{templates[currentIndex].mock.role}</p>
                              </div>
                              <div className="flex items-center gap-2 text-[6px] text-slate-400 font-bold whitespace-nowrap">
                                <span>{templates[currentIndex].mock.email}</span>
                                <span className={`opacity-80 ${selectedColor.text}`}>•</span>
                                <span>{templates[currentIndex].mock.phone}</span>
                                <span className={`opacity-80 ${selectedColor.text}`}>•</span>
                                <span>{templates[currentIndex].mock.location}</span>
                              </div>
                            </div>

                            {/* Section: Summary */}
                            <div className="space-y-2 mb-5">
                              <div className="flex items-center gap-1.5 leading-none">
                                <div className={`w-0.5 h-4 ${selectedColor.bg}`} />
                                <h5 className={`text-[8px] font-black uppercase tracking-widest ${selectedColor.text} opacity-90`}>Professional Summary</h5>
                              </div>
                              <p className="text-[7.5px] leading-[1.4] text-slate-600 pl-2">{templates[currentIndex].mock.summary}</p>
                            </div>

                            {/* Section: Experience */}
                            <div className="space-y-3 mb-5">
                              <div className="flex items-center gap-1.5 leading-none">
                                <div className={`w-0.5 h-4 ${selectedColor.bg}`} />
                                <h5 className={`text-[8px] font-black uppercase tracking-widest ${selectedColor.text} opacity-90`}>Work Experience</h5>
                              </div>
                              <div className="space-y-3 px-2">
                                {templates[currentIndex].mock.experience.map((exp, i) => (
                                  <div key={i} className="space-y-1 relative">
                                    <div className="flex justify-between items-center">
                                      <p className="text-[8.5px] font-bold text-slate-800">{exp.title}</p>
                                      <p className={`text-[6px] font-bold ${selectedColor.text} opacity-80 uppercase tracking-wider`}>{exp.date}</p>
                                    </div>
                                    <p className="text-[7px] text-slate-500 leading-relaxed italic">{exp.desc}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Section: Education */}
                            <div className="space-y-2 mb-5">
                              <div className="flex items-center gap-1.5 leading-none">
                                <div className={`w-0.5 h-4 ${selectedColor.bg}`} />
                                <h5 className={`text-[8px] font-black uppercase tracking-widest ${selectedColor.text} opacity-90`}>Education</h5>
                              </div>
                              <div className="px-2 border-l border-slate-100 ml-1 pl-2">
                                {templates[currentIndex].mock.education?.map((edu, i) => (
                                  <div key={i} className="flex justify-between items-center">
                                    <p className="text-[8px] font-bold text-slate-800">{edu.degree} <span className="text-slate-400 font-medium">| {edu.school}</span></p>
                                    <p className={`text-[6px] font-bold ${selectedColor.text} opacity-80 uppercase tracking-wider`}>{edu.date}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            {/* Section: Skills & Languages */}
                            <div className="mt-auto pt-4 border-t border-slate-100 flex gap-6">
                               <div className="flex-1 flex flex-wrap gap-1.5">
                                 {templates[currentIndex].mock.skills.map(s => (
                                   <span key={s} className={`px-1.5 py-0.5 ${selectedColor.light} border ${selectedColor.border} rounded text-[6px] font-bold uppercase ${selectedColor.text} opacity-90`}>{s}</span>
                                 ))}
                               </div>
                               <div className="flex flex-col gap-1 items-end">
                                  <h5 className="text-[6px] font-black uppercase text-slate-400">Languages</h5>
                                  <div className="flex gap-1.5">
                                    {templates[currentIndex].mock.languages?.map(l => (
                                      <span key={l} className={`text-[6px] font-bold text-slate-600 underline decoration-slate-200 decoration-2 underline-offset-2 hover:${selectedColor.text} transition-colors`}>{l}</span>
                                    ))}
                                  </div>
                               </div>
                            </div>
                          </div>
                        )}

                        {/* 2. ATS Optimized Layout (Strictly text-focused, no photo) */}
                        {templates[currentIndex].id === 'ats-pure' && (
                          <div className={`flex-1 flex flex-col p-8 overflow-hidden bg-white border-t-4 ${selectedColor.border}`}>
                            {/* Simple Profile Header */}
                            <div className={`border-b-2 ${selectedColor.border} pb-4 mb-6 relative`}>
                              <div className={`absolute -left-8 top-1/2 -translate-y-1/2 w-1.5 h-12 rounded-r-sm ${selectedColor.bg}`} />
                              <h4 className={`text-[18px] font-black ${selectedColor.text} tracking-tight text-center uppercase`}>{templates[currentIndex].mock.name}</h4>
                              <p className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.25em] text-center mt-1.5">{templates[currentIndex].mock.role}</p>
                              <div className="flex items-center justify-center gap-3 text-[7px] text-slate-400 font-bold mt-3">
                                <span>{templates[currentIndex].mock.location}</span>
                                <span className={`opacity-50 ${selectedColor.text}`}>|</span>
                                <span>{templates[currentIndex].mock.email}</span>
                                <span className={`opacity-50 ${selectedColor.text}`}>|</span>
                                <span>{templates[currentIndex].mock.phone}</span>
                              </div>
                            </div>

                            {/* Summary */}
                            <div className="mb-6">
                              <h5 className={`text-[9px] font-black uppercase tracking-widest ${selectedColor.text} mb-2 border-b border-slate-100 pb-1 flex items-center gap-2`}>
                                <div className={`w-1 h-1 rounded-full ${selectedColor.bg}`} />
                                Professional Profile
                              </h5>
                              <p className="text-[8px] leading-[1.6] text-slate-600 text-justify hyphens-auto">{templates[currentIndex].mock.summary}</p>
                            </div>

                            {/* Experience */}
                            <div className="mb-6">
                              <h5 className={`text-[9px] font-black uppercase tracking-widest ${selectedColor.text} mb-3 border-b border-slate-100 pb-1 flex items-center gap-2`}>
                                <div className={`w-1 h-1 rounded-full ${selectedColor.bg}`} />
                                Experience
                              </h5>
                              <div className="space-y-4">
                                {templates[currentIndex].mock.experience.map((exp, i) => (
                                  <div key={i} className="space-y-1.5 relative">
                                    <div className="flex justify-between items-baseline">
                                      <p className="text-[9px] font-black text-slate-800">{exp.title}</p>
                                      <p className={`text-[7px] font-bold ${selectedColor.text} uppercase tracking-wider`}>{exp.date}</p>
                                    </div>
                                    <div className="pl-3 relative before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[1.5px] before:bg-gradient-to-b before:from-slate-200 before:to-transparent">
                                      <p className="text-[8px] text-slate-600 leading-relaxed font-medium">{exp.desc}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Education */}
                            <div className="mb-6">
                              <h5 className={`text-[9px] font-black uppercase tracking-widest ${selectedColor.text} mb-3 border-b border-slate-100 pb-1 flex items-center gap-2`}>
                                <div className={`w-1 h-1 rounded-full ${selectedColor.bg}`} />
                                Education
                              </h5>
                              {templates[currentIndex].mock.education?.map((edu, i) => (
                                <div key={i} className="flex justify-between items-baseline">
                                  <p className="text-[9px] font-black text-slate-800">{edu.degree} <span className="text-slate-400 font-medium">| {edu.school}</span></p>
                                  <p className={`text-[7px] font-bold ${selectedColor.text} tracking-wider`}>{edu.date}</p>
                                </div>
                              ))}
                            </div>

                            {/* Skills & Languages */}
                            <div className={`mt-auto pt-5 border-t-2 border-dashed ${selectedColor.border} border-opacity-30 flex justify-between items-end`}>
                              <div className="flex-1 pr-4">
                                <h5 className={`text-[8px] font-black uppercase tracking-widest ${selectedColor.text} mb-2`}>Technical Skills</h5>
                                <p className="text-[8px] text-slate-600 tracking-tight leading-relaxed font-medium">
                                  {templates[currentIndex].mock.skills.join(' • ')}
                                </p>
                              </div>
                              <div className="text-right pl-4 border-l border-slate-100">
                                <h5 className="text-[7px] font-black uppercase text-slate-400 mb-1 tracking-widest">Languages</h5>
                                <div className="flex flex-col gap-0.5">
                                  <p className="text-[8px] font-bold text-slate-800 leading-tight">{templates[currentIndex].mock.languages?.join(', ')}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* 3. Sidebar Layout (Jordan Taylor Image 2 style) */}
                        {templates[currentIndex].id === 'sidebar-premium' && (
                          <div className="flex-1 flex h-full overflow-hidden shadow-2xl relative">
                            {/* Accent Top Bar */}
                            <div className={`absolute top-0 inset-x-0 h-1.5 z-10 ${selectedColor.bg}`} />
                            
                            {/* Dark Sidebar now colored */}
                            <div className={`w-[38%] h-full ${selectedColor.bg} flex flex-col p-4 gap-8 text-white relative overflow-hidden`}>
                              <div className="absolute top-0 inset-x-0 h-32 bg-white/5 backdrop-blur-[2px] z-0" />
                              <div className="space-y-4 flex flex-col items-center relative z-10 pt-2">
                                {templates[currentIndex].mock.image && (
                                  <div className="w-16 h-16 rounded-full border-2 border-white/40 shadow-xl overflow-hidden bg-white/10 backdrop-blur-sm">
                                    <img src={templates[currentIndex].mock.image} alt="" className="w-full h-full object-cover mix-blend-luminosity opacity-90" />
                                  </div>
                                )}
                                <div className="text-center">
                                  <h4 className="text-[12px] font-black tracking-tight drop-shadow-md">{templates[currentIndex].mock.name}</h4>
                                  <p className="text-[6px] font-bold text-white/70 uppercase tracking-widest mt-1.5 drop-shadow-sm">{templates[currentIndex].mock.role}</p>
                                </div>
                              </div>

                              <div className="space-y-3 relative z-10">
                                <p className="text-[7px] font-black uppercase tracking-widest text-white/40 border-b border-white/10 pb-1">Contact</p>
                                <div className="space-y-2.5 text-[6px] text-white/80 font-medium">
                                  <p className="flex items-center gap-2"><span>{templates[currentIndex].mock.email}</span></p>
                                  <p className="flex items-center gap-2"><span>{templates[currentIndex].mock.phone}</span></p>
                                  <p className="flex items-center gap-2"><span>{templates[currentIndex].mock.location}</span></p>
                                </div>
                              </div>

                              <div className="space-y-3 relative z-10">
                                <p className="text-[7px] font-black uppercase tracking-widest text-white/40 border-b border-white/10 pb-1">Expertise</p>
                                <div className="flex flex-col gap-2">
                                  {templates[currentIndex].mock.skills.map(s => (
                                    <div key={s} className="bg-white/10 backdrop-blur-sm rounded px-2.5 py-1.5 flex items-center justify-between border border-white/5">
                                      <span className="text-[6px] font-bold tracking-wide">{s}</span>
                                      <div className="w-1 h-1 rounded-full bg-white/40" />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Main Context */}
                            <div className="flex-1 flex flex-col p-6 gap-6 overflow-hidden bg-white relative">
                              <div className="space-y-2">
                                <h5 className={`text-[7px] font-black uppercase tracking-widest ${selectedColor.text} opacity-80`}>Professional Narrative</h5>
                                <div className={`relative before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[2px] before:${selectedColor.bg} pl-3`}>
                                  <p className="text-[8px] text-slate-600 leading-relaxed font-medium">
                                    {templates[currentIndex].mock.summary}
                                  </p>
                                </div>
                              </div>
                              
                              <div className="space-y-4">
                                <h5 className={`text-[8px] font-black uppercase tracking-widest ${selectedColor.text} border-b border-slate-100 pb-1`}>Experience</h5>
                                {templates[currentIndex].mock.experience.map((exp, i) => (
                                  <div key={i} className="space-y-1.5">
                                    <div className="flex justify-between items-baseline">
                                      <p className="text-[9px] font-bold text-slate-800">{exp.title}</p>
                                      <p className={`text-[6px] font-black ${selectedColor.text} opacity-70 uppercase tracking-widest`}>{exp.date}</p>
                                    </div>
                                    <p className="text-[7.5px] text-slate-500 leading-snug">{exp.desc}</p>
                                  </div>
                                ))}
                              </div>

                              <div className="space-y-4 mt-auto pt-4 flex items-end justify-between border-t border-slate-50">
                                <div className="space-y-3">
                                  <h5 className={`text-[8px] font-black uppercase tracking-widest ${selectedColor.text} border-b border-slate-100 pb-1`}>Education</h5>
                                  {templates[currentIndex].mock.education?.map((edu, i) => (
                                    <div key={i} className="flex flex-col gap-0.5">
                                      <p className="text-[8px] font-bold text-slate-800">{edu.degree}</p>
                                      <p className="text-[6px] font-medium text-slate-500">{edu.school} <span className="opacity-50">|</span> {edu.date}</p>
                                    </div>
                                  ))}
                                </div>
                                <div className="text-right space-y-1">
                                  <h5 className="text-[7px] font-black uppercase tracking-widest text-slate-300">Languages</h5>
                                  <div className="flex flex-col gap-1">
                                    {templates[currentIndex].mock.languages?.map(l => (
                                      <span key={l} className="text-[7px] font-bold text-slate-600">{l}</span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* 4. Bold Header Layout (Jordan Taylor Image 3 style) */}
                        {templates[currentIndex].id === 'header-bold' && (
                          <div className="flex-1 flex flex-col overflow-hidden bg-white">
                            {/* Accent Top Bar */}
                            <div className={`w-full ${selectedColor.bg} p-6 pb-5 flex flex-col gap-4 relative`}>
                              <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded shadow-xl overflow-hidden bg-white/10 ring-4 ring-white/20">
                                  <img src={templates[currentIndex].mock.image} alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="text-white">
                                  <h4 className="text-[20px] font-black tracking-tight leading-none mb-1 drop-shadow-md">{templates[currentIndex].mock.name}</h4>
                                  <p className="text-[9px] font-bold text-white/90 uppercase tracking-[0.25em] drop-shadow-sm">{templates[currentIndex].mock.role}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-5 text-[7px] font-bold text-white/80 whitespace-nowrap overflow-hidden mt-1 border-t border-white/20 pt-3">
                                <span>{templates[currentIndex].mock.email}</span>
                                <span className="opacity-50">/</span>
                                <span>{templates[currentIndex].mock.phone}</span>
                                <span className="opacity-50">/</span>
                                <span>{templates[currentIndex].mock.location}</span>
                              </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col gap-6 relative">
                              <p className="text-[8px] text-slate-600 leading-relaxed font-bold tracking-wide italic">
                                "{templates[currentIndex].mock.summary}"
                              </p>
                              
                              <div className="space-y-4">
                                <h5 className={`text-[9px] font-black uppercase tracking-widest ${selectedColor.text} border-b-2 border-slate-900/5 pb-1`}>Professional Experience</h5>
                                {templates[currentIndex].mock.experience.map((exp, i) => (
                                  <div key={i} className="space-y-1.5 group">
                                    <div className="flex justify-between items-baseline">
                                      <p className="text-[9px] font-black text-slate-800">{exp.title}</p>
                                      <p className={`text-[6px] font-black ${selectedColor.light} ${selectedColor.text} px-2 py-0.5 rounded-full uppercase tracking-wider`}>{exp.date}</p>
                                    </div>
                                    <p className="text-[8px] text-slate-500 leading-relaxed font-medium">
                                      {exp.desc}
                                    </p>
                                  </div>
                                ))}
                              </div>

                              <div className={`space-y-3 mt-auto pt-4 flex items-end justify-between border-t-2 ${selectedColor.border} border-opacity-20`}>
                                <div className="space-y-2">
                                  <h5 className={`text-[8px] font-black uppercase tracking-widest ${selectedColor.text} opacity-80 border-b border-slate-100 pb-1`}>Academic Background</h5>
                                  {templates[currentIndex].mock.education?.map((edu, i) => (
                                    <div key={i} className="flex justify-between items-baseline gap-4">
                                      <p className="text-[8px] font-black text-slate-800">{edu.degree}</p>
                                      <p className="text-[6px] font-bold text-slate-400 capitalize">{edu.date}</p>
                                    </div>
                                  ))}
                                </div>
                                <div className="text-right">
                                   <h5 className={`text-[7px] font-black uppercase tracking-widest ${selectedColor.text} opacity-50 mb-1`}>Languages</h5>
                                   <p className="text-[7px] font-bold text-slate-700">{templates[currentIndex].mock.languages?.join(' • ')}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              
              <div className="flex justify-center mt-10">
                <Link 
                  to="/login"
                  className="flex items-center gap-2 text-slate-900 font-bold hover:text-blue-600 transition-all duration-300 group cursor-pointer"
                >
                  <FileText className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-all" />
                  <span>More Templates</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

        {/* HR Reviews Section - Premium EU Theme & Professional Design */}
        <div className="mt-24 relative">
          {/* Transition Badge - Europass Compatible */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white px-6 py-3.5 rounded-2xl flex items-center gap-6 shadow-[0_20px_50px_rgba(0,51,153,0.15)] border border-slate-100 whitespace-nowrap"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-6.5 bg-[#003399] rounded flex items-center justify-center relative overflow-hidden shadow-sm">
                  <div className="relative w-4 h-4 flex items-center justify-center">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-[1.5px] h-[1.5px] bg-[#FFCC00] rounded-full"
                        style={{
                          transform: `rotate(${i * 30}deg) translateY(-4.5px)`
                        }}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-xl font-bold text-slate-800 tracking-tighter lowercase">europass</span>
              </div>
              <div className="w-px h-6 bg-slate-200" />
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008080]" />
                <div className="flex flex-col -gap-1">
                  <span className="text-[10px] font-black text-[#008080] uppercase tracking-widest leading-none">Compatible</span>
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">Standards 2024</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl p-10 md:p-16 relative border border-slate-200 shadow-sm"
          >
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reviews.map((review, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white border px-6 flex flex-col gap-5 border-slate-200/60 rounded-2xl p-6 shadow-sm hover:border-blue-200 transition-colors"
                >
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <div className="flex-1">
                    <p className="text-[13px] text-slate-600 leading-relaxed font-medium">
                      "{review.text}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                    <div className="relative">
                      <img 
                        src={review.image} 
                        alt={review.name}
                        className="w-10 h-10 rounded-full object-cover border border-slate-200"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 overflow-hidden shrink-0">
                        <img src={`https://flagcdn.com/w20/${review.flagCode}.png`} alt={review.flagCode} className="w-[120%] h-[120%] object-cover" />
                      </div>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[12px] font-bold text-slate-900">{review.name}</p>
                      <div className="flex flex-col">
                        <span className="text-[9px] font-medium text-slate-500 capitalize leading-tight mt-0.5">
                          {review.role}
                        </span>
                        <span className="text-[9px] font-bold text-slate-400 capitalize truncate mt-0.5">
                          {review.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
