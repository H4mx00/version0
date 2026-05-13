export const PublicConfig = {
  name: "EuropeCV",
  description: "AI-Powered Career Catalyst",
  hero: {
    badge: "AI Career Catalyst",
    title: {
      plain: "Free AI",
      gradient: "Resume Builder"
    },
    subtitle: "Our Free AI Resume Generator creates ATS-friendly, Europass compatible AI Resume tailored AI CV to job descriptions, Optimize your CV for European recruiters",
    cta: {
      primary: "Start for Free",
      secondary: "Try with Google"
    },
    trustedBy: {
      text: "Optimized for top EU companies",
      companies: "SAP, Siemens, Spotify .. and more"
    }
  },
  demo: {
    header: "europecv.io/ai-resume/ai-cv/Trial.PDF",
    comparison: {
      name: "Marc Devlin",
      role: "Product Designer",
      before: {
        summary: "Designer with 5 years experience in building web apps. Skilled in Figma, Adobe. Looking for a new challenge in the EU market.",
        experience: [
          {
            title: "Senior Product Designer",
            points: [
              "Designed features for a web application.",
              "Worked with engineers on implementation.",
              "Helped improve user satisfaction scores."
            ]
          }
        ]
      },
      after: {
        experience: [
          {
            title: "Senior Product Designer @ TechFlow",
            points: [
              { text: "Spearheaded B2B SaaS platform redesign increasing MAU by 34% within 6 months.", color: "blue", suggestion: "High Impact" },
              { text: "Architected a scalable design system reducing handoff friction by 40%.", color: "purple", suggestion: "ATS Keyword" },
              { text: "Led cross-functional teams of 12 across 3 EU timezones.", color: "green", suggestion: "Leadership" }
            ]
          }
        ]
      }
    }
  },
  nav: {
    links: [
      { label: "Features", href: "#", active: true },
      { label: "Templates", href: "#templates" },
      { label: "Process", href: "#how-it-works" },
      { label: "Pricing", href: "#" }
    ],
    actions: {
      login: "Log in",
      getStarted: "Start Optimization"
    }
  },
  process: {
    badge: "The Workflow",
    title: {
      plain: "Three Steps to an ",
      highlight: "Interview-Ready AI CV"
    },
    description: "AI-powered resume optimization for European jobs, ATS systems, and Europass-compatible applications. Get job-ready in minutes.",
    stats: [
      { label: "Process", value: "30s" },
      { label: "ATS Secure", value: "100%" }
    ],
    steps: [
      {
        id: 1,
        title: "1. Upload Your Profile",
        description: "Upload your CV or LinkedIn profile to generate an AI-optimized resume tailored for European ATS hiring systems.",
        badge: "Extraction Active",
        color: "blue"
      },
      {
        id: 2,
        title: "2. Paste Job Description",
        description: "Enter any job posting and let the AI match your CV with keywords, skills, and Europass standards.",
        badge: "Market Mapping",
        color: "amber"
      },
      {
        id: 3,
        title: "3. Get Your AI CV",
        description: "Receive a fully optimized ATS-friendly CV and cover letter designed to increase interview chances in EU job markets.",
        badge: "Ready to Send",
        color: "emerald"
      }
    ]
  },
  templates: {
    badge: "ATS-Ready Formats",
    title: {
      plain: "Designed for the ",
      highlight: "European Market"
    },
    description: "ATS-friendly, Europass-compatible free CV templates optimized for Central Europe, UK, Nordics, and EU hiring systems to pass ATS screening and increase interview chances.",
    cta: "Create Custom Resume",
    items: [
      {
        id: 'centered-classic',
        name: 'Modern Executive',
        badge: 'Popular',
        desc: 'AI Executive CV Template, ATS Europass Resume, Leadership Resume for EU Jobs, Senior Career CV',
        features: ['Centered Layout', 'Large Profile Header', 'Clear Section Dividers'],
        mock: {
          name: 'Alex Rivera',
          role: 'Operations Director',
          image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200',
          location: 'Madrid, Spain',
          email: 'alex.rivera@example.com',
          phone: '+34 912 345 678',
          summary: 'Operations Director with 10+ years of experience optimizing enterprise processes, reducing overhead by 30%, and leading international cross-functional teams in high-growth environments.',
          experience: [
            { title: 'Operations Manager @ GlobalLogix', date: '2021 — Present', desc: 'Built performance reporting that enabled leadership to identify underperforming regions. Led end-to-end operational strategy for regional distribution hubs serving 120+ clients.' },
            { title: 'Process Analyst @ TechStream', date: '2018 — 2021', desc: 'Redesigned inventory planning models, cutting stock discrepancies by 25%. Streamlined supply chain workflows using lean methodology across 4 business units.' },
            { title: 'Operations Intern @ LogiCore', date: '2016 — 2018', desc: 'Supported the migration to a new ERP system with zero downtime. Maintained data accuracy for warehouse inventories.' }
          ],
          education: [
            { degree: 'MSc in Management', school: 'IE Business School', date: '2018' },
            { degree: 'BSc Business Admin', school: 'UCM Madrid', date: '2016' }
          ],
          languages: ['Spanish', 'English', 'French'],
          skills: ['Strategic Planning', 'Lean Six Sigma', 'ERP Systems', 'SAP', 'Team Leadership', 'Budgeting', 'Agile']
        }
      },
      {
        id: 'ats-pure',
        name: 'ATS Optimized',
        badge: 'Higher Success',
        desc: 'ATS Resume Template AI, Europass-Compatible CV, Keyword Optimized Resume, AI Job Matching CV',
        features: ['No Profile Picture', 'Maximum Readability', 'Standard Formatting'],
        mock: {
          name: 'Sarah Jenkins',
          role: 'Financial Controller',
          image: null,
          location: 'London, UK',
          email: 's.jenkins.finance@example.com',
          phone: '+44 7911 123456',
          summary: 'Detail-oriented Financial Controller with 8+ years experience in Corporate Finance. Known for improving reporting accuracy through data-driven decisions and scalable workflow design. Specializing in high-scale compliance solutions for the European banking sector.',
          experience: [
            { title: 'Senior Finance Manager @ Vertex Corp', date: '2020 — Present', desc: 'Directing financial strategy and audits across EMEA markets. Managed cross-functional teams to deliver cloud-native solutions for compliance platforms. Reduced reporting times by 12% in 2 quarters.' },
            { title: 'Financial Analyst @ Quantum Fin', date: '2016 — 2020', desc: 'Coordinated the development of internal analytics tools. Reduced delivery time by 15% through agile implementation. Managed budget reporting for 20+ stakeholders.' },
            { title: 'Junior Accountant @ FiscalEdge', date: '2014 — 2016', desc: 'Contributed to month-end close processes and P&L analysis using Excel and SAP.' }
          ],
          education: [
            { degree: 'BSc Accounting', school: 'LSE London', date: '2016' },
            { degree: 'ACCA Certified', school: 'ACCA Global', date: '2019' }
          ],
          languages: ['English', 'German', 'French'],
          skills: ['Financial Modeling', 'SaaS Metrics', 'Stakeholder Management', 'Data Analysis', 'IFRS', 'SAP', 'Tableau']
        }
      },
      {
        id: 'sidebar-premium',
        name: 'Sidebar Professional',
        badge: 'HR Favorite',
        desc: 'Dual-Column AI CV Template, ATS-Friendly Structured Resume, Europass Professional Layout, Skills-Based EU CV',
        features: ['Dark Sidebar', 'Expertise Pills', 'Compact Education'],
        mock: {
          name: 'Matteo Rossi',
          role: 'Lead Architect',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
          location: 'Milan, Italy',
          email: 'matteo.rossi@example.com',
          phone: '+39 333 123 4567',
          summary: 'Lead System Architect with 10+ years of experience optimizing enterprise backend systems and leading international cross-functional teams. Specialized in cloud-native microservices and multi-region infrastructure management.',
          experience: [
            { title: 'Lead Architect @ CloudNet', date: '2021 — Now', desc: 'Led end-to-end architecture strategy for a regional data hub serving 100+ clients. Reduced server response time by 27%.' },
            { title: 'Senior Backend Eng @ TechStream', date: '2018 — 2021', desc: 'Managed cross-functional teams to deliver cloud-native APIS. Reduced delivery time by 15% through agile implementation.' },
            { title: 'Software Engineer @ BlueWave', date: '2014 — 2018', desc: 'Optimized internal legacy monolithic apps. Mentored a team of 15 Junior Developers.' }
          ],
          education: [
            { degree: 'MSc Computer Engineering', school: 'Politecnico di Milano', date: '2018' },
            { degree: 'BSc Informatics', school: 'University of Milan', date: '2012' }
          ],
          languages: ['Italian', 'English', 'Spanish'],
          skills: ['AWS', 'Kubernetes', 'Go', 'Management', 'System Design', 'Microservices', 'Python']
        }
      },
      {
        id: 'header-bold',
        name: 'Modern Bold',
        badge: 'Creative Pick',
        desc: 'Creative AI Resume Template, ATS-Friendly CV Design, Europass Modern Resume, Standout EU Job CV',
        features: ['Color Header', 'Landscape Format', 'Impactful Summary'],
        mock: {
          name: 'Elena Vance',
          role: 'Senior Product Lead',
          image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200',
          location: 'Berlin, Germany',
          email: 'elena.vance@example.com',
          phone: '+49 30 1234567',
          summary: 'Product Lead with 8+ years experience in digital transformation. Known for improving service delivery through data-driven decisions and scalable workflow design. Passionate about user-centric product discovery.',
          experience: [
            { title: 'Senior Product Manager @ FinFlow', date: '2020 — Present', desc: 'Driving product strategy for discovery features across EMEA markets. Managed cross-functional teams to deliver cloud-native solutions. Launched 3 major feature updates.' },
            { title: 'Product Manager @ DataPeak', date: '2016 — 2020', desc: 'Managed cross-functional teams to deliver cloud-native solutions. Improved onboarding conversion by 22% within 6 months.' },
            { title: 'UX Designer @ CreativeHub', date: '2013 — 2016', desc: 'Developed intuitive interfaces for mobile and web applications. Led user research initiatives.' }
          ],
          education: [
            { degree: 'MA Digital Design', school: 'Udk Berlin', date: '2016' },
            { degree: 'BA Design', school: 'BAU Barcelona', date: '2013' }
          ],
          languages: ['English', 'German', 'Spanish'],
          skills: ['Product Strategy', 'SaaS', 'Stakeholders', 'Data Analysis', 'User Research', 'Figma', 'React']
        }
      }
    ]
  },
  reviews: {
    items: [
      {
        name: "Marie Lefebvre",
        role: "HR Generalist",
        location: "France",
        rating: 5,
        text: "Des modèles propres et conformes aux attentes du marché français. Très efficace pour le tri ATS. La clarté est exemplaire.",
        flagCode: "fr",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
      },
      {
        name: "Lukas Weber",
        role: "Talent Acquisition",
        location: "Germany",
        rating: 5,
        text: "Die strukturierte Darstellung der Qualifikationen ist beeindruckend. Genau das, was wir in Deutschland suchen. Sehr professionell.",
        flagCode: "de",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
      },
      {
        name: "Elena Rodríguez",
        role: "HR Manager",
        location: "Spain",
        rating: 5,
        text: "Plantillas modernas y profesionales que destacan la experiencia de manera clara. Muy recomendadas para candidatos internacionales.",
        flagCode: "es",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150"
      },
      {
        name: "Sarah Schmidt",
        role: "HR Business Partner",
        location: "Germany",
        rating: 5,
        text: "Hervorragende Vorlagen, die Professionalität und Modernität perfekt vereinen. Ein echter Zeitsparer für HR-Teams bei der Sichtung.",
        flagCode: "de",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150"
      }
    ]
  },
  sections: {
    templates: {
      badge: "ATS-Ready Formats",
      titlePlain: "Designed for the ",
      titleHighlight: "European Market",
      description: "ATS-friendly, Europass-compatible free CV templates optimized for Central Europe, UK, Nordics, and EU hiring systems to pass ATS screening and increase interview chances."
    },
    jobs: {
      badge: "All Industries",
      titlePlain: "Whatever your field,",
      titleHighlight: "we’ve got you covered.",
      description: "AI-optimized, Europass-compatible, ATS-friendly CVs, AI cover letters, and trusted CV translation for European jobs and top employers.",
      items: [
        { name: 'Information Technology', id: 'it' },
        { name: 'Healthcare & Nursing', id: 'healthcare' },
        { name: 'Engineering & Manufacturing', id: 'engineering' },
        { name: 'Finance & FinTech', id: 'finance' },
        { name: 'Green Energy & Sustainability', id: 'green' },
        { name: 'Sales & Marketing', id: 'sales' },
        { name: 'Logistics & Supply Chain', id: 'logistics' },
        { name: 'Construction & Trades', id: 'construction' },
        { name: 'Education & Training', id: 'education' },
        { name: 'Tourism & Hospitality', id: 'tourism' }
      ]
    },
    howItWorks: {
      badge: "Our Process",
      titlePlain: "Designed for ",
      titleHighlight: "career progression.",
      description: "A surgical approach to international job hunting, from initial audit to final synchronization."
    },
    translation: {
      badge: "Native Localization",
      titlePlain: "AI CV Translation for ",
      titleHighlight: "Eu-Jobs",
      description: "Translate your resume into ATS-friendly, recruiter-ready CVs tailored for European job markets. Adapt your profile for Germany, UK, Nordics, and EU employers with AI precision.",
      cta: "Translate Resume",
      card: {
        badge: "Smart Cultural Adaptation",
        title: "Smart AI CV Translation",
        description: "AI doesn’t just translate your CV it adapts tone, phrasing, and keywords to match ATS standards and European hiring expectations with high accuracy."
      },
      languages: [
        { id: 'en', name: 'English', iso: 'gb', code: 'EN' },
        { id: 'de', name: 'German', iso: 'de', code: 'DE' },
        { id: 'nl', name: 'Dutch', iso: 'nl', code: 'NL' },
        { id: 'fr', name: 'French', iso: 'fr', code: 'FR' },
        { id: 'es', name: 'Spanish', iso: 'es', code: 'ES' },
        { id: 'pt', name: 'Portuguese', iso: 'pt', code: 'PT' },
        { id: 'it', name: 'Italian', iso: 'it', code: 'IT' },
        { id: 'sv', name: 'Swedish', iso: 'se', code: 'SV' },
        { id: 'da', name: 'Danish', iso: 'dk', code: 'DA' },
        { id: 'no', name: 'Norwegian', iso: 'no', code: 'NO' }
      ]
    },
    coverLetter: {
      badge: "Smart Cover Letters",
      titlePlain: "Tailored to the ",
      titleHighlight: "job description.",
      description: "Generate highly targeted, ATS-friendly AI Cover Letter tailored to any job description and optimized for European employers .",
      cta: "Generate Letter",
      items: [
        {
          id: 'swe',
          role: 'Frontend Engineer',
          company: 'Spotify',
          location: 'Stockholm',
          flagCode: 'se',
          jd: "We are looking for a passionate Frontend Engineer to join our core player team. You should have deep knowledge of React, TypeScript, and modern CSS. Experience with Web Audio API is a plus. We value cross-functional collaboration and a user-centric mindset.",
          cl: "Dear Hiring Team,\n\nI am writing to express my strong interest in the Frontend Engineer position within the core player team. With over 4 years of experience specializing in React and TypeScript, I have successfully built high-performance, accessible web interfaces that serve millions of users.\n\nAt my current company, I led the migration of our legacy audio player to a modern React stack, improving load times by 40%. My strong focus on cross-functional collaboration and user-centric design aligns perfectly with your team's values.\n\nI would welcome the opportunity to bring my technical expertise to Stockholm.\n\nBest regards,\nAlex Mercer"
        },
        {
          id: 'pm',
          role: 'Product Manager',
          company: 'Zalando',
          location: 'Berlin',
          flagCode: 'de',
          jd: "Zalando is seeking a data-driven Product Manager for our checkout conversion team. You need 3+ years of PM experience in e-commerce, strong A/B testing expertise, and the ability to work closely with engineering and design. Fluent English is required.",
          cl: "Dear Hiring Manager,\n\nAs a data-driven Product Manager with 5 years of experience in the e-commerce sector, I am thrilled to apply for the checkout conversion role at Zalando. I have a proven track record of optimizing user journeys and driving revenue growth.\n\nIn my previous role, I led a cross-functional team of 8 engineers and designers to revamp the checkout process, implementing comprehensive A/B tests that resulted in a 15% uplift in conversion rate. I excel at translating complex data into actionable product strategies.\n\nI look forward to discussing how I can contribute to Zalando's continued growth in Berlin.\n\nSincerely,\nAlex Mercer"
        },
        {
          id: 'marketing',
          role: 'Growth Marketing Lead',
          company: 'Booking.com',
          location: 'Amsterdam',
          flagCode: 'nl',
          jd: "We are hiring a Growth Marketing Lead to drive customer acquisition across European markets. Ideal candidates have strong experience in performance marketing (paid social, SEM), budget management, and user acquisition strategies. Analytics mindset is crucial.",
          cl: "Dear Talent Acquisition Team,\n\nI am excited to submit my application for the Growth Marketing Lead position at Booking.com. With a deep expertise in performance marketing and user acquisition, I have spent the last 6 years driving scalable growth strategies across multiple European markets.\n\nMost recently, I managed a €2M annual marketing budget, optimizing paid social and SEM campaigns to decrease CAC by 22% while increasing total acquisitions by 35%. My highly analytical approach ensures that every campaign insight is translated into scalable action.\n\nI am eager to bring my performance-driven mindset to Amsterdam.\n\nWarm regards,\nAlex Mercer"
        }
      ]
    },
    testimonials: {
      badge: "Success Stories",
      titlePlain: "Trusted by global ",
      titleHighlight: "talent.",
      description: "See how professionals from around the world are using our platform to land their dream roles across Europe.",
      items: [
        {
          name: "Riya S.",
          role: "MSc Student",
          location: "Germany",
          image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
          text: "The AI formatted my CV perfectly for the DACH region and I got 3 interviews in my first week! It's incredible.",
          rating: 5,
          flagCode: "in"
        },
        {
          name: "Wei Chen",
          role: "Software Graduate",
          location: "Netherlands",
          image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=150&h=150",
          text: "The ATS scanning feature is game-changing. It highlighted exactly which keywords I was missing.",
          rating: 5,
          flagCode: "nl"
        },
        {
          name: "Dr. Amira T.",
          role: "Medical Professional",
          location: "France",
          image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150&h=150",
          text: "France requires a strict format. This tool translated my experience flawlessly and made my application look professional.",
          rating: 5,
          flagCode: "tn"
        },
        {
          name: "Klaus M.",
          role: "Logistics Manager",
          location: "Germany",
          image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=150&h=150",
          text: "Structuring my 15 years of supply chain experience was overwhelming. The cover letter generator matched my tone perfectly.",
          rating: 5,
          flagCode: "de"
        },
        {
          name: "Sophie L.",
          role: "Tourism Director",
          location: "France",
          image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150",
          text: "The localization didn't just translate words, it kept the industry-specific nuances completely intact.",
          rating: 5,
          flagCode: "fr"
        }
      ]
    },
    action: {
      badge: "Discover Tools",
      titlePlain: "Ready to break into the ",
      titleHighlight: "European market?",
      subtitle: "Join thousands of successful candidates in the EU market today.",
      ctaPrimary: "Start Free Audit",
      ctaSecondary: "Add to Chrome",
      logos: ['BMW', 'Mercedes-Benz', 'SAP', 'Siemens', 'DHL', 'Nestlé', 'Roche']
    }
  },
  faq: {
    title: "FAQ – EuropeCV",
    subtitle: "Everything you need to know about our AI-powered resume tools.",
    sections: [
      {
        title: "General Questions",
        items: [
          {
            question: "What is EuropeCV?",
            answer: "EuropeCV is an AI-powered platform that helps you improve your CV for job applications through resume tailoring, translation, and cover letter generation."
          },
          {
            question: "Is EuropeCV free to use?",
            answer: "EuropeCV may offer free basic features, with advanced AI tools potentially requiring a premium plan."
          },
          {
            question: "Is my data and resume secure?",
            answer: "Yes, your data is processed securely and is not shared with third parties without your consent."
          },
          {
            question: "Do I need an account to use EuropeCV?",
            answer: "Some features may be accessible without an account, but saving and managing documents typically requires sign-up."
          },
          {
            question: "Can I download my final documents?",
            answer: "Yes, you can download your optimized resume, translations, and cover letters in common file formats like PDF or DOCX."
          }
        ]
      },
      {
        title: "AI Resume Tailoring",
        items: [
          {
            question: "How does the AI tailor my resume to a job description?",
            answer: "The AI analyzes the job description and aligns your skills, experience, and keywords to better match employer expectations."
          },
          {
            question: "Will the AI change my real experience?",
            answer: "No, it only improves wording and structure — it does not fabricate or invent experience."
          },
          {
            question: "Is the resume optimized for ATS systems?",
            answer: "Yes, the output is designed to be ATS-friendly with proper keyword optimization and formatting."
          },
          {
            question: "Can I edit the AI-generated resume?",
            answer: "Yes, you can review and manually adjust all AI-generated changes before downloading."
          },
          {
            question: "Do I need to paste the full job description?",
            answer: "Yes, the more complete the job description, the better the AI can tailor your CV."
          }
        ]
      },
      {
        title: "AI Resume Translation",
        items: [
          {
            question: "What languages are supported?",
            answer: "EuropeCV supports multiple major languages such as English, German, French, Spanish, and more."
          },
          {
            question: "Does the translation keep my resume format?",
            answer: "Yes, the structure and layout of your resume remain intact during translation."
          },
          {
            question: "Is the translation literal or adapted?",
            answer: "It is context-aware, meaning it adapts phrasing to fit professional and local job market standards."
          },
          {
            question: "Can I translate only part of my resume?",
            answer: "Yes, you can choose to translate specific sections if needed."
          },
          {
            question: "Is it suitable for international job applications?",
            answer: "Yes, it is designed to help you apply to jobs in different countries with localized wording."
          }
        ]
      },
      {
        title: "AI Cover Letter Generator",
        items: [
          {
            question: "How is the cover letter generated?",
            answer: "The AI uses your resume and job description to create a personalized, job-specific cover letter."
          },
          {
            question: "Can I change the tone of the cover letter?",
            answer: "Yes, you can choose tones such as professional, friendly, or formal."
          },
          {
            question: "Does it include keywords from the job posting?",
            answer: "Yes, it automatically integrates relevant keywords to improve job matching."
          },
          {
            question: "Can I regenerate different versions?",
            answer: "Yes, you can generate multiple versions until you find the one you prefer."
          },
          {
            question: "Is each cover letter unique?",
            answer: "Yes, every cover letter is uniquely generated based on the job description and your profile."
          }
        ]
      }
    ],
    contact: {
      title: "Still have questions?",
      subtitle: "We're here to help you build the perfect career path. Reach out to our support team and we'll get back to you within 24 hours.",
      email: "support@europecv.io"
    }
  },
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "Last updated:",
    companyName: "EuropeCV",
    contactEmail: "support@europecv.io",
    helpTitle: "Need further clarification?",
    helpSubtitle: "If you have any questions regarding our privacy practices or your data, please don't hesitate to contact us.",
    helpCta: "Contact Privacy Team"
  },
  navbar: {
    links: {
      home: "Home",
      ats: "ATS Checker",
      resume: "AI Resume",
      translation: "AI Translation",
      coverLetter: "AI Cover Letter",
      faq: "FAQ"
    },
    cta: {
      signIn: "Sign In",
      getStarted: "Get Started"
    }
  },
  footer: {
    description: "AI-powered CV tools for European jobs. Create ATS-friendly resumes, translate CVs, and generate tailored cover letters for faster hiring success.",
    sections: {
      aiResume: {
        title: "AI Resume",
        links: [
          { label: 'AI Resume Builder', path: '/ai-resume-builder' },
          { label: 'AI CV Generator', path: '/ai-cv-generator' },
          { label: 'ATS Resume Optimizer', path: '/ats-resume-optimizer' },
          { label: 'AI Resume Tailoring', path: '/ai-resume-tailoring' },
          { label: 'Resume to Job Description AI', path: '/resume-to-job-description-ai' },
          { label: 'AI Job Application Tool', path: '/ai-job-application-tool' },
          { label: 'Europass CV Builder AI', path: '/europass-cv-builder-ai' },
          { label: 'ATS-Friendly Resume Maker', path: '/ats-friendly-resume-maker' },
          { label: 'AI CV Writer', path: '/ai-cv-writer' },
          { label: 'Resume Optimization AI', path: '/resume-optimization-ai' },
          { label: 'Online Resume Builder', path: '/online-resume-builder' },
          { label: 'Free Resume Builder', path: '/free-resume-builder' },
          { label: 'Free Resume Maker', path: '/free-resume-maker' },
          { label: 'Resume Editor', path: '/resume-editor' },
          { label: 'Free Resume Templates', path: '/free-resume-templates' },
          { label: 'Create Resume', path: '/create-resume' },
          { label: 'Convert Resume', path: '/convert-resume' }
        ]
      },
      aiCoverLetter: {
        title: "AI Cover Letter",
        links: [
          { label: 'AI Cover Letter Generator', path: '/ai-cover-letter' },
          { label: 'Cover Letter from Job Description AI', path: '/cover-letter-from-job-description-ai' },
          { label: 'Personalized Cover Letter AI', path: '/personalized-cover-letter-ai' },
          { label: 'ATS Cover Letter Builder', path: '/ats-cover-letter-builder' },
          { label: 'Job-Specific Cover Letter AI', path: '/job-specific-cover-letter-ai' },
          { label: 'AI Application Letter Writer', path: '/ai-application-letter-writer' },
          { label: 'AI Cover Letter', path: '/ai-cover-letter-tool' },
          { label: 'Cover Letter Generator', path: '/cover-letter-generator' },
          { label: 'Cover Letter Templates', path: '/cover-letter-templates' },
          { label: 'Cover Letter Examples', path: '/cover-letter-examples' },
          { label: 'ATS Checker', path: '/ats-checker' },
          { label: 'ATS Resume Tips', path: '/ats-resume-tips' },
          { label: 'Resume Writing Services', path: '/resume-writing-services' },
          { label: 'Resume Format Guide', path: '/resume-format-guide' },
          { label: 'How to Make a Resume', path: '/how-to-make-a-resume' }
        ]
      },
      europass: {
        title: "Europass CV",
        links: [
          { label: 'Europass CV', path: '/europass-cv' },
          { label: 'Europass with AI', path: '/europass-with-ai' },
          { label: 'Europass Template', path: '/europass-template' },
          { label: 'Europass Format Rules', path: '/europass-format-rules' },
          { label: 'Europass Online Editor', path: '/europass-online-editor' },
          { label: 'Europass PDF', path: '/europass-pdf' },
          { label: 'Europass XML', path: '/europass-xml' },
          { label: 'Europass Examples', path: '/europass-examples' },
          { label: 'Europass vs Resume', path: '/europass-vs-resume' },
          { label: 'Europass in English', path: '/europass-in-english' },
          { label: 'Europass for Students', path: '/europass-for-students' }
        ]
      },
      aiTranslation: {
        title: "AI Translation",
        links: [
          { label: 'Translate CV English', path: '/translate-cv-english' },
          { label: 'Lebenslauf auf Deutsch', path: '/lebenslauf-auf-deutsch' },
          { label: 'Traduire CV Français', path: '/traduire-cv-francais' },
          { label: 'Traducir CV Español', path: '/traducir-cv-espanol' },
          { label: 'Tradurre CV Italiano', path: '/tradurre-cv-italiano' },
          { label: 'Traduzir CV Português', path: '/traduzir-cv-portugues' },
          { label: 'CV Nederlands vertalen', path: '/cv-nederlands-vertalen' },
          { label: 'Översätt CV Svenska', path: '/oversatt-cv-svenska' },
          { label: 'Oversæt CV Dansk', path: '/oversat-cv-dansk' },
          { label: 'Oversett CV Norsk', path: '/oversett-cv-norsk' },
          { label: 'Käännä CV Suomi', path: '/kaanna-cv-suomi' },
          { label: 'Przetłumacz CV Polski', path: '/przetlumacz-cv-polski' },
          { label: 'Přeložit CV Čeština', path: '/prelozit-cv-cestina' },
          { label: 'Preložiť CV Slovenčina', path: '/prelozit-cv-slovencina' },
          { label: 'CV Magyar fordítása', path: '/cv-magyar-forditasa' },
          { label: 'Traducere CV Română', path: '/traducere-cv-romana' },
          { label: 'Μετάφραση CV Ελληνικά', path: '/metafrasi-cv-ellinika' },
          { label: 'Превод на CV Български', path: '/prevod-na-cv-balgarski' },
          { label: 'Prevedi CV Hrvatski', path: '/prevedi-cv-hrvatski' },
          { label: 'Prevedi CV Srpski', path: '/prevedi-cv-srpski' },
          { label: 'Prevedi CV Slovenščina', path: '/prevedi-cv-slovenscina' },
          { label: 'CV Lietuvių vertimas', path: '/cv-lietuviu-vertimas' },
          { label: 'CV Latviešu tulkojums', path: '/cv-latviesu-tulkojums' },
          { label: 'CV Eesti tõlkimine', path: '/cv-eesti-tolkimine' }
        ]
      }
    },
    legal: {
      faq: "FAQ",
      blog: "Blog",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      links: [
        'Pricing', 'Sitemap'
      ]
    },
    copyright: "© 2026 EuropeCV Platform. All rights reserved.",
    badge: "Built for the EU Market"
  },
  resumeUpload: {
    idle: {
      action: "Upload Your Resume",
      dragging: "Drop Resume Here",
      note: "Optimized for EU ATS systems"
    },
    ready: {
      status: "PDF Ready",
      cta: "Optimize Resume Now"
    },
    badges: [
      { label: 'Instant result' },
      { label: 'FREE Credits' },
      { label: 'No Credit Card required' },
      { label: 'No account required' },
      { label: 'Trusted in EU' },
      { label: 'Encrypted and Secured' },
      { label: 'GDPR Data Protection' },
      { label: 'Privacy' },
      { label: 'HR Approved' }
    ],
    targetMarkets: {
      title: "Target Markets",
      markets: [
        { name: 'Austria', code: 'at' },
        { name: 'Belgium', code: 'be' },
        { name: 'Croatia', code: 'hr' },
        { name: 'Denmark', code: 'dk' },
        { name: 'Finland', code: 'fi' },
        { name: 'France', code: 'fr' },
        { name: 'Germany', code: 'de' },
        { name: 'Ireland', code: 'ie' },
        { name: 'Italy', code: 'it' },
        { name: 'Netherlands', code: 'nl' },
        { name: 'Norway', code: 'no' },
        { name: 'Poland', code: 'pl' },
        { name: 'Spain', code: 'es' },
        { name: 'Sweden', code: 'se' },
        { name: 'Switzerland', code: 'ch' },
        { name: 'United Kingdom', code: 'gb' },
      ]
    }
  }
};

