import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ANIMATION_VARIANTS, LAYOUT } from '../utils/constants';

const SKILLS_DATA = {
  clinical: [
    {
      id: 'patient-care',
      name: 'Patient Care & Counseling',
      icon: '💊',
      color: 'pine',
      projects: '100+',
      evidence: [
        'Rite Aid IPPE: 120 hours of CMRs and patient counseling',
        'CVS Pharmacy: Current intern role (Oct 2025-Present)',
        'Conducted medication reviews, identified drug interactions',
        'Direct patient education on disease management'
      ],
      impact: 'Served 100+ patients through community pharmacy rotations',
      link: '#experience'
    },
    {
      id: 'clinical-operations',
      name: 'Clinical Operations & Systems',
      icon: '🏥',
      color: 'pine',
      evidence: [
        'CVS & Rite Aid: Proficient in pharmacy management systems',
        'Workflow optimization in high-volume retail settings',
        'Prescription verification and dispensing processes',
        'Specialty pharmacy operations at RareMed Solutions'
      ],
      impact: 'Clinical experience across multiple pharmacy practice settings',
      link: '#experience'
    },
    {
      id: 'drug-info',
      name: 'Drug Information & Research',
      icon: '🔬',
      color: 'pine',
      projects: '4',
      evidence: [
        'Drug metabolism research with Dr. Christian Fernandez',
        'Analyzed PEG-ASNase effects on cytochrome P450 enzymes',
        'Identified 15 key entries from 27,000-entry dataset',
        'FDA regulatory science research'
      ],
      impact: '4 completed research projects',
      link: '#research'
    },
    {
      id: 'community-health',
      name: 'Community Health & Prevention',
      icon: '🤝',
      color: 'pine',
      reach: '10,000+',
      evidence: [
        'COACH Volunteer (UPMC Heart & Vascular): Cardiovascular health',
        'The HUB at University of Pittsburgh: Community health services',
        'Birmingham Free Clinic: Patient care volunteer',
        'Casa San Jose IPPE: Latino community health education'
      ],
      impact: 'Script Your Future campaign reached 10,000+ individuals',
      services: 'Vaccinations, drug screening, BP monitoring, medication counseling',
      link: '#experience'
    }
  ],
  technical: [
    {
      id: 'data-viz',
      name: 'Data Visualization & Analytics',
      icon: '📊',
      color: 'slate',
      projects: '3+',
      evidence: [
        'RareMed Solutions: Built Power BI dashboards for specialty pharmacy',
        'FDA Fellowship: Translated regulatory data into visual insights',
        'Healthcare data analytics for clinical decision-making'
      ],
      impact: 'Enhanced data accessibility and clinical decision support',
      link: '#experience'
    },
    {
      id: 'cloud-ai',
      name: 'Cloud & AI Technologies',
      icon: '☁️',
      color: 'slate',
      evidence: [
        'RareMed Solutions: Designed Microsoft Azure Speech Services system',
        'Healthcare communication enhancement through AI',
        'Cross-platform technical integration'
      ],
      technologies: 'Microsoft Azure, Speech Services, Healthcare APIs',
      link: '#experience'
    },
    {
      id: 'vr-tech',
      name: 'Virtual Reality & Immersive Tech',
      icon: '🥽',
      color: 'slate',
      duration: 'Jan 2024 - April 2025',
      evidence: [
        'Developed VR cases using SimX for medication counseling',
        'Tested VR modules for PharmD curriculum',
        'Analyzed impact on competency-based learning',
        'Poster at 2024 Health Disparities Competition'
      ],
      impact: 'Integrating VR into pharmacy education',
      link: '#research'
    },
    {
      id: 'product-dev',
      name: 'Digital Health Product Development',
      icon: '💻',
      color: 'slate',
      team: '3',
      evidence: [
        'Leading digital health innovation project',
        'Product development in specialty pharmacy',
        'User experience design and QA processes',
        'Developing patient monitoring solution with biometric integration'
      ],
      role: 'Project leadership and strategic direction',
      link: '#projects'
    }
  ],
  leadership: [
    {
      id: 'team-building',
      name: 'Team Building & Mentorship',
      icon: '👥',
      color: 'brown',
      mentored: '50+',
      evidence: [
        'ALPFA Vice President: Built partnerships, grew membership 60%',
        'RxAmbassadors Co-President: Leading recruitment initiatives',
        'Professional Development Administration: Student Administrator',
        'Advisor to P1 and P2 students through mentorship program',
        'Cross-organizational leadership (pharmacy + non-pharmacy)'
      ],
      impact: 'Mentored 50+ students, grew ALPFA membership by 60%',
      link: '#leadership'
    },
    {
      id: 'public-speaking',
      name: 'Public Speaking & Communication',
      icon: '🎤',
      color: 'brown',
      presentations: '3',
      evidence: [
        'Capstone: FDA Guidance on Remote Patient Monitoring (April 2025)',
        'Seminar: AI in Drug Regulatory Decision-Making (March 2025)',
        'Poster: VR & Social Determinants of Health (March 2024)',
        'Pitch meetings for digital health project',
        'Virtual information sessions nationwide'
      ],
      audiences: 'Faculty, students, industry professionals, community',
      link: '#presentations'
    },
    {
      id: 'research-writing',
      name: 'Research & Scientific Writing',
      icon: '✍️',
      color: 'brown',
      abstracts: '3',
      evidence: [
        '3 abstracts written across research projects',
        'Poster development and presentation',
        'Scientific reports with figures and tables',
        'Literature review synthesis from large datasets',
        'Multiple research projects across pharmacy domains'
      ],
      publications: '3 poster presentations, 3 abstracts',
      link: '#research'
    },
    {
      id: 'community-advocacy',
      name: 'Community Engagement & Advocacy',
      icon: '🌍',
      color: 'brown',
      evidence: [
        'APhA-ASP International VP: Global health initiatives',
        'Casa San Jose: Medical orientation for Latino community',
        'COACH Volunteer: Cardiovascular health education',
        'Script Your Future: Digital health campaign (10,000+ reach)',
        'Cultural competency and health equity focus'
      ],
      impact: 'Improved health literacy in underserved communities',
      link: '#leadership'
    }
  ],
  bridge: [
    {
      id: 'healthcare-tech',
      name: 'Healthcare-Tech Translation',
      icon: '🔄',
      color: 'pine',
      evidence: [
        'Bridging clinical pharmacy with product development at RareMed',
        'Translating regulatory data into actionable insights at FDA',
        'Patient-centered digital health innovation',
        'Technical documentation for clinical applications'
      ],
      impact: 'Unique ability to communicate across healthcare and technology',
      link: '#about'
    },
    {
      id: 'project-mgmt',
      name: 'Project Management',
      icon: '📋',
      color: 'pine',
      team: '3',
      evidence: [
        'Leading 3-person team on digital health project',
        'Coordinated multiple research initiatives',
        'Event planning and execution for student organizations',
        'Strategic planning for professional development programs'
      ],
      impact: 'Successfully delivered multiple complex projects',
      link: '#leadership'
    }
  ]
};

const COLOR_MAP = {
  pine:  { border: '#2D4530' },
  slate: { border: '#6B7B84' },
  brown: { border: '#5E4B3B' },
};

const SkillCard = ({ skill, index, onExpand }) => {
  const c = COLOR_MAP[skill.color] || COLOR_MAP.pine;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="!bg-[#EEE9DA] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
      style={{ border: `2px solid ${c.border}33` }}
      onClick={() => onExpand(skill)}
      onMouseEnter={e => e.currentTarget.style.borderColor = c.border}
      onMouseLeave={e => e.currentTarget.style.borderColor = `${c.border}33`}
    >
      <div className="flex items-start gap-3 mb-4">
        <span className="text-3xl" aria-hidden="true">{skill.icon}</span>
        <div className="flex-1">
          <h3 className="text-base font-bold mb-2" style={{ color: '#1E2E20' }}>{skill.name}</h3>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {skill.projects && <span className="px-2 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#C8C2AD44', color: '#4A5A4E' }}>📊 {skill.projects} projects</span>}
        {skill.mentored && <span className="px-2 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#C8C2AD44', color: '#4A5A4E' }}>👥 {skill.mentored} mentored</span>}
        {skill.presentations && <span className="px-2 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#C8C2AD44', color: '#4A5A4E' }}>🎤 {skill.presentations} talks</span>}
        {skill.abstracts && <span className="px-2 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#C8C2AD44', color: '#4A5A4E' }}>✍️ {skill.abstracts} abstracts</span>}
        {skill.team && <span className="px-2 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#C8C2AD44', color: '#4A5A4E' }}>👥 {skill.team}-person team</span>}
        {skill.reach && <span className="px-2 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#C8C2AD44', color: '#4A5A4E' }}>📢 {skill.reach} reach</span>}
      </div>

      <div className="text-xs text-center mt-2" style={{ color: '#8A9A8A' }}>Click to view details →</div>
    </motion.div>
  );
};

const SkillModal = ({ skill, onClose }) => {
  if (!skill) return null;
  const c = COLOR_MAP[skill.color] || COLOR_MAP.pine;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="!bg-[#EEE9DA] rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 rounded-t-2xl" style={{ backgroundColor: c.border }}>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{skill.icon}</span>
              <h3 className="text-2xl font-bold" style={{ color: '#E1DBC9' }}>{skill.name}</h3>
            </div>
            <button onClick={onClose} className="text-2xl font-bold opacity-80 hover:opacity-100" style={{ color: '#E1DBC9' }} aria-label="Close modal">×</button>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <h4 className="text-lg font-bold mb-3" style={{ color: '#1E2E20' }}>📋 Evidence & Experience</h4>
            <ul className="space-y-2">
              {skill.evidence.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#4A5A4E' }}>
                  <span style={{ color: '#2D4530' }} className="mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {skill.impact && (
            <div className="mb-6 p-4 rounded-lg !bg-[#E1DBC9]" style={{ border: '1px solid #C8C2AD' }}>
              <h4 className="text-sm font-bold mb-2" style={{ color: '#1E2E20' }}>🎯 Impact</h4>
              <p className="text-sm" style={{ color: '#4A5A4E' }}>{skill.impact}</p>
            </div>
          )}

          {(skill.services || skill.technologies || skill.audiences || skill.publications || skill.role || skill.duration) && (
            <div className="mb-6">
              <h4 className="text-lg font-bold mb-3" style={{ color: '#1E2E20' }}>ℹ️ Additional Details</h4>
              <div className="space-y-2 text-sm">
                {skill.services && <p style={{ color: '#4A5A4E' }}><span className="font-semibold">Services:</span> {skill.services}</p>}
                {skill.technologies && <p style={{ color: '#4A5A4E' }}><span className="font-semibold">Technologies:</span> {skill.technologies}</p>}
                {skill.audiences && <p style={{ color: '#4A5A4E' }}><span className="font-semibold">Audiences:</span> {skill.audiences}</p>}
                {skill.publications && <p style={{ color: '#4A5A4E' }}><span className="font-semibold">Publications:</span> {skill.publications}</p>}
                {skill.role && <p style={{ color: '#4A5A4E' }}><span className="font-semibold">Role:</span> {skill.role}</p>}
                {skill.duration && <p style={{ color: '#4A5A4E' }}><span className="font-semibold">Duration:</span> {skill.duration}</p>}
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <a href={skill.link} className="flex-1 px-4 py-2 text-center rounded-lg font-semibold text-sm transition-colors" style={{ backgroundColor: '#2D4530', color: '#E1DBC9' }} onClick={onClose}>
              View Related Work →
            </a>
            <a href="/Walter_Nieves_Canabal_CV.pdf" download className="px-4 py-2 text-center rounded-lg font-semibold text-sm transition-colors" style={{ backgroundColor: '#C8C2AD', color: '#1E2E20' }}>
              📄 Download CV
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkillsDashboard = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedSkill, setExpandedSkill] = useState(null);

  const categories = [
    { id: 'all', label: 'All Skills', icon: '⭐' },
    { id: 'clinical', label: 'Clinical', icon: '💊' },
    { id: 'technical', label: 'Technical', icon: '💻' },
    { id: 'leadership', label: 'Leadership', icon: '👥' },
    { id: 'bridge', label: 'Bridge Skills', icon: '🌉' }
  ];

  const getSkillsToDisplay = () => {
    if (activeCategory === 'all') {
      return [...SKILLS_DATA.clinical, ...SKILLS_DATA.technical, ...SKILLS_DATA.leadership, ...SKILLS_DATA.bridge];
    }
    return SKILLS_DATA[activeCategory] || [];
  };

  return (
    <section id="skills-dashboard" className={`${LAYOUT.SECTION_PADDING} !bg-[#EEE9DA]`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1E2E20' }}>Skills & Expertise</h2>
          <div className="!bg-[#2D4530] w-20 h-1 mx-auto rounded-full mb-4" />
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#4A5A4E' }}>
            Where Pharmacy Meets Technology: A unique blend of clinical expertise and technical innovation
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className="px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                style={
                  activeCategory === category.id
                    ? { backgroundColor: '#2D4530', color: '#E1DBC9', transform: 'scale(1.05)' }
                    : { backgroundColor: '#E1DBC9', color: '#4A5A4E', border: '1px solid #C8C2AD' }
                }
              >
                <span className="mr-2" aria-hidden="true">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getSkillsToDisplay().map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} onExpand={setExpandedSkill} />
          ))}
        </div>

        <div className="!bg-[#E1DBC9] mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 rounded-2xl shadow-lg" style={{ border: '1px solid #C8C2AD' }}>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1" style={{ color: '#2D4530' }}>50+</div>
            <div className="text-sm" style={{ color: '#6A6050' }}>Students Mentored</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1" style={{ color: '#6B7B84' }}>10K+</div>
            <div className="text-sm" style={{ color: '#6A6050' }}>Campaign Reach</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1" style={{ color: '#5E4B3B' }}>4</div>
            <div className="text-sm" style={{ color: '#6A6050' }}>Research Projects</div>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-2xl text-center" style={{ backgroundColor: '#2D4530' }}>
          <h3 className="text-xl font-bold mb-2" style={{ color: '#E1DBC9' }}>🌉 The Bridge</h3>
          <p className="text-sm max-w-2xl mx-auto" style={{ color: '#C8C2AD' }}>
            My unique positioning at the intersection of pharmacy and technology allows me to translate
            clinical needs into technical solutions and bring digital innovation to healthcare practice.
          </p>
        </div>
      </div>

      <AnimatePresence>
        {expandedSkill && <SkillModal skill={expandedSkill} onClose={() => setExpandedSkill(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default SkillsDashboard;