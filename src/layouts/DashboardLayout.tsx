import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  Home, 
  Plus, 
  FolderIcon, 
  Settings, 
  ChevronDown, 
  Mail, 
  Languages, 
  Menu, 
  X, 
  Coins, 
  BadgeCheck,
  Zap,
  Facebook,
  LogOut,
  Gift,
  ChevronRight,
  Linkedin,
  ShieldCheck
} from 'lucide-react';
import { PublicConfig } from '../config/PublicConfig';

import { PrivateConfig } from '../config/PrivateConfig';

export function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(true);
  const [isCreditsModalOpen, setIsCreditsModalOpen] = useState(false);
  const location = useLocation();
  const [copied, setCopied] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("https://resumai.io/ref/hamza_g");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      {/* Top Navbar */}
      <nav className="h-16 bg-white border-b border-slate-200 fixed top-0 w-full z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left: Logo & Menu Toggle */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleSidebar}
            className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          
          <Link to="/" className="flex items-center gap-2.5 group cursor-pointer">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all">
              <div className="bg-blue-600 p-2 rounded-xl">
                <FileText className="h-4 w-4 text-white" />
              </div>
            </div>
            <span className="text-lg font-extrabold text-slate-900 tracking-tight hidden sm:block">{PublicConfig.name}<span className="text-blue-600">.</span></span>
          </Link>
        </div>

        {/* Center: Main Nav Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/dashboard" className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors group ${location.pathname === '/dashboard' ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}>
            <Home className={`w-4 h-4 transition-colors ${location.pathname === '/dashboard' ? 'text-blue-600' : 'text-slate-500 group-hover:text-blue-600'}`} /> {PrivateConfig.sidebar.nav.home}
          </Link>
          <Link to="/create?mode=resume" className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors group ${location.pathname === '/create' ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}>
            <Plus className={`w-4 h-4 transition-colors ${location.pathname === '/create' ? 'text-blue-600' : 'text-slate-500 group-hover:text-blue-600'}`} /> {PrivateConfig.sidebar.nav.create.label}
          </Link>
          <Link to="/ats-checker" className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors group ${location.pathname === '/ats-checker' ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}>
            <ShieldCheck className={`w-4 h-4 transition-colors ${location.pathname === '/ats-checker' ? 'text-blue-600' : 'text-slate-500 group-hover:text-blue-600'}`} /> ATS Checker
          </Link>
          <Link to="/dashboard/library" className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors group ${location.pathname.includes('/library') ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}>
            <FolderIcon className={`w-4 h-4 transition-colors ${location.pathname.includes('/library') ? 'text-blue-600' : 'text-slate-500 group-hover:text-blue-600'}`} /> {PrivateConfig.sidebar.nav.library}
          </Link>
          <Link to="/dashboard/settings" className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors group ${location.pathname.includes('/settings') ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}>
            <Settings className={`w-4 h-4 transition-colors ${location.pathname.includes('/settings') ? 'text-blue-600' : 'text-slate-500 group-hover:text-blue-600'}`} /> {PrivateConfig.sidebar.nav.settings}
          </Link>
        </div>

        {/* Right: Credits Badge & Profile */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 border-none text-slate-800 px-3 py-1.5 rounded-full text-sm font-bold cursor-pointer transition-colors shadow-sm">
            <Coins className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>3</span>
          </div>
          
          <div className="flex items-center gap-2 cursor-pointer group transition-all pl-2 sm:border-l sm:border-slate-200">
            <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 font-bold overflow-hidden shadow-sm group-hover:border-blue-300 transition-colors">
              <img src="https://i.pravatar.cc/150?1" alt="Hamza" className="full w-full object-cover" />
            </div>
            <span className="text-sm font-bold text-slate-700 group-hover:text-blue-600 transition-colors hidden sm:block">Hamza</span>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-16 bottom-0 left-0 w-64 bg-white border-r border-slate-200 z-40 overflow-y-auto
        transition-transform duration-300 ease-in-out lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
      `}>
        <div className="flex flex-col min-h-full p-4 pt-6">
          <div className="flex items-center gap-3 px-3 py-2 bg-slate-50/80 rounded-xl mb-6">
            <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 font-bold overflow-hidden shadow-sm shrink-0">
              <img src="https://i.pravatar.cc/150?1" alt="Hamza" className="full w-full object-cover" />
            </div>
            <div className="flex flex-col truncate">
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold text-slate-900 truncate">Hamza</span>
                <BadgeCheck className="w-4 h-4 text-blue-500 fill-blue-500 text-white shrink-0" strokeWidth={1} />
              </div>
              <span className="text-[11px] font-medium text-slate-500 truncate">{PrivateConfig.sidebar.plan}</span>
            </div>
          </div>
          
          <div className="space-y-1">
            <Link 
              to="/dashboard" 
              onClick={() => setIsSidebarOpen(false)}
              className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors ${location.pathname === '/dashboard' ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-slate-50 hover:text-blue-600'}`}
            >
              <Home className={`w-4 h-4 transition-colors ${location.pathname === '/dashboard' ? 'text-blue-600' : 'text-slate-500 group-hover:text-blue-600'}`} /> {PrivateConfig.sidebar.nav.home}
            </Link>
            
            {/* Create Section */}
            <div className="pt-2">
              <button 
                onClick={() => setIsCreateOpen(!isCreateOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-slate-500 font-bold text-xs uppercase tracking-wider hover:text-blue-600 transition-colors group"
              >
                <span className="flex items-center gap-3"><Plus className="w-4 h-4 text-slate-500 group-hover:text-blue-600 transition-colors" /> {PrivateConfig.sidebar.nav.create.label}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCreateOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCreateOpen && (
                <div className="mt-1 space-y-1 pl-3 pr-2">
                  <Link 
                    to="/create?mode=resume" 
                    onClick={() => setIsSidebarOpen(false)}
                    className={`group flex items-center gap-3 px-3 py-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors ${location.pathname.includes('/create') && location.search.includes('mode=resume') ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-slate-50 hover:text-blue-600'}`}
                  >
                    <FileText className={`w-4 h-4 transition-colors ${location.pathname.includes('/create') && location.search.includes('mode=resume') ? 'text-blue-600' : 'text-slate-500 group-hover:text-blue-600'}`} /> {PrivateConfig.sidebar.nav.create.resume}
                  </Link>
                  <Link 
                    to="/create?mode=cover-letter" 
                    onClick={() => setIsSidebarOpen(false)}
                    className={`group flex items-center gap-3 px-3 py-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors ${location.pathname.includes('/create') && location.search.includes('mode=cover-letter') ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-slate-50 hover:text-blue-600'}`}
                  >
                    <Mail className={`w-4 h-4 transition-colors ${location.pathname.includes('/create') && location.search.includes('mode=cover-letter') ? 'text-blue-600' : 'text-slate-500 group-hover:text-blue-600'}`} /> {PrivateConfig.sidebar.nav.create.coverLetter}
                  </Link>
                  <Link 
                    to="/create?mode=translation" 
                    onClick={() => setIsSidebarOpen(false)}
                    className={`group flex items-center gap-3 px-3 py-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors ${location.pathname.includes('/create') && location.search.includes('mode=translation') ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-slate-50 hover:text-blue-600'}`}
                  >
                    <Languages className={`w-4 h-4 transition-colors ${location.pathname.includes('/create') && location.search.includes('mode=translation') ? 'text-blue-600' : 'text-slate-500 group-hover:text-blue-600'}`} /> {PrivateConfig.sidebar.nav.create.translation}
                  </Link>
                </div>
              )}
            </div>

            <div className="pt-2 space-y-1">
              <Link 
                to="/dashboard/library" 
                onClick={() => setIsSidebarOpen(false)}
                className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors ${location.pathname === '/dashboard/library' ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-slate-50 hover:text-blue-600'}`}
              >
                <FolderIcon className={`w-4 h-4 transition-colors ${location.pathname === '/dashboard/library' ? 'text-blue-600' : 'text-slate-500 group-hover:text-blue-600'}`} /> {PrivateConfig.sidebar.nav.library}
              </Link>
              <Link 
                to="/ats-checker" 
                onClick={() => setIsSidebarOpen(false)}
                className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors ${location.pathname === '/ats-checker' ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-slate-50 hover:text-blue-600'}`}
              >
                <ShieldCheck className={`w-4 h-4 transition-colors ${location.pathname === '/ats-checker' ? 'text-blue-600' : 'text-slate-500 group-hover:text-blue-600'}`} /> ATS Checker
              </Link>
              <Link 
                to="/dashboard/credits" 
                onClick={() => setIsSidebarOpen(false)}
                className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors ${location.pathname === '/dashboard/credits' ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-slate-50 hover:text-blue-600'}`}
              >
                <Coins className={`w-4 h-4 transition-colors ${location.pathname === '/dashboard/credits' ? 'text-blue-600' : 'text-slate-500 group-hover:text-blue-600'}`} /> {PrivateConfig.sidebar.nav.credits}
              </Link>
              <Link 
                to="/dashboard/settings" 
                onClick={() => setIsSidebarOpen(false)}
                className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors ${location.pathname === '/dashboard/settings' ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-slate-50 hover:text-blue-600'}`}
              >
                <Settings className={`w-4 h-4 transition-colors ${location.pathname === '/dashboard/settings' ? 'text-blue-600' : 'text-slate-500 group-hover:text-blue-600'}`} /> {PrivateConfig.sidebar.nav.settings}
              </Link>
            </div>
          </div>

          <div className="mt-auto space-y-4">
            {/* Get Free Credits Card - Improved style */}
            <div 
              onClick={() => setIsCreditsModalOpen(true)}
              className="bg-slate-900 rounded-2xl p-5 text-white shadow-lg relative overflow-hidden group cursor-pointer border border-slate-800"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:scale-110 transition-transform" />
              <div className="relative z-10 text-center">
                <div className="flex flex-col items-center mb-4">
                  <div className="text-blue-400 group-hover:scale-110 transition-transform">
                    <Gift className="w-8 h-8" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white">{PrivateConfig.sidebar.creditsCard.getFreeTitle}</p>
                  <div className="pt-3 border-t border-white/10">
                    <button className="flex items-center justify-center gap-2 w-full text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 group-hover:text-blue-300 transition-colors">
                      {PrivateConfig.sidebar.creditsCard.claimBtn} <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-1 pb-4">
              <button className="w-full group flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all text-slate-500 hover:bg-red-50 hover:text-red-600">
                <LogOut className="w-4 h-4 transition-colors" /> {PrivateConfig.sidebar.logout}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom promo/links could go here */}
        
      </aside>

      {/* Social Credits Modal */}
      <AnimatePresence>
        {isCreditsModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCreditsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl p-8 shadow-2xl border border-slate-200 overflow-hidden min-h-[320px] flex flex-col justify-center"
            >
              <button 
                onClick={() => setIsCreditsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all z-20 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 font-bold">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-xl font-extrabold text-slate-900 leading-tight">{PrivateConfig.modal.freeCredits.title}</h2>
                      <p className="text-slate-500 font-bold text-[10px] uppercase tracking-wider mt-0.5">{PrivateConfig.modal.freeCredits.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full uppercase tracking-widest border border-emerald-100">{PrivateConfig.modal.freeCredits.badge}</span>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center space-y-6">
                  <div className="space-y-4 text-center">
                    <p className="text-sm font-bold text-slate-700">{PrivateConfig.modal.freeCredits.socialTitle}</p>
                    <div className="flex flex-wrap justify-center gap-3">
                      <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 hover:border-blue-200 hover:bg-blue-50 transition-all group cursor-pointer">
                        <Facebook className="w-4 h-4 text-[#1877F2]" />
                        <span className="text-xs font-bold text-slate-900">{PrivateConfig.modal.freeCredits.facebook}</span>
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 hover:border-blue-600/30 hover:bg-blue-50/50 transition-all group cursor-pointer">
                        <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                        <span className="text-xs font-bold text-slate-900">{PrivateConfig.modal.freeCredits.linkedin}</span>
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 hover:border-pink-200 hover:bg-pink-50 transition-all group cursor-pointer">
                        <div className="w-4 h-4 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-sm flex items-center justify-center p-0.5">
                           <svg viewBox="0 0 24 24" fill="white" className="w-full h-full"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 2c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm5 4c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-5 1c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5zm0 2c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"/></svg>
                        </div>
                        <span className="text-xs font-bold text-slate-900">{PrivateConfig.modal.freeCredits.instagram}</span>
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 hover:border-black hover:bg-slate-50 transition-all group">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-black"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        <span className="text-xs font-bold text-slate-900">{PrivateConfig.modal.freeCredits.x}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen">
        <div className="flex-1">
          <Outlet />
        </div>
        
        {/* Dashboard Footer */}
        <footer className="lg:pl-64 border-t border-slate-200/50 bg-transparent">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 flex flex-col items-center justify-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-500">
              <Link to="/privacy-policy" className="hover:text-blue-600 transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-blue-600 transition-colors">Terms</Link>
              <Link to="/cookies" className="hover:text-blue-600 transition-colors">Cookies</Link>
              <Link to="/data-deletion" className="hover:text-blue-600 transition-colors">Data Deletion</Link>
            </div>
            <div className="text-sm text-slate-400 font-medium text-center">
              &copy; {new Date().getFullYear()} {PublicConfig.name}<span className="text-blue-600">.</span> All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
