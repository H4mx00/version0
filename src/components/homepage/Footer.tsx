/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { FileText, Globe2, Linkedin, Facebook, Twitter } from 'lucide-react';

import { PublicConfig } from '../../config/PublicConfig';

export function Footer() {
  return (
    <footer className="bg-[#0B1120] text-slate-400 pt-24 pb-12 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-xl shadow-sm">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tighter">{PublicConfig.name}<span className="text-blue-600">.</span></span>
            </Link>
            <p className="text-[14px] text-slate-400 font-medium leading-relaxed max-w-xs transition-opacity hover:opacity-100">
              {PublicConfig.footer.description}
            </p>
            <div className="flex items-center gap-4 pt-2">
              {[
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'X.com' }
              ].map((social) => (
                <a 
                  key={social.label} 
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-all duration-300 shadow-sm"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-[11px] font-bold text-white uppercase tracking-[0.2em] mb-7">{PublicConfig.footer.sections.aiResume.title}</h3>
            <ul className="space-y-3.5">
              {PublicConfig.footer.sections.aiResume.links.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-[13px] text-slate-400 hover:text-white transition-colors duration-200 block w-fit font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold text-white uppercase tracking-[0.2em] mb-7">{PublicConfig.footer.sections.aiCoverLetter.title}</h3>
            <ul className="space-y-3.5">
              {PublicConfig.footer.sections.aiCoverLetter.links.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-[13px] text-slate-400 hover:text-white transition-colors duration-200 block w-fit font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold text-white uppercase tracking-[0.2em] mb-7">{PublicConfig.footer.sections.europass.title}</h3>
            <ul className="space-y-3.5">
              {PublicConfig.footer.sections.europass.links.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-[13px] text-slate-400 hover:text-white transition-colors duration-200 block w-fit font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold text-white uppercase tracking-[0.2em] mb-7">{PublicConfig.footer.sections.aiTranslation.title}</h3>
            <ul className="space-y-2.5">
              {PublicConfig.footer.sections.aiTranslation.links.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-[11px] text-slate-400 hover:text-white transition-colors duration-200 block leading-tight font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800/50">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mb-10">
            <Link to="/about" className="text-[12px] text-slate-400 hover:text-white transition-colors font-medium tracking-wide">
              About
            </Link>
            <Link to="/faq" className="text-[12px] text-slate-400 hover:text-white transition-colors font-medium tracking-wide">
              {PublicConfig.footer.legal.faq}
            </Link>
            <Link to="/login?redirectTo=/contact" className="text-[12px] text-slate-400 hover:text-white transition-colors font-medium tracking-wide">
              Contact
            </Link>
            <Link to="/blog" className="text-[12px] text-slate-400 hover:text-white transition-colors font-medium tracking-wide">
              {PublicConfig.footer.legal.blog}
            </Link>
            <Link to="/privacy-policy" className="text-[12px] text-slate-400 hover:text-white transition-colors font-medium tracking-wide">
              {PublicConfig.footer.legal.privacy}
            </Link>
            <Link to="/terms" className="text-[12px] text-slate-400 hover:text-white transition-colors font-medium tracking-wide">
              {PublicConfig.footer.legal.terms}
            </Link>
            <Link to="/cookies" className="text-[12px] text-slate-400 hover:text-white transition-colors font-medium tracking-wide">
              Cookie Policy
            </Link>
            <Link to="/data-deletion" className="text-[12px] text-slate-400 hover:text-white transition-colors font-medium tracking-wide">
              Data Deletion
            </Link>
            <Link to="/impressum" className="text-[12px] text-slate-400 hover:text-white transition-colors font-medium tracking-wide">
              Impressum
            </Link>
            {PublicConfig.footer.legal.links.map((link) => (
              <Link 
                key={link} 
                to={link === 'Pricing' ? '/pricing' : link === 'Sitemap' ? '/sitemap' : '#'} 
                className="text-[12px] text-slate-400 hover:text-white transition-colors font-medium tracking-wide"
              >
                {link}
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex flex-wrap justify-center items-center gap-4 text-slate-400 font-medium">
              <span className="text-[12px]">{PublicConfig.footer.copyright}</span>
              <span className="hidden sm:inline text-slate-600 select-none">•</span>
              <span className="text-[11px] flex items-center gap-1.5 uppercase tracking-widest opacity-80 text-blue-500 font-bold">
                {PublicConfig.footer.badge} <Globe2 className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
