import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ANIMATION_VARIANTS, LAYOUT } from '../utils/constants';

const SKILLS_DATA = {
  clinical: [
    {
      id: 'patient-care',
      name: 'Patient Care & Counseling',
      proficiency: 85,
      icon: '💊',
      color: 'blue',
      hours: '500+',
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
      proficiency: 80,
      icon: '🏥',
      color: 'blue',
      hours: '500+',
      evidence: [
        'CVS & Rite Aid: Proficient in pharmacy management systems',
        'Workflow optimization in high-volume retail settings',
        'Prescription verification and dispensing processes',
        'Specialty pharmacy operations at RareMed Solutions'
      ],
      impact: '500+ clinical hours across multiple practice settings',
      link: '#experience'
    },
    {
      id: 'drug-info',
      name: 'Drug Information & Research',
      proficiency: 90,
      icon: '🔬',
      color: 'blue',
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
      proficiency: 85,
      icon: '🤝',
      color: 'blue',
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
      proficiency: 90,
      icon: '📊',
      color: 'purple',
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
      proficiency: 75,
      icon: '☁️',
      color: 'purple',
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
      proficiency: 70,
      icon: '🥽',
      color: 'purple',
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
      proficiency: 80,
      icon: '💻',
      color: 'purple',
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
      proficiency: 85,
      icon: '👥',
      color: 'orange',
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
      proficiency: 85,
      icon: '🎤',
      color: 'orange',
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
      proficiency: 80,
      icon: '✍️',
      color: 'orange',
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
      proficiency: 90,
      icon: '🌍',
      color: 'orange',
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
      proficiency: 85,
      icon: '🔄',
      color: 'green',
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
      proficiency: 80,
      icon: '📋',
      color: 'green',
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

const SkillCard = ({ skill, index, onExpand }) => {
  const colorClasses = {
    blue: {
      bg: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20',
      border: 'border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500',
      progress: 'from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700',
      text: 'text-blue-600 dark:text-blue-400'
    },
    purple: {
      bg: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20',
      border: 'border-purple-200 dark:border-purple-700 hover:border-purple-400 dark:hover:border-purple-500',
      progress: 'from-purple-400 to-purple-600 dark:from-purple-500 dark:to-purple-700',
      text: 'text-purple-600 dark:text-purple-400'
    },
    orange: {
      bg: 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20',
      border: 'border-orange-200 dark:border-orange-700 hover:border-orange-400 dark:hover:border-orange-500',
      progress: 'from-orange-400 to-orange-600 dark:from-orange-500 dark:to-orange-700',
      text: 'text-orange-600 dark:text-orange-400'
    },
    green: {
      bg: 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20',
      border: 'border-green-200 dark:border-green-700 hover:border-green-400 dark:hover:border-green-500',
      progress: 'from-green-400 to-green-600 dark:from-green-500 dark:to-green-700',
      text: 'text-green-600 dark:text-green-400'
    }
  };

  const colors = colorClasses[skill.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`bg-gradient-to-br ${colors.bg} border-2 ${colors.border} p-6 rounded-xl shadow-md hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300 cursor-pointer`}
      onClick={() => onExpand(skill)}
    >
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <span className="text-3xl" aria-hidden="true">{skill.icon}</span>
        <div className="flex-1">
          <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-2">
            {skill.name}
          </h3>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
            Proficiency
          </span>
          <span className={`text-sm font-bold ${colors.text}`}>
            {skill.proficiency}%
          </span>
        </div>
        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.proficiency}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
            className={`h-full bg-gradient-to-r ${colors.progress} rounded-full`}
          />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="flex flex-wrap gap-2 mb-3">
        {skill.hours && (
          <span className="px-2 py-1 bg-white/60 dark:bg-gray-800/60 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
            ⏱️ {skill.hours} hours
          </span>
        )}
        {skill.projects && (
          <span className="px-2 py-1 bg-white/60 dark:bg-gray-800/60 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
            📊 {skill.projects} projects
          </span>
        )}
        {skill.mentored && (
          <span className="px-2 py-1 bg-white/60 dark:bg-gray-800/60 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
            👥 {skill.mentored} mentored
          </span>
        )}
        {skill.presentations && (
          <span className="px-2 py-1 bg-white/60 dark:bg-gray-800/60 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
            🎤 {skill.presentations} talks
          </span>
        )}
        {skill.abstracts && (
          <span className="px-2 py-1 bg-white/60 dark:bg-gray-800/60 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
            ✍️ {skill.abstracts} abstracts
          </span>
        )}
        {skill.team && (
          <span className="px-2 py-1 bg-white/60 dark:bg-gray-800/60 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
            👥 {skill.team}-person team
          </span>
        )}
        {skill.reach && (
          <span className="px-2 py-1 bg-white/60 dark:bg-gray-800/60 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
            📢 {skill.reach} reach
          </span>
        )}
      </div>

      {/* Click to expand hint */}
      <div className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
        Click to view details →
      </div>
    </motion.div>
  );
};

const SkillModal = ({ skill, onClose }) => {
  if (!skill) return null;

  const colorClasses = {
    blue: 'from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700',
    purple: 'from-purple-600 to-purple-800 dark:from-purple-500 dark:to-purple-700',
    orange: 'from-orange-600 to-orange-800 dark:from-orange-500 dark:to-orange-700',
    green: 'from-green-600 to-green-800 dark:from-green-500 dark:to-green-700'
  };

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
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`bg-gradient-to-r ${colorClasses[skill.color]} p-6 text-white`}>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{skill.icon}</span>
              <div>
                <h3 className="text-2xl font-bold mb-1">{skill.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm opacity-90">Proficiency:</span>
                  <span className="text-xl font-bold">{skill.proficiency}%</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white text-2xl font-bold"
              aria-label="Close modal"
            >
              ×
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Evidence */}
          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">
              📋 Evidence & Experience
            </h4>
            <ul className="space-y-2">
              {skill.evidence.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          {skill.impact && (
            <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">
                🎯 Impact
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">{skill.impact}</p>
            </div>
          )}

          {/* Additional Info */}
          {(skill.services || skill.technologies || skill.audiences || skill.publications || skill.role || skill.duration) && (
            <div className="mb-6">
              <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">
                ℹ️ Additional Details
              </h4>
              <div className="space-y-2 text-sm">
                {skill.services && (
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Services:</span> {skill.services}
                  </p>
                )}
                {skill.technologies && (
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Technologies:</span> {skill.technologies}
                  </p>
                )}
                {skill.audiences && (
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Audiences:</span> {skill.audiences}
                  </p>
                )}
                {skill.publications && (
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Publications:</span> {skill.publications}
                  </p>
                )}
                {skill.role && (
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Role:</span> {skill.role}
                  </p>
                )}
                {skill.duration && (
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Duration:</span> {skill.duration}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Learn More */}
          <div className="flex gap-3">
            <a
              href={skill.link}
              className="flex-1 px-4 py-2 bg-blue-600 dark:bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors font-semibold text-sm"
              onClick={onClose}
            >
              View Related Work →
            </a>
            <a
              href="/Walter_Nieves_Canabal_CV.pdf"
              download
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-center rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-semibold text-sm"
            >
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
      return [
        ...SKILLS_DATA.clinical,
        ...SKILLS_DATA.technical,
        ...SKILLS_DATA.leadership,
        ...SKILLS_DATA.bridge
      ];
    }
    return SKILLS_DATA[activeCategory] || [];
  };

  const skillsToDisplay = getSkillsToDisplay();

  return (
    <section id="skills-dashboard" className={`${LAYOUT.SECTION_PADDING} bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950/30`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={ANIMATION_VARIANTS.staggerContainer}
        >
          {/* Section Header */}
          <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full mb-4" />
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Where Pharmacy Meets Technology: A unique blend of clinical expertise and technical innovation
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-blue-600 dark:bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <span className="mr-2" aria-hidden="true">{category.icon}</span>
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillsToDisplay.map((skill, index) => (
              <SkillCard
                key={skill.id}
                skill={skill}
                index={index}
                onExpand={setExpandedSkill}
              />
            ))}
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Clinical Hours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Students Mentored</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">10K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Campaign Reach</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">4</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Research Projects</div>
            </div>
          </motion.div>

          {/* Bridge Skills Callout */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-2xl text-white text-center"
          >
            <h3 className="text-xl font-bold mb-2">🌉 The Bridge</h3>
            <p className="text-sm opacity-90 max-w-2xl mx-auto">
              My unique positioning at the intersection of pharmacy and technology allows me to translate 
              clinical needs into technical solutions and bring digital innovation to healthcare practice.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Skill Detail Modal */}
      <AnimatePresence>
        {expandedSkill && (
          <SkillModal
            skill={expandedSkill}
            onClose={() => setExpandedSkill(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default SkillsDashboard;