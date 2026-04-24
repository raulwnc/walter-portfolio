import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import { PERSONAL_INFO } from '../data/portfolio';
import { ANIMATION_VARIANTS, LAYOUT } from '../utils/constants';

const Contact = () => {
  return (
    <section id="contact" className={`${LAYOUT.SECTION_PADDING} !bg-[#EEE9DA]`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={ANIMATION_VARIANTS.staggerContainer}
        >
          <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1E2E20' }}>
              Get In Touch
            </h2>
            <div className="!bg-[#2D4530] w-20 h-1 mx-auto rounded-full mb-4" />
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4A5A4E' }}>
              I am always excited to connect with others passionate about pharmacy, tech, and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div variants={ANIMATION_VARIANTS.fadeInLeft} className="space-y-8">
              {/* Contact Info Card */}
              <div className="!bg-[#E1DBC9] p-6 rounded-xl shadow-md" style={{ border: '2px solid #C8C2AD' }}>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1E2E20' }}>
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl" aria-hidden="true">✉️</span>
                    <div>
                      <p className="text-sm font-semibold mb-1" style={{ color: '#1E2E20' }}>Email</p>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm hover:underline" style={{ color: '#2D4530' }}>
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl" aria-hidden="true">💼</span>
                    <div>
                      <p className="text-sm font-semibold mb-1" style={{ color: '#1E2E20' }}>LinkedIn</p>
                      <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline" style={{ color: '#2D4530' }}>
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl" aria-hidden="true">📄</span>
                    <div>
                      <p className="text-sm font-semibold mb-1" style={{ color: '#1E2E20' }}>Curriculum Vitae</p>
                      <a href={PERSONAL_INFO.cv} download target="_blank" rel="noopener noreferrer" className="text-sm hover:underline" style={{ color: '#2D4530' }}>
                        Download CV (PDF)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl" aria-hidden="true">📍</span>
                    <div>
                      <p className="text-sm font-semibold mb-1" style={{ color: '#1E2E20' }}>Location</p>
                      <p className="text-sm" style={{ color: '#6B7B84' }}>{PERSONAL_INFO.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connect blurb */}
              <div className="p-6 rounded-xl" style={{ backgroundColor: '#2D4530' }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#E1DBC9' }}>
                  Connect with Me!
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#C8C2AD' }}>
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