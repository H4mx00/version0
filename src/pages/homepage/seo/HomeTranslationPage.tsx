import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, ArrowRight, Upload, RefreshCw
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { getFAQsByTitle } from '../../../constants/faqData';
import { SEO } from '../../../components/common/SEO';

const Underline = ({ color = "bg-blue-500/30" }) => (
  <motion.div 
    initial={{ width: 0 }}
    whileInView={{ width: '100%' }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.5 }}
    className={`absolute -bottom-1 left-0 h-1.5 ${color} rounded-full`}
  />
);

interface HomeTranslationPageProps {
  title?: string;
}

export function HomeTranslationPage({ title }: HomeTranslationPageProps) {
  const displayTitle = title || "Translate Your CV";
  const [selectedLang, setSelectedLang] = React.useState('en');

  const targetLangs = [
    { id: 'en', n: 'English', f: 'gb', c: 'EN' },
    { id: 'de', n: 'German', f: 'de', c: 'DE' },
    { id: 'fr', n: 'French', f: 'fr', c: 'FR' },
    { id: 'es', n: 'Spanish', f: 'es', c: 'ES' },
    { id: 'it', n: 'Italian', f: 'it', c: 'IT' },
    { id: 'pt', n: 'Portuguese', f: 'pt', c: 'PT' },
    { id: 'nl', n: 'Dutch', f: 'nl', c: 'NL' },
    { id: 'se', n: 'Swedish', f: 'se', c: 'SE' },
    { id: 'dk', n: 'Danish', f: 'dk', c: 'DK' },
    { id: 'no', n: 'Norwegian', f: 'no', c: 'NO' },
    { id: 'fi', n: 'Finnish', f: 'fi', c: 'FI' },
    { id: 'pl', n: 'Polish', f: 'pl', c: 'PL' },
    { id: 'cz', n: 'Czech', f: 'cz', c: 'CZ' },
    { id: 'sk', n: 'Slovak', f: 'sk', c: 'SK' },
    { id: 'hu', n: 'Hungarian', f: 'hu', c: 'HU' },
    { id: 'ro', n: 'Romanian', f: 'ro', c: 'RO' },
    { id: 'gr', n: 'Greek', f: 'gr', c: 'GR' },
    { id: 'bg', n: 'Bulgarian', f: 'bg', c: 'BG' },
    { id: 'hr', n: 'Croatian', f: 'hr', c: 'HR' },
    { id: 'rs', n: 'Serbian', f: 'rs', c: 'RS' },
    { id: 'si', n: 'Slovenian', f: 'si', c: 'SI' },
    { id: 'lt', n: 'Lithuanian', f: 'lt', c: 'LT' },
    { id: 'lv', n: 'Latvian', f: 'lv', c: 'LV' },
    { id: 'ee', n: 'Estonian', f: 'ee', c: 'EE' },
  ];

  const getTargetLang = (pageTitle: string) => {
    const t = pageTitle.toLowerCase();
    const found = targetLangs.find(l => 
      t.includes(l.n.toLowerCase()) || 
      t.includes(l.id) || 
      (l.id === 'en' && t.includes('english')) ||
      (l.id === 'de' && t.includes('deutsch')) ||
      (l.id === 'fr' && t.includes('français')) ||
      (l.id === 'es' && t.includes('español')) ||
      (l.id === 'it' && (t.includes('italiano') || t.includes('tradurre'))) ||
      (l.id === 'pt' && t.includes('português')) ||
      (l.id === 'nl' && t.includes('nederlands')) ||
      (l.id === 'se' && t.includes('svenska')) ||
      (l.id === 'dk' && t.includes('dansk')) ||
      (l.id === 'no' && t.includes('norsk')) ||
      (l.id === 'fi' && t.includes('suomi')) ||
      (l.id === 'pl' && t.includes('polski')) ||
      (l.id === 'cz' && t.includes('čeština')) ||
      (l.id === 'sk' && t.includes('slovenčina')) ||
      (l.id === 'hu' && t.includes('magyar')) ||
      (l.id === 'ro' && t.includes('română')) ||
      (l.id === 'gr' && t.includes('ελληνικά')) ||
      (l.id === 'bg' && t.includes('български')) ||
      (l.id === 'hr' && t.includes('hrvatski')) ||
      (l.id === 'rs' && t.includes('srpski')) ||
      (l.id === 'si' && t.includes('slovenščina')) ||
      (l.id === 'lt' && t.includes('lietuvių')) ||
      (l.id === 'lv' && t.includes('latviešu')) ||
      (l.id === 'ee' && (t.includes('tõlkimine') || t.includes('eesti')))
    );
    return found || targetLangs[0];
  };

  const previewTranslations: Record<string, { s1: string, s2: string }> = {
    'EN': { s1: '"Spearheaded a team of financial analysts..."', s2: '"Optimized reporting cycle by 40%..."' },
    'DE': { s1: '"Leitung eines Teams von Finanzanalysten..."', s2: '"Optimierung des Berichtszyklus um 40%..."' },
    'FR': { s1: '"Direction d\'une équipe d\'analystes financiers..."', s2: '"Optimisation du cycle de reporting de 40%..."' },
    'ES': { s1: '"Liderazgo de un equipo de analistas financieros..."', s2: '"Optimización del ciclo de informes en un 40%..."' },
    'IT': { s1: '"Guida di un team di analisti finanziari..."', s2: '"Ottimizzazione del ciclo di reporting del 40%..."' },
    'PT': { s1: '"Liderança de uma equipa de analistas financeiros..."', s2: '"Melhoria do ciclo de relatórios em 40%..."' },
    'NL': { s1: '"Leiding geven aan een team van financieel analisten..."', s2: '"Rapportagecyclus met 40% geoptimaliseerd..."' },
    'SE': { s1: '"Ledde ett team av finansanalytiker..."', s2: '"Optimerade rapporteringscykeln med 40%..."' },
    'DK': { s1: '"Ledte et team af finansanalytikere..."', s2: '"Optimerede rapporteringscyklussen med 40%..."' },
    'NO': { s1: '"Ledet et team med finansanalytikere..."', s2: '"Optimaliserte rapporteringssyklusen med 40%..."' },
    'FI': { s1: '"Johti talousanalyytikkotiimiä..."', s2: '"Optimoi raportointisyklin 40 %:lla..."' },
    'PL': { s1: '"Kierowanie zespołem analityków finansowych..."', s2: '"Optymalizacja cyklu raportowania o 40%..."' },
    'CZ': { s1: '"Vedení týmu finančních analytiků..."', s2: '"Optimalizace reportovacího cyklu o 40%..."' },
    'SK': { s1: '"Vedenie tímu finančných analytikov..."', s2: '"Optimalizácia reportovacieho cyklu o 40%..."' },
    'HU': { s1: '"Pénzügyi elemzői csapat vezetése..."', s2: '"A jelentési ciklus 40%-os optimalizálása..."' },
    'RO': { s1: '"Conducerea unei echipe de analiști financiari..."', s2: '"Optimizarea ciclului de raportare cu 40%..."' },
    'GR': { s1: '"Καθοδήγηση ομάδας οικονομικών αναλυτών..."', s2: '"Βελτιστοποίηση κύκλου αναφορών κατά 40%..."' },
    'BG': { s1: '"Ръководене на екип от финансови анализатори..."', s2: '"Оптимизиране на цикъла на отчитане с 40%..."' },
    'HR': { s1: '"Vođenje tima financijskih analitičara..."', s2: '"Optimizacija ciklusa izvještavanja za 40%..."' },
    'RS': { s1: '"Vođenje tima finansijskih analitičara..."', s2: '"Optimizacija ciklusa izveštavanja za 40%..."' },
    'SI': { s1: '"Vodenje ekipe finančnih analitikov..."', s2: '"Optimizacija poročevalskega cikla za 40 %..."' },
    'LT': { s1: '"Vadovavimas finansų analitikų komandai..."', s2: '"Ataskaitų teikimo ciklo optimizavimas 40 %..."' },
    'LV': { s1: '"Finanšu analītiķu komandas vadīšana..."', s2: '"Atskaitīšanas cikla optimizēšana par 40%..."' },
    'EE': { s1: '"Finantsanalüütikute meeskonna juhtimine..."', s2: '"Aruandlustsükli optimeerimine 40% võrra..."' },
  };

  const previewLabels: Record<string, { job: string, profile: string, exp: string, present: string }> = {
    'EN': { job: 'Financial Controller', profile: 'Professional Profile', exp: 'Experience', present: 'Present' },
    'DE': { job: 'Finanzcontroller', profile: 'Beruflicher Werdegang', exp: 'Erfahrung', present: 'Aktuell' },
    'FR': { job: 'Contrôleur Financier', profile: 'Profil Professionnel', exp: 'Expérience', present: 'Présent' },
    'ES': { job: 'Controlador Financiero', profile: 'Perfil Profesional', exp: 'Experiencia', present: 'Presente' },
    'IT': { job: 'Controller Finanziario', profile: 'Profilo Professionale', exp: 'Esperienza', present: 'Presente' },
    'PT': { job: 'Controller Financeiro', profile: 'Perfil Profissional', exp: 'Experiência', present: 'Presente' },
    'NL': { job: 'Financieel Controller', profile: 'Professioneel Profiel', exp: 'Werkervaring', present: 'Heden' },
    'SE': { job: 'Financial Controller', profile: 'Professionell Profil', exp: 'Erfarenhet', present: 'Nuvarande' },
    'DK': { job: 'Financial Controller', profile: 'Professionel Profil', exp: 'Erfaring', present: 'Nuværende' },
    'NO': { job: 'Financial Controller', profile: 'Profesjonell Profil', exp: 'Erfaring', present: 'Nåværende' },
    'FI': { job: 'Talouspäällikkö', profile: 'Ammatillinen profiili', exp: 'Työkokemus', present: 'Nykyinen' },
    'PL': { job: 'Kontroler Finansowy', profile: 'Profil Zawodowy', exp: 'Doświadczenie', present: 'Obecnie' },
    'CZ': { job: 'Finanční kontrolor', profile: 'Profesní profil', exp: 'Zkušenosti', present: 'Současnost' },
    'SK': { job: 'Finančný kontrolór', profile: 'Profesijný profil', exp: 'Skúsenosti', present: 'Súčasnosť' },
    'HU': { job: 'Pénzügyi kontroller', profile: 'Szakmai profil', exp: 'Tapasztalat', present: 'Jelenleg' },
    'RO': { job: 'Controlor Financiar', profile: 'Profil Profesional', exp: 'Experiență', present: 'Prezent' },
    'GR': { job: 'Οικονομικός Ελεγκτής', profile: 'Επαγγελματικό Προφίλ', exp: 'Προϋπηρεσία', present: 'Σήμερα' },
    'BG': { job: 'Фиνανсов контрольор', profile: 'Професионален профил', exp: 'Опит', present: 'Сега' },
    'HR': { job: 'Financijski kontrolor', profile: 'Profesionalni profil', exp: 'Iskustvo', present: 'Danas' },
    'RS': { job: 'Finansijski kontrolor', profile: 'Profesionalni profil', exp: 'Iskustvo', present: 'Danas' },
    'SI': { job: 'Finančni kontrolor', profile: 'Profesionalni profil', exp: 'Izkušnje', present: 'Danes' },
    'LT': { job: 'Finansų kontrolierius', profile: 'Profesinis profilis', exp: 'Patirtis', present: 'Dabar' },
    'LV': { job: 'Finanšu kontrolieris', profile: 'Profesionālais profils', exp: 'Pieredze', present: 'Pašlaik' },
    'EE': { job: 'Finantskontrolör', profile: 'Professionaalne profiil', exp: 'Töökogemus', present: 'Praegu' },
  };

  const target = getTargetLang(displayTitle);
  const localizedPreview = previewTranslations[target.c] || previewTranslations['EN'];
  const localizedLabels = previewLabels[target.c] || previewLabels['EN'];

  React.useEffect(() => {
    document.title = `${displayTitle} | EuropeCV - AI Career Catalyst`;
  }, [displayTitle]);

  const faqs = getFAQsByTitle(displayTitle);

  return (
    <div className="min-h-screen bg-slate-50 pt-20 sm:pt-24 pb-16">
      <SEO 
        title="AI Resume Translation | Localize Your CV with EuropeCV"
        description="Translate your resume into 50+ languages instantly. Use AI to localize your professional background for German, French, and Spanish job markets flawlessly."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 md:mb-24">
          <div className="flex flex-col">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
            >
              <span className="text-blue-600 block mb-1">{displayTitle}</span> 
              for the Global Market
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base text-slate-600 leading-relaxed font-medium mb-8 max-w-lg"
            >
              Break language barriers and unlock international opportunities. Translate your CV to {target.n} or 20+ other languages with professional, context-aware AI.
            </motion.p>
            
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
               {[
                 { t: "Native Translation" },
                 { t: "AI Powered" },
                 { t: "ATS Friendly" },
                 { t: "Privacy Protected" },
                 { t: "Context Aware" },
                 { t: "Format Preserved" }
               ].map((badge, idx) => (
                 <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">{badge.t}</span>
                 </div>
               ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 text-slate-500">
               <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Global Reach</div>
               <div className="flex flex-wrap items-center gap-1 mt-1">
                  {targetLangs.map((l, i) => (
                    <div key={i} className="w-5 h-3.5 overflow-hidden rounded-[1px] shadow-sm border border-slate-100">
                      <img 
                        src={`https://flagcdn.com/w40/${l.f}.png`} 
                        alt={l.n} 
                        className="w-full h-full object-cover" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative bg-white rounded-[32px] border border-slate-200 shadow-2xl p-5 sm:p-6"
          >
             <div className="mb-5">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Step 1: Upload CV
                </div>
                <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-slate-100 rounded-2xl cursor-pointer hover:bg-slate-50 hover:border-blue-400 transition-all group">
                   <div className="flex flex-col items-center justify-center py-2">
                      <Upload className="w-5 h-5 text-slate-300 group-hover:text-blue-500 mb-1 transition-colors" />
                      <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Select PDF/DOCX</p>
                   </div>
                   <input type="file" className="hidden" />
                </label>
             </div>

             <div className="mb-6">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  Step 2: Language
                </div>
                <div className="grid grid-cols-6 gap-1.5">
                   {targetLangs.map((l) => (
                     <button 
                      key={l.id}
                      onClick={() => setSelectedLang(l.id)}
                      className={`relative aspect-square flex items-center justify-center rounded-lg border transition-all ${selectedLang === l.id ? 'border-blue-400 bg-blue-50/50 shadow-sm shadow-blue-600/5 ring-2 ring-blue-50' : 'border-slate-50 bg-white hover:border-blue-200'}`}
                      title={l.n}
                     >
                        <div className="w-6 h-4 overflow-hidden rounded-[1px] shadow-sm">
                           <img 
                            src={`https://flagcdn.com/w80/${l.f}.png`} 
                            className="w-full h-full object-cover" 
                            alt={l.n} 
                            referrerPolicy="no-referrer"
                           />
                        </div>
                        {selectedLang === l.id && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full flex items-center justify-center text-[7px] text-white">
                             <CheckCircle2 className="w-2 h-2" />
                          </div>
                        )}
                     </button>
                   ))}
                </div>
             </div>

             <Link 
                to="/login" 
                className="inline-flex items-center justify-center w-full py-3.5 text-sm font-black bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98] group"
              >
                Translate My CV Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
          </motion.div>
        </div>

        {/* Translation Preview Demo */}
        <div className="mb-24">
           <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">AI Powered <span className="text-blue-600">CV Localization</span></h2>
              <p className="text-slate-500 font-medium max-w-xl mx-auto">See how we transform your professional profile for international standards.</p>
           </div>

           <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 max-w-5xl mx-auto">
              {/* English Version */}
              <div className="flex-1 w-full max-w-[340px] bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8 scale-95 opacity-80 hover:scale-100 hover:opacity-100 transition-all duration-500">
                 <div className="text-center mb-6">
                    <h3 className="text-lg font-black text-slate-800 tracking-tight uppercase">Sarah Jenkins</h3>
                    <div className="text-[8px] font-bold text-slate-400 tracking-[0.2em] mt-1 uppercase">Financial Controller</div>
                    <div className="text-[7px] text-slate-400 mt-2 flex justify-center gap-2">
                       <span>London, UK</span>
                       <span>|</span>
                       <span>s.jenkins@example.com</span>
                    </div>
                 </div>
                 
                 <div className="space-y-4">
                    <div>
                       <div className="text-[8px] font-black text-slate-800 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                          <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                          Professional Profile
                       </div>
                       <p className="text-[9px] text-slate-500 leading-relaxed italic">
                         "Detail-oriented Financial Controller with 8+ years experience. Known for improving reporting accuracy through data-driven decisions..."
                       </p>
                    </div>
                    <div>
                       <div className="text-[8px] font-black text-slate-800 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                          <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                          Experience
                       </div>
                       <div className="space-y-2">
                          <div>
                             <div className="flex justify-between items-center mb-1">
                                <span className="text-[8px] font-bold text-slate-700">Senior Finance Manager @ Vertex Corp</span>
                                <span className="text-[7px] text-slate-400 uppercase">2020 — Present</span>
                             </div>
                             <p className="text-[8px] text-slate-500 leading-relaxed italic">
                                "Spearheaded a team of financial analysts across EMEA markets. Managed cross-functional teams..."
                             </p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Arrow */}
              <div className="flex lg:flex-col items-center gap-4 text-blue-600">
                 <div className="h-px lg:h-12 w-12 lg:w-px bg-blue-200"></div>
                 <div className="bg-blue-600 p-2.5 rounded-full text-white shadow-lg shadow-blue-600/20">
                    <RefreshCw className="w-5 h-5 animate-spin-slow" />
                 </div>
                 <div className="h-px lg:h-12 w-12 lg:w-px bg-blue-200"></div>
              </div>

              {/* Target Language Version */}
              <div className="flex-1 w-full max-w-[340px] bg-white rounded-2xl shadow-2xl border-2 border-blue-100 p-6 sm:p-8 relative">
                 <div className="absolute -top-3 -right-3 w-10 h-7 overflow-hidden rounded shadow-lg border-2 border-white z-20">
                    <img 
                      src={`https://flagcdn.com/w80/${target.f}.png`} 
                      className="w-full h-full object-cover" 
                      alt={target.n} 
                      referrerPolicy="no-referrer"
                    />
                 </div>
                 
                 <div className="text-center mb-6">
                    <h3 className="text-lg font-black text-slate-800 tracking-tight uppercase">Sarah Jenkins</h3>
                    <div className="text-[8px] font-bold text-blue-600 tracking-[0.2em] mt-1 uppercase">
                       {localizedLabels.job}
                    </div>
                    <div className="text-[7px] text-slate-400 mt-2 flex justify-center gap-2">
                       <span>London, UK</span>
                       <span>|</span>
                       <span>s.jenkins@example.com</span>
                    </div>
                 </div>
                 
                 <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                    >
                       <div className="text-[8px] font-black text-slate-800 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                          <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                          {localizedLabels.profile}
                       </div>
                       <p className="text-[9px] text-slate-900 font-bold leading-relaxed">
                          {localizedPreview.s1}
                       </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                       <div className="text-[8px] font-black text-slate-800 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                          <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                          {localizedLabels.exp}
                       </div>
                       <div className="space-y-2">
                          <div>
                             <div className="flex justify-between items-center mb-1">
                                <span className="text-[8px] font-bold text-slate-700">
                                   Senior Finance Manager @ Vertex Corp
                                </span>
                                <span className="text-[7px] text-slate-400 uppercase">2020 — {localizedLabels.present}</span>
                             </div>
                             <p className="text-[8px] text-slate-900 font-bold leading-relaxed">
                                {localizedPreview.s2}
                             </p>
                          </div>
                       </div>
                    </motion.div>
                 </div>
              </div>
           </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight text-center">
              Translation FAQ
            </h2>
          </div>
          <div className="space-y-4">
             {faqs.map((faq, idx) => (
               <div key={idx} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
                 <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
                 <p className="text-sm text-slate-600 font-medium leading-relaxed">{faq.a}</p>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
