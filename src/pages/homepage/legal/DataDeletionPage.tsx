import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Mail, Shield, CheckCircle, Clock, Database, 
  Trash2, Files, UserX, Maximize2, Minimize2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../../components/common/SEO';

export function DataDeletionPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  const sections = [
    {
      id: 'how-to-request',
      title: 'How to request deletion',
      icon: <Trash2 className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-8 text-slate-600">
          <div>
            <h3 className="font-bold text-slate-800 mb-2">1. Immediate deletion via dashboard (recommended)</h3>
            <p className="mb-2">If you are logged in (Email, Facebook, GitHub, or LinkedIn):</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Go to <strong>Dashboard</strong></li>
              <li>Open <strong>My Library</strong></li>
              <li>Select your data (CVs, files, or generated content)</li>
              <li>Click <strong>Delete</strong></li>
            </ul>
            <p className="mt-2 font-medium text-slate-800">Deletion from My Library results in <strong>immediate removal from active systems</strong>, and access is revoked instantly.</p>
          </div>

          <div>
            <h3 className="font-bold text-slate-800 mb-2">2. Deletion via email request</h3>
            <p className="mb-2">If you cannot access your account, you may request deletion via:</p>
            <p className="mb-2"><strong><a href="mailto:support@europecv.io" className="text-blue-600 hover:underline">support@europecv.io</a></strong></p>
            <p className="mb-2">Email-based deletion requests are processed within <strong>24–48 hours</strong>, and include removal of:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Account</li>
              <li>Uploaded files</li>
              <li>Generated content</li>
              <li>Profile information</li>
              <li>Associated personal data</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'what-gets-deleted',
      title: 'What gets deleted',
      icon: <Files className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>Upon deletion, EuropeCV removes or anonymizes:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>User accounts and profiles</li>
            <li>Uploaded CVs and documents</li>
            <li>AI-generated outputs and stored results</li>
            <li>Personal identifiers linked to the account</li>
          </ul>
        </div>
      )
    },
    {
      id: 'data-retention',
      title: 'Data retention (if no deletion is requested)',
      icon: <Clock className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>If no deletion request is made:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Data is retained for up to <strong>30 days</strong> in our system after inactivity or account inactivity events</li>
            <li>After this period, data may be deleted or anonymized unless the account remains active</li>
          </ul>
        </div>
      )
    },
    {
      id: 'legal-records',
      title: 'Payment and legal records',
      icon: <Database className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>Certain data must be retained for longer periods for legal and security purposes, including:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Invoices and payment records</li>
            <li>Tax and accounting information</li>
            <li>Fraud prevention and security logs</li>
          </ul>
          <p className="font-medium text-slate-800">These records are stored only as long as legally required and are not used for active product processing.</p>
        </div>
      )
    },
    {
      id: 'processing-time',
      title: 'Processing time summary',
      icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <ul className="list-disc pl-5 space-y-1">
            <li>Dashboard deletion: <strong>immediate</strong></li>
            <li>Email deletion requests: <strong>24–48 hours</strong></li>
            <li>Inactive data retention: <strong>up to 30 days</strong></li>
            <li>Legal/payment records: <strong>longer retention as required by law</strong></li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col pt-24 pb-12">
      <SEO 
        title="Data Deletion | User Rights | EuropeCV"
        description="Learn how to request the deletion of your data from EuropeCV. We respect your right to be forgotten and ensure complete removal of your information."
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
                 <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">Data Deletion Policy</h1>
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
                Users have the right to request deletion of their personal data under Article 17 GDPR (Right to Erasure).
                EuropeCV provides two deletion methods depending on how the request is made.
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
            <Trash2 className="w-64 h-64" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
              Data Deletion
            </div>
            <h2 className="text-2xl sm:text-3xl font-black mb-4 tracking-tight">Need help with deletion?</h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto font-medium leading-relaxed">
              If you need assistance deleting your data or have any questions about the process, our support team is ready to help.
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
