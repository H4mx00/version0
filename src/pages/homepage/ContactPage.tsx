import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, Send, Clock, User, HelpCircle
} from 'lucide-react';
import { SEO } from '../../components/common/SEO';

export function ContactPage() {
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  React.useEffect(() => {
    document.title = "Contact Us | EuropeCV - AI Career Catalyst";
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 sm:pt-28 pb-16">
      <SEO 
        title="Contact Us | Professional Support | EuropeCV"
        description="Get in touch with our team for any questions regarding our AI resume builder or career tools. We're here to help you succeed in the European market."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
            >
              Get in <span className="text-blue-600">Touch</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 font-medium max-w-2xl mx-auto"
            >
              Have questions about our AI resume builder or need help with your career documents? We're here to help you succeed.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Info Section */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Support Response</h3>
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                   <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                         <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                         <p className="text-slate-900 font-bold mb-1">Response Time</p>
                         <p className="text-sm text-slate-500 leading-relaxed">
                            We respond as quick as we can between <span className="text-blue-600 font-bold">24-72 hours</span> depending on the complexity of the problem.
                         </p>
                      </div>
                   </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Direct Contact</h3>
                <div className="space-y-4">
                   <a href="mailto:support@europecv.io" className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors group">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                         <Mail className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Us</p>
                         <p className="text-slate-900 font-bold">support@europecv.io</p>
                      </div>
                   </a>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:col-span-3 bg-white rounded-[32px] border border-slate-200 shadow-2xl p-8"
            >
              {status === 'success' ? (
                <div className="text-center py-12">
                   <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <Mail className="w-10 h-10" />
                   </div>
                   <h2 className="text-2xl font-black text-slate-900 mb-4">Message Sent!</h2>
                   <p className="text-slate-600 font-medium mb-8">
                      Thank you for reaching out. We've received your inquiry and will get back to you within 24-72 hours.
                   </p>
                   <button 
                    onClick={() => setStatus('idle')}
                    className="px-8 py-3 bg-blue-600 text-white font-black text-sm rounded-xl hover:bg-blue-700 transition-all"
                   >
                     Send Another Message
                   </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input 
                          type="text" 
                          id="name"
                          required
                          placeholder="John Doe"
                          className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border-none rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-300"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input 
                          type="email" 
                          id="email"
                          required
                          placeholder="john@example.com"
                          className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border-none rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-300"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="topic" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Select Topic</label>
                    <div className="relative">
                      <HelpCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <select 
                        id="topic"
                        required
                        className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border-none rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Choose a topic...</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="billing">Billing & Subscription</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="feedback">Feature Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                    <textarea 
                      id="message"
                      required
                      placeholder="How can we help you?"
                      rows={5}
                      className="w-full px-4 py-3.5 bg-slate-50 border-none rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-300 resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 bg-blue-600 text-white font-black text-sm rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4 animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                  
                  <p className="text-[10px] text-slate-400 text-center font-medium">
                    By submitting this form, you agree to our Privacy Policy.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
