import { motion } from 'framer-motion';
import { PRESENTATIONS } from '../data/portfolio';
import { ANIMATION_VARIANTS, LAYOUT } from '../utils/constants';

const PresentationCard = ({ presentation, index }) => {
  const isApha = presentation.id === 'apha-2026-poster';

  return (
    <motion.div
      id={presentation.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`bg-white dark:bg-gray-800 border-2 p-6 rounded-xl hover:shadow-lg dark:shadow-gray-900/50 transition-all duration-300 ${
        isApha
          ? 'border-blue-300 dark:border-blue-600 hover:border-blue-400 dark:hover:border-blue-500'
          : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600'
      }`}
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
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              isApha
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                : 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400'
            }`}>
              {presentation.type}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {presentation.audience}
            </span>
          </div>

          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            {presentation.description}
          </p>

          {/* APhA session details box */}
          {isApha && (
            <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm">🏷️</span>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Posterboard:</span> #322
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">🕐</span>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">When:</span> Saturday, March 28, 2026 · 1:00–3:00 PM
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">📍</span>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Where:</span> Exhibit Hall J, Los Angeles Convention Center
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">🎪</span>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Session:</span> Meet the Researchers Poster Session
                </p>
              </div>
              {presentation.poster && (
                <a
                  href={presentation.poster}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  <span>📄</span> View Poster PDF
                </a>
              )}
            </div>
          )}

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
          <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Presentations
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full mb-4" />
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Sharing insights on digital health, regulatory science, and pharmacy innovation
            </p>
          </motion.div>

          <div className="space-y-6">
            {PRESENTATIONS.map((presentation, index) => (
              <PresentationCard
                key={presentation.id}
                presentation={presentation}
                index={index}
              />
            ))}
          </div>

          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-2 border-purple-200 dark:border-purple-700 rounded-xl text-center"
          >
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Upcoming:</span> More presentations scheduled for 2026. Stay tuned!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Presentations;