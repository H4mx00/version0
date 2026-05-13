import React from 'react';
import { motion } from 'motion/react';
import { Mail, ChevronDown, ChevronUp, MessageCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/common/SEO';

import { PublicConfig } from '../../config/PublicConfig';

interface FAQItemProps {
  question: string;
  answer: string;
  key?: React.Key;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-slate-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left hover:text-blue-600 transition-colors group"
      >
        <span className="text-lg font-semibold text-slate-900 group-hover:text-blue-600">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-slate-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-500" />
        )}
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="mt-2 text-slate-600 leading-relaxed"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
}

export function FAQPage() {
  const faqSections = PublicConfig.faq.sections;

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <SEO 
        title="Frequently Asked Questions | Help & Support | EuropeCV"
        description="Find answers to common questions about our AI resume builder, Europass standards, and ATS optimization. Get the help you need to succeed."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            {PublicConfig.faq.title}
          </h1>
          <p className="text-lg text-slate-600">
            {PublicConfig.faq.subtitle}
          </p>
        </div>

        <div className="space-y-12">
          {faqSections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-sm">
                  {idx + 1}
                </span>
                {section.title}
              </h2>
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 divide-y divide-slate-100 overflow-hidden">
                <div className="px-6 sm:px-8">
                  {section.items.map((item, itemIdx) => (
                    <FAQItem key={itemIdx} question={item.question} answer={item.answer} />
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Contact Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 bg-slate-900 rounded-[3rem] p-8 sm:p-12 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-slate-900/40"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -ml-32 -mb-32" />
          <div className="absolute top-0 right-0 p-12 opacity-10 transform translate-x-1/4 -translate-y-1/4 rotate-12">
            <MessageCircle className="w-64 h-64" />
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
              Support
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
              {PublicConfig.faq.contact.title}
            </h2>
            <p className="text-slate-400 text-lg mb-10 font-medium leading-relaxed">
              {PublicConfig.faq.contact.subtitle}
            </p>
            
            <a 
              href={`mailto:${PublicConfig.faq.contact.email}`} 
              className="inline-flex items-center justify-center bg-white text-slate-900 px-10 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-xl active:scale-95"
            >
              {PublicConfig.faq.contact.email}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
