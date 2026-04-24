import { motion } from 'framer-motion';
import Image from 'next/image';
import Layout from '../components/Layout';
import SkillsDashboard from '../components/SkillsDashboard';
import { PERSONAL_INFO, ABOUT } from '../data/portfolio';
import { ANIMATION_VARIANTS, LAYOUT } from '../utils/constants';

export default function About() {
  return (
    <Layout>
      <section className={`${LAYOUT.SECTION_PADDING} !bg-[#E1DBC9]`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={ANIMATION_VARIANTS.staggerContainer}
          >
            {/* Section Header */}
            <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#1E2E20' }}>
                About Me
              </h1>
              <div className="!bg-[#2D4530] w-20 h-1 mx-auto rounded-full" />
            </motion.div>

            {/* Profile Section */}
            <motion.div
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="flex flex-col items-center mb-12"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-full blur-lg opacity-20 animate-pulse" style={{ backgroundColor: '#2D4530' }} />
                <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-xl" style={{ border: '4px solid #C8C2AD' }}>
                  <Image
                    src={PERSONAL_INFO.headshot}
                    alt={PERSONAL_INFO.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="text-center mb-4">
                <h2 className="text-2xl font-bold mb-2" style={{ color: '#1E2E20' }}>
                  {PERSONAL_INFO.name}
                </h2>
                <p className="!text-[#2D4530] text-lg font-medium mb-1">
                  {PERSONAL_INFO.year}
                </p>
                <p style={{ color: '#6B7B84' }}>
                  {PERSONAL_INFO.school}
                </p>
              </div>

              <p className="text-center leading-relaxed max-w-2xl" style={{ color: '#4A5A4E' }}>
                {ABOUT.bio}
              </p>
            </motion.div>

            {/* Areas of Interest */}
            <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="mb-12">
              <h3 className="text-xl font-semibold mb-4 text-center" style={{ color: '#1E2E20' }}>
                Areas of Interest
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {ABOUT.interests.map((interest, index) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="!bg-[#EEE9DA] !text-[#2D4530] px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-md"
                    style={{ border: '1px solid #C8C2AD' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#2D4530'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#C8C2AD'; }}
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Dashboard */}
      <SkillsDashboard />
    </Layout>
  );
}