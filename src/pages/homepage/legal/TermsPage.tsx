import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Mail, Shield, Eye, BookOpen, Database, Lock, Scale, 
  Cpu, Archive, Share2, Globe, Cookie, UserCheck, ShieldCheck, 
  Layers, Settings, Users, History, Maximize2, Minimize2,
  FileText, Briefcase, UserPlus, CheckCircle, AlertOctagon, 
  Copyright, Activity, CreditCard, Power
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../../components/common/SEO';

export function TermsPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  const sections = [
    {
      id: 'scope',
      title: '1. Scope',
      icon: <FileText className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>These Terms of Service govern the use of the EuropeCV platform and services provided by EuropeCV.</p>
          <p>By accessing or using EuropeCV, you agree to these Terms.</p>
        </div>
      )
    },
    {
      id: 'services',
      title: '2. Services',
      icon: <Briefcase className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>EuropeCV provides AI-assisted tools for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Resume and CV optimization</li>
            <li>Cover letter generation</li>
            <li>Job application assistance</li>
            <li>Translation and rewriting of professional documents</li>
            <li>AI-based content suggestions</li>
          </ul>
          <p>Services are provided on an "as available" basis.</p>
        </div>
      )
    },
    {
      id: 'eligibility',
      title: '3. Eligibility',
      icon: <UserCheck className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>To use EuropeCV, you must:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Be at least 16 years old</li>
            <li>Have legal capacity to enter into agreements</li>
            <li>Use the service in compliance with applicable laws</li>
          </ul>
        </div>
      )
    },
    {
      id: 'user-accounts',
      title: '4. User Accounts',
      icon: <UserPlus className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>Users are responsible for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Maintaining confidentiality of login credentials</li>
            <li>All activities under their account</li>
            <li>Providing accurate registration information</li>
          </ul>
          <p className="font-medium text-slate-800">EuropeCV is not liable for unauthorized account use caused by user negligence.</p>
        </div>
      )
    },
    {
      id: 'acceptable-use',
      title: '5. Acceptable Use',
      icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>Users agree not to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Upload unlawful, harmful, or infringing content</li>
            <li>Attempt unauthorized access to systems</li>
            <li>Reverse engineer or disrupt the platform</li>
            <li>Use the service for fraud or deception</li>
            <li>Abuse AI systems or overload infrastructure</li>
          </ul>
          <p className="font-medium text-slate-800">EuropeCV may suspend accounts violating these rules.</p>
        </div>
      )
    },
    {
      id: 'ai-generated-content',
      title: '6. AI-Generated Content',
      icon: <Cpu className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>EuropeCV uses artificial intelligence to generate and improve user content.</p>
          <div className="bg-amber-50 p-4 border border-amber-200 rounded-xl my-4 text-amber-900">
             <h3 className="font-bold flex items-center gap-2 mb-2"><Shield className="w-4 h-4" /> Important:</h3>
             <ul className="list-disc pl-5 space-y-1">
               <li>AI output may contain inaccuracies</li>
               <li>Users must review all generated content before use</li>
               <li>EuropeCV does not guarantee employment outcomes</li>
               <li>EuropeCV does not create or verify real-world employment history or credentials</li>
             </ul>
          </div>
          <p className="font-medium text-slate-800">Users remain fully responsible for the use of generated content.</p>
        </div>
      )
    },
    {
      id: 'intellectual-property',
      title: '7. Intellectual Property',
      icon: <Copyright className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-slate-800 mb-2">User Content</h3>
            <p className="text-slate-600">Users retain ownership of their uploaded CVs and personal content.</p>
          </div>
          <div>
            <h3 className="font-bold text-slate-800 mb-2">Platform Content</h3>
            <p className="text-slate-600 mb-2">EuropeCV retains all rights to:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Software</li>
              <li>Algorithms</li>
              <li>Interface design</li>
              <li>Branding and trademarks</li>
            </ul>
          </div>
          <p className="text-slate-600">Users receive a limited, non-exclusive license to use generated outputs for personal and professional purposes.</p>
        </div>
      )
    },
    {
      id: 'availability',
      title: '8. Availability',
      icon: <Activity className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>EuropeCV strives to ensure continuous availability but does not guarantee uninterrupted or error-free service.</p>
          <p>Maintenance, updates, or technical issues may temporarily affect access.</p>
        </div>
      )
    },
    {
      id: 'payments',
      title: '9. Payments (if applicable)',
      icon: <CreditCard className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>If paid services are offered:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Fees will be clearly displayed before purchase</li>
            <li>Payments are processed via third-party providers</li>
            <li>Refund policies (if any) will be specified separately</li>
          </ul>
        </div>
      )
    },
    {
      id: 'data-protection',
      title: '10. Data Protection',
      icon: <Database className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>Personal data is processed in accordance with the EuropeCV Privacy Policy and applicable GDPR regulations.</p>
        </div>
      )
    },
    {
      id: 'termination',
      title: '11. Termination',
      icon: <Power className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>EuropeCV may suspend or terminate access if:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>These Terms are violated</li>
            <li>Illegal activity is detected</li>
            <li>Required by law or regulatory authority</li>
          </ul>
          <p>Users may stop using the service at any time.</p>
        </div>
      )
    },
    {
      id: 'disclaimer',
      title: '12. Disclaimer of Warranties',
      icon: <AlertOctagon className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>The service is provided "as is" and "as available" without warranties of any kind, unless required by law.</p>
        </div>
      )
    },
    {
      id: 'limitation-of-liability',
      title: '13. Limitation of Liability',
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>To the maximum extent permitted under German law:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>EuropeCV is not liable for indirect or consequential damages</li>
            <li>EuropeCV is not liable for employment decisions or outcomes</li>
            <li>Mandatory statutory liability (e.g., intent, gross negligence, injury to life or health) remains unaffected</li>
          </ul>
        </div>
      )
    },
    {
      id: 'third-party-services',
      title: '14. Third-Party Services',
      icon: <Layers className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>EuropeCV may rely on third-party providers for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Hosting</li>
            <li>AI processing</li>
            <li>Authentication</li>
            <li>Analytics</li>
            <li>Payments</li>
          </ul>
          <p className="font-medium text-slate-800">EuropeCV is not responsible for third-party service availability or actions.</p>
        </div>
      )
    },
    {
      id: 'changes',
      title: '15. Changes to Terms',
      icon: <History className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>EuropeCV may update these Terms from time to time.</p>
          <p>Updated versions will be published on the platform with a revised date.</p>
          <p className="font-medium text-slate-800">Continued use constitutes acceptance of updated Terms.</p>
        </div>
      )
    },
    {
      id: 'governing-law',
      title: '16. Governing Law',
      icon: <Scale className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>These Terms are governed by the laws of the Federal Republic of Germany.</p>
          <p>Mandatory consumer protection laws of the user's country of residence remain unaffected.</p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col pt-24 pb-12">
      <SEO 
        title="Terms of Service | Legal Framework | EuropeCV"
        description="Understand the legal terms governing your use of the EuropeCV platform and AI services. Built for transparency and fairness."
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
                 <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">Terms of Service</h1>
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
            <Scale className="w-64 h-64" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
              Legal Support
            </div>
            <h2 className="text-2xl sm:text-3xl font-black mb-4 tracking-tight">Need further clarification?</h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto font-medium leading-relaxed">
              If you have any questions about these terms or how they apply to you, please don't hesitate to reach out to our team.
            </p>
            <a 
              href="mailto:support@europecv.io" 
              className="inline-flex items-center justify-center bg-white text-slate-900 px-10 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-xl active:scale-95"
            >
              Contact Support Team
            </a>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
