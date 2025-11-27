import { motion } from 'framer-motion';
import { PRESENTATIONS } from '../data/portfolio';
import { ANIMATION_VARIANTS, LAYOUT } from '../utils/constants';

const PresentationCard = ({ presentation, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-6 rounded-xl hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg dark:shadow-gray-900/50 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <span className="text-3xl flex-shrink-0" aria-hidden="true">
          {presentation.icon}
        </span>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {presentation.title}
              </h3>
              {presentation.subtitle && (
                <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-2">
                  {presentation.subtitle}
                </p>
              )}
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-4">
              {presentation.date}
            </span>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-xs font-semibold">
              {presentation.type}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {presentation.audience}
            </span>
          </div>

          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            {presentation.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {presentation.topics.map((topic) => (
              <span
                key={topic}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Presentations = () => {
  return (
    <section id="presentations" className={`${LAYOUT.SECTION_PADDING} bg-gray-50 dark:bg-gray-800`}>
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
              Presentations
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full mb-4" />
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Sharing insights on digital health, regulatory science, and pharmacy innovation
            </p>
          </motion.div>

          {/* Presentations List */}
          <div className="space-y-6">
            {PRESENTATIONS.map((presentation, index) => (
              <PresentationCard
                key={presentation.id}
                presentation={presentation}
                index={index}
              />
            ))}
          </div>

          {/* Upcoming Notice */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-2 border-purple-200 dark:border-purple-700 rounded-xl text-center"
          >
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Upcoming:</span> More presentations scheduled for 2025. Stay tuned!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Presentations;