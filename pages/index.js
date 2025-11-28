import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import { PERSONAL_INFO, CTA } from '../data/portfolio';
import { ANIMATION_VARIANTS } from '../utils/constants';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950/30 dark:via-gray-900 dark:to-purple-950/30 px-4 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10 animate-blob" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 dark:bg-purple-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 dark:bg-pink-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000" />
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={ANIMATION_VARIANTS.staggerContainer}
          >
            {/* Headshot - Added mt-12 on mobile for spacing from navbar */}
            <motion.div variants={ANIMATION_VARIANTS.fadeInDown} className="mb-8 mt-12 sm:mt-0">
              <div className="relative w-32 h-32 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-full blur-lg opacity-30 dark:opacity-20 animate-pulse" />
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
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
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 dark:text-gray-100 mb-3"
            >
              {PERSONAL_INFO.name}
            </motion.h1>

            <motion.div variants={ANIMATION_VARIANTS.fadeInDown} className="mb-6">
              <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-2">
                {PERSONAL_INFO.tagline}
              </p>
              <p className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 font-semibold">
                {PERSONAL_INFO.subtitle}
              </p>
            </motion.div>

            <motion.p
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
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
              <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium italic">
                {PERSONAL_INFO.heritage}
              </span>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12"
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Clinical Hours</div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Students Mentored</div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">10K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Campaign Reach</div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">4</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Research Projects</div>
              </div>
            </motion.div>

            {/* Featured Areas */}
            <motion.div
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
            >
              <Link href="/about" className="group">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-3">💊</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Clinical Expertise
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    500+ hours of patient care, CMRs, and clinical operations
                  </p>
                </div>
              </Link>

              <Link href="/experience" className="group">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700 hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-3">💻</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Technical Innovation
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Power BI, Azure, VR, and digital health product development
                  </p>
                </div>
              </Link>

              <Link href="/leadership" className="group">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700 hover:border-orange-400 dark:hover:border-orange-500 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-3">👥</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    Leadership Impact
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Mentoring 50+ students and driving DEI initiatives
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/about">
                <motion.button
                  className="px-8 py-4 bg-blue-600 dark:bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
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
                className="px-8 py-4 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold rounded-lg border-2 border-blue-600 dark:border-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span aria-hidden="true">📄</span> Download CV
              </motion.a>

              <Link href="/contact">
                <motion.button
                  className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-semibold rounded-lg border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-md hover:shadow-lg"
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
    </Layout>
  );
}