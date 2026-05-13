import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { PublicConfig } from '../../config/PublicConfig';

export function TestimonialsSection() {
  const testimonials = PublicConfig.sections.testimonials.items;

  return (
    <section className="py-24 sm:py-32 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative">
        <div className="text-center max-w-2xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-3 justify-center mb-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200">
               <Star className="w-3.5 h-3.5 text-slate-600" />
               <span className="text-[10px] font-bold text-slate-700 uppercase tracking-[0.2em]">{PublicConfig.sections.testimonials.badge}</span>
            </div>
          </div>
          <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            {PublicConfig.sections.testimonials.titlePlain}
            <span className="relative inline-block ml-2">
              <span className="text-blue-600">
                {PublicConfig.sections.testimonials.titleHighlight}
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
          <p className="text-[13px] sm:text-[14px] text-slate-500 font-medium leading-relaxed max-w-xl mx-auto">
            {PublicConfig.sections.testimonials.description}
          </p>
        </div>
      </div>

      <div className="relative group flex overflow-hidden w-full select-none" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        <div className="flex gap-6 w-max animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] px-3">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`bg-white border border-slate-200/60 rounded-2xl p-6 flex flex-col gap-4 shadow-sm w-[300px] shrink-0 transition-colors duration-500 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5`}
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <div className="flex-1">
                <p className="text-[13px] text-slate-600 leading-relaxed font-medium">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="relative shrink-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-9 h-9 rounded-full object-cover border border-slate-100 transition-all duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-sm border border-slate-100 shrink-0">
                    <img src={`https://flagcdn.com/w20/${testimonial.flagCode}.png`} alt={testimonial.flagCode} className="w-[120%] h-[120%] object-cover" />
                  </div>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[12px] font-bold text-slate-900 leading-tight truncate">{testimonial.name}</span>
                  <div className="flex flex-col -gap-0.5 mt-0.5">
                    <span className="text-[9px] font-medium text-slate-500 capitalize">{testimonial.role}</span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider truncate mt-0.5">
                       {testimonial.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* DUPLICATE SET FOR SMOOTH MARQUEE */}
        <div className="flex gap-6 w-max animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] px-3 pointer-events-none" aria-hidden="true">
          {testimonials.map((testimonial, idx) => (
            <div
              key={`dup-${idx}`}
              className={`bg-white border border-slate-200/60 rounded-2xl p-6 flex flex-col gap-4 shadow-sm w-[300px] shrink-0 transition-colors duration-500 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5`}
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <div className="flex-1">
                <p className="text-[13px] text-slate-600 leading-relaxed font-medium">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="relative shrink-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-9 h-9 rounded-full object-cover border border-slate-100 transition-all duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-sm border border-slate-100 shrink-0">
                    <img src={`https://flagcdn.com/w20/${testimonial.flagCode}.png`} alt={testimonial.flagCode} className="w-[120%] h-[120%] object-cover" />
                  </div>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[12px] font-bold text-slate-900 leading-tight truncate">{testimonial.name}</span>
                  <div className="flex flex-col -gap-0.5 mt-0.5">
                    <span className="text-[9px] font-medium text-slate-500 capitalize">{testimonial.role}</span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider truncate mt-0.5">
                       {testimonial.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
