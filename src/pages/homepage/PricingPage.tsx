import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  CheckCircle2, 
  Briefcase, 
  HelpCircle, 
  MessageCircle,
  FileText,
  Mail,
  Languages,
  DollarSign,
  Cpu,
  Rocket,
  Clock,
  HardDrive,
  Files,
  Coins
} from 'lucide-react';
import { PrivateConfig } from '../../config/PrivateConfig';
import { SEO } from '../../components/common/SEO';

export function PricingPage() {
  const plans = [
    {
      name: 'Free',
      badge: 'Free Forever',
      badgeColor: 'bg-emerald-500',
      price: '0',
      period: 'forever',
      credits: '3',
      creditsLabel: 'CREDITS',
      bonus: 'Sign up to get',
      description: 'Your first 3 credits, on us',
      includedList: ['x1 Resume', 'x1 Cover Letter', 'x3 ATS Checks'],
      features: [
        { icon: Cpu, text: 'AI Model: GPT' },
        { icon: Rocket, text: 'Speed: 2x vs Guests' },
        { icon: Clock, text: '60 Minutes Cooldown' },
        { icon: HardDrive, text: 'Auto-delete storage' },
        { icon: Files, text: 'PDF Exports Only' }
      ],
      cta: 'Sign up to get',
      popular: false
    },
    {
      name: 'Premium',
      badge: 'SAVE 100%',
      badgeColor: 'bg-emerald-500',
      isCornerBadge: true,
      price: '3.99',
      period: 'weekly',
      credits: '7',
      creditsLabel: 'CREDITS',
      bonus: '+3 Bonus once',
      description: 'Taste the power of EuropeCV',
      includedList: ['x1 Resume', 'x1 Cover Letter', 'x1 Translation', 'x1 ATS Check'],
      features: [
        { icon: Cpu, text: 'AI Model: GPT/Gemini' },
        { icon: Rocket, text: 'Fast Processing Speed' },
        { icon: Clock, text: '10 Minutes Cooldown' },
        { icon: HardDrive, text: '50MB Library Storage' },
        { icon: Files, text: 'PDF, DOCX, TXT Formats' }
      ],
      cta: 'Sign up to get',
      popular: false
    },
    {
      name: 'Ultra',
      badge: 'Most Popular',
      badgeColor: 'bg-blue-600',
      price: '6.99',
      period: 'weekly',
      discount: '30% OFF',
      credits: '14',
      creditsLabel: 'CREDITS',
      bonus: 'Standard All-in',
      description: 'For serious job seekers',
      includedList: ['x2 Resumes', 'x2 Cover Letters', 'x2 Translations', 'x2 ATS Checks'],
      features: [
        { icon: Cpu, text: 'AI Model: Claude/GPT Latest' },
        { icon: Rocket, text: 'Instant Analysis Speed' },
        { icon: Clock, text: 'Zero Cooldown Time' },
        { icon: HardDrive, text: '500MB Library Storage' },
        { icon: Files, text: 'PDF, DOCX, TXT, Images' }
      ],
      cta: 'Sign up to get',
      popular: true
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 sm:pt-28 pb-16">
      <SEO 
        title="Pricing & Plans | Affordable AI Career Tools | EuropeCV"
        description="Choose the best plan to accelerate your career. Get weekly AI resume generation, translation, and ATS checks for the European job market."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            Invest in your <span className="text-blue-600">Career</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 font-medium max-w-2xl mx-auto"
          >
            Flexible weekly plans designed to match your job search lifecycle. Every credit unlocks professional growth.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Plans Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {plans.map((plan, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`relative p-6 rounded-[32px] border-2 transition-all flex flex-col group items-center text-center ${
                  plan.popular ? 'border-blue-600 bg-white shadow-2xl scale-[1.02] z-10' : 'border-slate-100 bg-white shadow-sm'
                }`}
              >
                {/* Top Center Badge */}
                {plan.badge && !plan.isCornerBadge && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 ${plan.badgeColor} text-white text-[9px] font-black uppercase tracking-widest px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap flex items-center gap-1.5`}>
                    {plan.name === 'Free' && <Zap className="w-2.5 h-2.5 fill-current" />}
                    {plan.badge}
                  </div>
                )}

                {/* Corner Badge */}
                {plan.isCornerBadge && (
                  <div className="absolute top-0 right-0 overflow-hidden w-28 h-28 rounded-tr-[32px] pointer-events-none">
                    <div className="absolute top-5 -right-9 w-[150px] py-0.5 bg-emerald-500 text-white text-[9px] font-black uppercase tracking-widest rotate-45 text-center shadow-lg">
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className="mb-6 mt-2">
                  <div className="flex flex-col items-center gap-0.5 mb-4">
                    <span className="text-4xl font-black text-slate-900">{plan.credits}</span>
                    <span className="text-[12px] font-black text-slate-400 uppercase tracking-[0.2em]">{plan.creditsLabel}</span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-1 leading-none">{plan.name}</h3>
                  <div className="flex flex-col items-center gap-1 mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-[#1A1C2E]">€{plan.price}</span>
                      <span className="text-[11px] font-bold text-slate-400">{plan.period === 'forever' ? 'forever' : '/wk'}</span>
                    </div>
                    <div className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 uppercase">€{idx === 0 ? '0.00' : idx === 1 ? '0.57' : '0.49'} per credit</div>
                  </div>

                  <p className="text-[13px] font-bold text-slate-500 px-2 leading-snug">
                    {plan.description}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-6 w-full group-hover:bg-blue-50/30 transition-colors">
                  <ul className="space-y-2 text-left inline-block">
                     {plan.includedList.map((item, iIdx) => (
                       <li key={iIdx} className="flex items-center gap-2.5 text-[13px] font-bold text-slate-600">
                         <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                         {item}
                       </li>
                     ))}
                  </ul>
                </div>

                <button className={`w-full py-4 rounded-xl text-sm font-black transition-all active:scale-95 mb-3 flex items-center justify-center gap-2 ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-600/20' 
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}>
                  <Zap className="w-4 h-4 fill-current" />
                  {plan.cta}
                </button>

                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Pay once. Use anytime.</p>

                <div className="space-y-3 w-full pt-6 border-t border-slate-50">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <feature.icon className={`w-4 h-4 shrink-0 opacity-60 ${plan.popular ? 'text-blue-600' : 'text-slate-400'}`} />
                      <span className="text-[12px] font-bold text-slate-500 leading-tight text-left flex items-center gap-1.5 flex-wrap">
                        {feature.text}
                        {feature.text.includes('Claude/GPT Latest') && (
                          <span className="text-[9px] font-black bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full border border-blue-200 uppercase tracking-tighter transition-all group-hover:scale-105">+90% upgrades</span>
                        )}
                        {feature.text.includes('Fast Processing Speed') && (
                          <span className="text-[9px] font-black bg-amber-100 text-amber-600 px-1.5 py-0.5 rounded-full border border-amber-200 uppercase tracking-tighter transition-all group-hover:scale-105">+70% upgrades</span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Security Banner */}
          <div className="mb-16 relative border border-slate-200 rounded-[32px] p-8 flex flex-col items-center justify-center bg-white shadow-sm overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 font-bold text-slate-400 text-sm uppercase tracking-widest">
                Secure payment powered by <span className="font-black text-slate-900 text-xl tracking-tighter normal-case" style={{fontFamily: 'Helvetica Neue, Helvetica, sans-serif'}}>stripe</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="h-8 w-12 rounded bg-[#1A1F71] flex items-center justify-center text-white overflow-hidden relative shadow-sm border border-slate-200">
                  <span className="font-bold text-[10px] italic z-10 text-white relative leading-none uppercase tracking-wider mx-0.5">VISA</span>
                </div>
                <div className="h-8 w-12 rounded bg-white flex items-center justify-center overflow-hidden shadow-sm relative border border-slate-200">
                   <div className="w-5 h-5 bg-[#EB001B] rounded-full absolute -left-1 opacity-90 mix-blend-multiply"></div>
                   <div className="w-5 h-5 bg-[#F79E1B] rounded-full absolute -right-1 opacity-90 mix-blend-multiply"></div>
                </div>
                <div className="h-8 w-12 rounded bg-[#0070CE] flex items-center justify-center overflow-hidden shadow-sm border border-slate-200">
                  <span className="text-[7px] font-bold text-white uppercase text-center leading-none tracking-tight">American<br/>Express</span>
                </div>
                <div className="h-8 px-3 rounded bg-black flex items-center justify-center overflow-hidden shadow-sm border border-slate-200">
                  <svg viewBox="0 0 384 512" className="h-4 w-auto text-white" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.3 47.1-.8 81.2-86.3 95.1-136.1-39.7-19-58.4-55.7-54.2-74.5zM153.2 81.1c20.4-23.7 33.3-56.3 29.5-81.1-23.8 1-54.8 14.5-73.8 35.8-17.4 19.4-31.5 52.8-26.9 80 26.6 2 52.2-12.7 71.2-34.7z"/></svg>
                  <span className="text-[11px] font-black text-white ml-1">Pay</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Credit Costs Table */}
            <section className="bg-white rounded-[32px] border border-slate-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight">Credit Usage Rules</h3>
              </div>
              
              <div className="space-y-3">
                {[
                  { icon: FileText, ...PrivateConfig.credits.whatYouCanCreate.items.ats },
                  { icon: FileText, ...PrivateConfig.credits.whatYouCanCreate.items.resume },
                  { icon: Mail, ...PrivateConfig.credits.whatYouCanCreate.items.letter },
                  { icon: Languages, ...PrivateConfig.credits.whatYouCanCreate.items.translation },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group transition-all hover:bg-white hover:shadow-md hover:border-blue-100">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white border border-slate-100 shadow-sm group-hover:scale-110 transition-transform">
                      <item.icon className="w-4 h-4 text-slate-900" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm">{item.title}</h4>
                      <p className="text-[9px] font-bold text-slate-400 tracking-widest uppercase">{item.desc}</p>
                    </div>
                    <div className="ml-auto text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full uppercase tracking-widest shrink-0 border border-blue-100">
                      {item.cost}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Support Section */}
            <section className="bg-blue-600 rounded-[32px] p-10 shadow-2xl shadow-blue-600/20 flex flex-col items-center text-center text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-125 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-2xl -ml-10 -mb-10" />
              
              <div className="relative z-10 flex flex-col items-center flex-1">
                 <div className="w-16 h-16 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 shadow-inner ring-1 ring-white/30">
                   <HelpCircle className="w-8 h-8 text-white" />
                 </div>
                 <h3 className="text-2xl font-black tracking-tight mb-4">{PrivateConfig.credits.help.title}</h3>
                 <p className="text-blue-100 font-bold text-sm leading-relaxed mb-8 max-w-xs">
                   {PrivateConfig.credits.help.desc}
                 </p>
                 
                 <div className="mt-auto">
                    <a 
                      href={`mailto:${PrivateConfig.credits.help.email}`} 
                      className="bg-white text-blue-600 px-10 py-4 rounded-[20px] font-black text-sm uppercase tracking-widest hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-3 shadow-xl active:scale-95"
                    >
                      <MessageCircle className="w-5 h-5" /> {PrivateConfig.credits.help.cta}
                    </a>
                    <p className="mt-6 text-[10px] font-black text-blue-200 uppercase tracking-[0.2em] opacity-80">
                      Response in 24-72 hours
                    </p>
                 </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
