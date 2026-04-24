import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import { RESEARCH, PRESENTATIONS } from '../data/portfolio';
import { ANIMATION_VARIANTS, LAYOUT } from '../utils/constants';

const ResearchCard = ({ research, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-6 sm:p-8 rounded-xl transition-all duration-300 hover:shadow-lg"
      style={{ backgroundColor: '#EEE9DA', border: '2px solid #C8C2AD' }}
      onMouseEnter={e => e.currentTarget.style.borderColor = '#2D4530'}
      onMouseLeave={e => e.currentTarget.style.borderColor = '#C8C2AD'}
    >
      <div className="flex items-start gap-4 mb-4">
        <span className="text-4xl flex-shrink-0" aria-hidden="true">{research.icon}</span>
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: '#1E2E20' }}>
            {research.title}
          </h3>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2"
            style={{ backgroundColor: '#2D453022', color: '#2D4530' }}>
            {research.category}
          </span>
          {research.organization && (
            <p className="text-sm italic" style={{ color: '#6B7B84' }}>{research.organization}</p>
          )}
        </div>
      </div>

      <p className="mb-4 leading-relaxed" style={{ color: '#4A5A4E' }}>{research.description}</p>

      {research.outcomes && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-3" style={{ color: '#1E2E20' }}>Key Outcomes:</h4>
          <ul className="space-y-2">
            {research.outcomes.map((outcome, i) => (
              <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#4A5A4E' }}>
                <span className="mt-0.5 flex-shrink-0" style={{ color: '#2D4530' }} aria-hidden="true">✓</span>
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      )}

      {research.technologies && (
        <div className="flex flex-wrap gap-2 mt-4">
          {research.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: '#E1DBC9', color: '#4A5A4E', border: '1px solid #C8C2AD' }}>
              {tech}
            </span>
          ))}
        </div>
      )}

      {research.publications && research.publications.length > 0 && (
        <div className="mt-4 pt-4" style={{ borderTop: '1px solid #C8C2AD' }}>
          <h4 className="text-sm font-semibold mb-2" style={{ color: '#1E2E20' }}>Publications:</h4>
          <ul className="space-y-1">
            {research.publications.map((pub, i) => (
              <li key={i} className="text-sm" style={{ color: '#2D4530' }}>
                {pub.url ? (
                  <a href={pub.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{pub.title}</a>
                ) : (
                  <span>{pub.title}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

const PresentationCard = ({ presentation, index }) => {
  const isApha = presentation.id === 'apha-2026-poster';
  return (
    <motion.div
      id={presentation.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-6 rounded-xl transition-all duration-300 hover:shadow-lg"
      style={{
        backgroundColor: '#EEE9DA',
        border: isApha ? '2px solid #2D4530' : '2px solid #C8C2AD'
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = isApha ? '#2D4530' : '#6B7B84'}
      onMouseLeave={e => e.currentTarget.style.borderColor = isApha ? '#2D4530' : '#C8C2AD'}
    >
      <div className="flex items-start gap-4">
        <span className="text-3xl flex-shrink-0" aria-hidden="true">{presentation.icon}</span>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-1" style={{ color: '#1E2E20' }}>
                {presentation.title}
              </h3>
              {presentation.subtitle && (
                <p className="text-sm italic mb-2" style={{ color: '#6B7B84' }}>{presentation.subtitle}</p>
              )}
            </div>
            <span className="text-sm whitespace-nowrap ml-4" style={{ color: '#8A9A8A' }}>
              {presentation.date}
            </span>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{ backgroundColor: '#6B7B8422', color: '#6B7B84' }}>
              {presentation.type}
            </span>
            <span className="text-xs" style={{ color: '#8A9A8A' }}>{presentation.audience}</span>
          </div>

          <p className="text-sm mb-3" style={{ color: '#4A5A4E' }}>{presentation.description}</p>

          {isApha && (
            <div className="mb-4 p-4 rounded-lg space-y-2"
              style={{ backgroundColor: '#E1DBC9', border: '1px solid #C8C2AD' }}>
              {[
                { icon: '🏷️', text: <><strong style={{ color: '#1E2E20' }}>Posterboard #322</strong></> },
                { icon: '🕐', text: <><strong style={{ color: '#1E2E20' }}>Saturday, March 28, 2026 · 1:00–3:00 PM</strong></> },
                { icon: '📍', text: <><strong style={{ color: '#1E2E20' }}>Exhibit Hall J, Los Angeles Convention Center</strong></> },
                { icon: '🎯', text: <><strong style={{ color: '#1E2E20' }}>Meet the Researchers Poster Session</strong></> },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-sm">{item.icon}</span>
                  <p className="text-sm" style={{ color: '#4A5A4E' }}>{item.text}</p>
                </div>
              ))}
              <div className="flex gap-3 mt-2">
                <a
                  href="/StepForwardRx_Poster.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-colors"
                  style={{ backgroundColor: '#2D4530', color: '#E1DBC9' }}
                >
                  <span>👁️</span> View Poster
                </a>
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-3">
            {presentation.topics.map((topic) => (
              <span key={topic} className="px-2 py-1 rounded text-xs"
                style={{ backgroundColor: '#E1DBC9', color: '#4A5A4E', border: '1px solid #C8C2AD' }}>
                {topic}
              </span>
            ))}
          </div>

          {presentation.pdf && !isApha && (
            <a
              href={presentation.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-colors"
              style={{ backgroundColor: '#2D4530', color: '#E1DBC9' }}
            >
              <span>👁️</span> View PDF
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function ResearchPage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const tryScroll = (attempts = 0) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (attempts < 10) {
          setTimeout(() => tryScroll(attempts + 1), 150);
        }
      };
      setTimeout(() => tryScroll(), 300);
    }
  }, []);

  return (
    <Layout>
      {/* Research Section */}
      <section id="research" className={`${LAYOUT.SECTION_PADDING}`} style={{ backgroundColor: '#E1DBC9' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={ANIMATION_VARIANTS.staggerContainer}>
            <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#1E2E20' }}>
                Research & Innovation
              </h1>
              <div className="w-20 h-1 mx-auto rounded-full mb-4" style={{ backgroundColor: '#2D4530' }} />
              <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4A5A4E' }}>
                Advancing pharmacy practice through evidence-based research and innovative technologies
              </p>
            </motion.div>

            <div className="space-y-6 mb-16">
              {RESEARCH.map((research, index) => (
                <ResearchCard key={research.id} research={research} index={index} />
              ))}
            </div>

            {/* Stats */}
            <motion.div
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-xl mb-16"
              style={{ backgroundColor: '#EEE9DA', border: '1px solid #C8C2AD' }}
            >
              {[
                { value: RESEARCH.length, label: 'Research Projects', color: '#2D4530' },
                { value: '3+', label: 'Focus Areas', color: '#6B7B84' },
                { value: 'VR', label: 'Innovation', color: '#2D4530' },
                { value: 'FDA', label: 'Experience', color: '#5E4B3B' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="text-sm" style={{ color: '#6A6050' }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Presentations Section */}
      <section id="presentations" className={`${LAYOUT.SECTION_PADDING}`} style={{ backgroundColor: '#EEE9DA' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={ANIMATION_VARIANTS.staggerContainer}>
            <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1E2E20' }}>Presentations</h2>
              <div className="w-20 h-1 mx-auto rounded-full mb-4" style={{ backgroundColor: '#6B7B84' }} />
              <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4A5A4E' }}>
                Sharing insights on digital health, regulatory science, and pharmacy innovation
              </p>
            </motion.div>

            <div className="space-y-6">
              {PRESENTATIONS.map((presentation, index) => (
                <PresentationCard key={presentation.id} presentation={presentation} index={index} />
              ))}
            </div>

            <motion.div
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="mt-8 p-6 rounded-xl text-center"
              style={{ backgroundColor: '#E1DBC9', border: '2px solid #C8C2AD' }}
            >
              <p style={{ color: '#4A5A4E' }}>
                <span className="font-semibold" style={{ color: '#1E2E20' }}>Upcoming:</span> More presentations scheduled for 2026. Stay tuned!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}