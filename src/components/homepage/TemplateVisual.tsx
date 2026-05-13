import React from 'react';
import { PublicConfig } from '../../config/PublicConfig';

type TemplateVisualProps = {
  templateId: string;
  selectedColor?: { id?: string; name?: string; bg: string; text: string; light: string; border: string; line: string; accent: string };
  mockOverride?: any;
};

export function TemplateVisual({ 
  templateId, 
  selectedColor = { id: 'slate', name: 'Slate', bg: 'bg-slate-800', text: 'text-slate-600', light: 'bg-slate-50', border: 'border-slate-200', line: 'bg-slate-200', accent: 'text-slate-500' },
  mockOverride
}: TemplateVisualProps) {
  const baseTemplate = PublicConfig.templates.items.find(t => t.id === templateId) || PublicConfig.templates.items[0];
  const template = mockOverride ? { ...baseTemplate, mock: { ...baseTemplate.mock, ...mockOverride } } : baseTemplate;

  return (
    <div className={`w-full aspect-[1/1.414] bg-white border ${selectedColor.border} rounded shadow-lg flex transition-all duration-500 overflow-hidden relative`}>
      {/* 1. Centered Classic Layout */}
      {template.id === 'centered-classic' && (
        <div className="flex-1 flex flex-col p-4 md:p-6 overflow-hidden">
          <div className="flex flex-col items-center text-center gap-2.5 mb-5 relative">
            <div className={`absolute top-0 inset-x-0 h-1.5 rounded-t-sm opacity-80 ${selectedColor.bg}`} />
            {template.mock.image && (
              <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-2 ${selectedColor.border} shadow-md overflow-hidden bg-slate-100 z-10 mt-2`}>
                <img src={template.mock.image} alt="" className="w-full h-full object-cover" />
              </div>
            )}
            <div className={!template.mock.image ? "mt-4 space-y-0.5" : "space-y-0.5"}>
              <h4 className={`text-[12px] md:text-[14px] font-black ${selectedColor.text} leading-tight`}>{template.mock.name}</h4>
              <p className="text-[7px] md:text-[8px] font-bold text-slate-500 uppercase tracking-widest">{template.mock.role}</p>
            </div>
            <div className="flex items-center gap-2 text-[5px] md:text-[6px] text-slate-400 font-bold whitespace-nowrap">
              <span>{template.mock.email}</span>
              <span className={`opacity-80 ${selectedColor.text}`}>•</span>
              <span>{template.mock.phone}</span>
              <span className={`opacity-80 ${selectedColor.text}`}>•</span>
              <span>{template.mock.location}</span>
            </div>
          </div>
          <div className="space-y-2 mb-4 md:mb-5">
            <div className="flex items-center gap-1.5 leading-none">
              <div className={`w-0.5 h-3 md:h-4 ${selectedColor.bg}`} />
              <h5 className={`text-[7px] md:text-[8px] font-black uppercase tracking-widest ${selectedColor.text} opacity-90`}>Professional Summary</h5>
            </div>
            <p className="text-[6.5px] md:text-[7.5px] leading-[1.4] text-slate-600 pl-2">{template.mock.summary}</p>
          </div>
          <div className="space-y-2 md:space-y-3 mb-4 md:mb-5">
            <div className="flex items-center gap-1.5 leading-none">
              <div className={`w-0.5 h-3 md:h-4 ${selectedColor.bg}`} />
              <h5 className={`text-[7px] md:text-[8px] font-black uppercase tracking-widest ${selectedColor.text} opacity-90`}>Work Experience</h5>
            </div>
            <div className="space-y-2 md:space-y-3 px-2">
              {template.mock.experience.map((exp, i) => (
                <div key={i} className="space-y-0.5 md:space-y-1 relative">
                  <div className="flex justify-between items-center">
                    <p className="text-[7.5px] md:text-[8.5px] font-bold text-slate-800">{exp.title}</p>
                    <p className={`text-[5px] md:text-[6px] font-bold ${selectedColor.text} opacity-80 uppercase tracking-wider`}>{exp.date}</p>
                  </div>
                  <p className="text-[6px] md:text-[7px] text-slate-500 leading-relaxed italic">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2 mb-4 md:mb-5">
            <div className="flex items-center gap-1.5 leading-none">
              <div className={`w-0.5 h-3 md:h-4 ${selectedColor.bg}`} />
              <h5 className={`text-[7px] md:text-[8px] font-black uppercase tracking-widest ${selectedColor.text} opacity-90`}>Education</h5>
            </div>
            <div className="px-2 border-l border-slate-100 ml-1 pl-2">
              {template.mock.education?.map((edu, i) => (
                <div key={i} className="flex justify-between items-center">
                  <p className="text-[7px] md:text-[8px] font-bold text-slate-800">{edu.degree} <span className="text-slate-400 font-medium">| {edu.school}</span></p>
                  <p className={`text-[5px] md:text-[6px] font-bold ${selectedColor.text} opacity-80 uppercase tracking-wider`}>{edu.date}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-auto pt-4 border-t border-slate-100 flex gap-6">
             <div className="flex-1 flex flex-wrap gap-1.5">
               {template.mock.skills.map(s => (
                 <span key={s} className={`px-1.5 py-0.5 ${selectedColor.light} border ${selectedColor.border} rounded text-[5px] md:text-[6px] font-bold uppercase ${selectedColor.text} opacity-90`}>{s}</span>
               ))}
             </div>
             <div className="flex flex-col gap-1 items-end">
                <h5 className="text-[5px] md:text-[6px] font-black uppercase text-slate-400">Languages</h5>
                <div className="flex gap-1.5">
                  {template.mock.languages?.map(l => (
                    <span key={l} className={`text-[5px] md:text-[6px] font-bold text-slate-600 underline decoration-slate-200 decoration-2 underline-offset-2 hover:${selectedColor.text} transition-colors`}>{l}</span>
                  ))}
                </div>
             </div>
          </div>
        </div>
      )}

      {/* 2. ATS Optimized Layout */}
      {template.id === 'ats-pure' && (
        <div className={`flex-1 flex flex-col p-6 md:p-8 overflow-hidden bg-white border-t-4 ${selectedColor.border}`}>
          <div className={`border-b-2 ${selectedColor.border} pb-4 mb-4 md:mb-6 relative`}>
            <div className={`absolute -left-6 md:-left-8 top-1/2 -translate-y-1/2 w-1 md:w-1.5 h-10 md:h-12 rounded-r-sm ${selectedColor.bg}`} />
            <h4 className={`text-[16px] md:text-[18px] font-black ${selectedColor.text} tracking-tight text-center uppercase`}>{template.mock.name}</h4>
            <p className="text-[8px] md:text-[9px] font-bold text-slate-500 uppercase tracking-[0.25em] text-center mt-1.5">{template.mock.role}</p>
            <div className="flex items-center justify-center gap-3 text-[6px] md:text-[7px] text-slate-400 font-bold mt-2 md:mt-3">
              <span>{template.mock.location}</span>
              <span className={`opacity-50 ${selectedColor.text}`}>|</span>
              <span>{template.mock.email}</span>
              <span className={`opacity-50 ${selectedColor.text}`}>|</span>
              <span>{template.mock.phone}</span>
            </div>
          </div>
          <div className="mb-4 md:mb-6">
            <h5 className={`text-[8px] md:text-[9px] font-black uppercase tracking-widest ${selectedColor.text} mb-2 border-b border-slate-100 pb-1 flex items-center gap-2`}>
              <div className={`w-1 h-1 rounded-full ${selectedColor.bg}`} />
              Professional Profile
            </h5>
            <p className="text-[7px] md:text-[8px] leading-[1.6] text-slate-600 text-justify hyphens-auto">{template.mock.summary}</p>
          </div>
          <div className="mb-4 md:mb-6">
            <h5 className={`text-[8px] md:text-[9px] font-black uppercase tracking-widest ${selectedColor.text} mb-2 md:mb-3 border-b border-slate-100 pb-1 flex items-center gap-2`}>
              <div className={`w-1 h-1 rounded-full ${selectedColor.bg}`} />
              Experience
            </h5>
            <div className="space-y-3 md:space-y-4">
              {template.mock.experience.map((exp, i) => (
                <div key={i} className="space-y-1 md:space-y-1.5 relative">
                  <div className="flex justify-between items-baseline">
                    <p className="text-[8px] md:text-[9px] font-black text-slate-800">{exp.title}</p>
                    <p className={`text-[6px] md:text-[7px] font-bold ${selectedColor.text} uppercase tracking-wider`}>{exp.date}</p>
                  </div>
                  <div className="pl-3 relative before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[1.5px] before:bg-gradient-to-b before:from-slate-200 before:to-transparent">
                    <p className="text-[7px] md:text-[8px] text-slate-600 leading-relaxed font-medium">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-4 md:mb-6">
            <h5 className={`text-[8px] md:text-[9px] font-black uppercase tracking-widest ${selectedColor.text} mb-2 md:mb-3 border-b border-slate-100 pb-1 flex items-center gap-2`}>
              <div className={`w-1 h-1 rounded-full ${selectedColor.bg}`} />
              Education
            </h5>
            {template.mock.education?.map((edu, i) => (
              <div key={i} className="flex justify-between items-baseline">
                <p className="text-[8px] md:text-[9px] font-black text-slate-800">{edu.degree} <span className="text-slate-400 font-medium">| {edu.school}</span></p>
                <p className={`text-[6px] md:text-[7px] font-bold ${selectedColor.text} tracking-wider`}>{edu.date}</p>
              </div>
            ))}
          </div>
          <div className={`mt-auto pt-4 md:pt-5 border-t-2 border-dashed ${selectedColor.border} border-opacity-30 flex justify-between items-end`}>
            <div className="flex-1 pr-4">
              <h5 className={`text-[7px] md:text-[8px] font-black uppercase tracking-widest ${selectedColor.text} mb-1.5 md:mb-2`}>Technical Skills</h5>
              <p className="text-[7px] md:text-[8px] text-slate-600 tracking-tight leading-relaxed font-medium">
                {template.mock.skills.join(' • ')}
              </p>
            </div>
            <div className="text-right pl-4 border-l border-slate-100">
              <h5 className="text-[6px] md:text-[7px] font-black uppercase text-slate-400 mb-1 tracking-widest">Languages</h5>
              <div className="flex flex-col gap-0.5">
                <p className="text-[7px] md:text-[8px] font-bold text-slate-800 leading-tight">{template.mock.languages?.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. Sidebar Layout */}
      {template.id === 'sidebar-premium' && (
        <div className="flex-1 flex h-full overflow-hidden shadow-2xl relative">
          <div className={`absolute top-0 inset-x-0 h-1.5 z-10 ${selectedColor.bg}`} />
          <div className={`w-[38%] h-full ${selectedColor.bg} flex flex-col p-3 md:p-4 gap-6 md:gap-8 text-white relative overflow-hidden`}>
            <div className="absolute top-0 inset-x-0 h-24 md:h-32 bg-white/5 backdrop-blur-[2px] z-0" />
            <div className="space-y-3 md:space-y-4 flex flex-col items-center relative z-10 pt-2">
              {template.mock.image && (
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white/40 shadow-xl overflow-hidden bg-white/10 backdrop-blur-sm">
                  <img src={template.mock.image} alt="" className="w-full h-full object-cover mix-blend-luminosity opacity-90" />
                </div>
              )}
              <div className="text-center">
                <h4 className="text-[10px] md:text-[12px] font-black tracking-tight drop-shadow-md">{template.mock.name}</h4>
                <p className="text-[5px] md:text-[6px] font-bold text-white/70 uppercase tracking-widest mt-1.5 drop-shadow-sm">{template.mock.role}</p>
              </div>
            </div>
            <div className="space-y-2 md:space-y-3 relative z-10">
              <p className="text-[6px] md:text-[7px] font-black uppercase tracking-widest text-white/40 border-b border-white/10 pb-1">Contact</p>
              <div className="space-y-1.5 md:space-y-2.5 text-[5px] md:text-[6px] text-white/80 font-medium">
                <p className="flex items-center gap-2"><span>{template.mock.email}</span></p>
                <p className="flex items-center gap-2"><span>{template.mock.phone}</span></p>
                <p className="flex items-center gap-2"><span>{template.mock.location}</span></p>
              </div>
            </div>
            <div className="space-y-2 md:space-y-3 relative z-10">
              <p className="text-[6px] md:text-[7px] font-black uppercase tracking-widest text-white/40 border-b border-white/10 pb-1">Expertise</p>
              <div className="flex flex-col gap-1.5 md:gap-2">
                {template.mock.skills.map(s => (
                  <div key={s} className="bg-white/10 backdrop-blur-sm rounded px-2 py-1 md:px-2.5 md:py-1.5 flex items-center justify-between border border-white/5">
                    <span className="text-[5px] md:text-[6px] font-bold tracking-wide">{s}</span>
                    <div className="w-1 h-1 rounded-full bg-white/40" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col p-4 md:p-6 gap-4 md:gap-6 overflow-hidden bg-white relative">
            <div className="space-y-1.5 md:space-y-2">
              <h5 className={`text-[6px] md:text-[7px] font-black uppercase tracking-widest ${selectedColor.text} opacity-80`}>Professional Narrative</h5>
              <div className={`relative before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[2px] before:${selectedColor.bg} pl-2 md:pl-3`}>
                <p className="text-[7px] md:text-[8px] text-slate-600 leading-relaxed font-medium">
                  {template.mock.summary}
                </p>
              </div>
            </div>
            <div className="space-y-3 md:space-y-4">
              <h5 className={`text-[7px] md:text-[8px] font-black uppercase tracking-widest ${selectedColor.text} border-b border-slate-100 pb-1`}>Experience</h5>
              {template.mock.experience.map((exp, i) => (
                <div key={i} className="space-y-1 md:space-y-1.5">
                  <div className="flex justify-between items-baseline">
                    <p className="text-[8px] md:text-[9px] font-bold text-slate-800">{exp.title}</p>
                    <p className={`text-[5px] md:text-[6px] font-black ${selectedColor.text} opacity-70 uppercase tracking-widest`}>{exp.date}</p>
                  </div>
                  <p className="text-[6.5px] md:text-[7.5px] text-slate-500 leading-snug">{exp.desc}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3 md:space-y-4 mt-auto pt-3 md:pt-4 flex items-end justify-between border-t border-slate-50">
              <div className="space-y-2 md:space-y-3">
                <h5 className={`text-[7px] md:text-[8px] font-black uppercase tracking-widest ${selectedColor.text} border-b border-slate-100 pb-1`}>Education</h5>
                {template.mock.education?.map((edu, i) => (
                  <div key={i} className="flex flex-col gap-0.5">
                    <p className="text-[7px] md:text-[8px] font-bold text-slate-800">{edu.degree}</p>
                    <p className="text-[5px] md:text-[6px] font-medium text-slate-500">{edu.school} <span className="opacity-50">|</span> {edu.date}</p>
                  </div>
                ))}
              </div>
              <div className="text-right space-y-1">
                <h5 className="text-[6px] md:text-[7px] font-black uppercase tracking-widest text-slate-300">Languages</h5>
                <div className="flex flex-col gap-1">
                  {template.mock.languages?.map(l => (
                    <span key={l} className="text-[6px] md:text-[7px] font-bold text-slate-600">{l}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Bold Header Layout */}
      {template.id === 'header-bold' && (
        <div className="flex-1 flex flex-col overflow-hidden bg-white">
          <div className={`w-full ${selectedColor.bg} p-4 md:p-6 pb-4 md:pb-5 flex flex-col gap-3 md:gap-4 relative`}>
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded shadow-xl overflow-hidden bg-white/10 ring-4 ring-white/20">
                <img src={template.mock.image} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="text-white">
                <h4 className="text-[16px] md:text-[20px] font-black tracking-tight leading-none mb-1 drop-shadow-md">{template.mock.name}</h4>
                <p className="text-[8px] md:text-[9px] font-bold text-white/90 uppercase tracking-[0.25em] drop-shadow-sm">{template.mock.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-5 text-[6px] md:text-[7px] font-bold text-white/80 whitespace-nowrap overflow-hidden mt-1 border-t border-white/20 pt-2 md:pt-3">
              <span>{template.mock.email}</span>
              <span className="opacity-50">/</span>
              <span>{template.mock.phone}</span>
              <span className="opacity-50">/</span>
              <span>{template.mock.location}</span>
            </div>
          </div>
          <div className="p-4 md:p-6 flex flex-col gap-4 md:gap-6 relative flex-1">
            <p className="text-[7px] md:text-[8px] text-slate-600 leading-relaxed font-bold tracking-wide italic">
              "{template.mock.summary}"
            </p>
            <div className="space-y-3 md:space-y-4">
              <h5 className={`text-[8px] md:text-[9px] font-black uppercase tracking-widest ${selectedColor.text} border-b-2 border-slate-900/5 pb-1`}>Professional Experience</h5>
              {template.mock.experience.map((exp, i) => (
                <div key={i} className="space-y-1 md:space-y-1.5 group">
                  <div className="flex justify-between items-baseline">
                    <p className="text-[8px] md:text-[9px] font-black text-slate-800">{exp.title}</p>
                    <p className={`text-[5px] md:text-[6px] font-black ${selectedColor.light} ${selectedColor.text} px-2 py-0.5 rounded-full uppercase tracking-wider`}>{exp.date}</p>
                  </div>
                  <p className="text-[7px] md:text-[8px] text-slate-500 leading-relaxed font-medium">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className={`space-y-2 md:space-y-3 mt-auto pt-3 md:pt-4 flex items-end justify-between border-t-2 ${selectedColor.border} border-opacity-20`}>
              <div className="space-y-1.5 md:space-y-2">
                <h5 className={`text-[7px] md:text-[8px] font-black uppercase tracking-widest ${selectedColor.text} opacity-80 border-b border-slate-100 pb-1`}>Academic Background</h5>
                {template.mock.education?.map((edu, i) => (
                  <div key={i} className="flex justify-between items-baseline gap-4">
                    <p className="text-[7px] md:text-[8px] font-black text-slate-800">{edu.degree}</p>
                    <p className="text-[5px] md:text-[6px] font-bold text-slate-400 capitalize">{edu.date}</p>
                  </div>
                ))}
              </div>
              <div className="text-right">
                 <h5 className={`text-[6px] md:text-[7px] font-black uppercase tracking-widest ${selectedColor.text} opacity-50 mb-1`}>Languages</h5>
                 <p className="text-[6px] md:text-[7px] font-bold text-slate-700">{template.mock.languages?.join(' • ')}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
