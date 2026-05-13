import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Mail, Shield, Eye, BookOpen, Database, Lock, Scale, 
  Cpu, Archive, Share2, Globe, Cookie, UserCheck, ShieldCheck, 
  Layers, Settings, Users, History, Maximize2, Minimize2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../../components/common/SEO';

export function PrivacyPolicyPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  const sections = [
    {
      id: 'controller',
      title: '1. Controller',
      icon: <Shield className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4">
          <p>The controller responsible for data processing within the meaning of the General Data Protection Regulation (GDPR / DSGVO) is:</p>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <p className="font-bold text-slate-900">EuropeCV</p>
            <p className="text-blue-600">Email: <a href="mailto:support@europecv.io" className="hover:underline">support@europecv.io</a></p>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: '2. Overview of Data Protection',
      icon: <Eye className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4">
          <p>EuropeCV processes personal data in accordance with:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>EU General Data Protection Regulation (GDPR / DSGVO)</li>
            <li>German Federal Data Protection Act (BDSG)</li>
            <li>Applicable EU and German digital privacy laws</li>
          </ul>
          <p>We take the protection of your personal data seriously and process it only where legally permitted.</p>
        </div>
      )
    },
    {
      id: 'definitions',
      title: '3. Definitions',
      icon: <BookOpen className="w-5 h-5 text-blue-600" />,
      content: (
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li><strong>Personal data:</strong> Any information relating to an identified or identifiable natural person</li>
          <li><strong>Processing:</strong> Any operation performed on personal data (collection, storage, use, transfer, deletion)</li>
          <li><strong>User:</strong> Any individual using EuropeCV services</li>
        </ul>
      )
    },
    {
      id: 'data-we-collect',
      title: '4. Data We Collect',
      icon: <Database className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-6">
          <div>
             <h3 className="font-bold text-slate-800 mb-2">4.1 User-Provided Data</h3>
             <ul className="list-disc pl-5 space-y-1 text-slate-600">
               <li>CV / resume content</li>
               <li>Cover letters</li>
               <li>Job descriptions</li>
               <li>User prompts and inputs</li>
               <li>AI-generated outputs based on user input</li>
             </ul>
          </div>
          <div>
             <h3 className="font-bold text-slate-800 mb-2">4.2 Account Data</h3>
             <ul className="list-disc pl-5 space-y-1 text-slate-600">
               <li>Email address</li>
               <li>Authentication credentials</li>
               <li>Subscription and billing data (if applicable)</li>
             </ul>
          </div>
          <div>
             <h3 className="font-bold text-slate-800 mb-2">4.3 Technical Data</h3>
             <ul className="list-disc pl-5 space-y-1 text-slate-600">
               <li>IP address</li>
               <li>Device and browser information</li>
               <li>Operating system</li>
               <li>Access timestamps</li>
               <li>Usage logs and interactions</li>
               <li>Error and security logs</li>
             </ul>
          </div>
          <div>
             <h3 className="font-bold text-slate-800 mb-2">4.4 Cookies</h3>
             <p className="text-slate-600">We use cookies and similar technologies for functionality, analytics (with consent where required), and security.</p>
          </div>
        </div>
      )
    },
    {
      id: 'purposes',
      title: '5. Purposes of Processing',
      icon: <Lock className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>We process personal data for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Providing AI-based CV and job application services</li>
            <li>Generating resumes, cover letters, and translations</li>
            <li>Operating and maintaining the platform</li>
            <li>Ensuring security and preventing abuse</li>
            <li>Improving services and performance</li>
            <li>Complying with legal obligations</li>
            <li>Managing user accounts and authentication</li>
          </ul>
        </div>
      )
    },
    {
      id: 'legal-basis',
      title: '6. Legal Basis (Art. 6 GDPR)',
      icon: <Scale className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>We process data based on:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Art. 6(1)(a)</strong> – Consent</li>
            <li><strong>Art. 6(1)(b)</strong> – Contract performance</li>
            <li><strong>Art. 6(1)(c)</strong> – Legal obligations</li>
            <li><strong>Art. 6(1)(f)</strong> – Legitimate interests (security, fraud prevention, service improvement)</li>
          </ul>
          <p className="font-medium text-slate-800">Consent may be withdrawn at any time.</p>
        </div>
      )
    },
    {
      id: 'ai-processing',
      title: '7. AI Processing',
      icon: <Cpu className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>EuropeCV uses AI systems to process user-provided data.</p>
          <p>This includes:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>CV analysis and optimization</li>
            <li>Cover letter generation</li>
            <li>Job description matching</li>
            <li>Translation and rewriting</li>
          </ul>
          <div className="bg-amber-50 p-4 border border-amber-200 rounded-xl my-4 text-amber-900">
             <h3 className="font-bold flex items-center gap-2 mb-2"><Shield className="w-4 h-4" /> Important Notes:</h3>
             <ul className="list-disc pl-5 space-y-1">
               <li>AI output may contain inaccuracies</li>
               <li>Users must review all generated content before use</li>
               <li>EuropeCV does not guarantee employment outcomes</li>
               <li>No intentional fabrication of employment history or credentials</li>
             </ul>
          </div>
          <p>No automated decision-making with legal or similarly significant effects under Art. 22 GDPR is performed.</p>
        </div>
      )
    },
    {
      id: 'data-storage',
      title: '8. Data Storage & Retention',
      icon: <Archive className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>We store personal data only as long as necessary:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>User content: until deleted by user</li>
            <li>Generated documents: until user removal</li>
            <li>Logs: limited retention for security and debugging</li>
            <li>Billing data: according to statutory requirements</li>
          </ul>
          <p className="font-medium text-slate-800">Users may request deletion at any time.</p>
        </div>
      )
    },
    {
      id: 'data-sharing',
      title: '9. Data Sharing',
      icon: <Share2 className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p className="font-medium text-slate-800">We do not sell personal data.</p>
          <p>We may share data with:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Cloud hosting providers</li>
            <li>AI service providers</li>
            <li>Analytics providers (only with consent where required)</li>
            <li>Security and infrastructure providers</li>
            <li>Payment processors (if applicable)</li>
          </ul>
          <p>All processors are bound by GDPR-compliant agreements (Art. 28 GDPR).</p>
          <p>We may also disclose data if required by law, court order, or official governmental request.</p>
        </div>
      )
    },
    {
      id: 'international-transfers',
      title: '10. International Data Transfers',
      icon: <Globe className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>If data is transferred outside the EEA, we ensure appropriate safeguards:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>EU Standard Contractual Clauses (SCCs)</li>
            <li>Adequacy decisions by the European Commission</li>
            <li>Additional technical and organizational measures</li>
          </ul>
        </div>
      )
    },
    {
      id: 'cookies',
      title: '11. Cookies & Consent',
      icon: <Cookie className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>We use:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Essential cookies (required for functionality)</li>
            <li>Functional cookies (preferences)</li>
            <li>Analytics cookies (only with consent where required)</li>
          </ul>
          <p>Users can manage cookie preferences via browser or consent banner.</p>
          <p>Non-essential cookies are not activated without consent where legally required.</p>
        </div>
      )
    },
    {
      id: 'user-rights',
      title: '12. User Rights (GDPR)',
      icon: <UserCheck className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access your data (Art. 15)</li>
            <li>Rectify data (Art. 16)</li>
            <li>Erase data (Art. 17)</li>
            <li>Restrict processing (Art. 18)</li>
            <li>Data portability (Art. 20)</li>
            <li>Object to processing (Art. 21)</li>
            <li>Withdraw consent</li>
            <li>Lodge a complaint with a supervisory authority</li>
          </ul>
          <p>Contact: <a href="mailto:support@europecv.io" className="text-blue-600 hover:underline">support@europecv.io</a></p>
        </div>
      )
    },
    {
      id: 'data-security',
      title: '13. Data Security',
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>We implement appropriate technical and organizational measures under Art. 32 GDPR, including:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Encryption in transit (HTTPS/TLS)</li>
            <li>Access control systems</li>
            <li>Secure authentication</li>
            <li>Logging and monitoring</li>
            <li>Data minimization principles</li>
          </ul>
        </div>
      )
    },
    {
      id: 'third-party',
      title: '14. Third-Party Services',
      icon: <Layers className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>We use third-party services for infrastructure, AI processing, analytics, authentication, and payments.</p>
          <p>All providers are required to comply with GDPR obligations through contractual agreements.</p>
        </div>
      )
    },
    {
      id: 'automated-processing',
      title: '15. Automated Processing',
      icon: <Settings className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>We do not perform automated decision-making producing legal effects under Art. 22 GDPR.</p>
          <p>AI systems are used only to assist users in generating content.</p>
        </div>
      )
    },
    {
      id: 'children',
      title: '16. Children’s Data',
      icon: <Users className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>Our services are not intended for individuals under 16 years of age.</p>
          <p>We do not knowingly collect data from children without appropriate legal basis.</p>
        </div>
      )
    },
    {
      id: 'changes',
      title: '17. Changes to This Policy',
      icon: <History className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>We may update this Privacy Policy from time to time. Updates will be published on this page with a revised date.</p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col pt-24 pb-12">
      <SEO 
        title="Privacy Policy | Data Protection | EuropeCV"
        description="Review how EuropeCV handles your personal data. Transparent, secure, and GDPR-compliant processing for your peace of mind."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full mt-8">
        
        <Link 
          to="/" 
          className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-slate-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden flex flex-col mb-12 transition-all duration-500 ease-in-out ${isExpanded ? '' : 'max-h-[75vh]'}`}
        >
          {/* Header */}
          <div className="pt-10 px-8 lg:px-12 pb-6 border-b border-slate-100 bg-slate-50/50 shrink-0">
             <div className="flex items-start justify-between gap-4 mb-3">
               <div>
                 <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">Privacy Policy</h1>
                 <p className="text-slate-500 font-medium">Last updated: May 12, 2026</p>
               </div>
               <button
                 onClick={() => setIsExpanded(!isExpanded)}
                 className="p-2 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors hidden sm:flex items-center gap-2"
                 title={isExpanded ? "Collapse view" : "Expand view"}
               >
                 {isExpanded ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                 <span className="text-sm font-bold">{isExpanded ? "Collapse" : "Expand"}</span>
               </button>
             </div>
          </div>
          
          {/* Scrollable Content */}
          <div className="p-8 lg:p-12 overflow-y-auto flex-1 space-y-12">
            {sections.map((section) => (
              <section key={section.id} className="scroll-mt-8" id={section.id}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2.5 bg-blue-50/50 rounded-xl border border-blue-100/50">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">{section.title}</h2>
                </div>
                <div className="text-base leading-relaxed pl-[3.25rem]">
                  {section.content}
                </div>
              </section>
            ))}
          </div>
        </motion.div>

        {/* Support Block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[3rem] p-8 sm:p-12 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-slate-900/40"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -ml-32 -mb-32" />
          <div className="absolute top-0 right-0 p-12 opacity-10 transform translate-x-1/4 -translate-y-1/4 rotate-12">
            <Shield className="w-64 h-64" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
              Privacy Support
            </div>
            <h2 className="text-2xl sm:text-3xl font-black mb-4 tracking-tight">Need further clarification?</h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto font-medium leading-relaxed">
              If you have any questions about how we handle your data, please don't hesitate to reach out to our privacy team.
            </p>
            <a 
              href="mailto:support@europecv.io" 
              className="inline-flex items-center justify-center bg-white text-slate-900 px-10 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-xl active:scale-95"
            >
              Contact Privacy Team
            </a>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}

