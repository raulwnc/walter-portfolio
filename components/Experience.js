import { motion } from 'framer-motion';
import { WORK_EXPERIENCE, IPPES, PROJECTS, FUTURE_APPES } from '../data/portfolio';
import { ANIMATION_VARIANTS, LAYOUT } from '../utils/constants';
import { useState } from 'react';

const ExperienceCard = ({ experience, index }) => {
  const getCardColor = (color) => {
    const colors = {
      blue: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500',
      green: 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-700 hover:border-green-400 dark:hover:border-green-500',
      purple: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-700 hover:border-purple-400 dark:hover:border-purple-500',
      orange: 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-700 hover:border-orange-400 dark:hover:border-orange-500',
      red: 'from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-red-200 dark:border-red-700 hover:border-red-400 dark:hover:border-red-500',
      gray: 'from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 border-gray-300 dark:border-gray-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={`bg-gradient-to-br ${getCardColor(experience.color)} border-2 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300`}
    >
      <div className="flex items-start gap-4 mb-4">
        <span className="text-4xl flex-shrink-0" aria-hidden="true">{experience.icon}</span>
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">{experience.title || experience.organization}</h3>
          {experience.organization && experience.title && <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">{experience.organization}</p>}
          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-2">
            <span>{experience.period}</span>
            {experience.location && <><span>•</span><span>{experience.location}</span></>}
            {experience.hours && <><span>•</span><span>{experience.hours}</span></>}
          </div>
          <span className="inline-block px-3 py-1 bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 rounded-full text-xs font-semibold border border-gray-300 dark:border-gray-600 mb-3">{experience.category}</span>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{experience.description}</p>
      {experience.impact && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">{experience.responsibilities ? 'Responsibilities:' : experience.learningObjectives ? 'Learning Objectives:' : 'Key Impact:'}</h4>
          <ul className="space-y-2">
            {(experience.impact || experience.responsibilities || experience.learningObjectives || []).map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"><span className="text-blue-600 dark:text-blue-400 mt-0.5" aria-hidden="true">✓</span>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {experience.technologies && (
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (<span key={tech} className="px-3 py-1 bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-600">{tech}</span>))}
        </div>
      )}
      {experience.metrics && (
        <div className="grid grid-cols-3 gap-3 mt-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
          {Object.entries(experience.metrics).map(([key, value]) => (<div key={key} className="text-center"><div className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400">{value}</div><div className="text-xs text-gray-600 dark:text-gray-400 capitalize">{key}</div></div>))}
        </div>
      )}
    </motion.div>
  );
};

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');

  const tabs = [
    { id: 'work', label: 'Work Experience', icon: '💼', data: WORK_EXPERIENCE },
    { id: 'ippes', label: 'IPPEs', icon: '🏥', data: IPPES },
    { id: 'projects', label: 'Projects', icon: '🚀', data: PROJECTS },
    { id: 'appes', label: 'Future APPEs', icon: '⭐', data: FUTURE_APPES }
  ];

  const activeData = tabs.find(tab => tab.id === activeTab)?.data || [];

  return (
    <section id="experience" className={`${LAYOUT.SECTION_PADDING} bg-gray-50 dark:bg-gray-800`}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={ANIMATION_VARIANTS.staggerContainer}>
          <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full mb-4" />
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Bridging pharmacy expertise with technical innovation across diverse practice settings</p>
          </motion.div>

          <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="mb-8">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {tabs.map((tab) => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${activeTab === tab.id ? 'bg-blue-600 dark:bg-blue-600 text-white shadow-lg' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'}`}>
                  <span className="mr-2" aria-hidden="true">{tab.icon}</span>{tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {activeData.map((experience, index) => (<ExperienceCard key={experience.id} experience={experience} index={index} />))}
          </div>

          {activeData.length === 0 && (
            <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600">
              <p className="text-gray-500 dark:text-gray-400 text-lg">No {tabs.find(t => t.id === activeTab)?.label.toLowerCase()} available yet.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;