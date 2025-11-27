import { motion } from 'framer-motion';
import { RESEARCH } from '../data/portfolio';
import { ANIMATION_VARIANTS, LAYOUT } from '../utils/constants';

const ResearchCard = ({ research, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-6 sm:p-8 rounded-xl hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg dark:shadow-gray-900/50 transition-all duration-300"
    >
      <div className="flex items-start gap-4 mb-4">
        <span className="text-4xl flex-shrink-0" aria-hidden="true">
          {research.icon}
        </span>
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {research.title}
          </h3>
          <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-semibold mb-2">
            {research.category}
          </span>
          {research.organization && (
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">
              {research.organization}
            </p>
          )}
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
        {research.description}
      </p>

      {/* Outcomes */}
      {research.outcomes && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Key Outcomes:
          </h4>
          <ul className="space-y-2">
            {research.outcomes.map((outcome, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" aria-hidden="true">
                  ✓
                </span>
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Technologies */}
      {research.technologies && (
        <div className="flex flex-wrap gap-2 mt-4">
          {research.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Publications (if any) */}
      {research.publications && research.publications.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Publications:
          </h4>
          <ul className="space-y-1">
            {research.publications.map((pub, i) => (
              <li key={i} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                <a href={pub.url} target="_blank" rel="noopener noreferrer">
                  {pub.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

const Research = () => {
  return (
    <section id="research" className={`${LAYOUT.SECTION_PADDING} bg-white dark:bg-gray-900`}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={ANIMATION_VARIANTS.staggerContainer}
        >
          {/* Section Header */}
          <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Research & Innovation
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full mb-4" />
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Advancing pharmacy practice through evidence-based research and innovative technologies
            </p>
          </motion.div>

          {/* Research Cards */}
          <div className="space-y-6">
            {RESEARCH.map((research, index) => (
              <ResearchCard key={research.id} research={research} index={index} />
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl border border-blue-200 dark:border-blue-700"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {RESEARCH.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Research Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">3+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Focus Areas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">VR</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Innovation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">FDA</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;