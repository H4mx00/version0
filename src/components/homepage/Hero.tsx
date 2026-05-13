/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  ChevronRight, 
  ShieldCheck, 
  User, 
  Lock, 
  Award, 
  Star
} from 'lucide-react';
import { SVGProps } from 'react';
import { PublicConfig } from '../../config/PublicConfig';
import { ResumeUpload } from './ResumeUpload';

export function Hero() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-6 sm:gap-8 max-w-3xl text-center lg:text-left items-center lg:items-start relative z-10"
    >
      <div className="space-y-3 sm:space-y-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200/60 pl-2 pr-4 py-1.5 rounded-full select-none mb-2 shadow-sm"
        >
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center p-1 font-black text-slate-800">
              <GoogleIcon className="w-full h-full" />
            </div>
          </div>
          <div className="flex items-center gap-2 ml-1">
             <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                   <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                ))}
             </div>
             <span className="text-[12px] font-bold text-slate-700">
               4.9/5
             </span>
          </div>
        </motion.div>
        
        <h1 className="text-[32px] xs:text-[38px] sm:text-[48px] lg:text-[56px] font-extrabold text-slate-900 leading-[1.1] tracking-tight">
          {PublicConfig.hero.title.plain} 
          <span className="relative inline-block lg:ml-3">
            <span className="text-blue-600">
              {PublicConfig.hero.title.gradient}
            </span>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-1 left-0 h-1.5 bg-blue-500/30 rounded-full"
            />
          </span>
        </h1>
        
        <p className="text-[17px] text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
          {PublicConfig.hero.subtitle}
        </p>
      </div>

      <div className="w-full max-w-md">
        <ResumeUpload />
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center lg:justify-start mt-2">
        <div className="flex items-center gap-4 sm:gap-6 group bg-white/50 px-5 py-2.5 rounded-2xl border border-slate-200/50 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-slate-500 group-hover:text-blue-600 transition-colors">
            <ShieldCheck className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
            <span className="text-[10px] font-bold uppercase tracking-wider">{PublicConfig.process.stats[1].label}</span>
          </div>
          <div className="w-px h-4 bg-slate-200" />
          <div className="flex items-center gap-2 text-slate-500 group-hover:text-amber-500 transition-colors">
            <Lock className="w-4 h-4 text-slate-400 group-hover:text-amber-500" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Privacy First</span>
          </div>
          <div className="w-px h-4 bg-slate-200" />
          <div className="flex items-center gap-2 text-slate-500 group-hover:text-emerald-600 transition-colors">
            <Award className="w-4 h-4 text-slate-400 group-hover:text-emerald-500" />
            <span className="text-[10px] font-bold uppercase tracking-wider">EU Standard</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SAPLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 50" {...props}>
      <path d="M0 0h100v50H0V0z" fill="#008FD3" />
      <text x="50" y="32" fontSize="22" fontWeight="900" fill="white" textAnchor="middle" letterSpacing="-1">SAP</text>
    </svg>
  );
}

function SiemensLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 40" {...props}>
      <text x="0" y="30" fontSize="22" fontWeight="900" fill="#009999" letterSpacing="-1">SIEMENS</text>
    </svg>
  );
}

function SpotifyLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 40" {...props}>
       <circle cx="20" cy="20" r="18" fill="#1DB954" />
       <path d="M20 12c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.7 11.5c-.2.3-.6.4-.9.2-1.9-1.1-4.2-1.4-7-1.4-.3 0-.6-.2-.6-.5s.2-.6.5-.6c3-.1 5.5.2 7.7 1.5.3.1.4.5.3.8zm1-2.2c-.3.4-.8.5-1.2.2-2.3-1.4-5.8-1.8-8.5-.9-.4.1-.9-.1-1-.5s.1-.9.5-1c3.1-.9 7-0.5 9.6 1 .4.3.5.8.3 1.2zm.1-2.4c-2.7-1.6-7.2-1.8-9.8-1-.4.1-.8-.1-.9-.5s.1-.8.5-.9c3-.9 8.1-.7 11.2 1.1.4.2.5.7.3 1.1-.3.3-.8.4-1.2.2z" fill="white" />
    </svg>
  );
}

function AdidasLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.2 18.6l-2.4-4.2-1.9 1.1 1.7 3.1zM15 18.6l-3.9-6.9-1.9 1.1 3.2 5.8zM9.8 18.6L4 8.5 2.1 9.6l5.1 9z" />
    </svg>
  );
}

function AirbusLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-1-13h2v4h4v2h-4v4h-2v-4H7V9h4V7z" />
    </svg>
  );
}

function GoogleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function SparklesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  );
}
