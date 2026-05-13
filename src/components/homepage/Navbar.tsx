/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, ShieldCheck, Home, FileSearch, Languages, Mail, HelpCircle, Menu, X, ArrowRight, Zap, Sparkles, FileText, User as UserIcon } from 'lucide-react';
import { PublicConfig } from '../../config/PublicConfig';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isFAQ = location.pathname === '/faq';
  const isDashboard = location.pathname.startsWith('/dashboard');
  const isATS = location.pathname === '/ats-checker';

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-white border-b border-slate-100 flex items-center transition-all duration-300">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md transition-transform group-hover:scale-105 active:scale-95">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">{PublicConfig.name}<span className="text-blue-600">.</span></span>
            </Link>
          </div>
          
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center bg-slate-50 border border-slate-100 p-1 rounded-full text-[12px] font-bold text-slate-500 shadow-sm">
            <Link 
              to="/" 
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full transition-all ${
                isHome 
                  ? 'bg-white text-blue-600 shadow-sm border border-slate-200/50' 
                  : 'hover:text-slate-900 border border-transparent'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              {PublicConfig.navbar.links.home}
            </Link>
            <Link 
              to="/ats-checker" 
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full transition-all ${
                isATS 
                  ? 'bg-white text-blue-600 shadow-sm border border-slate-200/50' 
                  : 'hover:text-slate-900 border border-transparent'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              {PublicConfig.navbar.links.ats}
            </Link>
            <a href="/#resume" className="flex items-center gap-2 px-3.5 py-1.5 rounded-full hover:text-slate-900 border border-transparent transition-colors">
              <FileText className="w-3.5 h-3.5" />
              {PublicConfig.navbar.links.resume}
            </a>
            <a href="/#coverletter" className="flex items-center gap-2 px-3.5 py-1.5 rounded-full hover:text-slate-900 border border-transparent transition-colors">
              <Mail className="w-3.5 h-3.5" />
              {PublicConfig.navbar.links.coverLetter}
            </a>
            <a href="/#translation" className="flex items-center gap-2 px-3.5 py-1.5 rounded-full hover:text-slate-900 border border-transparent transition-colors">
              <Languages className="w-3.5 h-3.5" />
              {PublicConfig.navbar.links.translation}
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/login" className="hidden sm:flex items-center gap-2 text-[13px] font-semibold text-slate-600 hover:text-blue-600 transition-colors py-2 px-3">
              <UserIcon className="w-4 h-4" />
              {PublicConfig.navbar.cta.signIn}
            </Link>
            <Link to="/login" className="bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-md flex items-center gap-2 group active:scale-95">
              <span className="text-[13px] font-bold">{PublicConfig.navbar.cta.getStarted}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all cursor-pointer"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[49] bg-white lg:hidden overflow-hidden pt-16">
          <div className="p-6 flex flex-col gap-4">
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center justify-between px-5 py-4 rounded-2xl font-bold transition-all ${isHome ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-700'}`}
            >
              <span className="flex items-center gap-3">
                <Home className="w-5 h-5 text-slate-400" /> {PublicConfig.navbar.links.home}
              </span>
              <ArrowRight className="w-4 h-4 opacity-30" />
            </Link>
            <Link 
              to="/ats-checker" 
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center justify-between px-5 py-4 rounded-2xl font-bold transition-all ${isATS ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-700'}`}
            >
              <span className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-slate-400" /> {PublicConfig.navbar.links.ats}
              </span>
              <ArrowRight className="w-4 h-4 opacity-30" />
            </Link>
            <a href="/#resume" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between px-5 py-4 rounded-2xl bg-slate-50 text-slate-700 font-bold transition-all hover:bg-slate-100">
              <span className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-slate-400" /> {PublicConfig.navbar.links.resume}
              </span>
              <ArrowRight className="w-4 h-4 opacity-30" />
            </a>
            <a href="/#coverletter" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between px-5 py-4 rounded-2xl bg-slate-50 text-slate-700 font-bold transition-all hover:bg-slate-100">
              <span className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-slate-400" /> {PublicConfig.navbar.links.coverLetter}
              </span>
              <ArrowRight className="w-4 h-4 opacity-30" />
            </a>
            <a href="/#translation" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between px-5 py-4 rounded-2xl bg-slate-50 text-slate-700 font-bold transition-all hover:bg-slate-100">
              <span className="flex items-center gap-3">
                <Languages className="w-5 h-5 text-slate-400" /> {PublicConfig.navbar.links.translation}
              </span>
              <ArrowRight className="w-4 h-4 opacity-30" />
            </a>
            
            <div className="mt-8 flex flex-col gap-3">
              <Link to="/login" onClick={() => setIsMenuOpen(false)} className="w-full py-4 px-5 rounded-2xl font-bold bg-slate-900 text-white shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2">
                {PublicConfig.navbar.cta.getStarted}
                <Sparkles className="w-4 h-4 text-amber-400" />
              </Link>
              <Link to="/login" onClick={() => setIsMenuOpen(false)} className="w-full py-4 px-5 rounded-2xl font-bold bg-white border border-slate-200 text-slate-600 active:scale-95 transition-transform flex items-center justify-center gap-2">
                <UserIcon className="w-5 h-5 text-slate-400" />
                {PublicConfig.navbar.cta.signIn}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
