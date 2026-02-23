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
    id: 'carepath-home-infusion',
    title: 'Health Systems Specialized Services',
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
  // Spring 2026
  {
    id: 'appe-hospital-spring26',
    title: 'Hospital Pharmacy',
    category: 'Institutional Pharmacy',
    description: 'Advanced practice experience in hospital pharmacy focusing on acute care medication management, interdisciplinary collaboration, and clinical decision-making in the inpatient setting.',
    status: 'Upcoming',
    icon: '🏥',
    color: 'blue',
    period: 'Spring 2026',
    type: 'Core Rotation'
  },
  // Summer 2026
  {
    id: 'appe-pc-elective-summer26',
    title: 'Patient Care (PC) Elective',
    category: 'Patient Care Elective',
    description: 'Elective rotation focusing on advanced patient care in a specialized area of pharmacy practice.',
    status: 'Upcoming',
    icon: '💊',
    color: 'purple',
    period: 'Summer 2026',
    type: 'PC Elective'
  },
  {
    id: 'appe-non-pc-elective-summer26',
    title: 'Non-Patient Care Elective',
    category: 'Non-PC Elective',
    description: 'Elective rotation in non-patient care area such as regulatory affairs, pharmacy informatics, or industry operations.',
    status: 'Upcoming',
    icon: '💼',
    color: 'orange',
    period: 'Summer 2026',
    type: 'Non-PC Elective'
  },
  // Fall 2026
  {
    id: 'appe-community-fall26',
    title: 'Community Pharmacy',
    category: 'Community Pharmacy',
    description: 'Advanced practice experience in community pharmacy setting focusing on comprehensive medication management, immunizations, and patient counseling.',
    status: 'Upcoming',
    icon: '🏪',
    color: 'blue',
    period: 'Fall 2026',
    type: 'Core Rotation'
  },
  {
    id: 'appe-acute-care-fall26',
    title: 'Acute Care',
    category: 'Acute Care',
    description: 'Advanced practice experience in acute care focusing on critical care pharmacy, emergency medicine, and intensive care unit medication management.',
    status: 'Upcoming',
    icon: '🚑',
    color: 'red',
    period: 'Fall 2026',
    type: 'Core Rotation'
  },
  {
    id: 'appe-ambulatory-fall26',
    title: 'Ambulatory Care',
    category: 'Ambulatory Care',
    description: 'Advanced practice experience in ambulatory care clinic focusing on chronic disease state management and preventive care.',
    status: 'Upcoming',
    icon: '🩺',
    color: 'green',
    period: 'Fall 2026',
    type: 'Core Rotation'
  },
  // Spring 2027
  {
    id: 'appe-non-pc-elective-spring27',
    title: 'Non-Patient Care Elective',
    category: 'Non-PC Elective',
    description: 'Second elective rotation in non-patient care area - potential focus on digital health, specialty pharmacy operations, or pharmaceutical industry.',
    status: 'Upcoming',
    icon: '⚙️',
    color: 'orange',
    period: 'Spring 2027',
    type: 'Non-PC Elective'
  },
  {
    id: 'appe-ambulatory-spring27',
    title: 'Additional Ambulatory Care',
    category: 'Ambulatory Care',
    description: 'Additional ambulatory care experience focusing on specialized patient populations or disease states.',
    status: 'Upcoming',
    icon: '🩺',
    color: 'green',
    period: 'Spring 2027',
    type: 'Additional Core/Elective'
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
    publications: [
      {
        title: 'Abre los Ojos para Escucharnos: Using Virtual Reality to Teach Social Determinants of Health',
        type: 'Poster',
        venue: '2024 Health Disparities & Social Justice Poster Competition'
      }
    ],
    period: 'Jan 2024 - Present',
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
    id: 'capstone-rpm',
    title: 'The Future is Remote',
    subtitle: 'FDA Guidance & Regulatory Strategy for RPM in Drug Research',
    type: 'Capstone Presentation',
    date: 'April 2025',
    audience: 'Faculty, Students, Industry Professionals',
    topics: ['Remote Patient Monitoring', 'FDA Regulation', 'Digital Health', 'Drug Development'],
    description: 'Comprehensive analysis of FDA guidance for remote patient monitoring technologies in clinical drug research.',
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
  copyright: '2025 Walter Nieves-Canabal',
  tagline: 'Built with 💻 + 🧠',
  links: [
    { text: 'Privacy', url: '#' },
    { text: 'Accessibility', url: '#' }
  ]
};