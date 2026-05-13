import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe2, Languages, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { PublicConfig } from '../../config/PublicConfig';
import { Link } from 'react-router-dom';

const TRANSLATIONS: Record<string, any> = {
  en: {
    title: "Senior Software Engineer",
    summary: "Passionate developer with 8 years of experience building scalable applications.",
    experience: "Professional Experience",
    job1Title: "Lead Developer",
    job1Desc: "Led a team of 5 engineers to deliver a new enterprise cloud platform.",
    job2Title: "Frontend Developer",
    job2Desc: "Developed responsive web applications using modern JavaScript frameworks.",
    skills: "Core Skills"
  },
  de: {
    title: "Senior Softwareentwickler",
    summary: "Leidenschaftlicher Entwickler mit 8 Jahren Erfahrung in der Entwicklung skalierbarer Anwendungen.",
    experience: "Berufserfahrung",
    job1Title: "Leitender Entwickler",
    job1Desc: "Leitung eines Teams von 5 Ingenieuren zur Bereitstellung einer neuen Cloud-Plattform.",
    job2Title: "Frontend-Entwickler",
    job2Desc: "Entwicklung reaktionsschneller Webanwendungen mit modernen JavaScript-Frameworks.",
    skills: "Fähigkeiten"
  },
  nl: {
    title: "Senior Software Engineer",
    summary: "Gepassioneerde ontwikkelaar met 8 jaar ervaring in het bouwen van schaalbare applicaties.",
    experience: "Werkervaring",
    job1Title: "Hoofdontwikkelaar",
    job1Desc: "Leidde een team van 5 technici om een nieuw enterprise cloudplatform te leveren.",
    job2Title: "Frontend Ontwikkelaar",
    job2Desc: "Ontwikkelde responsieve webapplicaties met moderne JavaScript-frameworks.",
    skills: "Vaardigheden"
  },
  fr: {
    title: "Ingénieur Logiciel Sénior",
    summary: "Développeur passionné avec 8 ans d'expérience dans la création d'applications évolutives.",
    experience: "Expérience Professionnelle",
    job1Title: "Développeur Principal",
    job1Desc: "A dirigé une équipe de 5 ingénieurs pour livrer une nouvelle plateforme cloud d'entreprise.",
    job2Title: "Développeur Frontend",
    job2Desc: "A développé des applications web réactives avec des frameworks JavaScript modernes.",
    skills: "Compétences"
  },
  es: {
    title: "Desarrollador de Software Senior",
    summary: "Desarrollador apasionado con 8 años de experiencia en la creación de aplicaciones escalables.",
    experience: "Experiencia Profesional",
    job1Title: "Desarrollador Principal",
    job1Desc: "Lideró un equipo de 5 ingenieros para entregar una nueva plataforma empresarial en la nube.",
    job2Title: "Desarrollador Frontend",
    job2Desc: "Desarrolló aplicaciones web responsivas utilizando frameworks de JavaScript modernos.",
    skills: "Habilidades"
  },
  pt: {
    title: "Engenheiro de Software Sênior",
    summary: "Desenvolvedor apaixonado com 8 anos de experiência na criação de aplicações escaláveis.",
    experience: "Experiência Profissional",
    job1Title: "Desenvolvedor Principal",
    job1Desc: "Liderou uma equipe de 5 engenheiros para entregar uma nova plataforma corporativa em nuvem.",
    job2Title: "Desenvolvedor Frontend",
    job2Desc: "Desenvolveu aplicações web responsivas usando frameworks JavaScript modernos.",
    skills: "Habilidades"
  },
  it: {
    title: "Ingegnere del Software Senior",
    summary: "Sviluppatore appassionato con 8 anni di esperienza nella creazione di applicazioni scalabili.",
    experience: "Esperienza Professionale",
    job1Title: "Sviluppatore Principale",
    job1Desc: "Ha guidato un team di 5 ingegneri per fornire una nuova piattaforma cloud aziendale.",
    job2Title: "Sviluppatore Frontend",
    job2Desc: "Ha sviluppato applicazioni web responsive utilizzando framework JavaScript moderni.",
    skills: "Competenze"
  },
  sv: {
    title: "Senior Mjukvaruutvecklare",
    summary: "Passionsdriven utvecklare med 8 års erfarenhet av att bygga skalbara applikationer.",
    experience: "Arbetslivserfarenhet",
    job1Title: "Huvudutvecklare",
    job1Desc: "Ledde ett team på 5 ingenjörer för att leverera en ny företagsmolnplattform.",
    job2Title: "Frontend-utvecklare",
    job2Desc: "Utvecklade responsiva webbapplikationer med moderna JavaScript-ramverk.",
    skills: "Färdigheter"
  },
  da: {
    title: "Senior Softwareudvikler",
    summary: "Passioneret udvikler med 8 års erfaring i at bygge skalerbare applikationer.",
    experience: "Erhvervserfaring",
    job1Title: "Ledende Udvikler",
    job1Desc: "Ledte et team på 5 ingeniører for at levere en ny enterprise cloud-platform.",
    job2Title: "Frontend Udvikler",
    job2Desc: "Udviklede responsive webapplikationer ved hjælp af moderne JavaScript-frameworks.",
    skills: "Færdigheder"
  },
  no: {
    title: "Senior Programvareutvikler",
    summary: "Lidenskapelig utvikler med 8 års erfaring i å bygge skalerbare applikasjoner.",
    experience: "Arbeidserfaring",
    job1Title: "Hovedutvikler",
    job1Desc: "Ledet et team på 5 ingeniører for å levere en ny bedriftsskyplattform.",
    job2Title: "Frontend-utvikler",
    job2Desc: "Utviklet responsive webapplikasjoner ved hjelp av moderne JavaScript-rammeverk.",
    skills: "Ferdigheter"
  }
};

export function TranslationSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const languages = PublicConfig.sections.translation.languages;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % languages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [languages.length]);

  const currentLang = languages[activeIdx];
  const t = TRANSLATIONS[currentLang.id];

  return (
    <section className="py-24 sm:py-32 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="space-y-8 text-left">
            <div className="inline-flex items-center gap-3 justify-start mb-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200">
                 <Languages className="w-3.5 h-3.5 text-slate-600" />
                 <span className="text-[10px] font-bold text-slate-700 uppercase tracking-[0.2em]">{PublicConfig.sections.translation.badge}</span>
              </div>
            </div>
            
            <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              {PublicConfig.sections.translation.titlePlain}
              <span className="relative inline-block ml-1">
                <span className="text-blue-600">
                  {PublicConfig.sections.translation.titleHighlight}
                </span>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-1 left-0 h-1.5 bg-blue-500/30 rounded-full"
                />
              </span>
            </h2>
            
            <p className="text-[14px] sm:text-[15px] font-medium text-slate-500 leading-relaxed max-w-xl">
              {PublicConfig.sections.translation.description}
            </p>

            <div className="flex flex-wrap gap-2.5">
              {languages.map((lang, idx) => (
                <button
                  key={lang.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`flex justify-center items-center w-[60px] h-[48px] rounded-xl transition-all duration-300 font-medium cursor-pointer ${
                    idx === activeIdx 
                      ? 'bg-white shadow-md scale-105 border-2 border-blue-200' 
                      : 'bg-white/50 border border-slate-200/60 hover:border-slate-300 hover:bg-white'
                  }`}
                  title={lang.name}
                >
                  <img src={`https://flagcdn.com/w40/${lang.iso}.png`} className="w-8 h-auto rounded-[2px] shadow-sm transform group-hover:scale-110 transition-transform" alt={lang.name} />
                </button>
              ))}
            </div>

            <div className="pt-6">
              <Link to="/login" className="flex items-center gap-2 text-slate-900 font-bold hover:text-blue-600 transition-all duration-300 group cursor-pointer">
                <Globe2 className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-all" />
                <span>Try now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white border border-slate-200/60 rounded-2xl shadow-sm hover:border-blue-200 transition-colors">
              <div className="bg-blue-50 border border-blue-100 p-2 rounded-lg text-blue-600 shrink-0">
                <Languages className="w-5 h-5" />
              </div>
              <p className="text-sm text-slate-900 font-bold">
                {PublicConfig.sections.translation.card.title}
                <span className="block text-xs text-slate-500 font-medium mt-1">{PublicConfig.sections.translation.card.description}</span>
              </p>
            </div>
          </div>

          {/* Right side: Demo */}
          <div className="relative">
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden relative min-h-[500px] flex flex-col">
              
              {/* Toolbar */}
              <div className="bg-slate-50 border-b border-slate-200/60 px-6 py-4 flex items-center justify-between z-10 relative">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200/60 text-[10px] font-bold text-slate-600 shadow-sm uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                  Auto-Translating...
                </div>
              </div>

              {/* Resume Body */}
              <div className="p-8 sm:p-10 flex-1 relative bg-white">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={currentLang.id}
                    initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                    transition={{ duration: 0.4 }}
                    className="space-y-8"
                  >
                    <div className="space-y-2 text-left">
                      <div className="flex justify-between items-start">
                        <h3 className="text-2xl font-black text-slate-900 tracking-tight">Alex Mercer</h3>
                        <img src={`https://flagcdn.com/w40/${currentLang.iso}.png`} className="w-6 h-4 rounded-[2px] object-cover shadow-sm" alt={currentLang.name} title={currentLang.name} />
                      </div>
                      <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">
                        {t.title}
                      </p>
                      <p className="text-[13px] text-slate-600 font-medium leading-[1.8] max-w-sm pt-2">
                        {t.summary}
                      </p>
                    </div>

                    <div className="space-y-4 text-left">
                      <div className="flex items-center gap-3">
                        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.experience}</h4>
                        <div className="h-px bg-slate-100 flex-1" />
                      </div>
                      
                      <div className="space-y-5">
                        <div className="space-y-1 relative pl-4">
                          <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-slate-900" />
                          <div className="absolute left-0.5 top-3 w-px h-12 bg-slate-100" />
                          <p className="text-sm font-bold text-slate-900">{t.job1Title}</p>
                          <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest pb-1">Tech Corp • 2020 - Present</p>
                          <p className="text-[12px] rtl:leading-loose text-slate-600 font-medium">{t.job1Desc}</p>
                        </div>

                        <div className="space-y-1 relative pl-4">
                          <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-slate-300" />
                          <p className="text-sm font-bold text-slate-900">{t.job2Title}</p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pb-1">Web Solutions • 2016 - 2020</p>
                          <p className="text-[12px] text-slate-600 font-medium">{t.job2Desc}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 text-left">
                      <div className="flex items-center gap-3">
                        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.skills}</h4>
                        <div className="h-px bg-slate-100 flex-1" />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS'].map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-slate-50 border border-slate-100 text-[11px] font-bold text-slate-600 rounded-md">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
