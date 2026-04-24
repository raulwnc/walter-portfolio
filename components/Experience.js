import { motion } from 'framer-motion';
import { WORK_EXPERIENCE, IPPES, PROJECTS, FUTURE_APPES } from '../data/portfolio';
import { ANIMATION_VARIANTS, LAYOUT } from '../utils/constants';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const COLOR_MAP = {
  blue:   '#6B7B84',
  green:  '#2D4530',
  purple: '#6B7B84',
  orange: '#5E4B3B',
  red:    '#5E4B3B',
  gray:   '#C8C2AD',
};

const ExperienceCard = ({ experience, index }) => {
  const accent = COLOR_MAP[experience.color] || '#6B7B84';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="!bg-[#EEE9DA] p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
      style={{ border: `2px solid ${accent}44` }}
      onMouseEnter={e => e.currentTarget.style.borderColor = accent}
      onMouseLeave={e => e.currentTarget.style.borderColor = `${accent}44`}
    >
      <div className="flex items-start gap-4 mb-4">
        <span className="text-4xl flex-shrink-0" aria-hidden="true">{experience.icon}</span>
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-bold mb-1" style={{ color: '#1E2E20' }}>
            {experience.title || experience.organization}
          </h3>
          {experience.organization && experience.title && (
            <p className="text-sm font-semibold mb-1" style={{ color: '#2D4530' }}>
              {experience.organization}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-2 text-xs mb-2" style={{ color: '#8A9A8A' }}>
            <span>{experience.period}</span>
            {experience.location && <><span>•</span><span>{experience.location}</span></>}
            {experience.hours && <><span>•</span><span>{experience.hours}</span></>}
          </div>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
            style={{ backgroundColor: '#C8C2AD44', color: '#4A5A4E', border: '1px solid #C8C2AD' }}>
            {experience.category}
          </span>
        </div>
      </div>

      <p className="mb-4 leading-relaxed" style={{ color: '#4A5A4E' }}>{experience.description}</p>

      {experience.impact && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2" style={{ color: '#1E2E20' }}>
            {experience.responsibilities ? 'Responsibilities:' : experience.learningObjectives ? 'Learning Objectives:' : 'Key Impact:'}
          </h4>
          <ul className="space-y-2">
            {(experience.impact || experience.responsibilities || experience.learningObjectives || []).map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#4A5A4E' }}>
                <span style={{ color: '#2D4530' }} className="mt-0.5" aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {experience.technologies && (
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span key={tech} className="!bg-[#E1DBC9] px-3 py-1 rounded-full text-xs font-medium"
              style={{ color: '#4A5A4E', border: '1px solid #C8C2AD' }}>
              {tech}
            </span>
          ))}
        </div>
      )}

      {experience.metrics && (
        <div className="!bg-[#E1DBC9] grid grid-cols-3 gap-3 mt-4 p-4 rounded-lg">
          {Object.entries(experience.metrics).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-lg sm:text-xl font-bold" style={{ color: '#2D4530' }}>{value}</div>
              <div className="text-xs capitalize" style={{ color: '#6A6050' }}>{key}</div>
            </div>
          ))}
        </div>
      )}

      {experience.pdf && (
        <div className="mt-4">
          <a
            href={experience.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-colors"
            style={{ backgroundColor: '#2D4530', color: '#E1DBC9' }}
          >
            <span>👁️</span> View PDF
          </a>
        </div>
      )}
    </motion.div>
  );
};

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');
  const router = useRouter();

  useEffect(() => {
    const tab = router.query.tab;
    if (tab && ['work', 'ippes', 'projects', 'appes'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [router.query.tab]);

  const tabs = [
    { id: 'work', label: 'Work Experience', icon: '💼', data: WORK_EXPERIENCE },
    { id: 'ippes', label: 'IPPEs', icon: '🏥', data: IPPES },
    { id: 'projects', label: 'Projects', icon: '🚀', data: PROJECTS },
    { id: 'appes', label: 'Future APPEs', icon: '⭐', data: FUTURE_APPES }
  ];

  const activeData = tabs.find(tab => tab.id === activeTab)?.data || [];

  return (
    <section id="experience" className={`${LAYOUT.SECTION_PADDING} !bg-[#E1DBC9]`}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={ANIMATION_VARIANTS.staggerContainer}>
          <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1E2E20' }}>Experience</h2>
            <div className="!bg-[#2D4530] w-20 h-1 mx-auto rounded-full mb-4" />
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4A5A4E' }}>
              Bridging pharmacy expertise with technical innovation across diverse practice settings
            </p>
          </motion.div>

          <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="mb-8">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
                  style={
                    activeTab === tab.id
                      ? { backgroundColor: '#2D4530', color: '#E1DBC9' }
                      : { backgroundColor: '#EEE9DA', color: '#4A5A4E', border: '1px solid #C8C2AD' }
                  }
                >
                  <span className="mr-2" aria-hidden="true">{tab.icon}</span>{tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {activeData.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>

          {activeData.length === 0 && (
            <motion.div
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="!bg-[#EEE9DA] text-center py-12 rounded-xl border-2 border-dashed"
              style={{ borderColor: '#C8C2AD' }}
            >
              <p className="text-lg" style={{ color: '#8A9A8A' }}>
                No {tabs.find(t => t.id === activeTab)?.label.toLowerCase()} available yet.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;