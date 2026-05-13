import React, { useState, useRef } from 'react';
import { 
  Upload, 
  FileText, 
  X, 
  Check,
  CheckCircle,
  Zap,
  Sparkles,
  CreditCard,
  UserCheck,
  Globe,
  Lock,
  ShieldCheck,
  Eye,
  Award,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';

import { PublicConfig } from '../../config/PublicConfig';

const TRUST_BADGES = [
  { id: 0, icon: Zap, color: 'text-blue-600', bg: 'bg-slate-50', border: 'border-slate-100' },
  { id: 1, icon: Sparkles, color: 'text-blue-600', bg: 'bg-slate-50', border: 'border-slate-100' },
  { id: 2, icon: CreditCard, color: 'text-blue-600', bg: 'bg-slate-50', border: 'border-slate-100' },
  { id: 3, icon: UserCheck, color: 'text-blue-600', bg: 'bg-slate-50', border: 'border-slate-100' },
  { id: 4, icon: Globe, color: 'text-blue-600', bg: 'bg-slate-50', border: 'border-slate-100' },
  { id: 5, icon: Lock, color: 'text-blue-600', bg: 'bg-slate-50', border: 'border-slate-100' },
  { id: 6, icon: ShieldCheck, color: 'text-blue-600', bg: 'bg-slate-50', border: 'border-slate-100' },
  { id: 7, icon: Eye, color: 'text-blue-600', bg: 'bg-slate-50', border: 'border-slate-100' },
  { id: 8, icon: Award, color: 'text-blue-600', bg: 'bg-slate-50', border: 'border-slate-100' },
];

export function ResumeUpload() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const validateFile = (selectedFile: File) => {
    const allowedTypes = [
      'application/pdf'
    ];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!allowedTypes.includes(selectedFile.type)) {
      setFileError('Unsupported format. Only PDF files are supported.');
      return false;
    }

    if (selectedFile.size > maxSize) {
      setFileError('File size exceeded. Maximum limit is 10MB.');
      return false;
    }

    setFileError(null);
    return true;
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    navigate('/login');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      navigate('/login');
    }
  };

  const removeFile = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFile(null);
    setFileError(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleMainClick = () => {
    navigate('/login');
  };

  const trustBadges = PublicConfig.resumeUpload.badges.map((badge, idx) => ({
    ...badge,
    ...TRUST_BADGES[idx]
  }));

  return (
    <div className="w-full max-w-lg mt-4">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleMainClick}
          className={`
            relative group cursor-pointer
            border-2 border-dashed rounded-[1rem] py-10 sm:py-14 px-6
            transition-all duration-300 ease-out shadow-sm
            ${isDragging 
              ? 'border-blue-500 bg-blue-50/50 scale-[1.02] shadow-xl shadow-blue-500/10' 
              : file
                ? 'border-blue-400 bg-blue-50/20'
                : 'border-slate-300 bg-white hover:border-blue-400 hover:bg-blue-50/30'}
          `}
        >
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf"
            className="hidden" 
          />
          
          <div className="flex flex-col items-center text-center gap-6">
            {fileError && (
              <div className="absolute top-4 inset-x-4 z-20 px-3 py-2 bg-red-50 border border-red-100 rounded-xl text-red-500 text-[10px] font-black uppercase tracking-widest text-center flex items-center justify-center gap-2 shadow-sm animate-in fade-in slide-in-from-top-2">
                <X className="w-3.5 h-3.5" />
                {fileError}
              </div>
            )}

            {file && (
              <button 
                onClick={removeFile}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors z-30"
                title="Remove file"
              >
                <X className="w-5 h-5" />
              </button>
            )}

            <div className={`
              w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm
              ${isDragging || file ? 'bg-slate-900 text-white scale-110' : 'bg-slate-50 text-slate-400 border border-slate-200 group-hover:bg-slate-100 group-hover:text-slate-600 group-hover:scale-105'}
            `}>
              {file ? <FileText className="w-7 h-7" /> : <Upload className="w-7 h-7" />}
            </div>
            
            <div className="space-y-3">
              <div className={`inline-flex items-center justify-center px-8 py-3 rounded-xl font-bold text-sm shadow-sm transition-all duration-300
                ${isDragging || file ? 'bg-blue-600 text-white' : 'bg-slate-900 text-white group-hover:bg-blue-600 group-hover:shadow-md group-hover:shadow-blue-500/20'}
              `}>
                {file ? (
                  <span className="flex items-center gap-2">
                    {file.name}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                ) : (isDragging ? PublicConfig.resumeUpload.idle.dragging : PublicConfig.resumeUpload.idle.action)}
              </div>
              <p className="text-[13px] text-slate-500 font-medium">
                {file ? `${((file.size / 1024) / 1024).toFixed(2)} MB • Click to continue` : PublicConfig.resumeUpload.idle.note}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 mt-6">
        {trustBadges.slice(0, 5).map((badge) => (
          <div key={badge.label} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-slate-50/50 border border-slate-100 text-slate-500 hover:text-slate-900 transition-colors shadow-none">
            <badge.icon className={`w-3.5 h-3.5 ${badge.color}`} />
            <span className="text-[11px] font-semibold uppercase tracking-wider">{badge.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col items-center lg:items-start gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-[10px] font-bold uppercase tracking-widest">{PublicConfig.resumeUpload.targetMarkets.title}</span>
          </div>
          <div className="h-px w-8 bg-slate-100" />
        </div>
        
        <div className="flex flex-wrap gap-3 items-center justify-center lg:justify-start">
          {PublicConfig.resumeUpload.targetMarkets.markets.map((flag) => (
            <div key={flag.code} className="group relative">
              <img 
                src={`https://flagcdn.com/w40/${flag.code}.png`}
                alt={flag.name}
                className="h-4 w-auto rounded-sm shadow-[0_1px_3px_rgba(0,0,0,0.15)] transition-all group-hover:scale-125 group-hover:-rotate-3"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none font-bold uppercase tracking-wider shadow-xl">
                {flag.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
