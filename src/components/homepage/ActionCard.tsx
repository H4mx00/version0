import React from 'react';
import { motion } from 'motion/react';
import { 
  Compass, 
  FileText, 
  Zap, 
  FileSearch, 
  Languages, 
  Globe2, 
  Sparkles, 
  Mail,
  ShieldCheck
} from 'lucide-react';
import { PublicConfig } from '../../config/PublicConfig';
import { CompanyLogos } from '../common/CompanyLogos';
import { Link } from 'react-router-dom';

const FEATURES = [
  { label: 'AI Resume Builder', icon: FileText },
  { label: 'AI Resume Tailoring', icon: Zap },
  { label: 'AI CV Generator', icon: Sparkles },
  { label: 'AI CV Translator', icon: Globe2 },
  { label: 'ATS Resume Checker', icon: ShieldCheck },
  { label: 'Europass CV Builder AI', icon: FileSearch },
  { label: 'AI CV Europass Alternative', icon: Zap },
  { label: 'AI Cover Letter Generator', icon: Mail }
];

export function ActionCard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24 mt-6 sm:mt-12">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl p-8 sm:p-10 relative overflow-hidden border border-slate-200"
      >
        <div className="relative w-full">
          {/* Top Section: Header + Tools */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-16 mb-12">
            {/* Header Section */}
            <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left max-w-xl lg:max-w-sm xl:max-w-md shrink-0">
              {/* Discover Badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200">
                <Compass className="w-3.5 h-3.5 text-slate-600" />
                <span className="text-[10px] font-bold text-slate-700 uppercase tracking-[0.2em]">{PublicConfig.sections.action.badge}</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {PublicConfig.sections.action.titlePlain}
                <span className="relative inline-block ml-2">
                  <span className="text-blue-600">
                    {PublicConfig.sections.action.titleHighlight}
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
              <p className="text-slate-500 text-sm sm:text-base font-medium leading-relaxed max-w-md">
                Unlock professional career tools powered by the latest AI models.
              </p>
            </div>

            {/* Feature Grid - The "Buttons" */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4 flex-1 w-full">
              {FEATURES.map((feature) => (
                <Link
                  key={feature.label}
                  to="/login"
                  className="flex items-center gap-3 px-3 py-3 bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-lg rounded-2xl text-left transition-all duration-500 group/btn active:scale-95"
                >
                  <div className="p-2 rounded-xl bg-blue-50 group-hover/btn:bg-blue-100 transition-colors shrink-0">
                    <feature.icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-slate-700 group-hover/btn:text-blue-700 transition-colors leading-tight">
                    {feature.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Section: Wide Logos Line */}
          <div className="pt-10 border-t border-slate-100 mt-auto">
            <CompanyLogos />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
