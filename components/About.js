import { motion } from 'framer-motion';
import Image from 'next/image';
import { PERSONAL_INFO, ABOUT } from '../data/portfolio';
import { ANIMATION_VARIANTS, LAYOUT } from '../utils/constants';

const About = () => {
  return (
    <section id="about" className={`${LAYOUT.SECTION_PADDING} bg-white dark:bg-gray-900`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={ANIMATION_VARIANTS.staggerContainer}
        >
          {/* Section Header */}
          <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full" />
          </motion.div>

          {/* Profile Section */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="flex flex-col items-center mb-12"
          >
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-full blur-lg opacity-30 dark:opacity-20 animate-pulse" />
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
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
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-1">
                {PERSONAL_INFO.year}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {PERSONAL_INFO.school}
              </p>
            </div>

            <p className="text-center text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
              {ABOUT.bio}
            </p>
          </motion.div>

          {/* Areas of Interest */}
          <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 text-center">
              Areas of Interest
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {ABOUT.interests.map((interest, index) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all duration-200"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;