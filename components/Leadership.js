import { motion } from 'framer-motion';
import { LEADERSHIP } from '../data/portfolio';
import { ANIMATION_VARIANTS, LAYOUT } from '../utils/constants';

const LeadershipCard = ({ leadership, index }) => {
  const colorClasses = {
    blue: 'from-blue-50 to-blue-100 border-blue-200 hover:border-blue-400',
    green: 'from-green-50 to-green-100 border-green-200 hover:border-green-400',
    purple: 'from-purple-50 to-purple-100 border-purple-200 hover:border-purple-400',
    orange: 'from-orange-50 to-orange-100 border-orange-200 hover:border-orange-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={`bg-gradient-to-br ${colorClasses[leadership.color]} border-2 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300`}
    >
      <div className="flex items-start gap-3 mb-4">
        <span className="text-3xl" aria-hidden="true">
          {leadership.icon}
        </span>
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
            {leadership.organization}
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <span className="text-sm font-semibold text-blue-600">
              {leadership.position}
            </span>
            <span className="text-xs text-gray-500">{leadership.period}</span>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-700 mb-4">
        {leadership.description}
      </p>

      {/* Responsibilities */}
      <details className="group mb-4">
        <summary className="cursor-pointer text-sm font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors list-none flex items-center gap-2">
          <span className="group-open:rotate-90 transition-transform">▶</span>
          Key Responsibilities
        </summary>
        <ul className="mt-2 space-y-2 pl-4">
          {leadership.responsibilities.map((responsibility, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
              <span className="text-blue-600 mt-0.5" aria-hidden="true">•</span>
              {responsibility}
            </li>
          ))}
        </ul>
      </details>

      {/* Impact */}
      {leadership.impact && (
        <div className="p-3 bg-white/60 rounded-lg border border-gray-200">
          <p className="text-xs font-semibold text-gray-900 mb-1">Impact:</p>
          <p className="text-xs text-gray-700">{leadership.impact}</p>
        </div>
      )}
    </motion.div>
  );
};

const Leadership = () => {
  return (
    <section id="leadership" className={`${LAYOUT.SECTION_PADDING} bg-white`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={ANIMATION_VARIANTS.staggerContainer}
        >
          {/* Section Header */}
          <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Leadership Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Building communities and driving positive change through student leadership
            </p>
          </motion.div>

          {/* Leadership Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LEADERSHIP.map((leadership, index) => (
              <LeadershipCard
                key={leadership.id}
                leadership={leadership}
                index={index}
              />
            ))}
          </div>

          {/* Leadership Philosophy */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
              Leadership Philosophy
            </h3>
            <p className="text-center text-gray-700 max-w-3xl mx-auto">
              I believe in servant leadership—empowering others to succeed, fostering inclusive communities, 
              and creating opportunities for the next generation of pharmacy professionals. Through collaboration 
              and innovation, we can build a more equitable and effective healthcare system.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;