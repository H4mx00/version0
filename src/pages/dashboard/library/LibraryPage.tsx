import React from 'react';
import { 
  FolderIcon, 
  FileText, 
  Mail, 
  Languages, 
  Trash2, 
  RefreshCw, 
  Download,
  AlertCircle,
  X,
  Plus
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { PrivateConfig } from '../../../config/PrivateConfig';
import { SEO } from '../../../components/common/SEO';

interface LibraryItem {
  id: string;
  type: 'file' | 'cv' | 'letter' | 'translation';
  name: string;
  date: string;
  status: 'Completed' | 'Draft';
}

export function LibraryPage() {
  const [activeTab, setActiveTab] = React.useState<'all' | 'file' | 'cv' | 'letter' | 'translation'>('all');
  const [showRegenModal, setShowRegenModal] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState<LibraryItem | null>(null);

  const items: LibraryItem[] = [
    { id: '1', type: 'cv', name: 'Software Engineer Resume', date: 'Oct 24, 2023', status: 'Completed' },
    { id: '2', type: 'letter', name: 'Google Application Letter', date: 'Oct 22, 2023', status: 'Completed' },
    { id: '3', type: 'translation', name: 'French Resume Version', date: 'Oct 20, 2023', status: 'Completed' },
    { id: '4', type: 'file', name: 'Original_CV_Final.pdf', date: 'Oct 15, 2023', status: 'Completed' },
  ];

  const filteredItems = items.filter(item => {
    if (activeTab === 'all') return true;
    return item.type === activeTab;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'file': return <FolderIcon className="w-4 h-4 text-slate-500" />;
      case 'cv': return <FileText className="w-4 h-4 text-blue-500" />;
      case 'letter': return <Mail className="w-4 h-4 text-emerald-500" />;
      case 'translation': return <Languages className="w-4 h-4 text-indigo-500" />;
      default: return <FolderIcon className="w-4 h-4 text-slate-500" />;
    }
  };

  const handleRegenClick = (item: LibraryItem) => {
    setSelectedItem(item);
    setShowRegenModal(true);
  };

  return (
    <div className="flex-1 lg:pl-64 flex flex-col pt-16 lg:pt-0">
      <SEO 
        title="My Library | EuropeCV"
        description="Access and manage your generated resumes, cover letters, and translated documents."
        noindex
      />
      <main className="flex-1 p-4 sm:p-8">
        <div className="max-w-4xl mx-auto mt-10 md:mt-16">
          
          <div className="space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-2">
              <div>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  My <span className="text-blue-600 relative inline-block">
                    Library
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="absolute -bottom-1 left-0 h-1.5 bg-blue-500/30 rounded-full"
                    />
                  </span>
                </h1>
                <p className="text-slate-500 mt-2 text-base">{PrivateConfig.library.subtitle}</p>
              </div>

              <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200 shadow-sm">
                {(['all', 'file', 'cv', 'letter', 'translation'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all ${
                      activeTab === tab ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {PrivateConfig.library.tabs[tab]}
                  </button>
                ))}
              </div>
            </div>

            {/* History Table */}
            <section className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50/50 border-b border-slate-100">
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{PrivateConfig.library.table.name}</th>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{PrivateConfig.library.table.date}</th>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{PrivateConfig.library.table.status}</th>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">{PrivateConfig.library.table.actions}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredItems.map((item) => (
                      <tr key={item.id} className="border-b border-slate-50 hover:bg-slate-50/30 transition-colors group">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-slate-100/80 flex items-center justify-center shrink-0">
                              {getIcon(item.type)}
                            </div>
                            <span className="text-sm font-bold text-slate-900 truncate max-w-[200px]">{item.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{item.date}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-widest border border-emerald-100">
                             <div className="w-1 h-1 rounded-full bg-emerald-500"></div>
                             {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2">
                            {item.type !== 'file' && (
                              <button 
                                onClick={() => handleRegenClick(item)}
                                className="p-2 rounded-lg text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all font-bold" 
                                title="Regenerate"
                              >
                                <RefreshCw className="w-4 h-4" />
                              </button>
                            )}
                            <button className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all" title="Delete">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {filteredItems.length === 0 && (
                <div className="p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-4 border border-slate-100">
                    <FolderIcon className="w-8 h-8 text-slate-300" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{PrivateConfig.library.empty.title}</h3>
                  <p className="text-slate-400 text-sm font-medium mt-1">{PrivateConfig.library.empty.subtitle}</p>
                </div>
              )}
            </section>

            {/* Action Buttons */}
            {activeTab !== 'all' && (
              <div className="flex items-center justify-center pt-8">
                {activeTab === 'file' && (
                  <button className="px-8 py-3.5 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center gap-3 active:scale-95">
                    <Plus className="w-4 h-4" />
                    {PrivateConfig.library.actions.file}
                  </button>
                )}
                {activeTab === 'cv' && (
                  <button className="px-8 py-3.5 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center gap-3 active:scale-95">
                    <Plus className="w-4 h-4" />
                    {PrivateConfig.library.actions.cv}
                  </button>
                )}
                {activeTab === 'letter' && (
                  <button className="px-8 py-3.5 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center gap-3 active:scale-95">
                    <Plus className="w-4 h-4" />
                    {PrivateConfig.library.actions.letter}
                  </button>
                )}
                {activeTab === 'translation' && (
                  <button className="px-8 py-3.5 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center gap-3 active:scale-95">
                    <Plus className="w-4 h-4" />
                    {PrivateConfig.library.actions.translation}
                  </button>
                )}
              </div>
            )}

          </div>
        </div>
      </main>

      {/* Regeneration Modal */}
      <AnimatePresence>
        {showRegenModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowRegenModal(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-[2.5rem] p-8 shadow-2xl border border-slate-200"
            >
              <button 
                onClick={() => setShowRegenModal(false)}
                className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 mb-6 border border-amber-100">
                  <AlertCircle className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2">{PrivateConfig.regenModal.title}</h3>
                <p className="text-slate-500 font-bold text-sm leading-relaxed mb-8">
                  {PrivateConfig.regenModal.desc} "<span className="text-slate-900">{selectedItem?.name}</span>"?
                </p>

                <div className="grid grid-cols-2 gap-4 w-full">
                  <button 
                    onClick={() => setShowRegenModal(false)}
                    className="w-full py-4 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-500 bg-slate-100 hover:bg-slate-200 transition-all"
                  >
                    {PrivateConfig.regenModal.cancel}
                  </button>
                  <button 
                    onClick={() => {
                      // Handle regen logic
                      setShowRegenModal(false);
                    }}
                    className="w-full py-4 rounded-2xl text-xs font-black uppercase tracking-widest text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25 transition-all"
                  >
                    {PrivateConfig.regenModal.confirm}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
