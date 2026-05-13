import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  UploadCloud, 
  Clipboard, 
  Sparkles, 
  CheckCircle, 
  ArrowRight, 
  FileText, 
  Zap, 
  Target,
  ShieldCheck,
  Globe,
  Image as ImageIcon
} from 'lucide-react';
import { PublicConfig } from '../../config/PublicConfig';
import { Link } from 'react-router-dom';

const ICON_MAP: Record<number, any> = {
  1: { icon: UploadCloud, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
  2: { icon: Clipboard, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
  3: { icon: Sparkles, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' }
};

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = PublicConfig.process.steps.map(step => ({
    ...step,
    icon: ICON_MAP[step.id]?.icon || Zap,
    color: ICON_MAP[step.id]?.color || 'text-blue-600',
    bg: ICON_MAP[step.id]?.bg || 'bg-blue-50',
    border: ICON_MAP[step.id]?.border || 'border-blue-100'
  }));

  return (
    <section className="py-24 bg-white relative" id="how-it-works">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 justify-start mb-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200">
                 <Zap className="w-3.5 h-3.5 text-slate-600" />
                 <span className="text-[10px] font-bold text-slate-700 uppercase tracking-[0.2em]">{PublicConfig.process.badge}</span>
              </div>
            </div>
            <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              {PublicConfig.process.title.plain}
              <span className="relative inline-block ml-2">
                <span className="text-blue-600">
                  {PublicConfig.process.title.highlight}
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
            <p className="text-[15px] sm:text-[16px] text-slate-500 font-medium leading-relaxed max-w-2xl">
              {PublicConfig.process.description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 pb-2">
            {PublicConfig.process.stats.map((stat, i) => {
              const isProcess = stat.label.toLowerCase().includes('process');
              const Icon = isProcess ? Zap : ShieldCheck;
              const colorClass = isProcess 
                ? "bg-blue-50 text-blue-600"
                : "bg-emerald-50 text-emerald-600";
                
              return (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-white border border-slate-200/60 rounded-xl p-3 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300"
                >
                  <div className={`p-2 rounded-lg ${colorClass}`}>
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-semibold text-slate-800 tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Visual Simulation Stage */}
          <div className="lg:col-span-7 sticky top-24 order-2 lg:order-1">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-slate-50 rounded-2xl border border-slate-200">
              
              <AnimatePresence mode="wait">
                {activeStep === 0 && (
                  <motion.div
                    key="step-0"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    className="absolute inset-0 flex items-center justify-center p-8 sm:p-12"
                  >
                    <div className="w-full max-w-sm space-y-6">
                       <div className="bg-white/80 backdrop-blur-md border border-slate-200/60 p-8 rounded-[2rem] shadow-lg relative group">
                          <div className="relative flex flex-col items-center text-center gap-6">
                            <motion.div 
                               animate={{ y: [0, -6, 0] }}
                               transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                               className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100 shadow-inner shadow-white"
                            >
                               <UploadCloud className="w-8 h-8 text-blue-600" />
                            </motion.div>
                            <div className="space-y-2">
                               <div className="h-2 w-32 bg-slate-100 rounded-full mx-auto" />
                               <div className="h-2 w-48 bg-slate-100 rounded-full mx-auto" />
                            </div>
                            <Link to="/login" className="bg-slate-900 text-white px-6 py-3 rounded-xl text-xs font-bold transition-transform hover:bg-slate-800 w-full sm:w-auto">
                               Upload Resume
                            </Link>
                          </div>
                       </div>
                       <div className="flex items-center justify-center gap-2 px-2 overflow-hidden flex-wrap max-w-[280px] mx-auto mt-2">
                          <div className="flex items-center gap-1.5 bg-slate-100/80 px-2 py-1.5 rounded-md text-slate-500 shadow-sm border border-slate-200/60 hover:bg-white hover:text-slate-700 transition-colors">
                            <FileText className="w-3 h-3" />
                            <span className="text-[9px] font-bold uppercase tracking-wider">PDF</span>
                          </div>
                          <div className="flex items-center gap-1.5 bg-slate-100/80 px-2 py-1.5 rounded-md text-slate-500 shadow-sm border border-slate-200/60 hover:bg-white hover:text-slate-700 transition-colors">
                            <FileText className="w-3 h-3" />
                            <span className="text-[9px] font-bold uppercase tracking-wider">DOCX</span>
                          </div>
                          <div className="flex items-center gap-1.5 bg-slate-100/80 px-2 py-1.5 rounded-md text-slate-500 shadow-sm border border-slate-200/60 hover:bg-white hover:text-slate-700 transition-colors">
                            <FileText className="w-3 h-3" />
                            <span className="text-[9px] font-bold uppercase tracking-wider">TXT</span>
                          </div>
                          <div className="flex items-center gap-1.5 bg-slate-100/80 px-2 py-1.5 rounded-md text-slate-500 shadow-sm border border-slate-200/60 hover:bg-white hover:text-slate-700 transition-colors">
                            <ImageIcon className="w-3 h-3" />
                            <span className="text-[9px] font-bold uppercase tracking-wider">JPG</span>
                          </div>
                          <div className="flex items-center gap-1.5 bg-slate-100/80 px-2 py-1.5 rounded-md text-slate-500 shadow-sm border border-slate-200/60 hover:bg-white hover:text-slate-700 transition-colors">
                            <ImageIcon className="w-3 h-3" />
                            <span className="text-[9px] font-bold uppercase tracking-wider">PNG</span>
                          </div>
                       </div>
                    </div>
                  </motion.div>
                )}

                {activeStep === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="absolute inset-0 p-8 sm:p-12 flex flex-col gap-6"
                  >
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-2.5">
                           <Target className="w-5 h-5 text-blue-600" />
                          <span className="text-[11px] font-bold text-slate-900 uppercase tracking-[0.2em]">Job Mapping</span>
                       </div>
                       <div className="flex gap-2">
                          <div className="px-2 py-1 bg-white border border-slate-200 rounded text-[9px] font-bold text-slate-600 uppercase shadow-sm">Germany</div>
                          <div className="px-2 py-1 bg-white border border-slate-200 rounded text-[9px] font-bold text-slate-600 uppercase shadow-sm">ATS-Scan</div>
                       </div>
                    </div>
                    
                    <div className="flex-1 bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-[2rem] p-8 font-mono text-[12px] md:text-[13px] leading-[2] text-slate-500 shadow-lg overflow-hidden relative">
                       <div className="space-y-1">
                          <div>Looking for a <span className="text-slate-900 font-bold bg-blue-100 px-1.5 py-0.5 rounded text-blue-900">Senior Project Manager</span> with</div>
                          <div>experience in <span className="text-slate-900 font-bold bg-blue-50 px-1.5 py-0.5 rounded text-blue-600">Scalable Architectures</span>.</div>
                          <div>Must be proficient in <span className="text-slate-900 font-bold bg-emerald-100 px-1.5 py-0.5 rounded text-emerald-900">Agile Methodologies</span></div>
                          <div>and have experience with <span className="text-slate-900 font-bold bg-amber-100 px-1.5 py-0.5 rounded text-amber-900">European Tech Standards</span>.</div>
                       </div>
                       
                       <motion.div 
                          className="absolute bottom-6 right-6 bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-2xl z-10"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                       >
                          <div className="flex flex-col gap-2">
                             <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Extracting Nuance</div>
                             <div className="flex items-center gap-4">
                                <div className="text-2xl font-black text-white">24</div>
                                <span className="text-[10px] font-bold text-blue-400">Keywords<br />Identified</span>
                             </div>
                          </div>
                       </motion.div>
                    </div>
                  </motion.div>
                )}

                {activeStep === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute inset-0 p-8 sm:p-12 flex items-center justify-center"
                  >
                    <div className="w-full max-w-sm relative">
                       
                       <div className="relative bg-white rounded-[2rem] p-8 shadow-lg border border-slate-200/60 flex flex-col gap-6">
                          <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                             <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-blue-50/50 rounded-xl flex items-center justify-center border border-blue-100">
                                   <FileText className="w-6 h-6 text-blue-600" />
                                </div>
                                <div className="flex flex-col">
                                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Optimized CV</span>
                                   <span className="text-[15px] font-bold text-slate-900">Marcus_Weber.pdf</span>
                                </div>
                             </div>
                             <CheckCircle className="w-7 h-7 text-emerald-500" />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                             <div className="p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
                                <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-1">ATS Match</div>
                                <div className="text-2xl font-black text-slate-900">98%</div>
                             </div>
                             <div className="p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
                                <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-1">Market Fit</div>
                                <div className="text-2xl font-black text-slate-900">High</div>
                             </div>
                          </div>

                          <div className="space-y-2">
                             <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                                <span>Optimization score</span>
                                <span className="text-emerald-600">Perfect</span>
                             </div>
                             <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                <motion.div 
                                   initial={{ width: 0 }}
                                   animate={{ width: '96%' }}
                                   transition={{ duration: 1.5, ease: "easeOut" }}
                                   className="h-full bg-emerald-500" 
                                />
                             </div>
                          </div>

                          <Link to="/login" className="mt-2 w-full bg-slate-900 text-white py-3.5 rounded-xl text-[13px] font-bold flex items-center justify-center gap-2 hover:bg-slate-800 hover:shadow-lg transition-all shadow-sm cursor-pointer group">
                             View Final Result
                             <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                       </div>

                       {/* Extra Floating Labels */}
                       <motion.div 
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="absolute -top-4 -right-1 z-10 bg-slate-900 text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl flex items-center gap-2"
                        >
                          <Globe className="w-3.5 h-3.5" /> EU Standards met
                       </motion.div>
                       
                       <motion.div 
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.7 }}
                          className="absolute -bottom-4 -left-1 z-10 bg-white border border-slate-200 p-3 rounded-2xl shadow-xl flex items-center gap-3"
                        >
                          <ShieldCheck className="w-5 h-5 text-indigo-500" />
                          <div className="flex flex-col">
                             <span className="text-[9px] font-bold text-slate-400 uppercase leading-none tracking-wider mb-0.5">Privacy</span>
                             <span className="text-[11px] font-bold text-slate-900">GDPR Compliant</span>
                          </div>
                       </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex justify-center mt-10">
              <Link to="/login" className="flex items-center gap-2 text-slate-900 font-bold hover:text-blue-600 transition-all duration-300 group cursor-pointer">
                <Zap className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-all" />
                <span>Discover more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right: Step Controllers (Compact & Aligned) */}
          <div className="lg:col-span-5 flex flex-col gap-3 order-1 lg:order-2">
            {steps.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`group flex flex-col text-left p-5 rounded-2xl border transition-all duration-300 outline-none cursor-pointer ${
                  activeStep === idx 
                    ? 'bg-white border-blue-200 shadow-lg scale-[1.02] z-10 ring-1 ring-blue-500/10' 
                    : 'bg-white/50 border-slate-200/60 hover:bg-white hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl transition-all duration-300 ${
                    activeStep === idx 
                      ? `bg-blue-600 text-white shadow-sm` 
                      : `${step.bg} text-slate-500 group-hover:text-blue-600 group-hover:scale-110`
                  }`}>
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div className={`px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-widest border transition-all duration-300 ${
                    activeStep === idx 
                      ? 'bg-blue-50 border-blue-100 text-blue-700' 
                      : `bg-slate-50 border-slate-200 text-slate-500`
                  }`}>
                    {step.badge}
                  </div>
                </div>
                
                <h3 className={`text-[17px] font-bold tracking-tight mb-1.5 transition-colors duration-300 ${
                  activeStep === idx ? 'text-slate-900' : 'text-slate-700'
                }`}>
                  {step.title}
                </h3>
                <p className={`text-[14px] font-medium leading-relaxed transition-colors duration-300 ${
                  activeStep === idx ? 'text-slate-600' : 'text-slate-500'
                }`}>
                  {step.description}
                </p>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

