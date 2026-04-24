import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { PERSONAL_INFO, SOCIAL_LINKS, FOOTER } from '../data/portfolio';
import NProgress from 'nprogress';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', path: '/', icon: '🏠' },
  { id: 'about', label: 'About', path: '/about', icon: '👤' },
  {
    id: 'experience', label: 'Experience', path: '/experience', icon: '💼',
    dropdown: [
      { label: 'Work Experience', icon: '💼', href: '/experience?tab=work' },
      { label: 'IPPEs', icon: '🏥', href: '/experience?tab=ippes' },
      { label: 'Projects', icon: '🚀', href: '/experience?tab=projects' },
      { label: 'Future APPEs', icon: '⭐', href: '/experience?tab=appes' },
    ]
  },
  {
    id: 'research', label: 'Research', path: '/research', icon: '🔬',
    dropdown: [
      { label: 'Research & Innovation', icon: '🔬', href: '/research#research' },
      { label: 'Presentations', icon: '🎤', href: '/research#presentations' },
    ]
  },
  { id: 'leadership', label: 'Leadership', path: '/leadership', icon: '👥' },
  { id: 'contact', label: 'Contact', path: '/contact', icon: '✉️' },
  { id: 'life', label: 'Life', path: '/life', icon: '✨', special: true }
];

const DropdownItem = ({ item, router }) => {
  const handleDropdownClick = (href) => { router.push(href); };
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const isActive = router.pathname === item.path || router.pathname.startsWith(item.path + '/');

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => { setOpen(false); }, [router.pathname]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        style={isActive ? { color: '#2D4530', backgroundColor: '#EEE9DA' } : {}}
        className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none"
      >
        <span style={{ color: isActive ? '#2D4530' : '#4A5A4E' }} className="flex items-center gap-1">
          <span className="mr-1" aria-hidden="true">{item.icon}</span>
          {item.label}
        </span>
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
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            style={{ backgroundColor: '#EEE9DA', borderColor: '#C8C2AD' }}
            className="absolute top-full left-0 mt-1 w-52 rounded-xl shadow-xl border overflow-hidden z-50"
          >
            {item.dropdown.map((di) => (
              <button
                key={di.label}
                onClick={() => { setOpen(false); handleDropdownClick(di.href); }}
                style={{ color: '#4A5A4E' }}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors text-left"
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#E1DBC9'; e.currentTarget.style.color = '#2D4530'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = '#4A5A4E'; }}
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

const Layout = ({ children }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState({});

  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleComplete = () => NProgress.done();
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  useEffect(() => {
    setIsMenuOpen(false);
    setMobileExpanded({});
  }, [router.pathname]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const toggleMobileExpand = (id) => {
    setMobileExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div style={{ backgroundColor: '#E1DBC9' }} className="min-h-screen" suppressHydrationWarning>

      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{ backgroundColor: '#EEE9DA', borderColor: '#C8C2AD' }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              href="/"
              className="!text-[#2D4530] text-xl font-bold transition-colors"
            >
              {PERSONAL_INFO.name}
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                if (item.dropdown) {
                  return <DropdownItem key={item.id} item={item} router={router} />;
                }
                const isActive = router.pathname === item.path;
                const isLife = item.special;
                return (
                  <Link
                    key={item.id}
                    href={item.path}
                    className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                    style={
                      isLife
                        ? { color: '#5E4B3B' }
                        : isActive
                        ? { color: '#2D4530', backgroundColor: '#E1DBC9' }
                        : { color: '#4A5A4E' }
                    }
                  >
                    <span className="mr-2" aria-hidden="true">{item.icon}</span>
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{ color: '#4A5A4E' }}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
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
                className="md:hidden overflow-hidden pb-4"
              >
                <div className="space-y-1 pt-2">
                  {NAV_ITEMS.map((item) => {
                    if (item.dropdown) {
                      return (
                        <div key={item.id}>
                          <button
                            onClick={() => toggleMobileExpand(item.id)}
                            className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                            style={router.pathname === item.path ? { color: '#2D4530', backgroundColor: '#E1DBC9' } : { color: '#4A5A4E' }}
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
                                className="overflow-hidden ml-4 pl-3 mt-1 space-y-1"
                                style={{ borderLeft: '2px solid #C8C2AD' }}
                              >
                                {item.dropdown.map((di) => (
                                  <button
                                    key={di.label}
                                    onClick={() => { setIsMenuOpen(false); router.push(di.href); }}
                                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors text-left"
                                    style={{ color: '#6B7B84' }}
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
                    }
                    return (
                      <Link
                        key={item.id}
                        href={item.path}
                        className="block px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                        style={
                          item.special
                            ? { color: '#5E4B3B' }
                            : router.pathname === item.path
                            ? { color: '#2D4530', backgroundColor: '#E1DBC9' }
                            : { color: '#4A5A4E' }
                        }
                      >
                        <span className="mr-3" aria-hidden="true">{item.icon}</span>
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Main Content */}
      <main className="min-h-screen">{children}</main>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#1E2E20' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-3 !text-[#E1DBC9]">{PERSONAL_INFO.name}</h3>
              <p className="text-sm leading-relaxed !text-[#C8C2AD]">
                {PERSONAL_INFO.title} at {PERSONAL_INFO.school}, bridging pharmacy and technology to create innovative healthcare solutions.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 !text-[#E1DBC9]">Quick Links</h3>
              <ul className="space-y-2">
                {NAV_ITEMS.slice(1).map((item) => (
                  <li key={item.id}>
                    <Link href={item.path} className="!text-[#C8C2AD] text-sm transition-colors hover:!text-[#E1DBC9]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 !text-[#E1DBC9]">Connect</h3>
              <div className="space-y-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.name !== 'Email' ? '_blank' : undefined}
                    rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="!text-[#C8C2AD] flex items-center gap-2 text-sm transition-colors hover:!text-[#E1DBC9]"
                  >
                    <span aria-hidden="true">{link.icon}</span>
                    {link.name}
                  </a>
                ))}
                <a
                  href={PERSONAL_INFO.cv}
                  download
                  className="!text-[#C8C2AD] flex items-center gap-2 text-sm transition-colors hover:!text-[#E1DBC9]"
                >
                  <span aria-hidden="true">📄</span>
                  Download CV
                </a>
              </div>
            </div>
          </div>
          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderTop: '1px solid #2D4530' }}>
            <p className="text-xs text-center sm:text-left !text-[#8A9A8A]">
              &copy; {new Date().getFullYear()} {FOOTER.copyright} | {FOOTER.tagline}
            </p>
            <motion.button
              onClick={scrollToTop}
              className="!text-[#8A9A8A] flex items-center gap-2 text-xs transition-colors px-3 py-2 rounded hover:!text-[#C8C2AD]"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              aria-label="Back to top"
            >
              <span aria-hidden="true">↑</span>
              Back to Top
            </motion.button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;