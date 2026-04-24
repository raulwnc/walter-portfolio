import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import { PERSONAL_INFO, CTA } from '../data/portfolio';
import { ANIMATION_VARIANTS } from '../utils/constants';

export default function Home() {
  return (
    <Layout>
      <section
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
        style={{ backgroundColor: '#E1DBC9' }}
      >
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full animate-blob"
            style={{ backgroundColor: '#2D4530', filter: 'blur(80px)', opacity: 0.08 }} />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full animate-blob animation-delay-2000"
            style={{ backgroundColor: '#6B7B84', filter: 'blur(80px)', opacity: 0.08 }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full animate-blob animation-delay-4000"
            style={{ backgroundColor: '#5E4B3B', filter: 'blur(80px)', opacity: 0.06 }} />
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={ANIMATION_VARIANTS.staggerContainer}
          >
            {/* Headshot */}
            <motion.div variants={ANIMATION_VARIANTS.fadeInDown} className="mb-8 mt-12 sm:mt-0">
              <div className="relative w-32 h-32 mx-auto">
                <div className="absolute inset-0 rounded-full blur-lg opacity-20 animate-pulse"
                  style={{ backgroundColor: '#2D4530' }} />
                <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-xl"
                  style={{ border: '4px solid #C8C2AD' }}>
                  <Image
                    src={PERSONAL_INFO.headshot}
                    alt={PERSONAL_INFO.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            <motion.h1
              variants={ANIMATION_VARIANTS.fadeInDown}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-3 whitespace-nowrap"
              style={{ color: '#1E2E20' }}
            >
              {PERSONAL_INFO.name}
            </motion.h1>

            <motion.div variants={ANIMATION_VARIANTS.fadeInDown} className="mb-6">
              <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2" style={{ color: '#2D4530' }}>
                {PERSONAL_INFO.tagline}
              </p>
              <p className="text-xl sm:text-2xl font-semibold" style={{ color: '#6B7B84' }}>
                {PERSONAL_INFO.subtitle}
              </p>
            </motion.div>

            <motion.p
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 leading-relaxed"
              style={{ color: '#4A5A4E' }}
            >
              {PERSONAL_INFO.description}
            </motion.p>

            {/* Heritage Badge */}
            <motion.div
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="flex justify-center items-center gap-3 mb-10"
            >
              <div className="relative w-8 h-6">
                <Image
                  src={PERSONAL_INFO.flag}
                  alt="Puerto Rico Flag"
                  fill
                  className="rounded shadow-sm object-cover"
                  priority
                />
              </div>
              <span className="text-sm sm:text-base font-medium italic" style={{ color: '#6B7B84' }}>
                {PERSONAL_INFO.heritage}
              </span>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-12"
            >
              {[
                { value: '50+', label: 'Students Mentored', color: '#2D4530' },
                { value: '10K+', label: 'Campaign Reach', color: '#6B7B84' },
                { value: '4', label: 'Research Projects', color: '#5E4B3B' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl"
                  style={{ backgroundColor: '#EEE9DA', border: '0.5px solid #C8C2AD' }}
                >
                  <div className="text-3xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="text-sm" style={{ color: '#6A6050' }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Featured Areas */}
            <motion.div
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
            >
              {[
                { href: '/about', icon: '💊', title: 'Clinical Expertise', desc: 'Patient care, CMRs, and clinical operations across diverse settings', accent: '#2D4530' },
                { href: '/experience', icon: '💻', title: 'Technical Innovation', desc: 'Power BI, Azure, VR, and digital health product development', accent: '#6B7B84' },
                { href: '/leadership', icon: '👥', title: 'Leadership Impact', desc: 'Mentoring 50+ students and driving DEI initiatives', accent: '#5E4B3B' },
              ].map((card) => (
                <Link href={card.href} key={card.title} className="group">
                  <div
                    className="p-6 rounded-xl transition-all duration-300 hover:shadow-xl"
                    style={{ backgroundColor: '#EEE9DA', border: `2px solid ${card.accent}33` }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = card.accent}
                    onMouseLeave={e => e.currentTarget.style.borderColor = `${card.accent}33`}
                  >
                    <div className="text-4xl mb-3">{card.icon}</div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#1E2E20' }}>
                      {card.title}
                    </h3>
                    <p className="text-sm" style={{ color: '#6A6050' }}>
                      {card.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pb-8"
            >
              <Link href="/about">
                <motion.button
                  className="px-8 py-4 font-semibold rounded-lg shadow-lg transition-all duration-200"
                  style={{ backgroundColor: '#2D4530', color: '#E1DBC9' }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.button>
              </Link>

              <motion.a
                href={CTA.primary.link}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 font-semibold rounded-lg border-2 shadow-md transition-all duration-200"
                style={{ backgroundColor: 'transparent', color: '#6B7B84', borderColor: '#6B7B84' }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span aria-hidden="true">📄</span> Download CV
              </motion.a>

              <Link href="/contact">
                <motion.button
                  className="px-8 py-4 font-semibold rounded-lg border-2 shadow-md transition-all duration-200"
                  style={{ backgroundColor: 'transparent', color: '#4A5A4E', borderColor: '#C8C2AD' }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.button>
              </Link>
            </motion.div>

          </motion.div>
        </div>

        <style jsx>{`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(20px, -20px) scale(1.1); }
            50% { transform: translate(-20px, 20px) scale(0.9); }
            75% { transform: translate(20px, 20px) scale(1.05); }
          }
          .animate-blob { animation: blob 7s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
        `}</style>
      </section>
    </Layout>
  );
}