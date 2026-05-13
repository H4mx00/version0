import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Building, User, Mail, MapPin, Search, 
  Wallet, FileText, Minimize2, Maximize2, Info, Copyright, Globe, Scale
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../../components/common/SEO';

export function ImpressumPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  const sections = [
    {
      id: 'angaben',
      title: 'Angaben gemäß § 5 DDG',
      icon: <Building className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p className="font-bold text-slate-900">EuropeCV</p>
          <p>[Legal form: e.g. GmbH / sole proprietorship]</p>
          <p>[Street and house number]</p>
          <p>[Postal code, City]</p>
          <p>Germany</p>
        </div>
      )
    },
    {
      id: 'vertreten',
      title: 'Vertreten durch',
      icon: <User className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>[Full name of legal representative / founder]</p>
        </div>
      )
    },
    {
      id: 'kontakt',
      title: 'Kontakt',
      icon: <Mail className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>E-Mail: <a href="mailto:support@europecv.io" className="text-blue-600 hover:underline">support@europecv.io</a></p>
          <p>Telefon: [optional]</p>
        </div>
      )
    },
    {
      id: 'registereintrag',
      title: 'Registereintrag',
      icon: <Search className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>Registergericht: [e.g. Amtsgericht München]</p>
          <p>Registernummer: [if applicable]</p>
        </div>
      )
    },
    {
      id: 'umsatzsteuer',
      title: 'Umsatzsteuer-ID',
      icon: <Wallet className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>USt-IdNr.: [if applicable]</p>
        </div>
      )
    },
    {
      id: 'verantwortlich',
      title: 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV',
      icon: <FileText className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>[Name]</p>
          <p>[Address same as above]</p>
        </div>
      )
    },
    {
      id: 'haftung-inhalte',
      title: 'Haftung für Inhalte',
      icon: <Info className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>As service providers, we are responsible for our own content on these pages in accordance with general laws. However, we are not obligated to monitor transmitted or stored third-party information.</p>
          <p>Obligations to remove or block the use of information under general laws remain unaffected.</p>
        </div>
      )
    },
    {
      id: 'haftung-links',
      title: 'Haftung für Links',
      icon: <Globe className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>Our website contains links to external third-party websites. We have no influence over their content and therefore cannot accept liability for such external content.</p>
          <p>The respective provider or operator of the linked pages is always responsible for their content.</p>
        </div>
      )
    },
    {
      id: 'urheberrecht',
      title: 'Urheberrecht',
      icon: <Copyright className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>The content and works created by the operator on these pages are subject to German copyright law.</p>
          <p>Duplication, processing, distribution, or any form of commercialization beyond the scope of copyright law requires prior written consent.</p>
        </div>
      )
    },
    {
      id: 'streitschlichtung',
      title: 'EU-Streitschlichtung',
      icon: <Scale className="w-5 h-5 text-blue-600" />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>The European Commission provides a platform for online dispute resolution (ODR):<br/>
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://ec.europa.eu/consumers/odr/</a></p>
          <p>We are not obligated and not willing to participate in dispute resolution proceedings before a consumer arbitration board.</p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col pt-24 pb-12">
      <SEO 
        title="Impressum | Legal Notice | EuropeCV"
        description="Legal information and company details for EuropeCV. Transparency and compliance with European digital regulations."
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
                 <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">Impressum</h1>
                 <p className="text-slate-500 font-medium">Legal Notice</p>
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

      </div>
    </div>
  );
}
