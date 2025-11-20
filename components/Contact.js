import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import { PERSONAL_INFO, REFERENCES } from '../data/portfolio';
import { ANIMATION_VARIANTS, LAYOUT } from '../utils/constants';

const Contact = () => {
  return (
    <section id="contact" className={`${LAYOUT.SECTION_PADDING} bg-gray-50`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={ANIMATION_VARIANTS.staggerContainer}
        >
          <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I am always excited to connect with others passionate about pharmacy, tech, and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div variants={ANIMATION_VARIANTS.fadeInLeft} className="space-y-8">
              <div className="bg-white p-6 rounded-xl border-2 border-gray-200 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl" aria-hidden="true">✉️</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Email</p>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-blue-600 hover:underline text-sm">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl" aria-hidden="true">💼</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">LinkedIn</p>
                      <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl" aria-hidden="true">📄</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Curriculum Vitae</p>
                      <a href={PERSONAL_INFO.cv} download target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                        Download CV (PDF)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl" aria-hidden="true">📍</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Location</p>
                      <p className="text-sm text-gray-600">{PERSONAL_INFO.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-200 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  References
                </h3>
                <div className="space-y-4">
                  {REFERENCES.map((reference, index) => (
                    <div key={index} className="pb-4 last:pb-0 border-b last:border-b-0 border-gray-200">
                      <p className="font-semibold text-gray-900 text-sm">
                        {reference.name}
                      </p>
                      {reference.title && (
                        <p className="text-xs text-gray-600 mb-1">
                          {reference.title}
                        </p>
                      )}
                      {reference.institution && (
                        <p className="text-xs text-gray-500 mb-2">
                          {reference.institution}
                        </p>
                      )}
                      <a href={`mailto:${reference.email}`} className="text-xs text-blue-600 hover:underline">
                        {reference.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border-2 border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Let's Connect!
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Whether you are interested in discussing digital health innovation, exploring 
                  collaboration opportunities, or just want to chat about pharmacy and technology, 
                  I would love to hear from you. Feel free to reach out through any of the channels above 
                  or use the contact form.
                </p>
              </div>
            </motion.div>

            <motion.div variants={ANIMATION_VARIANTS.fadeInRight}>
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;