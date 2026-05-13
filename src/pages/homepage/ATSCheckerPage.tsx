import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Upload, 
  Shield, 
  Zap, 
  CheckCircle2, 
  FileText, 
  Lock, 
  PieChart, 
  Clock, 
  AlertCircle,
  FileCheck,
  Search,
  MessageSquare,
  ArrowRight,
  Download,
  Share2,
  Mail,
  Gift
} from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { supabase } from '../../lib/supabase';

const icons = [
  { icon: <Clock className="w-5 h-5 text-blue-400" />, label: "Free & Instant" },
  { icon: <UserMinus className="w-5 h-5 text-blue-400" />, label: "No Account Needed" },
  { icon: <Lock className="w-5 h-5 text-blue-400" />, label: "Private and Secured" },
  { icon: <PieChart className="w-5 h-5 text-blue-400" />, label: "Accurate AI-Scoring" },
];

function UserMinus(props: any) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="22" y1="11" x2="16" y2="11" />
    </svg>
  );
}

export function ATSCheckerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      handleFileSelected(selectedFile);
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const selectedFile = e.dataTransfer.files[0];
      handleFileSelected(selectedFile);
    }
  };

  const handleFileSelected = (selectedFile: File) => {
    setErrorMessage(null);
    if (selectedFile.size > 10 * 1024 * 1024) {
      setErrorMessage('File size must be less than 10MB.');
      return;
    }
    if (selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      uploadFile(selectedFile);
    } else {
      setErrorMessage('Please upload a PDF file.');
    }
  };

  const uploadFile = async (selectedFile: File) => {
    setIsAnalyzing(true);
    setErrorMessage(null);
    try {
      const formData = new FormData();
      formData.append('resume', selectedFile);

      const response = await fetch('/api/ats-checker', {
        method: 'POST',
        body: formData
      });
      
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || 'Failed to analyze resume.');
      }
      
      const data = await response.json();
      
      if (!data.isResume) {
        setErrorMessage("You didn't upload a valid resume. The file has been rejected.");
        setIsAnalyzing(false);
        setFile(null);
        return;
      }
      
      setAnalysisResult(data);
      setIsAnalyzing(false);

    } catch (error: any) {
      setErrorMessage(error.message || 'Error processing file.');
      setIsAnalyzing(false);
      setFile(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 sm:pt-32 pb-20">
      <SEO 
        title="Free AI ATS Resume Checker | Score Your CV | EuropeCV"
        description="Check your resume’s ATS score against European job descriptions. Get instant AI insights to optimize keywords and beat automated recruiter filters."
      />

      {/* Analysis Loading Modal */}
      <AnimatePresence>
        {isAnalyzing && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-xl rounded-[40px] overflow-hidden shadow-2xl relative"
            >
              {/* Progress Bar (Visual Only) */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-100 overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                  className="h-full bg-blue-600 w-full"
                />
              </div>

              <div className="p-8 sm:p-12">
                 <div className="text-center mb-10">
                    <div className="relative w-20 h-20 mx-auto mb-6">
                       <div className="absolute inset-0 border-4 border-slate-50 rounded-full"></div>
                       <motion.div 
                         animate={{ rotate: 360 }}
                         transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                         className="absolute inset-0 border-4 border-transparent border-t-blue-600 rounded-full"
                       />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <Search className="w-8 h-8 text-blue-600" />
                       </div>
                    </div>
                    <h2 className="text-2xl font-black text-slate-900 mb-3 uppercase tracking-tight">Analyzing Your Resume</h2>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-black uppercase tracking-widest border border-amber-100">
                      <Clock className="w-3.5 h-3.5" /> Guest Wait Time: 2-5 Minutes
                    </div>
                 </div>

                 {/* Information Box */}
                 <div className="bg-slate-50 rounded-[28px] p-8 border border-slate-100 mb-8">
                    <div className="space-y-6">
                       <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">
                             <Zap className="w-5 h-5" />
                          </div>
                          <div>
                             <h3 className="text-sm font-black text-slate-900 mb-1">Save time with a Free Account</h3>
                             <p className="text-xs text-slate-500 font-medium leading-relaxed">Logged-in users get priority processing. Join now and claim <span className="text-blue-600 font-bold">3 Free Credits</span> to use all premium features.</p>
                          </div>
                       </div>

                       <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-lg shadow-slate-900/10">
                             <Shield className="w-5 h-5" />
                          </div>
                          <div>
                             <h3 className="text-sm font-black text-slate-900 mb-1">Get the full Premium Report</h3>
                             <p className="text-xs text-slate-500 font-medium leading-relaxed">Instant deep-scan using <span className="text-slate-900 font-bold text-xs uppercase tracking-tighter">GPT-4o, Claude 3.5 & Gemini 2.0</span> for 100% accurate European ATS matching.</p>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Actions */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-3 py-4 px-6 bg-white border border-slate-200 rounded-2xl font-bold text-sm text-slate-700 hover:bg-slate-50 transition-all active:scale-95 shadow-sm">
                       <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
                       Sign up with Google
                    </button>
                    <Link to="/pricing" className="flex items-center justify-center gap-3 py-4 px-6 bg-blue-600 text-white rounded-2xl font-bold text-sm hover:bg-blue-700 transition-all active:scale-95 shadow-xl shadow-blue-600/20">
                       <Zap className="w-5 h-5" />
                       Buy Premium Plan
                    </Link>
                 </div>
                 
                 <div className="mt-8 text-center">
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest flex items-center justify-center gap-2">
                       <Lock className="w-3 h-3" /> Encrypted & Secure Upload
                    </p>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch mb-16">
          
          {/* Left Side: Dark Hero Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-900 rounded-[32px] p-8 sm:p-12 text-white relative overflow-hidden flex flex-col justify-between min-h-[500px]"
          >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] -z-0"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest mb-8">
                <Zap className="w-3.5 h-3.5" /> Free
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] mb-6">
                Will Your Resume Pass <span className="text-blue-400">ATS Scanners?</span>
              </h1>
              
              <p className="text-slate-400 text-lg leading-relaxed font-medium mb-10">
                80% of resumes are filtered out by Applicant Tracking Systems (ATS) before reaching a recruiter. Upload your resume to instantly check if it is ATS-friendly and optimized for modern European job applications.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-2 gap-6 pt-8 border-t border-slate-800">
               {icons.map((item, i) => (
                 <div key={i} className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center text-blue-400">
                     {item.icon}
                   </div>
                   <span className="text-xs font-bold text-slate-300">{item.label}</span>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* Right Side: Upload Zone */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center relative group"
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDrop}
          >
            <div className="absolute inset-4 rounded-[24px] border-2 border-dashed border-slate-100 group-hover:border-blue-200 transition-colors -z-0"></div>
            
            <div className="relative z-10 w-full max-w-sm">
               {errorMessage && (
                 <motion.div 
                   initial={{ opacity: 0, y: -10 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-3 text-left"
                 >
                   <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                   <div className="text-sm font-medium text-red-900 leading-snug">
                     {errorMessage.includes('valid resume') ? (
                       errorMessage
                     ) : (
                       <span>
                         We’re handling a large number of requests right now.{" "}
                         <Link to="/login" className="text-blue-600 font-bold underline hover:text-blue-700 transition-colors">
                           Create a free account
                         </Link>{" "}
                         for priority access or try again later.
                       </span>
                     )}
                   </div>
                 </motion.div>
               )}

               {!isAnalyzing && !analysisResult && (
                 <>
                   <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Upload className="w-8 h-8 text-blue-600" />
                   </div>
                   <h2 className="text-2xl font-black text-slate-900 mb-2">Upload Resume</h2>
                   <p className="text-slate-500 font-medium text-sm mb-8">
                     Drag and drop your resume here, or click to browse. <br/>
                     <span className="text-blue-600 font-bold">Only PDF files supported.</span>
                   </p>
                   
                   <label className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl font-bold cursor-pointer hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-600/20 text-sm">
                     <span>Choose File</span>
                     <input 
                       type="file" 
                       className="hidden" 
                       accept=".pdf"
                       onChange={handleFileChange}
                     />
                   </label>
                 </>
               )}

               {isAnalyzing && (
                 <div className="py-12">
                   <div className="relative w-24 h-24 mx-auto mb-8">
                      <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-4 border-transparent border-t-blue-600 rounded-full"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Search className="w-8 h-8 text-blue-600" />
                      </div>
                   </div>
                   <h2 className="text-2xl font-black text-slate-900 mb-2 font-black uppercase tracking-tight">Analyzing Resume...</h2>
                   <p className="text-slate-500 font-medium text-sm">Running 28+ ATS compatibility checks</p>
                 </div>
               )}

               {analysisResult && (
                 <div className="py-8">
                   <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center mx-auto mb-6 transform scale-125">
                      <FileCheck className="w-8 h-8 text-emerald-600" />
                   </div>
                   <h2 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">Analysis Complete!</h2>
                   <p className="text-slate-500 font-medium mb-8 text-sm">Scroll down to see your full report.</p>
                   <button 
                    onClick={() => {
                      setFile(null);
                      setAnalysisResult(null);
                    }}
                    className="text-slate-400 font-bold text-xs hover:text-slate-900 transition-colors uppercase tracking-widest"
                   >
                     Clear and Upload Another
                   </button>
                 </div>
               )}
            </div>
          </motion.div>
        </div>

        {/* Post-Upload Analysis Result Template */}
        <AnimatePresence>
          {analysisResult && (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Score Banner - Modern Category Version */}
              <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm flex flex-col lg:flex-row items-center gap-12">
                 <div className="relative w-40 h-40 shrink-0">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                       <circle className="text-slate-100" strokeWidth="8" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
                       <motion.circle 
                         initial={{ strokeDasharray: "0 251.2" }}
                         animate={{ strokeDasharray: `${((analysisResult?.GlobalScore?.total || 0) / 100) * 251.2} 251.2` }}
                         transition={{ duration: 1, delay: 0.5 }}
                         className="text-blue-600" 
                         strokeWidth="8" 
                         strokeLinecap="round" 
                         stroke="currentColor" 
                         fill="transparent" 
                         r="40" cx="50" cy="50" 
                       />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                       <span className="text-4xl font-black text-slate-900">{analysisResult?.GlobalScore?.total || 0}</span>
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Score</span>
                    </div>
                 </div>
                 
                 <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                       <div>
                          <h3 className="text-2xl font-black text-slate-900 mb-1">{file?.name}</h3>
                          <div className="flex items-center gap-3 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                             <Clock className="w-3 h-3" /> {new Date().toLocaleDateString()}
                             <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                             <FileText className="w-3 h-3" /> PDF Document
                          </div>
                       </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                       {[
                         { label: 'Design', score: analysisResult?.GlobalScore?.design || 0, color: 'blue' },
                         { label: 'Structure', score: analysisResult?.GlobalScore?.structure || 0, color: 'blue' },
                         { label: 'Content', score: analysisResult?.GlobalScore?.content || 0, color: 'blue' }
                       ].map((cat, i) => (
                         <div key={i} className="space-y-2">
                            <div className="flex items-center justify-between">
                               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{cat.label}</span>
                               <span className="text-sm font-black text-slate-900">{cat.score}%</span>
                            </div>
                            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                               <motion.div 
                                 initial={{ width: 0 }}
                                 animate={{ width: `${cat.score}%` }}
                                 className="h-full bg-blue-600"
                               />
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              {/* Priority Improvements Section */}
              <div>
                <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    <Zap className="w-4 h-4" />
                  </span>
                  Priority Improvements
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                   {/* 1. Very High Problem */}
                   <div className="bg-red-50/50 p-6 rounded-[24px] border border-red-100 flex gap-5">
                      <div className="shrink-0 w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center">
                        <AlertCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-[9px] font-black text-red-600 uppercase tracking-[0.2em] mb-1">Critical Issue</div>
                        <h4 className="text-lg font-bold text-slate-900 mb-1">{analysisResult?.KeyImprovement?.CriticalIssue?.Title || 'Improvement Needed'}</h4>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">{analysisResult?.KeyImprovement?.CriticalIssue?.Description || 'Our scan found some areas where your resume could be strengthened for European ATS standards.'}</p>
                      </div>
                   </div>

                   {/* 2. One Good */}
                   <div className="bg-emerald-50/50 p-6 rounded-[24px] border border-emerald-100 flex gap-5">
                      <div className="shrink-0 w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-[9px] font-black text-emerald-600 uppercase tracking-[0.2em] mb-1">High Accuracy</div>
                        <h4 className="text-lg font-bold text-slate-900 mb-1">{analysisResult?.KeyImprovement?.HighAccuracy?.Title || 'Strong Foundation'}</h4>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">{analysisResult?.KeyImprovement?.HighAccuracy?.Description || 'Your resume shows good structure and clear contact information.'}</p>
                      </div>
                   </div>
                </div>
              </div>

              {/* Unlock Full Analysis Gated Section */}
              <div className="pt-8">
                 <div className="text-center mb-10">
                    <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">Unlock Your Full Analysis</h2>
                    <p className="text-slate-500 font-medium max-w-lg mx-auto">Get the complete 28-point compatibility report, keyword optimization list, and professional rewriting tips.</p>
                 </div>

                 <div className="grid lg:grid-cols-2 gap-12 items-start mt-12 bg-white rounded-[40px] border border-slate-200 overflow-hidden shadow-2xl shadow-slate-200/50">
                    {/* Left: Blurry Analysis Preview */}
                    <div className="p-8 lg:p-12 relative overflow-hidden bg-slate-50">
                       <div className="space-y-8 filter blur-[6px] opacity-40 select-none pointer-events-none">
                          <div className="space-y-4">
                             <div className="h-6 bg-slate-200 rounded-lg w-2/3"></div>
                             <div className="h-4 bg-slate-100 rounded-lg w-full"></div>
                             <div className="h-4 bg-slate-100 rounded-lg w-5/6"></div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                             {[1,2,3,4].map(i => (
                               <div key={i} className="h-32 bg-white rounded-2xl border border-slate-100"></div>
                             ))}
                          </div>
                          <div className="space-y-3">
                             <div className="h-4 bg-slate-200 rounded-lg w-1/2"></div>
                             <div className="h-10 bg-blue-100 rounded-xl w-full"></div>
                          </div>
                       </div>
                       
                       <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-white/10 backdrop-blur-[2px]">
                          <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center text-white mb-6 shadow-xl shadow-blue-600/30">
                             <Lock className="w-8 h-8" />
                          </div>
                          <h3 className="text-2xl font-black text-slate-900 mb-2">24 Points Still Locked</h3>
                          <p className="text-slate-500 text-sm font-medium">Join 50,000+ candidates who optimized their resume today.</p>
                       </div>
                    </div>

                    {/* Right: Login Form (from LoginPage.tsx style) */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                       <div className="max-w-sm mx-auto w-full">
                          <div className="text-center mb-8">
                            <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2">Create your account</h3>
                            <p className="text-slate-500 text-xs font-medium">Unlock your full report in seconds</p>
                          </div>

                          <div className="space-y-4 mb-8">
                             <button className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white border border-slate-200 rounded-xl font-bold text-sm text-slate-700 hover:bg-slate-50 transition-all active:scale-95 shadow-sm">
                                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
                                Continue with Google
                             </button>
                             <button className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-900/10">
                                <Mail className="w-5 h-5" />
                                Continue with Email
                             </button>
                          </div>

                          <div className="relative py-2 mb-8">
                             <div className="absolute inset-0 flex items-center">
                               <div className="w-full border-t border-slate-100"></div>
                             </div>
                             <div className="relative flex justify-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
                               <span className="bg-white px-3">Secure & Private</span>
                             </div>
                          </div>

                          <div className="flex flex-col gap-4 text-center">
                             <Link to="/login" className="text-blue-600 font-black text-xs uppercase tracking-widest hover:underline">
                                Already have an account? Sign In
                             </Link>
                             <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
                                No credit card required. Free analysis for up to 3 resumes per month.
                             </p>
                             
                             <div className="mt-4 pt-6 border-t border-slate-50 flex items-center justify-center gap-3">
                               <div className="w-8 h-8 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 shrink-0 border border-orange-100/50 shadow-sm shadow-orange-100/50">
                                 <Gift className="w-4 h-4" />
                               </div>
                               <p className="text-[11px] font-black text-slate-600 leading-tight uppercase tracking-wide">
                                 Claim free 3 credits to build your resume
                               </p>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>


      </div>
    </div>
  );
}
