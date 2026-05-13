import React from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  Monitor, 
  HeartPulse, 
  Factory, 
  PieChart, 
  Leaf, 
  TrendingUp, 
  Truck, 
  HardHat, 
  GraduationCap, 
  UtensilsCrossed 
} from 'lucide-react';
import { PublicConfig } from '../../config/PublicConfig';

const ICON_MAP: Record<string, any> = {
  it: { icon: Monitor, color: 'text-blue-600', bg: 'bg-blue-50' },
  healthcare: { icon: HeartPulse, color: 'text-blue-600', bg: 'bg-blue-50' },
  engineering: { icon: Factory, color: 'text-blue-600', bg: 'bg-blue-50' },
  finance: { icon: PieChart, color: 'text-blue-600', bg: 'bg-blue-50' },
  green: { icon: Leaf, color: 'text-blue-600', bg: 'bg-blue-50' },
  sales: { icon: TrendingUp, color: 'text-blue-600', bg: 'bg-blue-50' },
  logistics: { icon: Truck, color: 'text-blue-600', bg: 'bg-blue-50' },
  construction: { icon: HardHat, color: 'text-blue-600', bg: 'bg-blue-50' },
  education: { icon: GraduationCap, color: 'text-blue-600', bg: 'bg-blue-50' },
  tourism: { icon: UtensilsCrossed, color: 'text-blue-600', bg: 'bg-blue-50' }
};

export function JobsSection() {
  const jobs = PublicConfig.sections.jobs.items.map(job => ({
    ...job,
    icon: ICON_MAP[job.id]?.icon || Briefcase,
    color: ICON_MAP[job.id]?.color || 'text-slate-500',
    bg: ICON_MAP[job.id]?.bg || 'bg-slate-50'
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mb-32">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-slate-900 rounded-[2rem] p-8 sm:p-12 lg:p-20 flex flex-col relative overflow-hidden shadow-xl"
      >
        {/* Background elements for depth */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-800 rounded-full blur-[100px] -ml-48 -mb-48" />
        
        <div className="relative z-10 space-y-12">
          <div className="flex flex-col gap-5 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 justify-center w-full mb-2">
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                 <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                 <span className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.2em]">{PublicConfig.sections.jobs.badge}</span>
              </div>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
              {PublicConfig.sections.jobs.titlePlain}
              <span className="relative inline-block ml-2 text-blue-500">
                {PublicConfig.sections.jobs.titleHighlight}
              </span>
            </h3>
            <p className="text-base sm:text-lg text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
              {PublicConfig.sections.jobs.description}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 w-full">
            {jobs.map((job, idx) => (
              <motion.div
                key={job.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group/job flex flex-col items-center justify-center p-6 bg-white/5 border border-white/5 rounded-2xl backdrop-blur-sm hover:bg-blue-600 hover:border-blue-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-4 bg-white/5 group-hover/job:bg-white/10 group-hover/job:scale-110 transition-all duration-300 border border-white/10`}>
                   <job.icon className={`w-6 h-6 sm:w-7 sm:h-7 text-white transition-colors`} />
                </div>
                <span className="text-[13px] sm:text-[14px] font-bold text-white text-center leading-tight tracking-wide transition-colors">
                  {job.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

