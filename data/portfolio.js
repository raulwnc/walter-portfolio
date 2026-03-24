// Personal Information
export const PERSONAL_INFO = {
  name: 'Walter Nieves-Canabal',
  title: 'PharmD Candidate',
  tagline: 'Tech-Driven Pharmacist',
  subtitle: 'Human-Centered Innovation',
  description: 'Harnessing clinical insight to build digital health solutions that matter.',
  email: 'wrn9@pitt.edu',
  phone: '939-226-4301',
  linkedin: 'https://www.linkedin.com/in/walter-nieves-canabal/',
  cv: '/Walter_Nieves_Canabal_CV.pdf',
  location: 'Pittsburgh, PA',
  school: 'University of Pittsburgh',
  year: 'PharmD Candidate, Expected April 2027',
  heritage: 'Proudly Puerto Rican',
  headshot: '/walter-headshot.webp',
  flag: '/puerto-rico-flag.webp',
};

// About Section
export const ABOUT = {
  bio: "I'm a PharmD candidate at the University of Pittsburgh (Class of 2027), blending clinical pharmacy expertise with technical innovation. My experience spans specialty pharmacy operations, regulatory science at the FDA, and digital health technology development. I'm passionate about leveraging data visualization, AI, and emerging technologies to transform pharmacy practice and improve patient outcomes.",
  interests: [
    'Digital Health Innovation',
    'Specialty Pharmacy Operations',
    'Healthcare Technology & AI',
    'Regulatory Science',
    'Data Visualization & Analytics',
    'Patient Engagement Solutions',
    'Virtual Reality in Healthcare'
  ],
  skills: {
    clinical: [
      'Clinical Decision-Making',
      'Patient Counseling & CMRs',
      'Medication Therapy Management',
      'Specialty Pharmacy Operations',
      'Drug Information & Research',
      'Regulatory Affairs Knowledge'
    ],
    technical: [
      'Power BI Data Visualization',
      'Microsoft Azure Services',
      'Product Development',
      'User Experience Design',
      'Healthcare Analytics',
      'VR/XR Technologies (SimX)',
      'Quality Assurance Processes'
    ],
    tools: [
      'Power BI',
      'Microsoft Azure Speech Services',
      'SimX VR Platform',
      'Pharmacy Management Systems',
      'Data Analysis Tools',
      'Microsoft Office Suite',
      'Scientific Writing & Presentation'
    ]
  }
};

// Work Experience (Paid Positions)
export const WORK_EXPERIENCE = [
  {
    id: 'cvs-pharmacy',
    title: 'Pharmacy Intern',
    organization: 'CVS Pharmacy',
    category: 'Community Pharmacy',
    description: 'Providing direct patient care in a high-volume community pharmacy setting. Managing prescription verification, patient counseling, and workflow optimization while gaining comprehensive experience with pharmacy management systems and dispensing processes.',
    impact: [
      'Support patient care through medication verification and counseling',
      'Gained proficiency with pharmacy dispensing systems',
      'Developed strong patient communication skills',
      'Optimized workflow efficiency in retail pharmacy setting'
    ],
    technologies: ['Pharmacy Management Systems', 'Patient Care', 'Workflow Optimization', 'Clinical Counseling'],
    status: 'Current',
    icon: '💊',
    color: 'blue',
    period: 'Oct 2025 - Present',
    location: 'Pittsburgh, PA'
  },
  {
    id: 'raremed-solutions',
    title: 'Technical Pharmacy Intern',
    organization: 'RareMed Solutions',
    category: 'Specialty Pharmacy & Tech',
    description: 'Bridged clinical pharmacy knowledge with product development in specialty pharmacy operations. Built advanced Power BI data visualizations and designed a Microsoft Azure Speech Services transcription system to enhance healthcare communication and clinical decision-making.',
    impact: [
      'Developed Power BI dashboards for healthcare data analytics',
      'Designed Azure Speech Services transcription system for clinical use',
      'Contributed to user guide refinement and QA processes',
      'Enhanced cross-team collaboration through technical solutions',
      'Bridged clinical expertise with product development needs'
    ],
    technologies: ['Power BI', 'Microsoft Azure', 'Speech Services', 'Data Visualization', 'Specialty Pharmacy', 'Product Development'],
    status: 'Completed',
    icon: '💻',
    color: 'purple',
    period: 'June - Aug 2025',
    location: 'Pittsburgh, PA'
  },
  {
    id: 'rx-ambassador-paid',
    title: 'Rx Ambassador',
    organization: 'University of Pittsburgh School of Pharmacy',
    category: 'Student Recruitment',
    description: 'Conducting School of Pharmacy tours and hosting virtual information sessions to expand outreach to prospective students nationwide.',
    impact: [
      'Conduct campus tours for prospective students and families',
      'Host virtual information sessions nationwide',
      'Mentor prospective pharmacy students',
      'Represent the School of Pharmacy at recruitment events'
    ],
    technologies: ['Virtual Conferencing', 'Student Outreach', 'Recruitment'],
    status: 'Current',
    icon: '🎓',
    color: 'blue',
    period: 'Feb 2024 - Present',
    location: 'Pittsburgh, PA'
  },
  {
    id: 'fda-fellowship',
    title: 'FDA Fellow',
    organization: 'U.S. Food and Drug Administration',
    category: 'Regulatory Science',
    description: 'Co-led an initiative to enhance industry understanding of critical regulatory calculations. Developed and presented scientific presentations translating complex regulatory data into clear visual insights.',
    impact: [
      'Co-led regulatory education initiative',
      'Developed data visualizations for complex regulations',
      'Presented scientific findings to team',
      'Translated regulatory data for broader understanding'
    ],
    technologies: ['Data Visualization', 'Regulatory Affairs', 'Scientific Communication'],
    status: 'Completed',
    icon: '📊',
    color: 'green',
    period: 'June - Aug 2024',
    location: 'Silver Spring, MD'
  }
];

// IPPEs (Introductory Pharmacy Practice Experiences)
export const IPPES = [
  {
    id: 'upmc-presbyterian-health-system',
    title: 'Health System Hospital Foundations & Direct Patient Care',
    organization: 'UPMC Presbyterian Hospital',
    category: 'Health System',
    description: 'Two-week immersive IPPE at UPMC Presbyterian covering both foundational hospital pharmacy operations and direct patient care across neurosurgery and spinal surgery units (6D, 8D, 9N, 10N). Developed clinical skills in post-operative medication management, discharge counseling, and medication reconciliation while navigating the Cerner EHR system. In week two, took greater ownership of patient cases and trained APPE students on Cerner workflows, developing leadership and teaching skills alongside clinical responsibilities.',
    impact: [
      'Reviewed post-operative medications by evaluating clinical status, medication history, and treatment plans',
      'Counseled patients on discharge medications, translating complex regimens into clear guidance',
      'Navigated Cerner EHR to access medication histories, active orders, and key clinical data',
      'Trained two APPE students on Cerner workflows, reinforcing clinical knowledge through teaching',
      'Collaborated with pharmacists, physicians, and nurses across four inpatient units',
      'Explored UPMC\'s Cerner-to-Epic EHR transition and its implications for pharmacy informatics'
    ],
    technologies: ['Cerner EHR', 'Medication Reconciliation', 'Discharge Counseling', 'Interprofessional Collaboration', 'Health Informatics'],
    icon: '🏨',
    color: 'blue',
    period: 'Mar 2026',
    hours: '80 hours',
    location: 'Pittsburgh, PA'
  },
  {
    id: 'carepath-home-infusion',
    title: 'Health System Specialized Services',
    organization: 'CarePathRx Home Infusion (Chartwell)',
    category: 'Specialty Services',
    description: 'Collaborated with pharmacists and leadership to observe workflow and safety processes in home infusion services. Explored innovations in patient monitoring and presented an independent project connecting pharmacy practice with emerging technologies.',
    impact: [
      'Observed specialized pharmacy workflow and safety processes',
      'Explored patient monitoring innovations in home infusion',
      'Presented independent project on pharmacy technology integration',
      'Gained insight into specialty pharmacy practice'
    ],
    technologies: ['Home Infusion', 'Patient Monitoring', 'Specialty Pharmacy', 'Healthcare Innovation'],
    icon: '🏥',
    color: 'green',
    period: 'July 2025',
    hours: '40 hours',
    location: 'Pittsburgh, PA'
  },
  {
    id: 'rite-aid-community',
    title: 'Community Pharmacist Practice',
    organization: 'Rite Aid',
    category: 'Community Pharmacy',
    description: 'Conducted comprehensive medication reviews (CMRs), counseling patients on medication use, adherence, and drug interactions. Educated patients on disease management and lifestyle modifications.',
    impact: [
      'Performed comprehensive medication reviews (CMRs)',
      'Counseled patients on medication safety and adherence',
      'Educated patients on chronic disease management',
      'Identified and resolved drug interaction concerns'
    ],
    technologies: ['Patient Counseling', 'MTM', 'Disease Management', 'Drug Interaction Analysis'],
    icon: '🏪',
    color: 'blue',
    period: 'Jan - Apr 2025',
    hours: '120 hours',
    location: 'Pittsburgh, PA'
  },
  {
    id: 'casa-san-jose',
    title: 'Community and Public Health',
    organization: 'Casa San Jose - Nonprofit Latino Community Center',
    category: 'Public Health',
    description: 'Developed a medical orientation program leveraging digital tools to educate Latino communities on healthcare access, aligning technology with patient-centered solutions to bridge care gaps.',
    impact: [
      'Created digital health education program for Latino community',
      'Addressed healthcare access barriers in underserved populations',
      'Improved health literacy in Latino community',
      'Applied patient-centered design principles'
    ],
    technologies: ['Digital Health Tools', 'Health Education', 'Community Outreach', 'Patient Engagement'],
    pdf: '/Medical_Orientation_Casa_San_Jose.pdf',
    icon: '🤝',
    color: 'orange',
    period: 'Sept 2023 - Apr 2024',
    hours: '80 hours',
    location: 'Pittsburgh, PA'
  }
];

// Projects (Independent/Academic Projects)
export const PROJECTS = [
  {
    id: 'script-your-future',
    title: 'Script Your Future Campaign',
    category: 'Digital Health Outreach',
    description: 'Led a digital campaign reaching 10,000+ individuals to improve hypertension awareness, medication adherence, and patient empowerment through social outreach and education.',
    impact: [
      'Reached 10,000+ individuals',
      'Improved hypertension awareness in target communities',
      'Enhanced medication adherence rates',
      'Empowered patients with self-management tools'
    ],
    technologies: ['Digital Marketing', 'Health Education', 'Social Media', 'Patient Engagement'],
    status: 'Completed',
    icon: '📱',
    color: 'green',
    metrics: {
      reach: '10,000+',
      engagement: 'High',
      impact: 'Community-wide'
    }
  }
];

// Future APPEs (Advanced Pharmacy Practice Experiences)
export const FUTURE_APPES = [
  {
    id: 'appe-block-1',
    title: 'Hospital Pharmacy',
    organization: 'West Penn Hospital - Allegheny Health Network',
    preceptor: 'Jessica Butala',
    category: 'Institutional Pharmacy',
    description: 'Advanced practice experience in hospital pharmacy focusing on acute care medication management, interdisciplinary collaboration, and clinical decision-making in the inpatient setting.',
    status: 'Upcoming',
    icon: '🏥',
    color: 'blue',
    period: 'May 11 - Jun 12, 2026',
    type: 'Core Rotation'
  },
  {
    id: 'appe-block-2',
    title: 'Patient Care Elective - Specialty Pharmacy',
    organization: 'CVS Health - Caremark Specialty',
    preceptor: 'Connie Constantino',
    category: 'Specialty Pharmacy',
    description: 'Elective rotation in specialty pharmacy focusing on complex medication management, prior authorizations, and patient support programs for high-cost drug therapies.',
    status: 'Upcoming',
    icon: '💊',
    color: 'purple',
    period: 'Jun 15 - Jul 17, 2026',
    type: 'PC Elective'
  },
  {
    id: 'appe-block-3',
    title: 'Non-Patient Care Elective - Digital Health',
    organization: 'CVS Digital Health (Virtual)',
    preceptor: 'David Katz',
    category: 'Digital Health',
    description: 'Virtual elective rotation exploring digital health strategy, pharmacy innovation, and technology-driven solutions at the intersection of pharmacy and healthcare technology.',
    status: 'Upcoming',
    icon: '💻',
    color: 'purple',
    period: 'Jul 20 - Aug 21, 2026',
    type: 'Non-PC Elective'
  },
  {
    id: 'appe-block-4',
    title: 'Community Pharmacy',
    organization: 'Harris Teeter Pharmacy #043',
    preceptor: 'Bradley Lovelace',
    category: 'Community Pharmacy',
    description: 'Advanced practice experience in community pharmacy focusing on comprehensive medication management, immunizations, patient counseling, and pharmacy operations.',
    status: 'Upcoming',
    icon: '🏪',
    color: 'blue',
    period: 'Aug 24 - Sep 25, 2026',
    type: 'Core Rotation'
  },
  {
    id: 'appe-block-5',
    title: 'Acute Care Medicine',
    organization: 'VA Pittsburgh Healthcare System',
    preceptor: 'Allison Langland',
    category: 'Acute Care',
    description: 'Advanced practice experience in acute care medicine at the VA, focusing on veterans health, critical care pharmacotherapy, and interdisciplinary patient management.',
    status: 'Upcoming',
    icon: '🚑',
    color: 'red',
    period: 'Sep 28 - Oct 30, 2026',
    type: 'Core Rotation'
  },
  {
    id: 'appe-block-6',
    title: 'Ambulatory Care',
    organization: 'Mosaic Pharmacy Service',
    preceptor: 'Patricia Powers',
    category: 'Ambulatory Care',
    description: 'Advanced practice experience in ambulatory care focusing on chronic disease state management, medication therapy management, and preventive care in an outpatient setting.',
    status: 'Upcoming',
    icon: '🩺',
    color: 'green',
    period: 'Nov 2 - Dec 4, 2026',
    type: 'Core Rotation'
  },
  {
    id: 'appe-block-7',
    title: 'Non-Patient Care Elective - Corporate Innovation',
    organization: 'CVS Corporate Enterprise Innovation',
    preceptor: 'Teniola Kumapayi',
    category: 'Healthcare Innovation',
    description: 'Elective rotation at CVS Corporate focused on enterprise-level healthcare innovation, strategic initiatives, and pharmacy industry operations.',
    status: 'Upcoming',
    icon: '⚙️',
    color: 'orange',
    period: 'Jan 4 - Feb 5, 2027',
    type: 'Non-PC Elective'
  },
  {
    id: 'appe-block-8',
    title: 'Ambulatory Care - Community Health',
    organization: 'CDT Municipio de San Juan (Programa SIDA)',
    preceptor: 'Noel Santiago',
    category: 'Ambulatory Care',
    description: 'Ambulatory care rotation in San Juan, Puerto Rico focused on HIV/AIDS patient management, underserved community health, and culturally competent pharmaceutical care.',
    status: 'Upcoming',
    icon: '🩺',
    color: 'green',
    period: 'Feb 8 - Mar 12, 2027',
    type: 'Core Rotation'
  }
];

// Research & Innovation
export const RESEARCH = [
  {
    id: 'student-exchange-program',
    title: 'Pitt-UPR Student Exchange Program Development',
    category: 'Professional Development',
    description: 'Contributing to the development of a student exchange program between the University of Pittsburgh and the University of Puerto Rico pharmacy schools, fostering professional relationships and cross-cultural pharmacy education.',
    outcomes: [
      'Advancing program development between two pharmacy schools',
      'Fostering professional relationships in pharmacy education',
      'Promoting cross-cultural pharmacy practice experiences',
      'Enhancing international collaboration opportunities'
    ],
    technologies: ['Program Development', 'Professional Networking', 'Cross-Cultural Education'],
    icon: '🌎',
    publications: [],
    period: 'Sep 2024 - Present',
    supervisor: 'Ashley Yarabinec, PharmD'
  },
  {
    id: 'vr-pharmacy-education',
    title: 'Virtual Reality in Pharmacy Education',
    category: 'Educational Technology',
    description: 'Developed VR cases using SimX to improve student pharmacist medication counseling and patient education skills. Tested and analyzed VR modules for PharmD curriculum, examining impact on experiential learning, interprofessional collaboration, and competency-based training.',
    outcomes: [
      'Developed VR case for medication counseling improvement',
      'Tested SimX VR modules for curriculum enhancement',
      'Analyzed impact on competency-based learning and critical thinking',
      'Authored abstract on VR integration in pharmacy education',
      'Presented findings at health disparities research competition'
    ],
    technologies: ['SimX VR', 'Educational Technology', 'Clinical Simulation', 'Competency Assessment'],
    icon: '🥽',
    publications: [],
    period: 'Jan 2024 - Apr 2025',
    supervisor: 'Ashley Yarabinec, PharmD'
  },
  {
    id: 'fda-regulatory-research',
    title: 'FDA Regulatory Science Research',
    category: 'Regulatory Affairs',
    description: 'Co-led an initiative to enhance industry understanding of critical regulatory calculations. Developed and presented scientific presentations translating complex regulatory data into clear visual insights for broader team discussions.',
    outcomes: [
      'Enhanced industry understanding of regulatory calculations',
      'Developed clear data visualizations for complex regulations',
      'Contributed to regulatory education initiatives',
      'Improved scientific communication strategies'
    ],
    technologies: ['Data Visualization', 'Regulatory Affairs', 'Scientific Communication', 'Presentation Design'],
    icon: '📊',
    organization: 'U.S. Food and Drug Administration',
    period: 'June - Aug 2024',
    location: 'Silver Spring, MD'
  },
  {
    id: 'drug-metabolism',
    title: 'Drug Metabolism & Transport Research',
    category: 'Pharmaceutical Science',
    description: "Investigated PEG-ASNase's effects on drug metabolism and transport. Performed comprehensive literature review on asparaginase therapy's impact, identifying 15 key entries from a 27,000-entry dataset on cytochrome P450 and phase II enzymes.",
    outcomes: [
      'Generated key scientific insights for medical communications',
      'Synthesized complex findings into scientific reports',
      'Identified critical drug-enzyme interactions',
      'Supported evidence-based medical information strategies'
    ],
    technologies: ['Pharmacokinetics', 'Drug Metabolism', 'Literature Review', 'Scientific Writing', 'Data Analysis'],
    icon: '🧪',
    period: 'Sep - Dec 2023',
    supervisor: 'Christian Fernandez, PhD'
  }
];

// Presentations
export const PRESENTATIONS = [
  {
    id: 'apha-2026-poster',
    title: 'Pharmacist-Led Gait Biometrics Through a Clinical Decision Support System in Multiple Sclerosis',
    subtitle: 'Development and Evaluation Plan',
    type: 'Poster Presentation',
    date: 'March 28, 2026',
    audience: 'APhA Annual Meeting & Exposition Attendees',
    topics: ['Gait Biometrics', 'Multiple Sclerosis', 'Clinical Decision Support', 'Digital Health', 'Pharmacist-Led Care'],
    description: 'Presenting StepForwardRx, a pharmacist-led clinical decision support system that captures longitudinal gait metrics via mobile devices to support early detection of functional decline in MS patients.',
    poster: '/StepForwardRx_Poster.pdf',
    icon: '🧠',
    venue: 'APhA Annual Meeting 2026',
    location: 'Los Angeles Convention Center, Exhibit Hall J',
    posterNumber: '#322'
  },
  {
    id: 'capstone-rpm',
    title: 'The Future is Remote',
    subtitle: 'FDA Guidance & Regulatory Strategy for RPM in Drug Research',
    type: 'Capstone Presentation',
    date: 'April 2025',
    audience: 'Faculty, Students, Industry Professionals',
    topics: ['Remote Patient Monitoring', 'FDA Regulation', 'Digital Health', 'Drug Development'],
    description: 'Comprehensive analysis of FDA guidance for remote patient monitoring technologies in clinical drug research.',
    pdf: '/The_Future_is_Remote_Capstone.pdf',
    icon: '🎯'
  },
  {
    id: 'seminar-ai',
    title: 'FDA Guidance on AI in Drug Regulatory Decision-Making',
    subtitle: 'Critical Review & Applicability in Drug Development',
    type: 'Academic Seminar',
    date: 'March 2025',
    audience: 'Pharmacy Students, Faculty',
    topics: ['Artificial Intelligence', 'Regulatory Science', 'Drug Development', 'FDA Guidance'],
    description: 'Critical review of FDA guidance on AI in regulatory decision-making and its implications for pharmaceutical development.',
    pdf: '/AI_in_Drug_Reg_Decision_Making_Seminar.pdf',
    icon: '🤖'
  },
  {
    id: 'poster-vr-sdoh',
    title: 'Abre los Ojos para Escucharnos',
    subtitle: 'Using Virtual Reality to Teach Social Determinants of Health',
    type: 'Poster Presentation',
    date: 'March 2024',
    audience: 'University Research Community',
    topics: ['Virtual Reality', 'Social Determinants of Health', 'Health Education', 'Health Disparities'],
    description: 'Poster presented at the 2024 Health Disparities & Social Justice Poster Competition, University of Pittsburgh.',
    pdf: '/Abre_los_Ojos_para_Escucharnos_VR_Poster.pdf',
    icon: '📊'
  }
];

// Leadership Experience
export const LEADERSHIP = [
  {
    id: 'rx-ambassador',
    organization: 'RxAmbassador Program',
    position: 'Co-President',
    period: '2024 - Present',
    description: 'Leading outreach and mentorship efforts for prospective pharmacy students, conducting campus tours and hosting virtual information sessions nationwide.',
    responsibilities: [
      'Coordinate student recruitment and outreach initiatives',
      'Conduct School of Pharmacy tours for prospective students and families',
      'Host virtual information sessions to expand national outreach',
      'Mentor prospective pharmacy students',
      'Build partnerships with high schools and community organizations'
    ],
    impact: 'Increased program reach by 40% and mentored 50+ prospective students',
    icon: '🎓',
    color: 'blue'
  },
  {
    id: 'apha-asp',
    organization: 'APhA-ASP (American Pharmacists Association)',
    position: 'International Vice President',
    period: '2024 - Present',
    description: 'Promoting advocacy and collaboration among pharmacy students.',
    responsibilities: [
      'Coordinate global health initiatives',
      'Organize tabling events and presentations',
      'Promote cultural professional development'
    ],
    impact: 'Connected 100+ pharmacy students across 5 countries',
    icon: '🌍',
    color: 'green'
  },
  {
    id: 'alpfa',
    organization: 'ALPFA (Association of Latino Professionals For America)',
    position: 'Vice President',
    period: '2023 - Present',
    description: 'Driving diversity, equity, and inclusion efforts while organizing professional development programming for Latino students.',
    responsibilities: [
      'Lead diversity and inclusion initiatives',
      'Organize professional development workshops',
      'Build corporate partnerships for student opportunities',
      'Create networking events for Latino students',
      'Promote career development in healthcare and business'
    ],
    impact: 'Grew membership by 60%',
    icon: '🤝',
    color: 'orange'
  },
  {
    id: 'professional-dev-admin',
    organization: 'Professional Development Administration',
    position: 'Student Administrator',
    period: '2024 - Present',
    description: 'Supporting professional development initiatives and administrative operations for pharmacy students.',
    responsibilities: [
      'Coordinate professional development events',
      'Support administrative operations',
      'Assist with strategic planning initiatives',
      'Promote student advisor opportunities across the school'
    ],
    impact: 'Enhanced student participation in professional development events',
    icon: '📋',
    color: 'blue'
  }
];

// References
export const REFERENCES = [
  {
    name: 'Dr. Ashley Yarabinec, PharmD',
    title: 'Academic Advisor',
    email: 'aby12@pitt.edu',
  },
  {
    name: 'John Riley, MBA',
    title: 'Project Advisor',
    email: 'jer158@pitt.edu',
    institution: 'University of Pittsburgh School of Pharmacy'
  },
  {
    name: 'Dr. Christian Fernandez, PhD',
    title: 'Research Faculty',
    email: 'chf63@pitt.edu',
    institution: 'University of Pittsburgh School of Pharmacy'
  },
  {
    name: 'Marijke Koppenol-Raab',
    title: 'FDA Fellowship Supervisor',
    email: 'Marijke.Koppenol-Raab@fda.hhs.gov',
    institution: 'U.S. Food and Drug Administration'
  }
];

// Navigation Items  
export const NAV_ITEMS = [
  { id: 'about', label: 'About', icon: '👤' },
  { id: 'skills-dashboard', label: 'Skills', icon: '⚡' },
  { id: 'experience', label: 'Experience', icon: '💼' },
  { id: 'research', label: 'Research', icon: '🔬' },
  { id: 'presentations', label: 'Presentations', icon: '🎤' },
  { id: 'leadership', label: 'Leadership', icon: '👥' },
  { id: 'contact', label: 'Contact', icon: '✉️' }
];

// Social Links
export const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/walter-nieves-canabal/',
    icon: '💼',
    color: '#0077b5'
  },
  {
    name: 'Email',
    url: 'mailto:wrn9@pitt.edu',
    icon: '✉️',
    color: '#ea4335'
  }
];

// Call to Action
export const CTA = {
  primary: {
    text: 'Download CV',
    link: '/Walter_Nieves_Canabal_CV.pdf',
    icon: '📄'
  },
  secondary: {
    text: 'Get In Touch',
    link: '#contact',
    icon: '💬'
  }
};

// Footer
export const FOOTER = {
  copyright: 'Walter Nieves-Canabal',
  tagline: 'Built with 💻 + 🧠',
  links: [
    { text: 'Privacy', url: '#' },
    { text: 'Accessibility', url: '#' }
  ]
};