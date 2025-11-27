import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { PERSONAL_INFO, SOCIAL_LINKS, FOOTER } from '../data/portfolio';
import NProgress from 'nprogress';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', path: '/', icon: '🏠' },
  { id: 'about', label: 'About', path: '/about', icon: '👤' },
  { id: 'experience', label: 'Experience', path: '/experience', icon: '💼' },
  { id: 'research', label: 'Research', path: '/research', icon: '🔬' },
  { id: 'leadership', label: 'Leadership', path: '/leadership', icon: '👥' },
  { id: 'contact', label: 'Contact', path: '/contact', icon: '✉️' }
];

const Layout = ({ children }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Page loading progress bar
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header/Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md dark:shadow-gray-950/50' : 'bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700'}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Name */}
            <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
              {PERSONAL_INFO.name}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href={item.path}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    router.pathname === item.path
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <span className="mr-2" aria-hidden="true">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <motion.div
                animate={isMenuOpen ? 'open' : 'closed'}
                className="w-6 h-5 flex flex-col justify-between"
              >
                <motion.span
                  className="block h-0.5 bg-current rounded-full"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 9 }
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block h-0.5 bg-current rounded-full"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block h-0.5 bg-current rounded-full"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -9 }
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden pb-4"
            >
              <div className="space-y-2">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.id}
                    href={item.path}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      router.pathname === item.path
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <span className="mr-3" aria-hidden="true">{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="min-h-screen">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 dark:text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-white dark:text-gray-100 font-bold text-lg mb-3">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-sm text-gray-400 dark:text-gray-500 leading-relaxed">
                {PERSONAL_INFO.title} at {PERSONAL_INFO.school}, bridging pharmacy and technology to create innovative healthcare solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white dark:text-gray-100 font-bold text-lg mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {NAV_ITEMS.slice(1).map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.path}
                      className="text-sm text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-white dark:text-gray-100 font-bold text-lg mb-3">
                Connect
              </h3>
              <div className="space-y-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.name !== 'Email' ? '_blank' : undefined}
                    rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-400 transition-colors"
                  >
                    <span aria-hidden="true">{link.icon}</span>
                    {link.name}
                  </a>
                ))}
                <a
                  href={PERSONAL_INFO.cv}
                  download
                  className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-400 transition-colors"
                >
                  <span aria-hidden="true">📄</span>
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 dark:border-gray-900 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 dark:text-gray-600 text-center sm:text-left">
              &copy; {new Date().getFullYear()} {FOOTER.copyright} | {FOOTER.tagline}
            </p>
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-400 transition-colors px-3 py-2 rounded"
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