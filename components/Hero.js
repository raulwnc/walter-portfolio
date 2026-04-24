import { motion } from 'framer-motion';
import Image from 'next/image';
import { PERSONAL_INFO, CTA } from '../data/portfolio';
import { ANIMATION_VARIANTS } from '../utils/constants';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative py-20 sm:py-32 px-4 sm:px-6 md:px-8 overflow-hidden"
      style={{ backgroundColor: '#E1DBC9' }}
    >
      {/* Decorative background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-10 animate-blob"
          style={{ backgroundColor: '#2D4530', filter: 'blur(60px)' }} />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-10 animate-blob animation-delay-2000"
          style={{ backgroundColor: '#6B7B84', filter: 'blur(60px)' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10 animate-blob animation-delay-4000"
          style={{ backgroundColor: '#5E4B3B', filter: 'blur(60px)' }} />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={ANIMATION_VARIANTS.staggerContainer}
        >
          <motion.h1
            variants={ANIMATION_VARIANTS.fadeInDown}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3"
            style={{ color: '#1E2E20' }}
          >
            {PERSONAL_INFO.tagline}
          </motion.h1>

          <motion.h2
            variants={ANIMATION_VARIANTS.fadeInDown}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6"
            style={{ color: '#2D4530' }}
          >
            {PERSONAL_INFO.subtitle}
          </motion.h2>

          <motion.p
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed"
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

          {/* CTA Buttons */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href={CTA.primary.link}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 font-semibold rounded-lg transition-all duration-200 shadow-lg"
              style={{ backgroundColor: '#2D4530', color: '#E1DBC9' }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span aria-hidden="true">{CTA.primary.icon}</span>
              {CTA.primary.text}
            </motion.a>

            <motion.button
              onClick={() => scrollToSection(CTA.secondary.link)}
              className="inline-flex items-center gap-2 px-8 py-3 font-semibold rounded-lg border-2 transition-all duration-200 shadow-md"
              style={{ backgroundColor: 'transparent', color: '#6B7B84', borderColor: '#6B7B84' }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span aria-hidden="true">{CTA.secondary.icon}</span>
              {CTA.secondary.text}
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div variants={ANIMATION_VARIANTS.fadeIn} className="mt-16">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
              className="inline-block cursor-pointer"
              style={{ color: '#C8C2AD' }}
              onClick={() => scrollToSection('about')}
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </motion.div>
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
  );
};

export default Hero;