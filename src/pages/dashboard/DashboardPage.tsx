import React from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  Mail, 
  Languages, 
  Settings, 
  CreditCard, 
  FolderIcon, 
  ChevronRight,
  Zap,
  ArrowRight,
  Briefcase,
  Coins,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/common/SEO';

import { PrivateConfig } from '../../config/PrivateConfig';
import { PublicConfig } from '../../config/PublicConfig';

const blogArticles = [
  { title: 'How to beat the ATS in 2026', readTime: '5 min read', slug: 'how-to-beat-ats-2026' },
  { title: 'Top 10 skills EU startups are hiring for', readTime: '4 min read', slug: 'top-10-skills-eu-startups-hiring-2026' },
  { title: 'Europass vs standard resume format', readTime: '7 min read', slug: 'europass-vs-standard-resume-format' }
];

export function DashboardPage() {
  const [isAnnual, setIsAnnual] = React.useState(true);

  return (
    <div className="flex-1 lg:pl-64 flex flex-col pt-16 lg:pt-0">
      <SEO 
        title="Dashboard | EuropeCV"
        description="Manage your professional career tools from your EuropeCV dashboard."
        noindex
      />
      <main className="flex-1 p-4 sm:p-8">
        <div className="max-w-6xl mx-auto mt-16 md:mt-24">
          
          <div className="mb-12">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {PrivateConfig.home.welcome} Hamza.<br />
              <span className="text-blue-600 relative inline-block mt-1">
                Let's build
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute -bottom-1 left-0 h-1.5 bg-blue-500/30 rounded-full"
                />
              </span>
            </h1>
            <p className="text-slate-500 mt-2 text-base">Today you have <span className="text-slate-900 font-bold">3</span> {PrivateConfig.sidebar.nav.credits.toLowerCase()} to build your CV, cover letters, and translations.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Quick Actions Section */}
              <section className="bg-slate-100/50 rounded-3xl border border-slate-200 p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">{PrivateConfig.home.quickActions.title}</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <Link 
                    to="/create?mode=resume"
                    className="bg-blue-600 p-3 rounded-2xl border border-blue-500 hover:opacity-90 transition-all group flex flex-col items-center justify-center gap-2 text-center aspect-[4/3] sm:aspect-[4/3] shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/20 text-white backdrop-blur-sm group-hover:scale-105 transition-transform">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                    </div>
                    <h3 className="font-bold text-white text-xs">{PrivateConfig.library.actions.cv}</h3>
                  </Link>

                  <Link 
                    to="/create?mode=cover-letter"
                    className="bg-white p-3 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all group flex flex-col items-center justify-center gap-2 text-center aspect-[4/3] sm:aspect-[4/3]"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100/80 text-slate-600 group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-800 text-xs">{PrivateConfig.library.actions.letter}</h3>
                  </Link>
                  
                  <Link 
                    to="/create?mode=translation"
                    className="bg-white p-3 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all group flex flex-col items-center justify-center gap-2 text-center aspect-[4/3] sm:aspect-[4/3]"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100/80 text-slate-600 group-hover:scale-105 transition-transform">
                      <Languages className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-800 text-xs">{PrivateConfig.sidebar.nav.create.translation}</h3>
                  </Link>

                  <Link 
                    to="/dashboard/library"
                    className="bg-white p-3 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all group flex flex-col items-center justify-center gap-2 text-center aspect-[4/3] sm:aspect-[4/3]"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100/80 text-slate-600 group-hover:scale-105 transition-transform">
                      <FolderIcon className="w-5 h-5" fill="currentColor" />
                    </div>
                    <h3 className="font-bold text-slate-800 text-xs">{PrivateConfig.library.title}</h3>
                  </Link>

                  <Link 
                    to="/dashboard/credits"
                    className="bg-white p-3 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all group flex flex-col items-center justify-center gap-2 text-center aspect-[4/3] sm:aspect-[4/3]"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100/80 text-slate-600 group-hover:scale-105 transition-transform">
                      <Coins className="w-5 h-5" fill="currentColor" />
                    </div>
                    <h3 className="font-bold text-slate-800 text-xs">{PrivateConfig.sidebar.nav.credits}</h3>
                  </Link>

                  <Link 
                    to="/dashboard/settings"
                    className="bg-white p-3 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all group flex flex-col items-center justify-center gap-2 text-center aspect-[4/3] sm:aspect-[4/3]"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100/80 text-slate-600 group-hover:scale-105 transition-transform">
                      <Settings className="w-5 h-5" fill="currentColor" />
                    </div>
                    <h3 className="font-bold text-slate-800 text-xs">{PrivateConfig.sidebar.nav.settings}</h3>
                  </Link>
                </div>
              </section>

              {/* Upgrade Section */}
              <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-800">
                      <Zap className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl font-extrabold text-slate-900 leading-tight">Recommended Plans</h2>
                  </div>
                  <Link to="/pricing" className="text-xs font-bold text-blue-600 hover:underline">View All Plans</Link>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  {[
                    { name: 'Premium', credits: '7', label: 'Credits', price: '3.99', popular: false, badge: 'SAVE 100%', badgeColor: 'bg-emerald-500', isCorner: true, bonus: '+3 Bonus', desc: 'Career Start', 
                      included: ['x1 Resume', 'x1 Letter', 'x1 Trans', 'x1 ATS'],
                      features: ['AI Model: GPT/Gemini', 'Fast Processing Speed']
                    },
                    { name: 'Ultra', credits: '14', label: 'Credits', price: '6.99', popular: true, badge: 'Most Popular', badgeColor: 'bg-blue-600', discount: '30% OFF', bonus: 'All-in', desc: 'Career Pro', 
                      included: ['x2 CV', 'x2 Letters', 'x2 Trans', 'x2 ATS'],
                      features: ['AI Model: Claude/GPT Latest', 'Instant Analysis Speed']
                    },
                  ].map((plan, idx) => (
                    <div key={idx} className={`relative p-8 rounded-[2.5rem] border-2 transition-all cursor-pointer flex flex-col items-center justify-center group hover:-translate-y-2 hover:shadow-xl ${plan.popular ? 'border-blue-600 bg-white shadow-xl scale-[1.02]' : 'border-slate-200 hover:border-slate-300 bg-white'}`}>
                      {plan.badge && !plan.isCorner && (
                        <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 ${plan.badgeColor} text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap z-10`}>
                          {plan.badge}
                        </div>
                      )}

                      {plan.isCorner && (
                        <div className="absolute top-0 right-0 overflow-hidden w-28 h-28 rounded-tr-[2.5rem] pointer-events-none">
                          <div className="absolute top-5 -right-9 w-[150px] py-1 bg-emerald-500 text-white text-[9px] font-black uppercase tracking-widest rotate-45 text-center shadow-lg">
                            {plan.badge}
                          </div>
                        </div>
                      )}

                      <div className="text-center mb-5">
                        <div className="flex flex-col items-center gap-1 mb-4">
                           <span className="text-6xl font-black text-slate-900 leading-none">{plan.credits}</span>
                           <span className="text-[12px] font-black text-slate-400 uppercase tracking-[0.2em]">{plan.label}</span>
                        </div>
                        
                        <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-3">{plan.name}</h3>

                        <div className="flex flex-col items-center gap-1.5 mb-4">
                           <div className="text-3xl font-black text-[#1A1C2E]">€{plan.price}<span className="text-[12px] font-bold text-slate-400 ml-0.5">/wk</span></div>
                           {plan.discount ? (
                             <div className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 uppercase animate-pulse tracking-tight">{plan.discount}</div>
                           ) : (
                             <div className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 uppercase tracking-tight">Best Value</div>
                           )}
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-center gap-3 mb-6 w-full">
                        <div className="text-center w-full p-5 rounded-2xl bg-blue-50/50 border border-blue-100/50">
                          <div className="flex items-center justify-center gap-2 mb-3 text-[11px] font-black text-blue-600 uppercase tracking-wide">
                            <Zap className="w-4 h-4 fill-current" />
                            {plan.desc}
                          </div>
                          <ul className="flex flex-wrap justify-center gap-x-3 gap-y-2 mb-4 pt-4 border-t border-blue-100/30">
                             {plan.included.map((item, iIdx) => (
                               <li key={iIdx} className="text-[12px] font-bold text-slate-600 flex items-center gap-1.5">
                                 <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                 {item}
                               </li>
                             ))}
                          </ul>
                          
                          <div className="space-y-2 border-t border-blue-100/30 pt-4">
                            {plan.features.map((feature, fIdx) => (
                              <div key={fIdx} className="flex items-center justify-center gap-2 text-[11px] font-bold text-slate-500">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <button className={`w-full py-4 rounded-2xl text-[14px] font-black transition-all flex items-center justify-center gap-2.5 ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-600/20' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                        <Zap className="w-5 h-5 fill-current" />
                        Upgrade Now
                      </button>
                    </div>
                  ))}
                </div>

                {/* Security Banner */}
                <div className="relative border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center bg-slate-50/50 group overflow-hidden">
                  <div className="flex items-center gap-2 font-bold text-slate-400 text-[9px] uppercase tracking-widest mb-2">
                    Secure payments powered by <span className="font-black text-slate-900 text-sm tracking-tighter normal-case" style={{fontFamily: 'Helvetica Neue, Helvetica, sans-serif'}}>stripe</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <div className="h-5 w-8 rounded bg-[#1A1F71] flex items-center justify-center text-white overflow-hidden border border-slate-200/50">
                      <span className="text-[6px] font-bold text-white italic leading-none">VISA</span>
                    </div>
                    <div className="h-5 w-8 rounded bg-white flex items-center justify-center overflow-hidden border border-slate-200/50 relative">
                       <div className="w-3 h-3 bg-[#EB001B] rounded-full absolute -left-0.5 opacity-80 mix-blend-multiply"></div>
                       <div className="w-3 h-3 bg-[#F79E1B] rounded-full absolute -right-0.5 opacity-80 mix-blend-multiply"></div>
                    </div>
                    <div className="h-5 px-1.5 rounded bg-black flex items-center justify-center overflow-hidden border border-slate-200/50">
                      <svg viewBox="0 0 384 512" className="h-2.5 w-auto text-white" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.3 47.1-.8 81.2-86.3 95.1-136.1-39.7-19-58.4-55.7-54.2-74.5zM153.2 81.1c20.4-23.7 33.3-56.3 29.5-81.1-23.8 1-54.8 14.5-73.8 35.8-17.4 19.4-31.5 52.8-26.9 80 26.6 2 52.2-12.7 71.2-34.7z"/></svg>
                      <span className="text-[7px] font-bold text-white ml-0.5 leading-none">Pay</span>
                    </div>
                    <div className="h-5 w-8 rounded bg-[#0070CE] flex items-center justify-center overflow-hidden border border-slate-200/50 text-[5px] text-white font-bold leading-none text-center uppercase">AMEX</div>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column - Sidestuff */}
            <div className="space-y-6">
              
              {/* Credits Widget */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 relative overflow-hidden shadow-lg shadow-blue-900/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div>
                    <p className="text-slate-400 font-medium text-sm mb-1 uppercase tracking-wider">{PrivateConfig.sidebar.creditsCard.title}</p>
                    <h3 className="text-4xl font-extrabold flex items-center gap-3">
                       <Coins className="w-8 h-8 text-amber-500 fill-amber-500" /> 3
                    </h3>
                  </div>
                </div>
                <Link to="/dashboard/credits" className="block w-full bg-white text-slate-900 font-bold py-2.5 rounded-lg text-sm hover:bg-slate-50 transition-colors relative z-10 text-center">
                  Buy More Credits
                </Link>
              </div>

              {/* what you can do */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider pb-4 border-b border-slate-100">Credit Costs</h3>
                <ul className="space-y-4">
                  {[
                    { icon: FileText, ...PrivateConfig.credits.whatYouCanCreate.items.ats },
                    { icon: FileText, ...PrivateConfig.credits.whatYouCanCreate.items.resume },
                    { icon: Mail, ...PrivateConfig.credits.whatYouCanCreate.items.letter },
                    { icon: Languages, ...PrivateConfig.credits.whatYouCanCreate.items.translation },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                        <item.icon className="w-3.5 h-3.5 text-slate-400" /> {item.title}
                      </div>
                      <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">{item.cost}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Career Tips Widget */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider pb-4 border-b border-slate-100">Career Tips</h3>
                <div className="space-y-4">
                  {blogArticles.map((article, idx) => (
                    <Link 
                      key={idx} 
                      to={`/blog/${article.slug}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <h4 className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors leading-snug mb-1">
                        {article.title}
                      </h4>
                      <p className="text-xs text-slate-400 flex items-center gap-1">
                        {article.readTime} <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
