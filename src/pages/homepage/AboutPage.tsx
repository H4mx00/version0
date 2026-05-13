import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, FileText, Globe, Shield, Sparkles, 
  Target, Zap, Compass, Award, CheckCircle2, FileJson, LayoutTemplate, MessageSquare,
  Laptop, HeartPulse, Wrench, LineChart, Leaf, Megaphone, Truck, HardHat, GraduationCap, Plane
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/common/SEO';

export function AboutPage() {
  const flags = [
    { code: 'at', name: 'Austria' }, { code: 'be', name: 'Belgium' },
    { code: 'bg', name: 'Bulgaria' }, { code: 'hr', name: 'Croatia' },
    { code: 'cy', name: 'Cyprus' }, { code: 'cz', name: 'Czechia' },
    { code: 'dk', name: 'Denmark' }, { code: 'ee', name: 'Estonia' },
    { code: 'fi', name: 'Finland' }, { code: 'fr', name: 'France' },
    { code: 'de', name: 'Germany' }, { code: 'gr', name: 'Greece' },
    { code: 'hu', name: 'Hungary' }, { code: 'ie', name: 'Ireland' },
    { code: 'it', name: 'Italy' }, { code: 'lv', name: 'Latvia' },
    { code: 'lt', name: 'Lithuania' }, { code: 'lu', name: 'Luxembourg' },
    { code: 'mt', name: 'Malta' }, { code: 'nl', name: 'Netherlands' },
    { code: 'pl', name: 'Poland' }, { code: 'pt', name: 'Portugal' },
    { code: 'ro', name: 'Romania' }, { code: 'sk', name: 'Slovakia' },
    { code: 'si', name: 'Slovenia' }, { code: 'es', name: 'Spain' },
    { code: 'se', name: 'Sweden' }, { code: 'ch', name: 'Switzerland' },
    { code: 'gb', name: 'UK' }, { code: 'no', name: 'Norway' }
  ];

  const sectors = [
    { name: 'Information Technology', icon: <Laptop className="w-6 h-6 text-blue-600" /> },
    { name: 'Healthcare & Nursing', icon: <HeartPulse className="w-6 h-6 text-rose-600" /> },
    { name: 'Engineering & Manufacturing', icon: <Wrench className="w-6 h-6 text-slate-600" /> },
    { name: 'Finance & FinTech', icon: <LineChart className="w-6 h-6 text-emerald-600" /> },
    { name: 'Green Energy & Sustainability', icon: <Leaf className="w-6 h-6 text-green-600" /> },
    { name: 'Sales & Marketing', icon: <Megaphone className="w-6 h-6 text-orange-600" /> },
    { name: 'Logistics & Supply Chain', icon: <Truck className="w-6 h-6 text-indigo-600" /> },
    { name: 'Construction & Trades', icon: <HardHat className="w-6 h-6 text-amber-600" /> },
    { name: 'Education & Training', icon: <GraduationCap className="w-6 h-6 text-purple-600" /> },
    { name: 'Tourism & Hospitality', icon: <Plane className="w-6 h-6 text-sky-600" /> },
  ];

  const features = [
    {
      icon: <LayoutTemplate className="w-5 h-5 text-blue-600" />,
      title: "ATS-friendly European CV maker",
      description: "We use advanced AI to format your professional history exactly how European Applicant Tracking Systems expect it.",
      color: "bg-blue-50 border-blue-100",
      demo: (
        <div className="mt-4 p-3 bg-white rounded-xl border border-blue-100 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-400"></div>
            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
          </div>
          <div className="space-y-1.5">
            <div className="h-2 bg-slate-100 rounded w-1/3"></div>
            <div className="h-2 bg-slate-100 rounded w-full"></div>
            <div className="h-2 bg-slate-100 rounded w-2/3"></div>
          </div>
        </div>
      )
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-purple-600" />,
      title: "Smart Cover Letter Generator",
      description: "Our context-aware AI resume builder for Europe analyzes job descriptions to generate highly tailored cover letters.",
      color: "bg-purple-50 border-purple-100",
      demo: (
        <div className="mt-4 p-3 bg-white rounded-xl border border-purple-100 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="h-2 bg-purple-100 rounded w-1/4"></div>
            <Sparkles className="w-3 h-3 text-purple-400" />
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 bg-slate-100 rounded w-full"></div>
            <div className="h-1.5 bg-slate-100 rounded w-full"></div>
            <div className="h-1.5 bg-slate-100 rounded w-3/4"></div>
          </div>
        </div>
      )
    },
    {
      icon: <Globe className="w-5 h-5 text-emerald-600" />,
      title: "Local Market Mastery",
      description: "Instantly translate and adapt your professional documents to local market standards, a true Europass CV alternative.",
      color: "bg-emerald-50 border-emerald-100",
      demo: (
        <div className="mt-4 p-3 bg-white rounded-xl border border-emerald-100 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-center text-xs font-bold text-slate-400 mb-2">
            <div className="flex items-center gap-1.5"><img src="https://flagcdn.com/w20/gb.png" alt="EN" className="w-4 h-auto rounded-[2px]" /> <span>EN</span></div>
            <ArrowLeft className="w-3 h-3" />
            <div className="flex items-center gap-1.5"><img src="https://flagcdn.com/w20/de.png" alt="DE" className="w-4 h-auto rounded-[2px]" /> <span className="text-emerald-600">DE</span></div>
          </div>
          <div className="h-1.5 bg-emerald-50 rounded w-full mb-1"></div>
          <div className="h-1.5 bg-emerald-50 rounded w-2/3"></div>
        </div>
      )
    },
    {
      icon: <Shield className="w-5 h-5 text-amber-600" />,
      title: "Data Sovereignty & GDPR",
      description: "Built in Europe, for Europe. We strictly adhere to GDPR principles, ensuring your data remains private.",
      color: "bg-amber-50 border-amber-100",
      demo: (
        <div className="mt-4 p-3 bg-white rounded-xl border border-amber-100 shadow-sm flex items-center justify-center py-6">
          <div className="relative">
            <Shield className="w-8 h-8 text-amber-400" />
            <CheckCircle2 className="w-4 h-4 text-emerald-500 absolute -bottom-1 -right-1 bg-white rounded-full" />
          </div>
        </div>
      )
    }
  ];

  const stats = [
    { label: "European Countries Supported", value: "27+" },
    { label: "Languages Supported", value: "15+" },
    { label: "Market Ready Formats", value: "12+" },
    { label: "GDPR Compliant", value: "100%" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 sm:pt-32 pb-20">
      <SEO 
        title="About Us | Our Mission for European Careers | EuropeCV"
        description="Learn how EuropeCV is revolutionizing the European job market with AI. Our mission is to help professionals build cross-border careers with ease."
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation & Logo */}
        <div className="mb-12 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all shadow-sm">
              <div className="bg-slate-900 p-2 rounded-xl">
                <FileText className="h-4 w-4 text-white" />
              </div>
            </div>
            <span className="text-lg font-extrabold text-slate-900 tracking-tight">EuropeCV<span className="text-blue-600">.</span></span>
          </Link>
          <Link 
            to="/" 
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 text-sm font-bold mb-8 shadow-sm"
          >
            <Compass className="w-4 h-4" />
            About Our Platform
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6"
          >
            AI-Powered European CV Platform{" "}
            <span className="relative inline-block lg:ml-1">
              <span className="text-blue-600">
                for International Professionals
              </span>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-1 left-0 h-1.5 bg-blue-500/30 rounded-full"
              />
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed font-medium mb-8"
          >
            Create ATS-friendly European CVs, translate resumes into multiple languages, and generate tailored cover letters with AI. EuropeCV is a modern Europass alternative designed to help professionals apply for jobs across Europe faster and with more confidence.
          </motion.p>

        </div>

        {/* European Flags Marquee */}
        <div className="w-full overflow-hidden bg-white py-6 border-y border-slate-200 mb-20 md:mb-28">
           <div className="flex gap-6 sm:gap-8 px-4 justify-center flex-wrap max-w-5xl mx-auto">
              {flags.map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2 transition-all cursor-default hover:scale-105">
                  <div className="w-8 h-6 sm:w-10 sm:h-7 rounded shadow-sm overflow-hidden bg-slate-100 flex items-center justify-center">
                    <img 
                      src={`https://flagcdn.com/w80/${item.code}.png`} 
                      alt={`${item.name} flag`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
           </div>
        </div>

        {/* The Mission */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm mb-24 md:mb-32"
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-5">
                Our{" "}
                <span className="relative inline-block">
                  <span className="text-blue-600">Mission</span>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute -bottom-1 left-0 h-1 bg-blue-500/30 rounded-full"
                  />
                </span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5 font-medium text-sm sm:text-base">
                At EuropeCV, our mission is to make professional job applications simpler, smarter, and more accessible for people building careers across Europe.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5 font-medium text-sm sm:text-base">
                We are a team of engineers, HR managers, and AI specialists working together to help professionals create ATS-friendly European CVs, translate resumes accurately, and generate high-quality cover letters tailored for modern hiring systems. By combining recruitment expertise with AI technology, we aim to remove the complexity of applying for jobs internationally.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium text-sm sm:text-base">
                Whether you are a student, expat, graduate, or experienced professional, EuropeCV helps you build applications that meet European hiring standards and stand out to recruiters — without relying on outdated templates or complicated tools.
              </p>
            </div>
            <div className="bg-slate-900 p-8 sm:p-10 lg:p-12 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#fff_1px,transparent_1px)] bg-[size:16px_16px]"></div>
              </div>
              <div className="relative z-10 grid grid-cols-2 gap-6 bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
                {stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-2xl sm:text-3xl font-black text-blue-400 mb-1">{stat.value}</div>
                    <div className="text-slate-300 font-bold text-xs sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* What We Do */}
        <div className="mb-24 md:mb-32">
          <div className="text-center mb-12 px-4 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-5">
              A smarter way to land{" "}
              <span className="relative inline-block mt-2 sm:mt-0">
                <span className="text-blue-600">
                  European jobs
                </span>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute -bottom-1 left-0 h-1.5 bg-blue-500/30 rounded-full"
                />
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-medium">
              As a modern Europass alternative, EuropeCV combines AI resume translation, SEO-friendly CV optimization, and smart application tools into one complete job application toolkit — helping students, expats, graduates, and professionals apply with confidence across the EU.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-6 sm:p-8 rounded-[1.5rem] border ${feature.color} bg-opacity-50 hover:bg-opacity-80 transition-colors flex flex-col`}
              >
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm border border-slate-100 shrink-0">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 tracking-tight">{feature.title}</h3>
                <p className="text-slate-700 font-medium leading-relaxed text-sm flex-grow mb-6">{feature.description}</p>
                <div className="mt-auto">
                  {feature.demo}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] border border-slate-200 p-8 sm:p-10 lg:p-12 mb-24 md:mb-32 text-center shadow-sm"
        >
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Award className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-5">
            Designed for{" "}
            <span className="relative inline-block">
              <span className="text-blue-600">Modern Professionals</span>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-1 left-0 h-1 bg-blue-500/30 rounded-full"
              />
            </span>
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed font-medium mb-10">
            Whether you are a software engineer applying across European tech hubs, a marketing professional targeting EU job opportunities, or a graduate entering the European workforce, EuropeCV is an AI-powered Europass CV alternative, ATS-friendly CV builder, and European resume optimizer for multilingual job applications and cross-border hiring.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {sectors.map((sector, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-slate-100 transition-colors flex flex-col items-center justify-center text-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  {sector.icon}
                </div>
                <span className="text-xs font-bold text-slate-700">{sector.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[3rem] p-8 sm:p-12 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-slate-900/40"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -ml-32 -mb-32" />
          <div className="absolute top-0 right-0 p-12 opacity-10 transform translate-x-1/4 -translate-y-1/4 rotate-12">
            <Zap className="w-64 h-64" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
              Get Started Today
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 tracking-tight leading-tight">
              Ready to elevate your <span className="text-blue-500">career?</span>
            </h2>
            <p className="text-slate-400 text-lg font-medium mb-10 leading-relaxed">
              Join the future of applying for jobs in Europe. Stand out with an ATS-friendly CV and a tailored cover letter today.
            </p>
            <Link 
              to="/login" 
              className="inline-flex items-center justify-center px-10 py-4 text-base font-black bg-white text-slate-900 rounded-2xl hover:bg-slate-50 transition-all shadow-xl active:scale-95"
            >
              Start Building Your CV For Free
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

