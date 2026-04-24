import { motion } from 'framer-motion';
import { LEADERSHIP } from '../data/portfolio';
import { ANIMATION_VARIANTS, LAYOUT } from '../utils/constants';

const COLOR_MAP = {
  blue:   '#6B7B84',
  green:  '#2D4530',
  purple: '#6B7B84',
  orange: '#5E4B3B',
};

const LeadershipCard = ({ leadership, index }) => {
  const accent = COLOR_MAP[leadership.color] || '#2D4530';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="!bg-[#EEE9DA] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
      style={{ border: `2px solid ${accent}33` }}
      onMouseEnter={e => e.currentTarget.style.borderColor = accent}
      onMouseLeave={e => e.currentTarget.style.borderColor = `${accent}33`}
    >
      <div className="flex items-start gap-3 mb-4">
        <span className="text-3xl" aria-hidden="true">{leadership.icon}</span>
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-bold mb-1" style={{ color: '#1E2E20' }}>
            {leadership.organization}
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <span className="text-sm font-semibold" style={{ color: accent }}>
              {leadership.position}
            </span>
            <span className="text-xs" style={{ color: '#8A9A8A' }}>{leadership.period}</span>
          </div>
        </div>
      </div>

      <p className="text-sm mb-4" style={{ color: '#4A5A4E' }}>{leadership.description}</p>

      <details className="group mb-4">
        <summary className="cursor-pointer text-sm font-semibold mb-2 list-none flex items-center gap-2 transition-colors" style={{ color: '#1E2E20' }}>
          <span className="group-open:rotate-90 transition-transform">▶</span>
          Key Responsibilities
        </summary>
        <ul className="mt-2 space-y-2 pl-4">
          {leadership.responsibilities.map((responsibility, i) => (
            <li key={i} className="flex items-start gap-2 text-xs" style={{ color: '#4A5A4E' }}>
              <span className="mt-0.5" style={{ color: accent }} aria-hidden="true">•</span>
              {responsibility}
            </li>
          ))}
        </ul>
      </details>

      {leadership.impact && (
        <div className="!bg-[#E1DBC9] p-3 rounded-lg" style={{ border: '1px solid #C8C2AD' }}>
          <p className="text-xs font-semibold mb-1" style={{ color: '#1E2E20' }}>Impact:</p>
          <p className="text-xs" style={{ color: '#4A5A4E' }}>{leadership.impact}</p>
        </div>
      )}
    </motion.div>
  );
};

const Leadership = () => {
  return (
    <section id="leadership" className={`${LAYOUT.SECTION_PADDING} !bg-[#E1DBC9]`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={ANIMATION_VARIANTS.staggerContainer}
        >
          <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1E2E20' }}>
              Leadership Experience
            </h2>
            <div className="!bg-[#2D4530] w-20 h-1 mx-auto rounded-full mb-4" />
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4A5A4E' }}>
              Building communities and driving positive change through student leadership
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LEADERSHIP.map((leadership, index) => (
              <LeadershipCard key={leadership.id} leadership={leadership} index={index} />
            ))}
          </div>

          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="!bg-[#EEE9DA] mt-12 p-8 rounded-2xl"
            style={{ border: '2px solid #2D453044' }}
          >
            <h3 className="text-xl font-bold mb-3 text-center" style={{ color: '#1E2E20' }}>
              Leadership Philosophy
            </h3>
            <p className="text-center max-w-3xl mx-auto" style={{ color: '#4A5A4E' }}>
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