import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, PERSONAL_INFO } from '../data/portfolio';
import { TIMING, BREAKPOINTS } from '../utils/constants';

const DROPDOWN_ITEMS = {
  experience: [
    { label: 'Work Experience', icon: '💼', href: '/experience?tab=work' },
    { label: 'IPPEs', icon: '🏥', href: '/experience?tab=ippes' },
    { label: 'Projects', icon: '🚀', href: '/experience?tab=projects' },
    { label: 'Future APPEs', icon: '⭐', href: '/experience?tab=appes' },
  ],
  research: [
    { label: 'Research & Innovation', icon: '🔬', href: '/research#research' },
    { label: 'Presentations', icon: '🎤', href: '/research#presentations' },
  ],
};

const DropdownNav = ({ item, activeSection, scrollToSection }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const dropdownItems = DROPDOWN_ITEMS[item.id];
  const isActive = activeSection === item.id;

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleItemClick = (href) => {
    setOpen(false);
    window.location.href = href;
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none ${
          isActive
            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
            : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
        }`}
        aria-expanded={open}
      >
        <span className="mr-1" aria-hidden="true">{item.icon}</span>
        {item.label}
        <svg
          className={`w-3 h-3 ml-0.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-1 w-52 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
          >
            {dropdownItems.map((di) => (
              <button
                key={di.label}
                onClick={() => handleItemClick(di.href)}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left"
              >
                <span aria-hidden="true">{di.icon}</span>
                {di.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navigation = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState({});

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
    const handleEscape = (e) => { if (e.key === 'Escape' && isMenuOpen) setIsMenuOpen(false); };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (!element) return;
      const navElement = document.querySelector('nav');
      const navHeight = navElement ? navElement.offsetHeight : 0;
      const extraPadding = isMobile ? 20 : 10;
      window.scrollTo({ top: Math.max(0, element.offsetTop - navHeight - extraPadding), behavior: 'smooth' });
    }, TIMING.SCROLL_DELAY);
  };

  const toggleMobileExpand = (id) => {
    setMobileExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md dark:shadow-gray-950/50' : 'bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors focus:outline-none rounded-lg px-2 py-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Return to top of page"
          >
            {PERSONAL_INFO.name}
          </motion.button>

          {/* Desktop nav */}
          <ul className="hidden sm:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                {DROPDOWN_ITEMS[item.id] ? (
                  <DropdownNav item={item} activeSection={activeSection} scrollToSection={scrollToSection} />
                ) : (
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
                      activeSection === item.id
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                    aria-current={activeSection === item.id ? 'true' : undefined}
                  >
                    <span className="mr-2" aria-hidden="true">{item.icon}</span>
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <motion.div animate={isMenuOpen ? 'open' : 'closed'} className="w-6 h-5 flex flex-col justify-between">
              <motion.span className="block h-0.5 bg-current rounded-full" variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 9 } }} transition={{ duration: 0.2 }} />
              <motion.span className="block h-0.5 bg-current rounded-full" variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} transition={{ duration: 0.2 }} />
              <motion.span className="block h-0.5 bg-current rounded-full" variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -9 } }} transition={{ duration: 0.2 }} />
            </motion.div>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="sm:hidden overflow-hidden"
            >
              <ul className="py-4 space-y-1">
                {NAV_ITEMS.map((item, index) => (
                  <motion.li key={item.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
                    {DROPDOWN_ITEMS[item.id] ? (
                      <div>
                        <button
                          onClick={() => toggleMobileExpand(item.id)}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors focus:outline-none ${
                            activeSection === item.id
                              ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                          }`}
                        >
                          <span>
                            <span className="mr-3" aria-hidden="true">{item.icon}</span>
                            {item.label}
                          </span>
                          <svg
                            className={`w-3 h-3 transition-transform duration-200 ${mobileExpanded[item.id] ? 'rotate-180' : ''}`}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {mobileExpanded[item.id] && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.15 }}
                              className="overflow-hidden ml-4 border-l-2 border-gray-200 dark:border-gray-700 pl-3 mt-1 space-y-1"
                            >
                              {DROPDOWN_ITEMS[item.id].map((di) => (
                                <button
                                  key={di.label}
                                  onClick={() => { setIsMenuOpen(false); window.location.href = di.href; }}
                                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-left"
                                >
                                  <span aria-hidden="true">{di.icon}</span>
                                  {di.label}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 ${
                          activeSection === item.id
                            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        <span className="mr-3" aria-hidden="true">{item.icon}</span>
                        {item.label}
                      </button>
                    )}
                  </motion.li>
                ))}
                <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: NAV_ITEMS.length * 0.05 }} className="pt-2 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => scrollToSection('contact-form')}
                    className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium bg-blue-600 dark:bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors focus:outline-none"
                  >
                    <span className="mr-3" aria-hidden="true">✉️</span>Send Me a Message
                  </button>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;