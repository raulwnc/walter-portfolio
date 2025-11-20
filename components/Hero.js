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
      className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 sm:py-32 px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Main Heading */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={ANIMATION_VARIANTS.staggerContainer}
        >
          <motion.h1
            variants={ANIMATION_VARIANTS.fadeInDown}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-3"
          >
            {PERSONAL_INFO.tagline}
          </motion.h1>

          <motion.h2
            variants={ANIMATION_VARIANTS.fadeInDown}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6"
          >
            {PERSONAL_INFO.subtitle}
          </motion.h2>

          <motion.p
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
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
            <span className="text-sm sm:text-base text-gray-600 font-medium italic">
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
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span aria-hidden="true">{CTA.primary.icon}</span>
              {CTA.primary.text}
            </motion.a>

            <motion.button
              onClick={() => scrollToSection(CTA.secondary.link)}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span aria-hidden="true">{CTA.secondary.icon}</span>
              {CTA.secondary.text}
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeIn}
            className="mt-16"
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="inline-block text-gray-400 cursor-pointer"
              onClick={() => scrollToSection('about')}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -20px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(20px, 20px) scale(1.05);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;