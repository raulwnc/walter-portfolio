import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, PERSONAL_INFO } from '../data/portfolio';
import { TIMING, BREAKPOINTS } from '../utils/constants';

const Navigation = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => { setIsMobile(window.innerWidth < BREAKPOINTS.SM); };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => { if (!isMobile) setIsMenuOpen(false); }, [isMobile]);

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 20); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => { if (e.key === 'Escape' && isMenuOpen) { setIsMenuOpen(false); } };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  const toggleMenu = () => { setIsMenuOpen(!isMenuOpen); };

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (!element) return;
      const navElement = document.querySelector('nav');
      const navHeight = navElement ? navElement.offsetHeight : 0;
      const extraPadding = isMobile ? 20 : 10;
      const targetPosition = element.offsetTop - navHeight - extraPadding;
      window.scrollTo({ top: Math.max(0, targetPosition), behavior: 'smooth' });
    }, TIMING.SCROLL_DELAY);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-gray-50 border-b border-gray-200'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.button onClick={() => scrollToSection('hero')} className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg px-2 py-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} aria-label="Return to top of page">{PERSONAL_INFO.name}</motion.button>
          <ul className="hidden sm:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (<li key={item.id}><button onClick={() => scrollToSection(item.id)} className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${activeSection === item.id ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'}`} aria-label={`Navigate to ${item.label} section`} aria-current={activeSection === item.id ? 'true' : undefined}><span className="mr-2" aria-hidden="true">{item.icon}</span>{item.label}</button></li>))}
          </ul>
          <button onClick={toggleMenu} className="sm:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen}>
            <motion.div animate={isMenuOpen ? 'open' : 'closed'} className="w-6 h-5 flex flex-col justify-between">
              <motion.span className="block h-0.5 bg-current rounded-full" variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 9 } }} transition={{ duration: 0.2 }} />
              <motion.span className="block h-0.5 bg-current rounded-full" variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} transition={{ duration: 0.2 }} />
              <motion.span className="block h-0.5 bg-current rounded-full" variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -9 } }} transition={{ duration: 0.2 }} />
            </motion.div>
          </button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="sm:hidden overflow-hidden">
              <ul className="py-4 space-y-2">
                {NAV_ITEMS.map((item, index) => (<motion.li key={item.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}><button onClick={() => scrollToSection(item.id)} className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${activeSection === item.id ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-100'}`} aria-label={`Navigate to ${item.label} section`}><span className="mr-3" aria-hidden="true">{item.icon}</span>{item.label}</button></motion.li>))}
                <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: NAV_ITEMS.length * 0.05 }} className="pt-2 border-t border-gray-200"><button onClick={() => scrollToSection('contact-form')} className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" aria-label="Navigate to contact form"><span className="mr-3" aria-hidden="true">✉️</span>Send Me a Message</button></motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;