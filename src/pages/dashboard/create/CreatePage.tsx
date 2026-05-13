import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  Mail, 
  Languages, 
  Upload, 
  Layout, 
  Download, 
  CheckCircle2, 
  ArrowRight,
  ArrowLeft,
  X,
  Plus,
  Sparkles,
  Zap,
  Briefcase,
  Search,
  ChevronRight,
  User,
  Globe2,
  Trash2,
  Files,
  Type,
  FileDown,
  Home,
  FolderIcon,
  Settings,
  Coins,
  ShieldCheck
} from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { PublicConfig } from '../../../config/PublicConfig';
import { PrivateConfig } from '../../../config/PrivateConfig';
import { TemplateVisual } from '../../../components/homepage/TemplateVisual';
import { SEO } from '../../../components/common/SEO';

type Mode = 'resume' | 'cover-letter' | 'translation';
type Step = 'upload' | 'theme' | 'export';

const MODES: { id: Mode; label: string; icon: any; color: string }[] = [
  { id: 'resume', label: 'AI Resume', icon: FileText, color: 'blue' },
  { id: 'cover-letter', label: 'AI Cover Letter', icon: Mail, color: 'emerald' },
  { id: 'translation', label: 'AI Translation', icon: Languages, color: 'purple' },
];

const COLORS = [
  { id: 'slate', name: 'Slate', bg: 'bg-slate-800', text: 'text-slate-600', light: 'bg-slate-50', border: 'border-slate-200', line: 'bg-slate-200', accent: 'text-slate-500' },
  { id: 'blue', name: 'Blue', bg: 'bg-blue-600', text: 'text-blue-600', light: 'bg-blue-50/50', border: 'border-blue-200', line: 'bg-blue-200', accent: 'text-blue-500' },
  { id: 'indigo', name: 'Indigo', bg: 'bg-indigo-600', text: 'text-indigo-600', light: 'bg-indigo-50/50', border: 'border-indigo-200', line: 'bg-indigo-200', accent: 'text-indigo-500' },
  { id: 'emerald', name: 'Emerald', bg: 'bg-emerald-600', text: 'text-emerald-600', light: 'bg-emerald-50/50', border: 'border-emerald-200', line: 'bg-emerald-200', accent: 'text-emerald-500' },
  { id: 'rose', name: 'Rose', bg: 'bg-rose-600', text: 'text-rose-600', light: 'bg-rose-50/50', border: 'border-rose-200', line: 'bg-rose-200', accent: 'text-rose-500' },
  { id: 'amber', name: 'Amber', bg: 'bg-amber-600', text: 'text-amber-600', light: 'bg-amber-50/50', border: 'border-amber-200', line: 'bg-amber-200', accent: 'text-amber-500' },
];

export function CreatePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialMode = (searchParams.get('mode') as Mode) || 'resume';
  
  const [activeMode, setActiveMode] = useState<Mode>(MODES.find(m => m.id === initialMode) ? initialMode : 'resume');
  const [currentStep, setCurrentStep] = useState<Step>('upload');
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(PublicConfig.templates.items[0].id);
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [selectedLanguage, setSelectedLanguage] = useState(PublicConfig.sections.translation.languages[0].id);
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

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

  const steps: { id: Step; label: string; icon: any }[] = [
    { id: 'upload', label: 'Upload', icon: Upload },
    { id: 'theme', label: 'Theme', icon: Layout },
    { id: 'export', label: 'Export', icon: Download },
  ];

  // Filter steps based on mode (Cover Letter skips theme)
  const activeSteps = activeMode === 'cover-letter' 
    ? steps.filter(s => s.id !== 'theme')
    : steps;

  const currentStepIndex = activeSteps.findIndex(s => s.id === currentStep);

  const handleNext = () => {
    if (currentStep === 'upload') {
      if (!file) return;
      if ((activeMode === 'resume' || activeMode === 'cover-letter') && !jobDescription.trim()) return;
      
      if (activeMode === 'cover-letter') {
        setCurrentStep('export');
      } else {
        setCurrentStep('theme');
      }
    } else if (currentStep === 'theme') {
      setCurrentStep('export');
    }
  };

  const handleBack = () => {
    if (currentStep === 'export') {
      if (activeMode === 'cover-letter') {
        setCurrentStep('upload');
      } else {
        setCurrentStep('theme');
      }
    } else if (currentStep === 'theme') {
      setCurrentStep('upload');
    }
  };

  const canMoveForward = () => {
    if (currentStep === 'upload') {
      if (!file) return false;
      if ((activeMode === 'resume' || activeMode === 'cover-letter') && !jobDescription.trim()) return false;
      return true;
    }
    return true;
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <SEO 
        title="Create New Document | EuropeCV"
        description="Build your professional document using our AI-powered creation tools."
        noindex
      />
      {/* Dashboard Navbar Style (No Sidebar) */}
      <nav className="h-16 bg-white border-b border-slate-200 fixed top-0 w-full z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2.5 group cursor-pointer">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all">
              <div className="bg-slate-900 p-2 rounded-xl">
                <FileText className="h-4 w-4 text-white" />
              </div>
            </div>
            <span className="text-lg font-extrabold text-slate-900 tracking-tight hidden sm:block">{PublicConfig.name}<span className="text-blue-500">.</span></span>
          </Link>
        </div>

        {/* Center: Main Nav Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/dashboard" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-blue-600 transition-colors group">
            <Home className="w-4 h-4 transition-colors text-slate-500 group-hover:text-blue-600" /> {PrivateConfig.sidebar.nav.home}
          </Link>
          <Link to="/dashboard/library" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-blue-600 transition-colors group">
            <FolderIcon className="w-4 h-4 transition-colors text-slate-500 group-hover:text-blue-600" /> {PrivateConfig.sidebar.nav.library}
          </Link>
          <Link to="/dashboard/settings" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-blue-600 transition-colors group">
            <Settings className="w-4 h-4 transition-colors text-slate-500 group-hover:text-blue-600" /> {PrivateConfig.sidebar.nav.settings}
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

      {/* Hero Header / Stepper Section */}
      <div className="pt-16 bg-[#0B1120] border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center">
            {/* Steps & Actions */}
            <div className="flex flex-1 items-center justify-between gap-8 w-full">
              {/* Navigation Back */}
              <button
                onClick={handleBack}
                disabled={currentStep === 'upload'}
                className={`p-2 rounded-xl border border-slate-800 text-slate-400 font-bold text-[10px] uppercase tracking-widest transition-all ${currentStep === 'upload' ? 'opacity-0' : 'hover:bg-slate-800 hover:text-white'}`}
              >
                <div className="flex items-center gap-1.5 px-1">
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </div>
              </button>

              {/* Desktop Stepper */}
              <div className="flex items-center gap-10 relative h-10">
                {activeSteps.map((step, idx) => {
                  const isActive = step.id === currentStep;
                  const isCompleted = currentStepIndex > idx;
                  return (
                    <div key={step.id} className="flex items-center gap-2.5 relative z-10">
                      <div className={`
                        w-7 h-7 rounded-lg flex items-center justify-center transition-all
                        ${isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' : 
                          isCompleted ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-500 border border-slate-700'}
                      `}>
                        {isCompleted ? <CheckCircle2 className="w-3.5 h-3.5" /> : <step.icon className="w-3.5 h-3.5" />}
                      </div>
                      <span className={`text-[9px] font-black uppercase tracking-widest ${isActive ? 'text-white' : 'text-slate-500'}`}>
                        {step.label}
                      </span>
                      {idx < activeSteps.length - 1 && (
                        <div className="absolute left-full w-10 h-px bg-slate-800 mx-1" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Navigation Continue */}
              <button
                onClick={handleNext}
                disabled={!canMoveForward() || currentStep === 'export'}
                className={`
                  flex items-center gap-2 px-5 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all
                  ${canMoveForward() && currentStep !== 'export'
                    ? 'bg-white text-slate-900 shadow-lg hover:bg-slate-100 hover:scale-105 active:scale-95' 
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed'}
                `}
              >
                {currentStep === 'export' ? 'Finished' : (currentStep === 'theme' || (activeMode === 'cover-letter' && currentStep === 'upload')) ? 'Generate' : 'Continue'}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          
          {/* Mode Switcher - Centered & Text Focused */}
          <div className="flex flex-col items-center justify-center mb-10 gap-4">
            <div className="inline-flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200">
              {MODES.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => {
                    setActiveMode(mode.id);
                    setSearchParams({ mode: mode.id });
                    setCurrentStep('upload');
                  }}
                  className={`
                    flex items-center gap-2 px-6 py-2 rounded-xl transition-all text-sm font-bold
                    ${activeMode === mode.id 
                      ? 'bg-white text-slate-900 shadow-sm' 
                      : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}
                  `}
                >
                  <mode.icon className={`w-4 h-4 ${activeMode === mode.id ? 'text-slate-900' : 'text-slate-400'}`} />
                  <span>{mode.label}</span>
                </button>
              ))}
            </div>
            
            {/* Badges */}
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-600 shadow-sm">
                 <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                 <span>🇪🇺 Europass</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-600 shadow-sm">
                 <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                 <span>100% ATS Friendly</span>
              </div>
            </div>
          </div>

          {/* Step Content */}
          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              {currentStep === 'upload' && (
                <motion.div
                  key="upload"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Left: Upload Section */}
                    <div className="space-y-4">
                      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                            <Upload className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-sm font-extrabold text-slate-900">Upload Resume</h3>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Only PDF supported</p>
                          </div>
                        </div>

                        <div 
                          className={`
                            relative border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center gap-2 transition-all cursor-pointer
                            ${file ? 'border-blue-300 bg-blue-50/30' : 'border-slate-100 hover:border-blue-300 hover:bg-white'}
                          `}
                          onDragOver={(e) => e.preventDefault()}
                          onDrop={(e) => {
                            e.preventDefault();
                            const droppedFile = e.dataTransfer.files[0];
                            if (droppedFile && validateFile(droppedFile)) {
                              setFile(droppedFile);
                            }
                          }}
                          onClick={() => {
                            const input = document.createElement('input');
                            input.type = 'file';
                            input.accept = '.pdf';
                            input.onchange = (e: any) => {
                              const selectedFile = e.target.files[0];
                              if (selectedFile && validateFile(selectedFile)) {
                                setFile(selectedFile);
                              }
                            };
                            input.click();
                          }}
                        >
                          {fileError && (
                            <div className="absolute top-2 inset-x-2 z-10 px-3 py-1.5 bg-red-50 border border-red-100 rounded-lg text-red-500 text-[9px] font-black uppercase tracking-widest text-center flex items-center justify-center gap-2">
                              <X className="w-3 h-3" />
                              {fileError}
                            </div>
                          )}

                          {file && (
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                setFile(null);
                                setFileError(null);
                              }}
                              className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center shadow-md hover:bg-red-600 transition-colors z-20"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          )}

                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${file ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-300'}`}>
                            {file ? <FileText className="w-6 h-6" /> : <Upload className="w-6 h-6" />}
                          </div>
                          
                          <div className="text-center group">
                            <p className={`text-sm font-bold transition-colors ${file ? 'text-slate-900' : 'text-slate-700 group-hover:text-blue-600'}`}>
                              {file ? file.name : 'Drag & Drop or Browse'}
                            </p>
                            <p className="text-xs text-slate-500 mt-1">
                              {file ? `Size: ${(file.size / (1024 * 1024)).toFixed(2)} MB` : 'Maximum size: 5MB'}
                            </p>
                          </div>
                          
                          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-50">
                             <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-50 border border-slate-100 rounded text-[8px] font-black uppercase tracking-widest text-slate-400">
                                <Zap className="w-2.5 h-2.5 text-amber-500/70" />
                                <span>Fast</span>
                             </div>
                             <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-50 border border-slate-100 rounded text-[8px] font-black uppercase tracking-widest text-slate-400">
                                <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500/70" />
                                <span>Secured</span>
                             </div>
                             <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-50 border border-slate-100 rounded text-[8px] font-black uppercase tracking-widest text-slate-400">
                                <FileText className="w-2.5 h-2.5 text-blue-500/70" />
                                <span>Europass Compatible</span>
                             </div>
                          </div>
                        </div>
                      </div>

                      {/* Profile Picture Upload (Shared for Resume & Translation) */}
                      {(activeMode === 'resume' || activeMode === 'translation') && (
                        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
                           <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                              <User className="w-4 h-4" />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-slate-900 tracking-tight">Profile Photo</h3>
                              <p className="text-xs font-semibold text-slate-500">JPG, PNG supported</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                             <div className="relative group">
                                <div className="w-16 h-16 rounded-xl bg-slate-100 border-2 border-white shadow-inner overflow-hidden flex items-center justify-center group-hover:border-blue-400 transition-colors">
                                   {profilePic ? (
                                     <img src={profilePic} className="w-full h-full object-cover" />
                                   ) : (
                                     <User className="w-8 h-8 text-slate-300" />
                                   )}
                                </div>
                                {profilePic && (
                                   <button 
                                      onClick={() => setProfilePic(null)}
                                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white z-10"
                                   >
                                      <X className="w-3.5 h-3.5" />
                                   </button>
                                )}
                             </div>
                             
                             <div className="flex-1 space-y-3">
                                <p className="text-sm font-medium text-slate-500 leading-relaxed">
                                   Professional headshots increase your interview chances by 40%.
                                </p>
                                 <button 
                                   onClick={() => {
                                      const input = document.createElement('input');
                                      input.type = 'file';
                                      input.accept = 'image/*';
                                      input.onchange = (e: any) => {
                                         const reader = new FileReader();
                                         reader.onload = (re: any) => setProfilePic(re.target.result);
                                         if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);
                                      };
                                      input.click();
                                   }}
                                   className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-bold transition-colors flex items-center gap-2"
                                >
                                   <Plus className="w-4 h-4" />
                                   {profilePic ? 'Change Photo' : 'Upload Photo'}
                                </button>
                             </div>
                          </div>
                          
                          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-50">
                             <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-50 border border-slate-100 rounded text-[8px] font-black uppercase tracking-widest text-slate-400">
                                <User className="w-2.5 h-2.5 text-indigo-500/70" />
                                <span>Professional</span>
                             </div>
                             <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-50 border border-slate-100 rounded text-[8px] font-black uppercase tracking-widest text-slate-400">
                                <Sparkles className="w-2.5 h-2.5 text-amber-500/70" />
                                <span>High Impact</span>
                             </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right: Job Description Section (For Resume/Cover Letter) */}
                    {(activeMode === 'resume' || activeMode === 'cover-letter') && (
                      <div className="space-y-4 h-full flex flex-col">
                      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 h-full flex flex-col">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                              <Briefcase className="w-4 h-4" />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-slate-900 tracking-tight">Job Description</h3>
                              <p className="text-xs font-semibold text-slate-500">Paste the text to tailor</p>
                            </div>
                          </div>

                          <div className="flex-1 relative">
                            <textarea 
                              placeholder="Paste the job description here..."
                              value={jobDescription}
                              onChange={(e) => setJobDescription(e.target.value)}
                              className="w-full h-full min-h-[220px] bg-slate-50/50 border border-slate-200 rounded-xl p-4 text-sm font-medium text-slate-700 transition-all outline-none resize-none"
                            />
                            {jobDescription.length > 0 && (
                              <button 
                                onClick={() => setJobDescription('')}
                                className="absolute top-3 right-3 p-1.5 bg-white/80 backdrop-blur-sm rounded-lg text-slate-400 hover:text-red-500 shadow-sm transition-all border border-slate-100"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                          
                          <div className="mt-4 flex items-center justify-between text-[10px] font-bold">
                             <span className="text-slate-400 uppercase tracking-widest">Count: {jobDescription.length}</span>
                             <div className="flex items-center gap-2">
                                <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-50 border border-slate-100 rounded text-[8px] font-black uppercase tracking-widest text-slate-400">
                                   <Search className="w-2.5 h-2.5 text-slate-500/70" />
                                   <span>Accurate</span>
                                </div>
                                <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-50 border border-slate-100 rounded text-[8px] font-black uppercase tracking-widest text-slate-400">
                                   <Sparkles className="w-2.5 h-2.5 text-amber-500/70" />
                                   <span>AI Enhanced</span>
                                </div>
                             </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Translation Specific Info */}
                    {activeMode === 'translation' && (
                      <div className="space-y-4">
                         <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 h-full flex flex-col justify-between">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                                <Globe2 className="w-4 h-4" />
                              </div>
                              <div>
                                <h3 className="text-lg font-bold text-slate-900 tracking-tight">Target Language</h3>
                                <p className="text-xs font-semibold text-slate-500">Select CV language</p>
                              </div>
                            </div>

                            <div className="grid grid-cols-3 gap-2 pb-4">
                              {PublicConfig.sections.translation.languages.map(lang => (
                                <button
                                  key={lang.id}
                                  onClick={() => setSelectedLanguage(lang.id)}
                                  className={`
                                    flex flex-col items-center gap-2 p-2 rounded-xl transition-all group/lang cursor-pointer border
                                    ${selectedLanguage === lang.id ? 'bg-slate-900 border-slate-900 shadow-md scale-[1.02]' : 'bg-slate-50 border-slate-100 hover:bg-white'}
                                  `}
                                >
                                  <div className="w-5 h-5 rounded overflow-hidden border border-white/20 shadow-sm flex items-center justify-center bg-white">
                                    <img src={`https://flagcdn.com/w40/${lang.iso}.png`} className="w-full h-full object-cover" />
                                  </div>
                                  <span className={`text-[9px] font-black uppercase tracking-wider ${selectedLanguage === lang.id ? 'text-white' : 'text-slate-500'}`}>{lang.name}</span>
                                </button>
                              ))}
                            </div>

                            <div className="bg-slate-50 p-3 rounded-xl flex items-start gap-2.5 border border-slate-100 mb-4">
                               <Sparkles className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                               <p className="text-[10px] font-medium text-slate-500 leading-relaxed italic">
                                  Native grammar and terminology optimization for {PublicConfig.sections.translation.languages.find(l => l.id === selectedLanguage)?.name}.
                               </p>
                            </div>

                            <div className="flex items-center gap-2 pt-4 border-t border-slate-50">
                               <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-50 border border-slate-100 rounded text-[8px] font-black uppercase tracking-widest text-slate-400">
                                  <Globe2 className="w-2.5 h-2.5 text-blue-500/70" />
                                  <span>Native Quality</span>
                               </div>
                               <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-50 border border-slate-100 rounded text-[8px] font-black uppercase tracking-widest text-slate-400">
                                  <Zap className="w-2.5 h-2.5 text-amber-500/70" />
                                  <span>Instant</span>
                               </div>
                            </div>
                         </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {currentStep === 'theme' && (
                <motion.div
                  key="theme"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Template Selector */}
                    <div className="lg:col-span-4 space-y-4">
                       <div className="space-y-1">
                          <h3 className="text-xl font-bold text-slate-900 tracking-tight">Select Template</h3>
                          <p className="text-sm font-medium text-slate-500">Pick a style for your industry.</p>
                       </div>

                       <div className="space-y-1.5">
                          {PublicConfig.templates.items.map((template) => (
                            <button
                              key={template.id}
                              onClick={() => setSelectedTemplate(template.id)}
                              className={`
                                w-full flex items-center justify-between p-2.5 rounded-xl border transition-all text-left
                                ${selectedTemplate === template.id 
                                  ? 'bg-white border-blue-500 shadow-sm ring-1 ring-blue-500/10' 
                                  : 'bg-white border-slate-200/60 hover:bg-slate-50 hover:border-slate-300'}
                              `}
                            >
                              <div className="flex items-center gap-2.5">
                                <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${selectedTemplate === template.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                                  {template.id === 'ats-pure' ? <Zap className="w-3.5 h-3.5" /> : <Layout className="w-3.5 h-3.5" />}
                                </div>
                                <div className="leading-tight">
                                  <p className={`text-sm font-bold ${selectedTemplate === template.id ? 'text-blue-600' : 'text-slate-900'}`}>{template.name}</p>
                                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">{template.badge}</p>
                                </div>
                              </div>
                              {selectedTemplate === template.id && (
                                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                              )}
                            </button>
                          ))}
                       </div>

                       <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-200">
                          <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-50 border border-slate-100 rounded text-[8px] font-black uppercase tracking-widest text-slate-400">
                             <Layout className="w-2.5 h-2.5 text-purple-500/70" />
                             <span>4 Modern Themes</span>
                          </div>
                          <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-50 border border-slate-100 rounded text-[8px] font-black uppercase tracking-widest text-slate-400">
                             <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500/70" />
                             <span>ATS Friendly</span>
                          </div>
                       </div>

                       <div className="pt-6 space-y-6">
                          <div className="space-y-4">
                            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Accent Color</span>
                            <div className="flex flex-wrap gap-2">
                              {COLORS.map((c) => (
                                <button
                                  key={c.id}
                                  onClick={() => setSelectedColor(c)}
                                  className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all hover:scale-110 shadow-sm border border-white ${c.bg} ${selectedColor.id === c.id ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}
                                />
                              ))}
                            </div>
                          </div>
                       </div>
                    </div>

                    {/* Right: Live Preview */}
                    <div className="lg:col-span-8">
                       <div className="bg-slate-100/80 rounded-2xl p-6 border border-slate-200 relative overflow-hidden group">
                          <div className="absolute top-4 right-4 z-20">
                             <div className="bg-white/90 backdrop-blur-md border border-white/50 px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-sm">
                                <div className="flex items-center gap-1.5 font-black text-[9px] text-slate-400 tracking-wider">
                                   <div className={`w-1.5 h-1.5 rounded-full ${selectedColor.bg} animate-pulse`} />
                                   LIVE PREVIEW
                                </div>
                             </div>
                          </div>

                          <div className="relative w-full max-w-[320px] mx-auto transform group-hover:scale-[1.02] transition-transform duration-700">
                             <TemplateVisual 
                               templateId={selectedTemplate} 
                               selectedColor={selectedColor} 
                               mockOverride={profilePic ? { image: profilePic } : undefined}
                             />
                          </div>
                       </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 'export' && (
                <motion.div
                  key="export"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  className="flex flex-col items-center justify-center gap-8 py-8"
                >
                   <div className="text-center space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100 text-[9px] font-black uppercase tracking-widest mb-2">
                       <CheckCircle2 className="w-3.5 h-3.5" />
                       Ready for {activeMode === 'cover-letter' ? 'Review' : 'Download'}
                    </div>
                    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Your {activeMode === 'cover-letter' ? 'Letter' : 'Document'} is Ready!</h2>
                    <p className="text-slate-500 font-medium text-base">{activeMode === 'cover-letter' ? 'Tailored to the job description with AI precision.' : 'Perfectly tailored for your application.'}</p>
                    
                    <div className="flex justify-center gap-3 mt-4">
                       <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-100 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-400 shadow-sm">
                          <CheckCircle2 className="w-3 h-3 text-emerald-500/70" />
                          <span>ATS Optimized</span>
                       </div>
                       <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-100 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-400 shadow-sm">
                          <FileDown className="w-3 h-3 text-blue-500/70" />
                          <span>PDF Format</span>
                       </div>
                       <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-100 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-400 shadow-sm">
                          <Zap className="w-3 h-3 text-amber-500/70" />
                          <span>Instant</span>
                       </div>
                    </div>
                  </div>

                  <div className="w-full max-w-2xl px-4">
                    {activeMode === 'cover-letter' ? (
                       <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
                             <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-blue-600" />
                                <span className="text-[11px] font-black uppercase tracking-widest text-slate-900">Generated Cover Letter</span>
                             </div>
                             <button 
                                onClick={() => {
                                  const text = PublicConfig.sections.coverLetter.items[0].cl;
                                  navigator.clipboard.writeText(text);
                                }}
                                className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-600 hover:bg-slate-900 hover:text-white transition-all underline-none"
                             >
                                Copy Text
                             </button>
                          </div>
                          <div className="p-8">
                             <div className="bg-slate-50/50 rounded-xl p-6 border border-slate-100">
                                <p className="text-sm text-slate-700 leading-relaxed font-serif whitespace-pre-wrap select-all">
                                  {PublicConfig.sections.coverLetter.items[0].cl}
                                </p>
                             </div>
                             <div className="mt-6 flex items-center gap-2 justify-center text-red-500 bg-red-50 py-2 rounded-lg border border-red-100">
                                <X className="w-3 h-3" />
                                <span className="text-[9px] font-black uppercase tracking-widest">Direct editing disabled • Copy to continue</span>
                             </div>
                          </div>
                       </div>
                    ) : (
                      <div className="relative group mx-auto">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-amber-500/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-slate-100 w-full max-w-[280px] mx-auto flex flex-col items-center text-center gap-6 group-hover:scale-[1.02] transition-transform duration-500">
                           <div className={`w-24 h-24 rounded-2xl ${selectedColor.light} flex items-center justify-center text-blue-600 border border-slate-100 relative shadow-inner`}>
                              <Files className="w-12 h-12 opacity-10 absolute scale-150 rotate-12" />
                              <FileText className={`w-10 h-10 ${selectedColor.text}`} />
                              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 text-white rounded-xl flex items-center justify-center shadow-lg border-2 border-white">
                                 <CheckCircle2 className="w-5 h-5" />
                              </div>
                           </div>

                           <div className="space-y-1">
                              <h3 className="text-base font-extrabold text-slate-900">
                                 {activeMode === 'resume' ? 'Master CV.pdf' : 'Translated CV.pdf'}
                              </h3>
                              <p className="text-slate-400 font-medium text-[10px]">High Resolution • ATS Compatible</p>
                           </div>

                           <div className="w-full space-y-2">
                              <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 active:scale-[0.98] group">
                                 <FileDown className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                                 Download PDF
                              </button>
                              <button className="w-full bg-white text-slate-600 py-2.5 rounded-xl font-bold text-xs border border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                                 <Plus className="w-3.5 h-3.5" />
                                 Save to Library
                              </button>
                           </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col items-center gap-6 mt-8">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Share results</p>
                     <div className="flex gap-4">
                        {['LinkedIn', 'Email', 'Copy Link'].map(platform => (
                          <button key={platform} className="px-5 py-2.5 bg-white rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:border-blue-200 hover:text-blue-600 transition-all shadow-sm">
                            {platform}
                          </button>
                        ))}
                     </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-transparent py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
           <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mb-8">
              <Link to="/about" className="text-[12px] text-slate-500 hover:text-blue-600 transition-colors font-medium tracking-wide">About</Link>
              <Link to="/privacy-policy" className="text-[12px] text-slate-500 hover:text-blue-600 transition-colors font-medium tracking-wide">Privacy</Link>
              <Link to="/terms" className="text-[12px] text-slate-500 hover:text-blue-600 transition-colors font-medium tracking-wide">Terms</Link>
              <Link to="/cookies" className="text-[12px] text-slate-500 hover:text-blue-600 transition-colors font-medium tracking-wide">Cookies</Link>
              <Link to="/data-deletion" className="text-[12px] text-slate-500 hover:text-blue-600 transition-colors font-medium tracking-wide">Data Deletion</Link>
              <Link to="/impressum" className="text-[12px] text-slate-500 hover:text-blue-600 transition-colors font-medium tracking-wide">Impressum</Link>
           </div>
           
           <div className="flex flex-col items-center gap-4 text-center">
              <p className="text-[12px] text-slate-400 font-medium">
                 &copy; 2026 EuropeCV<span className="text-blue-600">.</span> All rights reserved.
              </p>
           </div>
        </div>
      </footer>
    </div>
  );
}
