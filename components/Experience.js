import { motion } from 'framer-motion';
import { WORK_EXPERIENCE, IPPES, PROJECTS, FUTURE_APPES } from '../data/portfolio';
import { ANIMATION_VARIANTS, LAYOUT } from '../utils/constants';
import { useState } from 'react';

const ExperienceCard = ({ experience, index }) => {
  const getCardColor = (color) => {
    const colors = {
      blue: 'from-blue-50 to-blue-100 border-blue-200 hover:border-blue-400',
      green: 'from-green-50 to-green-100 border-green-200 hover:border-green-400',
      purple: 'from-purple-50 to-purple-100 border-purple-200 hover:border-purple-400',
      orange: 'from-orange-50 to-orange-100 border-orange-200 hover:border-orange-400',
      gray: 'from-gray-50 to-gray-100 border-gray-300'
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
      className={`bg-gradient-to-br ${getCardColor(experience.color)} border-2 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300`}
    >
      <div className="flex items-start gap-4 mb-4">
        <span className="text-4xl flex-shrink-0" aria-hidden="true">{experience.icon}</span>
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{experience.title || experience.organization}</h3>
          {experience.organization && experience.title && <p className="text-sm font-semibold text-blue-600 mb-1">{experience.organization}</p>}
          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-2">
            <span>{experience.period}</span>
            {experience.location && <><span>•</span><span>{experience.location}</span></>}
            {experience.hours && <><span>•</span><span>{experience.hours}</span></>}
          </div>
          <span className="inline-block px-3 py-1 bg-white/60 text-gray-700 rounded-full text-xs font-semibold border border-gray-300 mb-3">{experience.category}</span>
        </div>
      </div>
      <p className="text-gray-700 mb-4 leading-relaxed">{experience.description}</p>
      {experience.impact && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">{experience.responsibilities ? 'Responsibilities:' : experience.learningObjectives ? 'Learning Objectives:' : 'Key Impact:'}</h4>
          <ul className="space-y-2">
            {(experience.impact || experience.responsibilities || experience.learningObjectives || []).map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><span className="text-blue-600 mt-0.5" aria-hidden="true">✓</span>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {experience.technologies && (
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (<span key={tech} className="px-3 py-1 bg-white/70 text-gray-700 rounded-full text-xs font-medium border border-gray-200">{tech}</span>))}
        </div>
      )}
      {experience.metrics && (
        <div className="grid grid-cols-3 gap-3 mt-4 p-4 bg-white/50 rounded-lg">
          {Object.entries(experience.metrics).map(([key, value]) => (<div key={key} className="text-center"><div className="text-lg sm:text-xl font-bold text-blue-600">{value}</div><div className="text-xs text-gray-600 capitalize">{key}</div></div>))}
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
    <section id="experience" className={`${LAYOUT.SECTION_PADDING} bg-gray-50`}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={ANIMATION_VARIANTS.staggerContainer}>
          <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Bridging pharmacy expertise with technical innovation across diverse practice settings</p>
          </motion.div>

          <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="mb-8">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {tabs.map((tab) => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}>
                  <span className="mr-2" aria-hidden="true">{tab.icon}</span>{tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {activeData.map((experience, index) => (<ExperienceCard key={experience.id} experience={experience} index={index} />))}
          </div>

          {activeData.length === 0 && (
            <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="text-center py-12 bg-white rounded-xl border-2 border-dashed border-gray-300">
              <p className="text-gray-500 text-lg">No {tabs.find(t => t.id === activeTab)?.label.toLowerCase()} available yet.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;