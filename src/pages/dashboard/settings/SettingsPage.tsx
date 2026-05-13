import React from 'react';
import { 
  User, 
  Mail, 
  Lock, 
  Link as LinkIcon, 
  LifeBuoy, 
  HelpCircle, 
  Info,
  BadgeCheck,
  Camera,
  MessageCircleQuestion,
  Twitter,
  Facebook,
  Linkedin,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../../components/common/SEO';

import { PrivateConfig } from '../../../config/PrivateConfig';

export function SettingsPage() {
  return (
    <div className="flex-1 lg:pl-64 flex flex-col pt-16 lg:pt-0">
      <SEO 
        title="Settings | EuropeCV"
        description="Manage your account preferences and social connections."
        noindex
      />
      <main className="flex-1 p-4 sm:p-8">
        <div className="max-w-4xl mx-auto mt-10 md:mt-16">
          
          <div className="space-y-6">
            
            {/* Profile Header Banner - DARK STYLE */}
            <section className="bg-[#1A1C2E] rounded-[2rem] p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6 w-full md:w-auto">
                <div className="relative shrink-0">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg border-2 border-white/10">
                    <img src="https://i.pravatar.cc/150?1" alt="Hamza Ghariani" className="w-full h-full object-cover" />
                  </div>
                </div>
                
                <div className="truncate">
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-black text-white tracking-tight">Hamza Ghariani</h2>
                    <BadgeCheck className="w-5 h-5 text-blue-500 fill-blue-500 text-white" strokeWidth={1} />
                  </div>
                  <p className="text-slate-400 font-medium text-sm mt-0.5 truncate">hamza.ghariani.yubel@gmail.com</p>
                </div>
              </div>

              <div className="shrink-0 w-full md:w-auto">
                <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
                   <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3 text-white"><path d="M20 6L9 17l-5-5" /></svg>
                   </div>
                   <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{PrivateConfig.settings.verified}</span>
                </div>
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Profile Settings */}
              <section className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 font-bold">
                     <User className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">{PrivateConfig.settings.profile.title}</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">{PrivateConfig.settings.profile.name}</label>
                    <input 
                      type="text" 
                      defaultValue="Hamza Ghariani"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm font-bold text-slate-900"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">{PrivateConfig.settings.profile.email}</label>
                    <div className="relative">
                      <input 
                        type="email" 
                        defaultValue="hamza.ghariani.yubel@gmail.com"
                        disabled
                        className="w-full pl-4 pr-10 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-400 cursor-not-allowed"
                      />
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
                        <Lock className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 mt-2 flex items-center gap-1.5 opacity-80">
                      <Info className="w-3 h-3" /> {PrivateConfig.settings.profile.emailNote}
                    </p>
                  </div>
                </div>
              </section>

              {/* Link Socials */}
              <section className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 font-bold">
                    <LinkIcon className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">{PrivateConfig.settings.socials.title}</h3>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  <button className="flex items-center justify-between p-3 rounded-2xl border border-slate-100 hover:border-slate-200 transition-all bg-slate-50/50 group">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#EA4335]" />
                      <span className="font-bold text-slate-900 text-sm">Gmail</span>
                    </div>
                    <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">{PrivateConfig.settings.socials.connect}</span>
                  </button>

                  <button className="flex items-center justify-between p-3 rounded-2xl border border-slate-100 hover:border-slate-200 transition-all bg-slate-50/50 group">
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                      <span className="font-bold text-slate-900 text-sm">LinkedIn</span>
                    </div>
                    <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">{PrivateConfig.settings.socials.connect}</span>
                  </button>

                  <button className="flex items-center justify-between p-3 rounded-2xl border border-slate-100 hover:border-slate-200 transition-all bg-slate-50/50 group">
                    <div className="flex items-center gap-3">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-black"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                      <span className="font-bold text-slate-900 text-sm">X.com</span>
                    </div>
                    <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">{PrivateConfig.settings.socials.connect}</span>
                  </button>
                </div>
              </section>

              {/* Help & Support */}
              <section className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 font-bold">
                    <LifeBuoy className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">{PrivateConfig.settings.support.title}</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Link to="/contact" className="flex items-center gap-3 p-4 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all group">
                    <MessageCircleQuestion className="w-5 h-5 text-slate-900" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{PrivateConfig.settings.support.contact.title}</h4>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{PrivateConfig.settings.support.contact.label}</p>
                    </div>
                  </Link>

                  <Link to="/faq" className="flex items-center gap-3 p-4 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all group">
                    <HelpCircle className="w-5 h-5 text-slate-900" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{PrivateConfig.settings.support.faq.title}</h4>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{PrivateConfig.settings.support.faq.label}</p>
                    </div>
                  </Link>

                  <Link to="/about" className="flex items-center gap-3 p-4 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all group">
                    <Info className="w-5 h-5 text-slate-900" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{PrivateConfig.settings.support.about.title}</h4>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{PrivateConfig.settings.support.about.label}</p>
                    </div>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
