import { motion } from 'framer-motion';
import { FOOTER, PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 dark:text-gray-400 py-8 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white dark:text-gray-100 font-bold text-lg mb-3">{PERSONAL_INFO.name}</h3>
            <p className="text-sm text-gray-400 dark:text-gray-500 leading-relaxed">{PERSONAL_INFO.title} at {PERSONAL_INFO.school}, bridging pharmacy and technology to create innovative healthcare solutions.</p>
          </div>
          <div>
            <h3 className="text-white dark:text-gray-100 font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Projects', 'Research', 'Leadership', 'Contact'].map((item) => (
                <li key={item}><button onClick={() => { const element = document.getElementById(item.toLowerCase()); if (element) { element.scrollIntoView({ behavior: 'smooth' }); } }} className="text-sm text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-400 transition-colors">{item}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white dark:text-gray-100 font-bold text-lg mb-3">Connect</h3>
            <div className="space-y-3">
              {SOCIAL_LINKS.map((link) => (<a key={link.name} href={link.url} target={link.name !== 'Email' ? '_blank' : undefined} rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined} className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-400 transition-colors"><span aria-hidden="true">{link.icon}</span>{link.name}</a>))}
              <a href={PERSONAL_INFO.cv} download className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-400 transition-colors"><span aria-hidden="true">📄</span>Download CV</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 dark:border-gray-900 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 dark:text-gray-600 text-center sm:text-left">&copy; {currentYear} {FOOTER.copyright} | {FOOTER.tagline}</p>
          <motion.button onClick={scrollToTop} className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 rounded px-3 py-2" whileHover={{ y: -2 }} whileTap={{ y: 0 }} aria-label="Back to top"><span aria-hidden="true">↑</span>Back to Top</motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;