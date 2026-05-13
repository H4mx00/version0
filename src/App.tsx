/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { SEO } from './components/common/SEO';
import { Hero } from './components/homepage/Hero';
import { Demo } from './components/homepage/Demo';
import { TemplatesSection } from './components/homepage/TemplatesSection';
import { JobsSection } from './components/homepage/JobsSection';
import { ProcessSection } from './components/homepage/ProcessSection';
import { ActionCard } from './components/homepage/ActionCard';
import { TranslationSection } from './components/homepage/TranslationSection';
import { CoverLetterSection } from './components/homepage/CoverLetterSection';
import { TestimonialsSection } from './components/homepage/TestimonialsSection';

import { MarketingLayout } from './layouts/MarketingLayout';
import { DashboardLayout } from './layouts/DashboardLayout';

const FAQPage = lazy(() => import('./pages/homepage/FAQPage').then(module => ({ default: module.FAQPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/homepage/legal/PrivacyPolicyPage').then(module => ({ default: module.PrivacyPolicyPage })));
const TermsPage = lazy(() => import('./pages/homepage/legal/TermsPage').then(module => ({ default: module.TermsPage })));
const CookiesPage = lazy(() => import('./pages/homepage/legal/CookiesPage').then(module => ({ default: module.CookiesPage })));
const DataDeletionPage = lazy(() => import('./pages/homepage/legal/DataDeletionPage').then(module => ({ default: module.DataDeletionPage })));
const ImpressumPage = lazy(() => import('./pages/homepage/legal/ImpressumPage').then(module => ({ default: module.ImpressumPage })));
const AboutPage = lazy(() => import('./pages/homepage/AboutPage').then(module => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import('./pages/homepage/ContactPage').then(module => ({ default: module.ContactPage })));
const PricingPage = lazy(() => import('./pages/homepage/PricingPage').then(module => ({ default: module.PricingPage })));
const BlogPage = lazy(() => import('./pages/homepage/blog/BlogPage').then(module => ({ default: module.BlogPage })));
const BlogPostPage = lazy(() => import('./pages/homepage/blog/BlogPostPage').then(module => ({ default: module.BlogPostPage })));
const HomeResumePage = lazy(() => import('./pages/homepage/seo/HomeResumePage').then(module => ({ default: module.HomeResumePage })));
const HomeCoverPage = lazy(() => import('./pages/homepage/seo/HomeCoverPage').then(module => ({ default: module.HomeCoverPage })));
const HomeEuropassPage = lazy(() => import('./pages/homepage/seo/HomeEuropassPage').then(module => ({ default: module.HomeEuropassPage })));
const HomeTranslationPage = lazy(() => import('./pages/homepage/seo/HomeTranslationPage').then(module => ({ default: module.HomeTranslationPage })));

const DashboardPage = lazy(() => import('./pages/dashboard/DashboardPage').then(module => ({ default: module.DashboardPage })));
const LoginPage = lazy(() => import('./pages/auth/LoginPage').then(module => ({ default: module.LoginPage })));
const CreatePage = lazy(() => import('./pages/dashboard/create/CreatePage').then(module => ({ default: module.CreatePage })));
const SettingsPage = lazy(() => import('./pages/dashboard/settings/SettingsPage').then(module => ({ default: module.SettingsPage })));
const CreditsPage = lazy(() => import('./pages/dashboard/credits/CreditsPage').then(module => ({ default: module.CreditsPage })));
const LibraryPage = lazy(() => import('./pages/dashboard/library/LibraryPage').then(module => ({ default: module.LibraryPage })));
const ATSCheckerPage = lazy(() => import('./pages/homepage/ATSCheckerPage').then(module => ({ default: module.ATSCheckerPage })));

const seoPages = [
  { path: '/ai-resume-builder', title: 'AI Resume Builder' },
  { path: '/ai-cv-generator', title: 'AI CV Generator' },
  { path: '/ats-resume-optimizer', title: 'ATS Resume Optimizer' },
  { path: '/ai-resume-tailoring', title: 'AI Resume Tailoring' },
  { path: '/resume-to-job-description-ai', title: 'Resume to Job Description AI' },
  { path: '/ai-job-application-tool', title: 'AI Job Application Tool' },
  { path: '/europass-cv-builder-ai', title: 'Europass CV Builder AI' },
  { path: '/ats-friendly-resume-maker', title: 'ATS-Friendly Resume Maker' },
  { path: '/ai-cv-writer', title: 'AI CV Writer' },
  { path: '/resume-optimization-ai', title: 'Resume Optimization AI' },
  { path: '/online-resume-builder', title: 'Online Resume Builder' },
  { path: '/free-resume-builder', title: 'Free Resume Builder' },
  { path: '/free-resume-maker', title: 'Free Resume Maker' },
  { path: '/resume-editor', title: 'Resume Editor' },
  { path: '/free-resume-templates', title: 'Free Resume Templates' },
  { path: '/create-resume', title: 'Create Resume' },
  { path: '/convert-resume', title: 'Convert Resume' },
  { path: '/ats-resume-tips', title: 'ATS Resume Tips' },
  { path: '/resume-writing-services', title: 'Resume Writing Services' },
  { path: '/resume-format-guide', title: 'Resume Format Guide' },
  { path: '/how-to-make-a-resume', title: 'How to Make a Resume' }
];

const coverLetterPages = [
  { path: '/ai-cover-letter', title: 'AI Cover Letter Generator' },
  { path: '/cover-letter-from-job-description-ai', title: 'Cover Letter from Job Description AI' },
  { path: '/personalized-cover-letter-ai', title: 'Personalized Cover Letter AI' },
  { path: '/ats-cover-letter-builder', title: 'ATS Cover Letter Builder' },
  { path: '/job-specific-cover-letter-ai', title: 'Job-Specific Cover Letter AI' },
  { path: '/ai-application-letter-writer', title: 'AI Application Letter Writer' },
  { path: '/ai-cover-letter-tool', title: 'AI Cover Letter' },
  { path: '/cover-letter-generator', title: 'Cover Letter Generator' },
  { path: '/cover-letter-templates', title: 'Cover Letter Templates' },
  { path: '/cover-letter-examples', title: 'Cover Letter Examples' }
];

const europassPages = [
  { path: '/europass-cv', title: 'Europass CV' },
  { path: '/europass-with-ai', title: 'Europass with AI' },
  { path: '/europass-template', title: 'Europass Template' },
  { path: '/europass-format-rules', title: 'Europass Format Rules' },
  { path: '/europass-online-editor', title: 'Europass Online Editor' },
  { path: '/europass-pdf', title: 'Europass PDF' },
  { path: '/europass-xml', title: 'Europass XML' },
  { path: '/europass-examples', title: 'Europass Examples' },
  { path: '/europass-vs-resume', title: 'Europass vs Resume' },
  { path: '/europass-in-english', title: 'Europass in English' },
  { path: '/europass-for-students', title: 'Europass for Students' }
];

const translationPages = [
  { path: '/translate-cv-english', title: 'Translate CV English' },
  { path: '/lebenslauf-auf-deutsch', title: 'Lebenslauf auf Deutsch' },
  { path: '/traduire-cv-francais', title: 'Traduire CV Français' },
  { path: '/traducir-cv-espanol', title: 'Traducir CV Español' },
  { path: '/tradurre-cv-italiano', title: 'Tradurre CV Italiano' },
  { path: '/traduzir-cv-portugues', title: 'Traduzir CV Português' },
  { path: '/cv-nederlands-vertalen', title: 'CV Nederlands vertalen' },
  { path: '/oversatt-cv-svenska', title: 'Översätt CV Svenska' },
  { path: '/oversat-cv-dansk', title: 'Oversæt CV Dansk' },
  { path: '/oversett-cv-norsk', title: 'Oversett CV Norsk' },
  { path: '/kaanna-cv-suomi', title: 'Käännä CV Suomi' },
  { path: '/przetlumacz-cv-polski', title: 'Przetłumacz CV Polski' },
  { path: '/prelozit-cv-cestina', title: 'Přeložit CV Čeština' },
  { path: '/prelozit-cv-slovencina', title: 'Preložiť CV Slovenčina' },
  { path: '/cv-magyar-forditasa', title: 'CV Magyar fordítása' },
  { path: '/traducere-cv-romana', title: 'Traducere CV Română' },
  { path: '/metafrasi-cv-ellinika', title: 'Μετάφραση CV Ελληνικά' },
  { path: '/prevod-na-cv-balgarski', title: 'Превод на CV Български' },
  { path: '/prevedi-cv-hrvatski', title: 'Prevedi CV Hrvatski' },
  { path: '/prevedi-cv-srpski', title: 'Prevedi CV Srpski' },
  { path: '/prevedi-cv-slovenscina', title: 'Prevedi CV Slovenščina' },
  { path: '/cv-lietuviu-vertimas', title: 'CV Lietuvių vertimas' },
  { path: '/cv-latviesu-tulkojums', title: 'CV Latviešu tulkojums' },
  { path: '/cv-eesti-tolkimine', title: 'CV Eesti tõlkimine' }
];



function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <SEO 
        title="EuropeCV | AI Resume Builder & European Career Catalyst"
        description="The world's most advanced AI platform for the European job market. Build ATS-optimized resumes, localise CVs, and generate tailored cover letters in seconds."
      />
      <main className="relative z-10 pt-24 sm:pt-28 lg:pt-32 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
          {/* Hero Wrapper */}
          <div className="relative mb-8 sm:mb-12">
            
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <Hero />
              <div className="relative group lg:mt-0 mt-8">
                <Demo />
              </div>
            </div>
          </div>
        </div>

        <ActionCard />

        <div id="resume">
          <TemplatesSection />
        </div>

        <JobsSection />

        <ProcessSection />

        <div id="translation">
          <TranslationSection />
        </div>
        
        <div id="coverletter">
          <CoverLetterSection />
        </div>

        <TestimonialsSection />
      </main>
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col relative bg-slate-50">
      <ScrollToTop />

      <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
        <Routes>
          <Route element={<MarketingLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            {seoPages.map((page) => (
              <Route key={page.path} {...({ path: page.path, element: <HomeResumePage title={page.title} /> } as any)} />
            ))}
            {coverLetterPages.map((page) => (
              <Route key={page.path} {...({ path: page.path, element: <HomeCoverPage title={page.title} /> } as any)} />
            ))}
            {europassPages.map((page) => (
              <Route key={page.path} {...({ path: page.path, element: <HomeEuropassPage title={page.title} /> } as any)} />
            ))}
            {translationPages.map((page) => (
              <Route key={page.path} {...({ path: page.path, element: <HomeTranslationPage title={page.title} /> } as any)} />
            ))}
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="/data-deletion" element={<DataDeletionPage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/ats-checker" element={<ATSCheckerPage />} />
          </Route>
          
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dashboard/settings" element={<SettingsPage />} />
            <Route path="/dashboard/credits" element={<CreditsPage />} />
            <Route path="/dashboard/library" element={<LibraryPage />} />
          </Route>

          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
