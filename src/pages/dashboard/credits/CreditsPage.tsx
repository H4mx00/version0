import React from 'react';
import { 
  Coins, 
  Info, 
  FileText, 
  Mail, 
  Languages, 
  Briefcase,
  HelpCircle,
  MessageCircle,
  Zap,
  CheckCircle2,
  Files,
  Clock,
  HardDrive,
  Facebook,
  Gift,
  ChevronRight,
  Linkedin
} from 'lucide-react';

import { PrivateConfig } from '../../../config/PrivateConfig';
import { PublicConfig } from '../../../config/PublicConfig';
import { SEO } from '../../../components/common/SEO';

const Cpu = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="16" height="16" x="4" y="4" rx="2" /><rect width="6" height="6" x="9" y="9" rx="1" /><path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" /></svg>
);

const Rocket = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3" /><path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5" /></svg>
);

export function CreditsPage() {
  const plans = [
    {
      name: 'Free',
      badge: 'Free Forever',
      badgeColor: 'bg-emerald-500',
      price: '0',
      period: 'forever',
      credits: '3',
      label: 'Credits',
      bonus: 'Sign up to get',
      description: 'Your first 3 credits, on us',
      included: ['x1 Resume', 'x1 Letter', 'x3 ATS Checks'],
      features: [
        { icon: Cpu, text: 'AI Model: GPT' },
        { icon: Rocket, text: 'Speed: 2x vs Guests' },
        { icon: Clock, text: '60 Minutes Cooldown' },
        { icon: HardDrive, text: 'Auto-delete storage' },
        { icon: Files, text: 'PDF Exports Only' }
      ],
      popular: false,
      cta: 'Current Plan'
    },
    {
      name: 'Premium',
      badge: 'SAVE 100%',
      badgeColor: 'bg-emerald-500',
      isCorner: true,
      price: '3.99',
      period: 'weekly',
      credits: '7',
      label: 'Credits',
      bonus: '+3 Bonus once',
      description: 'Taste the power of EuropeCV',
      included: ['x1 Resume', 'x1 Letter', 'x1 Translation', 'x1 ATS Check'],
      features: [
        { icon: Cpu, text: 'AI Model: GPT/Gemini' },
        { icon: Rocket, text: 'Fast Processing Speed' },
        { icon: Clock, text: '10 Minutes Cooldown' },
        { icon: HardDrive, text: '50MB Library Storage' },
        { icon: Files, text: 'PDF, DOCX, TXT Formats' }
      ],
      popular: false,
      cta: 'Upgrade Now'
    },
    {
      name: 'Ultra',
      badge: 'Most Popular',
      badgeColor: 'bg-blue-600',
      price: '6.99',
      period: 'weekly',
      discount: '30% OFF',
      credits: '14',
      label: 'Credits',
      bonus: 'Standard All-in',
      description: 'For serious job seekers',
      included: ['x2 Resumes', 'x2 Cover Letters', 'x2 Translations', 'x2 ATS Checks'],
      features: [
        { icon: Cpu, text: 'AI Model: Claude/GPT Latest' },
        { icon: Rocket, text: 'Instant Analysis Speed' },
        { icon: Clock, text: 'Zero Cooldown Time' },
        { icon: HardDrive, text: '500MB Library Storage' },
        { icon: Files, text: 'PDF, DOCX, TXT, Images' }
      ],
      popular: true,
      cta: 'Upgrade Now'
    }
  ];

  return (
    <div className="flex-1 lg:pl-64 flex flex-col pt-16 lg:pt-0">
      <SEO 
        title="Credits | EuropeCV"
        description="Manage your credit balance and explore premium career tools."
        noindex
      />
      <main className="flex-1 p-4 sm:p-8">
        <div className="max-w-5xl mx-auto mt-10 md:mt-16">
          
          <div className="space-y-6">
            
            {/* Credit Balance Banner */}
            <section className="bg-[#1A1C2E] rounded-[2rem] p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
               <div className="flex items-center gap-6 w-full md:w-auto">
                  <div className="shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 shadow-inner">
                      <Coins className="w-10 h-10 fill-amber-500" />
                    </div>
                  </div>
                  <div className="truncate">
                    <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] mb-1">{PrivateConfig.credits.balance.title}</p>
                    <h2 className="text-4xl font-black text-white tracking-tight">3 <span className="text-lg font-bold text-slate-500 ml-1">{PrivateConfig.credits.balance.badge}</span></h2>
                  </div>
               </div>

               <div className="shrink-0 w-full md:w-auto">
                <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-2xl flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                     <Zap className="w-4 h-4" />
                   </div>
                   <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-tight">Weekly credits refresh based on your plan tier.</span>
                </div>
              </div>
            </section>

            {/* Plans Selection */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 overflow-hidden">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-800">
                   <Zap className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-extrabold text-slate-900 leading-tight">Available Plans</h2>
              </div>
              
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {plans.map((plan, idx) => (
                  <div key={idx} className={`relative p-6 rounded-[32px] border-2 transition-all flex flex-col group items-center text-center ${
                    plan.popular ? 'border-blue-600 bg-white shadow-xl scale-[1.02] z-10' : 'border-slate-100 bg-white shadow-sm'
                  }`}>
                    {/* Top Center Badge */}
                    {plan.badge && !plan.isCorner && (
                      <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 ${plan.badgeColor} text-white text-[8px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap flex items-center gap-1.5`}>
                        {plan.name === 'Free' && <Zap className="w-2.5 h-2.5 fill-current" />}
                        {plan.badge}
                      </div>
                    )}

                    {/* Corner Badge */}
                    {plan.isCorner && (
                      <div className="absolute top-0 right-0 overflow-hidden w-28 h-28 rounded-tr-[32px] pointer-events-none">
                        <div className="absolute top-5 -right-9 w-[150px] py-0.5 bg-emerald-500 text-white text-[8px] font-black uppercase tracking-widest rotate-45 text-center shadow-lg">
                          {plan.badge}
                        </div>
                      </div>
                    )}

                    <div className="mb-4 mt-2">
                      <div className="flex flex-col items-center gap-0.5 mb-3">
                        <span className="text-4xl font-black text-slate-900">{plan.credits}</span>
                        <span className="text-[12px] font-black text-slate-400 uppercase tracking-[0.2em]">{plan.label}</span>
                      </div>

                      <h3 className="text-[18px] font-black text-slate-900 uppercase tracking-tighter mb-1 leading-none">{plan.name}</h3>
                      <div className="flex flex-col items-center gap-1 mb-3">
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-black text-[#1A1C2E]">€{plan.price}</span>
                          <span className="text-[11px] font-bold text-slate-400">{plan.period === 'forever' ? 'forever' : '/wk'}</span>
                        </div>
                      </div>

                      <p className="text-[12px] font-bold text-slate-500 px-1 leading-snug">
                        {plan.description}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 mb-4 w-full group-hover:bg-blue-50/30 transition-colors">
                      <ul className="space-y-1.5 text-left inline-block">
                         {plan.included.map((item, iIdx) => (
                           <li key={iIdx} className="flex items-center gap-1.5 text-[12px] font-bold text-slate-600">
                             <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                             {item}
                           </li>
                         ))}
                      </ul>
                    </div>

                    <button className={`w-full py-4 rounded-xl text-[12px] font-black transition-all active:scale-95 mb-3 flex items-center justify-center gap-1.5 ${
                      plan.popular 
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20' 
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}>
                      <Zap className="w-4 h-4 fill-current" />
                      {plan.cta}
                    </button>

                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-4">Pay once. Use anytime.</p>

                    <div className="space-y-3 w-full pt-4 border-t border-slate-50">
                      {plan.features?.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5">
                          <feature.icon className={`w-4 h-4 shrink-0 opacity-60 ${plan.popular ? 'text-blue-600' : 'text-slate-400'}`} />
                          <span className="text-[12px] font-bold text-slate-500 leading-tight text-left flex items-center gap-1.5 flex-wrap">
                            {feature.text}
                            {feature.text.includes('Claude/GPT Latest') && (
                              <span className="text-[9px] font-black bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full border border-blue-200 uppercase tracking-tighter">+90% upgrades</span>
                            )}
                            {feature.text.includes('Fast Processing Speed') && (
                              <span className="text-[9px] font-black bg-amber-100 text-amber-600 px-1.5 py-0.5 rounded-full border border-amber-200 uppercase tracking-tighter">+70% upgrades</span>
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Security Banner */}
              <div className="mt-8 relative border border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center bg-slate-50/50 group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-500/10" />
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2 font-bold text-slate-400 text-[10px] uppercase tracking-[0.2em]">
                    Secure payments powered by <span className="font-black text-slate-900 text-base tracking-tighter normal-case" style={{fontFamily: 'Helvetica Neue, Helvetica, sans-serif'}}>stripe</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <div className="h-6 w-10 rounded bg-[#1A1F71] flex items-center justify-center text-white overflow-hidden relative shadow-sm border border-slate-200/50">
                      <span className="font-bold text-[8px] italic z-10 text-white relative leading-none">VISA</span>
                    </div>
                    <div className="h-6 w-10 rounded bg-white flex items-center justify-center overflow-hidden shadow-sm relative border border-slate-200/50 text-[#EB001B] font-bold text-[5px] flex-col items-center justify-center p-0.5 -space-y-1">
                       <span className="leading-none italic">Master</span>
                       <span className="leading-none italic">Card</span>
                       <div className="w-full h-full absolute inset-0 mix-blend-multiply opacity-50 flex items-center justify-center transition-opacity group-hover:opacity-100">
                          <div className="w-3 h-3 bg-[#EB001B] rounded-full -mr-1.5 opacity-80" />
                          <div className="w-3 h-3 bg-[#F79E1B] rounded-full -ml-1.5 opacity-80" />
                       </div>
                    </div>
                    <div className="h-6 w-10 rounded bg-[#0070CE] flex items-center justify-center overflow-hidden shadow-sm border border-slate-200/50">
                      <span className="text-[6px] font-bold text-white uppercase text-center leading-none tracking-tight">AMEX</span>
                    </div>
                    <div className="h-6 px-2.5 rounded bg-black flex items-center justify-center overflow-hidden shadow-sm border border-slate-200/50">
                      <svg viewBox="0 0 384 512" className="h-3 w-auto text-white" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.3 47.1-.8 81.2-86.3 95.1-136.1-39.7-19-58.4-55.7-54.2-74.5zM153.2 81.1c20.4-23.7 33.3-56.3 29.5-81.1-23.8 1-54.8 14.5-73.8 35.8-17.4 19.4-31.5 52.8-26.9 80 26.6 2 52.2-12.7 71.2-34.7z"/></svg>
                      <span className="text-[9px] font-bold text-white ml-1 font-sans tracking-tight">Pay</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Get Free Credits Card - Styled like My Credits card */}
            <section className="bg-[#1A1C2E] rounded-[2rem] p-6 sm:p-8 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none group-hover:scale-110 transition-transform duration-500" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 shadow-inner group-hover:rotate-12 transition-transform">
                    <Gift className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-white leading-tight tracking-tight">{PrivateConfig.credits.free.title}</h2>
                    <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.1em] mt-1">{PrivateConfig.credits.free.subtitle}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-black text-emerald-400 bg-emerald-400/10 px-4 py-2 rounded-full uppercase tracking-widest border border-emerald-400/20 shadow-sm">{PrivateConfig.credits.free.badge}</span>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center space-y-6 relative z-10">
                <div className="space-y-4 text-center">
                  <p className="text-sm font-bold text-slate-300">{PrivateConfig.credits.free.social}</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <button className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-blue-500/30 transition-all group/btn cursor-pointer">
                      <Facebook className="w-5 h-5 text-[#1877F2] group-hover/btn:scale-110 transition-transform" />
                      <span className="text-xs font-bold">{PrivateConfig.sidebar.socialLinks?.facebook || 'Facebook'}</span>
                    </button>
                    <button className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-blue-600/30 transition-all group/btn cursor-pointer">
                      <Linkedin className="w-5 h-5 text-[#0A66C2] group-hover/btn:scale-110 transition-transform" />
                      <span className="text-xs font-bold">{PrivateConfig.sidebar.socialLinks?.linkedin || 'LinkedIn'}</span>
                    </button>
                    <button className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-pink-500/30 transition-all group/btn cursor-pointer">
                      <div className="w-5 h-5 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-md flex items-center justify-center p-1 group-hover/btn:scale-110 transition-transform">
                         <svg viewBox="0 0 24 24" fill="white" className="w-full h-full"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 2c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm5 4c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-5 1c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5zm0 2c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"/></svg>
                      </div>
                      <span className="text-xs font-bold">{PrivateConfig.sidebar.socialLinks?.instagram || 'Instagram'}</span>
                    </button>
                    <button className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/30 transition-all group/btn">
                      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 group-hover/btn:scale-110 transition-transform"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                      <span className="text-xs font-bold">{PrivateConfig.sidebar.socialLinks?.x || 'X.com'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* What you can create */}
              <section className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 font-bold">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">{PrivateConfig.credits.whatYouCanCreate.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {[
                    { icon: FileText, ...PrivateConfig.credits.whatYouCanCreate.items.ats },
                    { icon: FileText, ...PrivateConfig.credits.whatYouCanCreate.items.resume },
                    { icon: Mail, ...PrivateConfig.credits.whatYouCanCreate.items.letter },
                    { icon: Languages, ...PrivateConfig.credits.whatYouCanCreate.items.translation },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-2xl border border-slate-50 bg-slate-50/50 group">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white border border-slate-100 shadow-sm group-hover:scale-105 transition-transform`}>
                        <item.icon className="w-4 h-4 text-slate-900" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                        <p className="text-[9px] font-bold text-slate-400 tracking-wider uppercase">{item.desc}</p>
                      </div>
                      <div className="ml-auto text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-1 rounded-lg uppercase tracking-widest shrink-0 border border-blue-100">
                        {item.cost}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Need Help Banner */}
              <section className="bg-blue-600 rounded-3xl p-8 shadow-xl shadow-blue-600/10 flex flex-col items-center text-center text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:scale-110 transition-transform" />
                <div className="relative z-10 w-full flex flex-col items-center">
                   <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4">
                     <HelpCircle className="w-6 h-6 text-white" />
                   </div>
                   <h3 className="text-xl font-black tracking-tight mb-2">{PrivateConfig.credits.help.title}</h3>
                   <p className="text-blue-100 font-bold text-xs leading-relaxed mb-1">
                     {PrivateConfig.credits.help.desc}
                   </p>
                   <p className="text-white font-black text-xs mb-8">{PrivateConfig.credits.help.email}</p>
                </div>
                
                <div className="relative z-10 w-full flex justify-center mt-auto">
                   <a 
                     href={`mailto:${PrivateConfig.credits.help.email}`} 
                     className="bg-white text-blue-600 px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-2 shadow-lg active:scale-95"
                   >
                     <MessageCircle className="w-4 h-4" /> {PrivateConfig.credits.help.cta}
                   </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
