import { motion } from 'framer-motion';
import Image from 'next/image';
import { PERSONAL_INFO, ABOUT } from '../data/portfolio';
import { ANIMATION_VARIANTS, LAYOUT } from '../utils/constants';

const About = () => {
  return (
    <section id="about" className={`${LAYOUT.SECTION_PADDING} bg-white`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={ANIMATION_VARIANTS.staggerContainer}
        >
          {/* Section Header */}
          <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          {/* Profile Section */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="flex flex-col items-center mb-12"
          >
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-30 animate-pulse" />
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
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
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-lg text-blue-600 font-medium mb-1">
                {PERSONAL_INFO.year}
              </p>
              <p className="text-gray-600">
                {PERSONAL_INFO.school}
              </p>
            </div>

            <p className="text-center text-gray-700 leading-relaxed max-w-2xl">
              {ABOUT.bio}
            </p>
          </motion.div>

          {/* Areas of Interest */}
          <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
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
                  className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-full text-sm font-medium border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all duration-200"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={ANIMATION_VARIANTS.fadeInUp}>
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Skills & Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Clinical Skills */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl" aria-hidden="true">💊</span>
                  <h4 className="text-lg font-bold text-gray-900">Clinical</h4>
                </div>
                <ul className="space-y-2">
                  {ABOUT.skills.clinical.map((skill) => (
                    <li key={skill} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-blue-600 mt-1" aria-hidden="true">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Skills */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl" aria-hidden="true">💻</span>
                  <h4 className="text-lg font-bold text-gray-900">Technical</h4>
                </div>
                <ul className="space-y-2">
                  {ABOUT.skills.technical.map((skill) => (
                    <li key={skill} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-purple-600 mt-1" aria-hidden="true">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl" aria-hidden="true">🛠️</span>
                  <h4 className="text-lg font-bold text-gray-900">Tools</h4>
                </div>
                <ul className="space-y-2">
                  {ABOUT.skills.tools.map((tool) => (
                    <li key={tool} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-600 mt-1" aria-hidden="true">•</span>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;