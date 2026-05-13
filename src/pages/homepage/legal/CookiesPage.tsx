import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Mail, Shield, ShieldCheck, Database, 
  Settings, Maximize2, Minimize2, Cookie, CheckCircle, 
  Layers, Lock, Share2, Globe, History, Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../../components/common/SEO';

export function CookiesPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  const sections = [
    {
      id: 'controller',
      title: '1. Controller',
      icon: <Shield className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>The controller responsible for cookie usage is:</p>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <p className="font-bold text-slate-900">EuropeCV</p>
            <p className="text-blue-600">Email: <a href="mailto:support@europecv.io" className="hover:underline">support@europecv.io</a></p>
          </div>
        </div>
      )
    },
    {
      id: 'what-are-cookies',
      title: '2. What Are Cookies',
      icon: <Cookie className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>Cookies are small text files stored on your device when you visit a website. They help websites function properly, improve user experience, and provide analytical insights.</p>
        </div>
      )
    },
    {
      id: 'types-of-cookies',
      title: '3. Types of Cookies We Use',
      icon: <Layers className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-8 text-slate-600">
          <p>EuropeCV uses the following categories of cookies:</p>
          
          <div>
            <h3 className="font-bold text-slate-800 mb-2">3.1 Essential Cookies</h3>
            <p className="mb-2">These cookies are necessary for the operation of the platform and cannot be disabled.</p>
            <p className="mb-2">They are used for:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Authentication and login sessions</li>
              <li>Security and fraud prevention</li>
              <li>Basic platform functionality</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-slate-800 mb-2">3.2 Functional Cookies</h3>
            <p className="mb-2">These cookies enhance usability and remember user preferences.</p>
            <p className="mb-2">They are used for:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Language settings</li>
              <li>User preferences</li>
              <li>Interface customization</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-slate-800 mb-2">3.3 Analytics Cookies</h3>
            <p className="mb-2">These cookies help us understand how users interact with EuropeCV.</p>
            <p className="mb-2">They are used for:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Usage statistics</li>
              <li>Feature performance analysis</li>
              <li>Improving user experience</li>
            </ul>
            <p className="mt-2 text-sm text-slate-500 italic">Analytics cookies are only used where legally permitted and may require user consent.</p>
          </div>

          <div>
            <h3 className="font-bold text-slate-800 mb-2">3.4 Performance & Security Cookies</h3>
            <p>These cookies help monitor system performance and detect malicious activity.</p>
          </div>
        </div>
      )
    },
    {
      id: 'legal-basis',
      title: '4. Legal Basis for Cookie Use',
      icon: <Lock className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>Under GDPR and German TTDSG:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Essential cookies are based on legitimate interest (Art. 6(1)(f) GDPR)</li>
            <li>Non-essential cookies (analytics/functional) are based on user consent (Art. 6(1)(a) GDPR + TTDSG requirements)</li>
          </ul>
          <p className="font-medium text-slate-800">Consent can be withdrawn at any time.</p>
        </div>
      )
    },
    {
      id: 'consent-management',
      title: '5. Consent Management',
      icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>Where required by law, EuropeCV will request explicit consent before activating non-essential cookies.</p>
          <p>Users can:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Accept all cookies</li>
            <li>Reject non-essential cookies</li>
            <li>Customize cookie preferences</li>
          </ul>
        </div>
      )
    },
    {
      id: 'how-to-manage',
      title: '6. How to Manage Cookies',
      icon: <Settings className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>Users can manage or disable cookies at any time via:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Cookie consent banner on the website</li>
            <li>Browser settings (delete or block cookies)</li>
          </ul>
          <p className="font-medium text-slate-800">Disabling certain cookies may affect platform functionality.</p>
        </div>
      )
    },
    {
      id: 'third-party-cookies',
      title: '7. Third-Party Cookies',
      icon: <Share2 className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>Some cookies may be set by third-party service providers used by EuropeCV, including:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Analytics providers</li>
            <li>Infrastructure and hosting providers</li>
            <li>Security monitoring tools</li>
          </ul>
          <p>These providers are required to comply with GDPR where applicable.</p>
        </div>
      )
    },
    {
      id: 'data-collected',
      title: '8. Data Collected via Cookies',
      icon: <Database className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>Cookies may collect:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>IP address (anonymized where possible)</li>
            <li>Device and browser information</li>
            <li>Usage behavior on the platform</li>
            <li>Session identifiers</li>
          </ul>
          <p>This data is used only for the purposes described in this policy.</p>
        </div>
      )
    },
    {
      id: 'international-transfers',
      title: '9. International Transfers',
      icon: <Globe className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>If cookie-related data is processed outside the EEA, EuropeCV ensures appropriate safeguards such as:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>EU Standard Contractual Clauses (SCCs)</li>
            <li>Adequacy decisions</li>
            <li>Technical protection measures</li>
          </ul>
        </div>
      )
    },
    {
      id: 'updates',
      title: '10. Updates to This Policy',
      icon: <History className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>EuropeCV may update this Cookie Policy from time to time.</p>
          <p>Updates will be published on this page with a revised date.</p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col pt-24 pb-12">
      <SEO 
        title="Cookie Policy | Transparent Tracking | EuropeCV"
        description="Learn how EuropeCV uses cookies to improve your experience. Clear information on your privacy choices and tracking preferences."
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
                 <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">Cookie Policy</h1>
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
             <div className="mt-6 bg-slate-100/70 p-4 border border-slate-200 rounded-xl text-slate-600 text-sm">
                <strong className="text-slate-800">Important Notice:</strong> This Cookie Policy explains how EuropeCV uses cookies and similar technologies in accordance with GDPR and German TTDSG/ePrivacy requirements.
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
            <Cookie className="w-64 h-64" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
              Cookie Preferences
            </div>
            <h2 className="text-2xl sm:text-3xl font-black mb-4 tracking-tight">Need further clarification?</h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto font-medium leading-relaxed">
              If you have any questions about how we use cookies or your privacy choices, please don't hesitate to reach out.
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
