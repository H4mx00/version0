import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText,
  Mail, 
  Lock, 
  ArrowRight, 
  Eye, 
  EyeOff,
  User,
  UserPlus,
  Zap,
  CheckCircle2,
  XCircle,
  Gift,
  ShieldCheck,
  Layout,
  Globe2,
  Clock,
  HeadphonesIcon,
  Sparkles,
  Facebook,
  Linkedin
} from 'lucide-react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { PublicConfig } from '../../config/PublicConfig';
import { TemplateVisual } from '../../components/homepage/TemplateVisual';
import { SEO } from '../../components/common/SEO';

type AuthMode = 'signin' | 'signup';

const FEATURES = [
  { text: 'ATS & Europass', icon: ShieldCheck },
  { text: 'AI-Powered', icon: Sparkles },
  { text: 'Ready in 5 Minutes', icon: Clock },
  { text: '24/7 Support', icon: HeadphonesIcon }
];

const MOCK_PROFILES = [
  {
    name: 'Sarah Chen',
    role: 'Senior Software Engineer',
    email: 'sarah.chen@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    summary: 'A results-driven Senior Software Engineer with over 8 years of experience in designing, developing, and deploying scalable web applications. Proficient in modern JavaScript frameworks (React, Node.js) and cloud infrastructure (AWS). Demonstrated ability to lead technical teams, driving efficiency and delivering high-quality products within tight deadlines.',
    experience: [
      {
        title: 'Lead Full Stack Engineer | Innovatech',
        date: '2020 - Present',
        desc: 'Spearheaded the migration of a legacy monolithic architecture to a microservices-based system, resulting in a 40% reduction in server response time. Mentored a team of 6 engineers.'
      },
      {
        title: 'Software Engineer | TechFlow Solutions',
        date: '2016 - 2020',
        desc: 'Developed and maintained key features for a high-traffic SaaS platform. Implemented robust RESTful APIs and integrated third-party payment gateways, increasing revenue by 15%.'
      },
      {
        title: 'Frontend Developer | WebWorks Studio',
        date: '2014 - 2016',
        desc: 'Built responsive and interactive user interfaces using React and Redux, improving user retention by 20% and reducing load times significantly across the platform.'
      },
      {
        title: 'Junior Web Developer | StartUp Inc',
        date: '2012 - 2014',
        desc: 'Collaborated with designers to create intuitive UI/UX for the company homepage and primary product dashboard. Wrote unit tests boosting test coverage by 30%.'
      }
    ],
    education: [
      {
        degree: 'M.S. in Computer Science',
        school: 'Stanford University',
        date: '2016 - 2018'
      },
      {
        degree: 'B.S. in Computer Science',
        school: 'University of California, Berkeley',
        date: '2012 - 2016'
      }
    ],
    skills: ['JavaScript/TypeScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'GraphQL', 'Kubernetes'],
    languages: ['English', 'Mandarin'],
    image: 'https://i.pravatar.cc/150?img=1',
    templateId: 'centered-classic'
  },
  {
    name: 'Marcus Johnson',
    role: 'Product Marketing Manager',
    email: 'marcus.j@email.com',
    phone: '+1 (555) 987-6543',
    location: 'New York, NY',
    summary: 'Strategic Product Marketing Manager with 6+ years of experience launching and scaling enterprise B2B SaaS products. Adept at conducting market research, developing compelling positioning and messaging, and executing multi-channel go-to-market strategies.',
    experience: [
      {
        title: 'Product Marketing Lead | CloudScale',
        date: '2021 - Present',
        desc: 'Managed the successful launch of 3 core product modules, generating $2M in pipeline within the first quarter. Developed comprehensive sales enablement materials.'
      },
      {
        title: 'Marketing Specialist | DataDrive',
        date: '2018 - 2021',
        desc: 'Executed data-driven demand generation campaigns, increasing Marketing Qualified Leads (MQLs) by 35% year-over-year. Collaborated closely with the product team on feature positioning.'
      },
      {
        title: 'Content Creator | MediaBridge',
        date: '2016 - 2018',
        desc: 'Produced high-converting blogs, whitepapers, and social media copy, expanding organic traffic by 50% and building a strong brand presence in the local tech community.'
      },
      {
        title: 'Marketing Intern | TechGrowth',
        date: '2015 - 2016',
        desc: 'Assisted in coordinating regional marketing events and compiled weekly analytics reports on social media engagement.'
      }
    ],
    education: [
      {
        degree: 'M.B.A. in Strategic Marketing',
        school: 'Columbia University',
        date: '2018 - 2020'
      },
      {
        degree: 'B.A. in Marketing',
        school: 'New York University',
        date: '2014 - 2018'
      }
    ],
    skills: ['Go-To-Market Strategy', 'Market Research', 'Copywriting', 'Sales Enablement', 'HubSpot', 'Salesforce', 'SEO'],
    languages: ['English', 'Spanish'],
    image: 'https://i.pravatar.cc/150?img=11',
    templateId: 'sidebar-premium'
  },
  {
    name: 'Emily Davis',
    role: 'Financial Analyst',
    email: 'emily.davis@email.com',
    phone: '+1 (555) 246-8101',
    location: 'Chicago, IL',
    summary: 'Detail-oriented Financial Analyst with a strong background in corporate finance, financial modeling, and data analysis. Proven track record of providing actionable insights that drive cost reduction and optimize revenue growth. Advanced proficiency in Excel, SQL, and Tableau. Experienced in managing budgets exceeding $50M and delivering presentations to executive stakeholders.',
    experience: [
      {
        title: 'Senior Financial Analyst | Global Investments Inc.',
        date: '2019 - Present',
        desc: 'Developed dynamic financial models to forecast quarterly revenues and assess investment opportunities. Presented findings to C-suite executives, influencing a $5M strategic acquisition.'
      },
      {
        title: 'Financial Analyst | Meridian Capital',
        date: '2017 - 2019',
        desc: 'Analyzed historical financial statements and identified inefficiencies that led to a 10% reduction in operational costs. Assisted in the preparation of annual budgets.'
      },
      {
        title: 'Junior Analyst | Apex Ventures',
        date: '2015 - 2017',
        desc: 'Maintained and updated financial spreadsheets, tracked KPIs, and supported senior analysts during the due diligence process for mid-market tech startups.'
      },
      {
        title: 'Accounting Intern | Financial Solutions LLC',
        date: '2014 - 2015',
        desc: 'Supported account reconciliation and monthly ledger entries. Assisted compliance team in ensuring adherence to local financial regulations.'
      }
    ],
    education: [
      {
        degree: 'Master of Finance',
        school: 'University of Chicago',
        date: '2017 - 2019'
      },
      {
        degree: 'B.S. in Finance',
        school: 'University of Illinois',
        date: '2013 - 2017'
      }
    ],
    skills: ['Financial Modeling', 'Data Analysis', 'Forecasting', 'Excel (Advanced)', 'SQL', 'Tableau', 'Corporate Finance', 'Valuation'],
    languages: ['English', 'French'],
    image: 'https://i.pravatar.cc/150?img=5',
    templateId: 'header-bold'
  },
  {
    name: 'David Rodriguez',
    role: 'UX/UI Designer',
    email: 'd.rodriguez@email.com',
    phone: '+1 (555) 369-2580',
    location: 'Austin, TX',
    summary: 'Creative and user-centric UX/UI Designer with 5 years of experience creating intuitive and engaging digital interfaces. Skilled in the full design process, from wireframing and prototyping to final high-fidelity visual design. Passionate about enhancing accessibility and usability.',
    experience: [
      {
        title: 'Lead UI/UX Designer | Creative Studio',
        date: '2020 - Present',
        desc: 'Redesigned the flagship mobile application, resulting in a 25% increase in daily active users and a 4.8-star App Store rating. Established and maintained a cohesive design system.'
      },
      {
        title: 'UX Researcher/Designer | NextGen Web Solutions',
        date: '2018 - 2020',
        desc: 'Conducted comprehensive user research and A/B testing aimed at optimizing e-commerce checkout flows, reducing cart abandonment by 15%.'
      },
      {
        title: 'Junior Designer | Appify Inc.',
        date: '2016 - 2018',
        desc: 'Assisted in creating high-fidelity mockups for varied clients. Developed interactive prototypes using InVision and Figma, helping stakeholders visualize product flows.'
      },
      {
        title: 'Graphic Design Intern | Media House',
        date: '2015 - 2016',
        desc: 'Created social media assets, marketing collateral, and internal newsletters. Maintained brand consistency across all visual materials.'
      }
    ],
    education: [
      {
        degree: 'M.A. in Human-Computer Interaction',
        school: 'University of Texas at Austin',
        date: '2018 - 2020'
      },
      {
        degree: 'B.F.A. in Graphic Design',
        school: 'Rhode Island School of Design',
        date: '2014 - 2018'
      }
    ],
    skills: ['Figma', 'Adobe Creative Suite', 'Wireframing', 'Prototyping', 'User Research', 'HTML/CSS', 'Design Systems', 'Usability Testing'],
    languages: ['English', 'Spanish'],
    image: 'https://i.pravatar.cc/150?img=12',
    templateId: 'ats-pure'
  },
  {
    name: 'Aisha Patel',
    role: 'Operations Manager',
    email: 'aisha.patel@email.com',
    phone: '+1 (555) 741-8529',
    location: 'Atlanta, GA',
    summary: 'Highly organized Operations Manager with a demonstrated ability to streamline processes and optimize supply chain logistics. Adept at managing cross-functional teams, reducing operational bottlenecks, and ensuring compliance with industry regulations.',
    experience: [
      {
        title: 'Director of Operations | Summit Logistics',
        date: '2021 - Present',
        desc: 'Implemented lean management principles that increased warehouse efficiency by 20% and reduced inventory overhead by $500,000 annually. Managed a continuous improvement team of 15 staff.'
      },
      {
        title: 'Operations Analyst | Nexus Retail',
        date: '2017 - 2021',
        desc: 'Monitored daily operations metrics and created automated dashboards for regional managers. Coordinated vendor relationships to negotiate improved fulfillment SLAs.'
      },
      {
        title: 'Logistics Coordinator | Global Freight',
        date: '2015 - 2017',
        desc: 'Overseen daily shipment routing and maintained detailed records of container transit. Effectively negotiated with shipping lines to drive down transit costs by 12%.'
      },
      {
        title: 'Inventory Associate | MegaMart',
        date: '2014 - 2015',
        desc: 'Performed regular inventory audits and reconciled discrepancies. Collaborated with floor managers to ensure stock availability and optimal product placement.'
      }
    ],
    education: [
      {
        degree: 'MBA in Operations Management',
        school: 'Emory University',
        date: '2015 - 2017'
      },
      {
        degree: 'B.S. in Business Administration',
        school: 'University of Georgia',
        date: '2011 - 2015'
      }
    ],
    skills: ['Process Optimization', 'Supply Chain Management', 'Lean/Six Sigma', 'Team Leadership', 'Vendor Management', 'Data Analysis', 'Project Management'],
    languages: ['English', 'Hindi', 'Gujarati'],
    image: 'https://i.pravatar.cc/150?img=20',
    templateId: 'centered-classic'
  }
];

export function LoginPage() {
  const [mode, setMode] = useState<AuthMode>('signin');
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');

  const passwordStrength = useMemo(() => {
    let score = 0;
    if (password.length >= 8) score += 25;
    if (/[A-Z]/.test(password)) score += 25;
    if (/[0-9]/.test(password)) score += 25;
    if (/[^A-Za-z0-9]/.test(password)) score += 25;
    return score;
  }, [password]);

  const handleOAuth = async (provider: 'google' | 'github' | 'facebook' | 'linkedin_oidc') => {
    try {
      setLoading(true);
      setError(null);
      const isSafeRedirect = redirectTo && redirectTo.startsWith('/') && !redirectTo.startsWith('//');
      const finalRedirect = isSafeRedirect ? redirectTo : '/dashboard';
      const redirectUrl = `${window.location.origin}${finalRedirect}`;
      
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: redirectUrl,
        },
      });

      if (error) throw error;
    } catch (err: any) {
      setError(err.message || 'An error occurred during authentication');
      setLoading(false);
    }
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'signup' && passwordStrength < 100) {
      setError('Please use a stronger password meeting all requirements.');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      if (mode === 'signup') {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        alert('Check your email for the login link or verify your account!');
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        
        const isSafeRedirect = redirectTo && redirectTo.startsWith('/') && !redirectTo.startsWith('//');
        const finalRedirect = isSafeRedirect ? redirectTo : '/dashboard';
        navigate(finalRedirect);
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during authentication');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="selection:bg-blue-100 selection:text-blue-900 bg-[#F8FAFC]">
      <SEO 
        title="Login | Access Your Dashboard | EuropeCV"
        description="Login to your EuropeCV account to manage your resumes, cover letters, and career tools."
        noindex
      />
      <main className="min-h-[calc(100vh-80px)] flex flex-col lg:flex-row max-w-6xl mx-auto w-full px-4 sm:px-8 lg:px-10 pt-40 lg:pt-52 pb-40 lg:pb-52 gap-10 md:gap-16 lg:gap-24 items-start justify-center">
        {/* Left Column: Marketing Content */}
        <div className="flex-1 space-y-8 lg:max-w-[480px]">
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-black text-slate-900 tracking-tight leading-[1.2]">
                Your <span className="text-blue-600 relative inline-block">
                  3 free credits
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute -bottom-1.5 left-0 h-1 bg-blue-600/30 rounded-full"
                  />
                </span>
                <br />
                are waiting inside.
              </h1>
              <p className="text-slate-500 text-sm lg:text-base font-medium max-w-sm leading-relaxed">
                Sign in or sign up to access your professional dashboard. Instant setup, no credit card required.
              </p>
            </div>

            {/* Credits Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-white border border-slate-200/60 rounded-xl p-3.5 flex items-center gap-4 shadow-sm max-w-[320px] relative group overflow-hidden"
            >
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 shrink-0 relative z-10">
                <Gift className="w-5 h-5" />
              </div>
              <div className="relative z-10">
                <div className="font-bold text-slate-900 text-sm">3 credits on signup</div>
                <div className="text-slate-500 text-[11px] font-medium leading-none mt-1">Free for limited time</div>
              </div>
            </motion.div>

            {/* Features List - 2x2 Grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 pt-2">
              {FEATURES.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3 text-slate-600"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                  <span className="text-[13px] font-bold whitespace-nowrap">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Templates Preview - Scrolling */}
            <div className="pt-4 relative w-full lg:max-w-[360px]">
              <div className="h-[320px] lg:h-[400px] relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-inner flex flex-col items-center w-full">
                <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
                
                {/* Vertical Marquee */}
                <div className="relative w-full h-full p-4 overflow-hidden">
                  <motion.div
                    animate={{ y: ["0%", "-50%"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="flex flex-col gap-6 w-[256px] mx-auto"
                  >
                    {[...MOCK_PROFILES.slice(0, 3), ...MOCK_PROFILES.slice(0, 3)].map((profile, i) => (
                      <div key={i} className="w-[256px] h-[361px] shrink-0 hover:scale-[1.02] transition-transform duration-300 shadow-xl rounded overflow-hidden relative bg-white">
                         <div className="absolute top-0 left-0 w-[640px] h-[904px] origin-top-left scale-[0.4]">
                           <TemplateVisual templateId={profile.templateId || 'ats-pure'} mockOverride={profile} />
                         </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Auth Form */}
        <div className="w-full max-w-[440px]">
          {/* Card Wrapper */}
          <div className="bg-white rounded-[24px] py-8 px-6 lg:py-10 lg:px-8 shadow-2xl shadow-slate-200/50 border border-slate-100 relative min-h-[440px] flex flex-col justify-center">
            {/* Logo in Card */}
            <div className="flex justify-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center text-blue-600">
                <User className="w-6 h-6" />
              </div>
            </div>

            <div className="text-center mb-6">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-2">Sign in or sign up</h2>
              <p className="text-slate-500 text-xs font-medium">Get started with one click</p>
            </div>

            {/* Switcher */}
            <div className="bg-slate-100 p-1 rounded-xl mb-6 flex">
              <button
                onClick={() => setMode('signin')}
                className={`
                  flex-1 py-3 rounded-lg text-xs font-black uppercase tracking-widest transition-all
                  ${mode === 'signin' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'}
                `}
              >
                Sign In
              </button>
              <button
                onClick={() => setMode('signup')}
                className={`
                  flex-1 py-3 rounded-lg text-xs font-black uppercase tracking-widest transition-all
                  ${mode === 'signup' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'}
                `}
              >
                Sign Up
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* Social Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    type="button"
                    onClick={() => handleOAuth('google')}
                    disabled={loading}
                    className="flex items-center justify-center gap-2 py-2.5 px-2 bg-[#DB4437] text-white rounded-xl hover:brightness-110 transition-all active:scale-95 font-bold text-[11px] shadow-sm disabled:opacity-50"
                  >
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-4 h-4 brightness-0 invert" referrerPolicy="no-referrer" />
                    Google
                  </button>
                  <button 
                    type="button"
                    onClick={() => handleOAuth('github')}
                    disabled={loading}
                    className="flex items-center justify-center gap-2 py-2.5 px-2 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all active:scale-95 font-bold text-[11px] shadow-sm disabled:opacity-50"
                  >
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-4 h-4 brightness-0 invert" referrerPolicy="no-referrer" />
                    GitHub
                  </button>
                  <button 
                    type="button"
                    onClick={() => handleOAuth('facebook')}
                    disabled={loading}
                    className="flex items-center justify-center gap-2 py-2.5 px-2 bg-[#1877F2] text-white rounded-xl hover:brightness-110 transition-all active:scale-95 font-bold text-[11px] shadow-sm disabled:opacity-50"
                  >
                    <Facebook className="w-4 h-4 fill-white" />
                    Facebook
                  </button>
                  <button 
                    type="button"
                    onClick={() => handleOAuth('linkedin_oidc')}
                    disabled={loading}
                    className="flex items-center justify-center gap-2 py-2.5 px-2 bg-[#0A66C2] text-white rounded-xl hover:brightness-110 transition-all active:scale-95 font-bold text-[11px] shadow-sm disabled:opacity-50"
                  >
                    <Linkedin className="w-4 h-4 fill-white" />
                    LinkedIn
                  </button>
                </div>

                {error && (
                  <div className="bg-red-50 text-red-600 p-3 rounded-lg text-xs font-medium border border-red-100 flex items-start gap-2">
                    <XCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <p>{error}</p>
                  </div>
                )}

                <div className="relative py-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-100"></div>
                  </div>
                  <div className="relative flex justify-center text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                    <span className="bg-white px-3">Or use email</span>
                  </div>
                </div>

                {/* Form */}
                <form className="space-y-4" onSubmit={handleAuth}>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-11 pr-4 text-sm font-medium focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500/50 focus:bg-white outline-none transition-all placeholder:text-slate-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between ml-1">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Password</label>
                      {mode === 'signin' && (
                        <button type="button" className="text-[10px] font-bold text-blue-600 hover:text-blue-700 uppercase tracking-widest">
                          Forgot?
                        </button>
                      )}
                    </div>
                    <div className="relative group">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                      <input 
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-11 pr-11 text-sm font-medium focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500/50 focus:bg-white outline-none transition-all placeholder:text-slate-300"
                      />
                      <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>

                    {mode === 'signup' && password.length > 0 && (
                      <div className="space-y-2 pt-2 px-1">
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${passwordStrength}%` }}
                            className={`h-full transition-all duration-500 ${
                              passwordStrength <= 25 ? 'bg-red-500' :
                              passwordStrength <= 50 ? 'bg-amber-500' :
                              passwordStrength <= 75 ? 'bg-blue-500' : 'bg-emerald-500'
                            }`}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { label: '8+ Chars', check: password.length >= 8 },
                            { label: 'Upper', check: /[A-Z]/.test(password) },
                            { label: 'Num', check: /[0-9]/.test(password) },
                            { label: 'Special', check: /[^A-Za-z0-9]/.test(password) }
                          ].map((req, i) => (
                            <div key={i} className={`flex items-center gap-1.5 text-[8px] font-black uppercase tracking-wider transition-colors ${req.check ? 'text-emerald-600' : 'text-slate-400'}`}>
                              {req.check ? <CheckCircle2 className="w-3 h-3" /> : <XCircle className="w-3 h-3 opacity-20" />}
                              {req.label}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4 pt-4">
                    <button 
                      type="submit"
                      disabled={loading}
                      className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black uppercase tracking-widest text-[11px] shadow border border-transparent active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:active:scale-100"
                    >
                      {loading ? (
                        <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"></div>
                      ) : (
                        <>
                          {mode === 'signin' ? 'Sign In' : 'Create Account'}
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <div className="text-center">
                      <p className="text-[10px] text-slate-400 font-medium leading-relaxed max-w-[280px] mx-auto">
                        By continuing, you agree to our{' '}
                        <Link to="/terms" className="text-slate-600 font-bold hover:underline">Terms</Link>
                        {' '}and{' '}
                        <Link to="/privacy-policy" className="text-slate-600 font-bold hover:underline">Privacy Policy</Link>.
                      </p>
                    </div>

                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mt-4 pt-6 border-t border-slate-50 flex items-center justify-center gap-3"
                    >
                      <div className="w-8 h-8 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 shrink-0 border border-orange-100/50 shadow-sm shadow-orange-100/50">
                        <Gift className="w-4 h-4" />
                      </div>
                      <p className="text-[11px] font-black text-slate-600 leading-tight uppercase tracking-wide">
                        Claim free 3 credits to build your resume
                      </p>
                    </motion.div>
                  </div>
                </form>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}
