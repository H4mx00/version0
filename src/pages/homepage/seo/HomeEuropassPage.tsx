import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, CheckCircle2, Zap, LayoutTemplate, MessageSquare, 
  ArrowRight, FileText, Globe, Star, FileJson, Target,
  Upload, Download, ChevronRight, Languages, Globe2, ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { getFAQsByTitle } from '../../../constants/faqData';
import { SEO } from '../../../components/common/SEO';

const countries = [
  { name: "Germany", code: "de", locale: "de-DE" },
  { name: "France", code: "fr", locale: "fr-FR" },
  { name: "Spain", code: "es", locale: "es-ES" },
  { name: "Italy", code: "it", locale: "it-IT" },
  { name: "Netherlands", code: "nl", locale: "nl-NL" },
  { name: "Belgium", code: "be", locale: "be-BE" },
  { name: "Austria", code: "at", locale: "at-AT" },
  { name: "Portugal", code: "pt", locale: "pt-PT" },
  { name: "Sweden", code: "se", locale: "se-SE" },
  { name: "Poland", code: "pl", locale: "pl-PL" },
  { name: "Ireland", code: "ie", locale: "ie-IE" },
  { name: "Greece", code: "gr", locale: "gr-GR" },
  { name: "Denmark", code: "dk", locale: "da-DK" },
  { name: "Finland", code: "fi", locale: "fi-FI" },
  { name: "Norway", code: "no", locale: "no-NO" },
  { name: "Czechia", code: "cz", locale: "cs-CZ" },
  { name: "Hungary", code: "hu", locale: "hu-HU" },
  { name: "Romania", code: "ro", locale: "ro-RO" },
  { name: "Bulgaria", code: "bg", locale: "bg-BG" },
  { name: "Slovakia", code: "sk", locale: "sk-SK" },
  { name: "Croatia", code: "hr", locale: "hr-HR" },
  { name: "Lithuania", code: "lt", locale: "lt-LT" },
  { name: "Slovenia", code: "sl", locale: "sl-SI" },
  { name: "Latvia", code: "lv", locale: "lv-LV" },
  { name: "Estonia", code: "ee", locale: "et-EE" },
  { name: "Luxembourg", code: "lu", locale: "lb-LU" },
  { name: "Malta", code: "mt", locale: "mt-MT" },
  { name: "Cyprus", code: "cy", locale: "el-CY" },
  { name: "Iceland", code: "is", locale: "is-IS" },
  { name: "Switzerland", code: "ch", locale: "ch-CH" },
  { name: "Ukraine", code: "ua", locale: "uk-UA" },
  { name: "Serbia", code: "rs", locale: "sr-RS" },
  { name: "Turkey", code: "tr", locale: "tr-TR" },
  { name: "United Kingdom", code: "gb", locale: "en-GB" },
  { name: "Georgia", code: "ge", locale: "ka-GE" },
  { name: "Albania", code: "al", locale: "sq-AL" },
  { name: "Moldova", code: "md", locale: "ro-MD" }
];

const Underline = ({ color = "bg-blue-500/30" }) => (
  <motion.div 
    initial={{ width: 0 }}
    whileInView={{ width: '100%' }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.5 }}
    className={`absolute -bottom-1 left-0 h-1.5 ${color} rounded-full`}
  />
);

interface HomeEuropassPageProps {
  title?: string;
}

export function HomeEuropassPage({ title }: HomeEuropassPageProps) {
  const displayTitle = title || "Europass CV";

  React.useEffect(() => {
    document.title = `${displayTitle} | EuropeCV - AI Career Catalyst`;
  }, [displayTitle]);

  const faqs = getFAQsByTitle(displayTitle);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 sm:pt-32 pb-20">
      <SEO 
        title="Free Europass AI CV Builder | Modern EuropeCV Standard"
        description="Create a professional Europass CV using advanced AI. Our modern templates ensure ATS compliance for European job applications and multilingual markets."
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 md:mb-32">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex flex-wrap gap-2 mb-6 uppercase tracking-wider text-[10px] font-bold"
            >
              <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 flex items-center gap-1.5"><Globe2 className="w-3 h-3" /> European Standard</span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 flex items-center gap-1.5"><Shield className="w-3 h-3" /> EU Secure</span>
              <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3" /> 100% Free Templates</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
            >
              The Modern AI <span className="relative inline-block">
                <span className="text-blue-600">{displayTitle}</span>
                <Underline />
              </span> Builder
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 leading-relaxed font-medium mb-8"
            >
              Generate a professional Europass-style CV in seconds. Our AI-powered editor helps you build a resume that meets European standards while ensuring maximum visibility with local Applicant Tracking Systems (ATS).
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/login" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95 group"
                >
                  Create Europass CV
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/login" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold bg-[#064e3b] text-white rounded-xl hover:bg-[#065f46] transition-all active:scale-95 shadow-lg shadow-emerald-900/20 group"
                >
                  <ShieldCheck className="w-4 h-4 mr-2" />
                  ATS Checker
                </Link>
              </div>
              <p className="text-xs font-bold text-slate-500 ml-1">Trusted by 200k+ candidates across the European Union.</p>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 sm:p-8"
            >
               {/* Decorative CV Mockup */}
               <div className="flex border-b border-slate-100 pb-6 mb-6">
                 <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white scale-110 shadow-lg shadow-blue-600/20">
                   <div className="text-2xl">🇪🇺</div>
                 </div>
                 <div className="ml-6 flex-1">
                    <div className="h-4 bg-slate-100 rounded-md w-3/4 mb-2"></div>
                    <div className="h-3 bg-slate-50 rounded-md w-1/2"></div>
                 </div>
               </div>
               
               <div className="space-y-4">
                 <div className="flex gap-4">
                   <div className="w-24 h-2 bg-blue-100 rounded"></div>
                   <div className="flex-1 h-2 bg-slate-50 rounded"></div>
                 </div>
                 <div className="space-y-2">
                   <div className="h-2 bg-slate-50 rounded w-full"></div>
                   <div className="h-2 bg-slate-50 rounded w-full"></div>
                   <div className="h-2 bg-slate-50 rounded w-4/5"></div>
                 </div>
                 <div className="pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 mb-3">
                      <Languages className="w-4 h-4 text-emerald-500" />
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Multi-language Support</div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-emerald-50 text-[10px] font-bold text-emerald-600 rounded border border-emerald-100">English</span>
                      <span className="px-2 py-1 bg-blue-50 text-[10px] font-bold text-blue-600 rounded border border-blue-100">Deutsch</span>
                      <span className="px-2 py-1 bg-purple-50 text-[10px] font-bold text-purple-600 rounded border border-purple-100">Français</span>
                      <span className="px-2 py-1 bg-amber-50 text-[10px] font-bold text-amber-600 rounded border border-amber-100">Español</span>
                    </div>
                 </div>
               </div>
            </motion.div>
          </div>
        </div>

        {/* Flag Selector Section */}
        <div className="mb-24 pt-16 border-t border-slate-200">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4 text-center">
              Supported <span className="relative inline-block">
                <span className="text-blue-600">Throughout Europe</span>
                <Underline />
              </span>
            </h2>
            <p className="text-slate-600 font-medium text-lg">Our AI engine is localized for requirements in every EU member state.</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {countries.map((country, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center group cursor-default"
              >
                <div className="w-8 h-5 mb-2 shadow-sm border border-slate-100 overflow-hidden rounded-sm flex items-center justify-center bg-slate-50">
                   <img 
                    src={`https://flagcdn.com/w80/${country.code}.png`} 
                    alt={country.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    referrerPolicy="no-referrer"
                   />
                </div>
                <div className="text-sm font-bold text-slate-800 mb-1">{country.name}</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{country.locale}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Template Gallery Section */}
        <div className="mb-24 pt-16 border-t border-slate-200">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4 text-center">
              Europass Compatible <span className="relative inline-block">
                <span className="text-blue-600">Templates</span>
                <Underline />
              </span>
            </h2>
            <p className="text-slate-600 font-medium text-lg">Modern, clean, and 100% compliant with European hiring standards.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               { name: "Euro-Standard", desc: "The classic blue-and-white grid layout favored by official EU institutions.", color: "bg-blue-600" },
               { name: "Modern Nordic", desc: "A cleaner, more minimal approach popular in Scandinavia and the UK.", color: "bg-slate-800" },
               { name: "Central Professional", desc: "Strictly chronological and detailed, perfect for the German and Austrian markets.", color: "bg-emerald-600" }
             ].map((tpl, i) => (
               <div key={i} className="group cursor-pointer">
                  <div className="aspect-[3/4] bg-slate-100 rounded-3xl mb-4 overflow-hidden border border-slate-200 group-hover:border-blue-300 transition-colors relative">
                     <div className={`absolute top-0 left-0 w-full h-2 ${tpl.color}`}></div>
                     <div className="p-6 space-y-4">
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                           <div className="flex-1 space-y-1.5">
                              <div className="h-2 bg-slate-200 rounded w-1/2"></div>
                              <div className="h-1.5 bg-slate-200 rounded w-1/3"></div>
                           </div>
                        </div>
                        <div className="space-y-2">
                           <div className="h-1.5 bg-slate-200 rounded w-full"></div>
                           <div className="h-1.5 bg-slate-200 rounded w-5/6"></div>
                           <div className="h-1.5 bg-slate-200 rounded w-full"></div>
                        </div>
                        <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-4">
                           <div className="space-y-2">
                              <div className="h-1.5 bg-slate-200 rounded w-full"></div>
                              <div className="h-1.5 bg-slate-200 rounded w-full"></div>
                           </div>
                           <div className="space-y-2">
                              <div className="h-1.5 bg-slate-200 rounded w-full"></div>
                              <div className="h-1.5 bg-slate-200 rounded w-full"></div>
                           </div>
                        </div>
                     </div>
                     <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform">
                          Use Template
                        </div>
                     </div>
                  </div>
                  <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{tpl.name}</h3>
                  <p className="text-sm text-slate-500 font-medium">{tpl.desc}</p>
               </div>
             ))}
          </div>
        </div>

        {/* Features Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">AI Deep Optimization</h3>
            <p className="text-slate-500 font-medium text-sm leading-relaxed">
              Standard Europass grids can be hard for AI to read. Our builder uses the standard layout but optimizes the underlying code for modern recruitment AI.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
              <Languages className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">24+ EU Languages</h3>
            <p className="text-slate-500 font-medium text-sm leading-relaxed">
              Auto-translate and localize your skills and professional summaries to adapt to any European market instantly.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">GDPR Compliant</h3>
            <p className="text-slate-500 font-medium text-sm leading-relaxed">
              Your personal data is encrypted and stored according to strict EU data protection regulations. Your privacy is our priority.
            </p>
          </div>
        </div>

        {/* Steps Section */}
        <div className="bg-slate-900 rounded-[40px] p-8 sm:p-16 mb-24 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px]"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 blur-[100px]"></div>
           
           <div className="relative z-10 text-center mb-16">
             <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
               How to create <span className="relative inline-block">
                <span className="text-blue-400">your CV</span>
                <Underline color="bg-blue-400/30" />
              </span>
             </h2>
             <p className="text-slate-400 font-medium text-lg">Follow these 4 simple steps to get hired in Europe.</p>
           </div>

           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { n: "01", t: "Fill Details", d: "Enter your experience, education, and language proficiencies." },
                { n: "02", t: "AI Magic", d: "Our AI optimizes your bullet points for European recruiters." },
                { n: "03", t: "Preview", d: "Instantly see how your Europass CV looks in real-time." },
                { n: "04", t: "Export PDF", d: "Download your PDF and start applying for your dream job." }
              ].map((step, i) => (
                <div key={i} className="relative">
                   <div className="text-4xl font-black text-blue-600 mb-4">{step.n}</div>
                   <h4 className="text-lg font-bold text-white mb-2">{step.t}</h4>
                   <p className="text-sm text-slate-400 font-medium leading-relaxed">{step.d}</p>
                </div>
              ))}
           </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight text-center">
              <span className="relative inline-block">
                <span className="text-blue-600">Europass</span>
                <Underline />
              </span> CV FAQ
            </h2>
          </div>
          <div className="space-y-4">
             {faqs.map((faq, idx) => (
               <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                 <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
                 <p className="text-sm text-slate-600 font-medium leading-relaxed">{faq.a}</p>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
