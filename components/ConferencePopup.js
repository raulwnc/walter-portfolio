import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ConferencePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenSeen, setHasBeenSeen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('apha2026-popup-seen');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2500);
      return () => clearTimeout(timer);
    } else {
      setHasBeenSeen(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setHasBeenSeen(true);
    sessionStorage.setItem('apha2026-popup-seen', 'true');
  };

  const handleReopen = () => {
    setIsVisible(true);
  };

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {hasBeenSeen && !isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            onClick={handleReopen}
            className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            style={{ backgroundColor: '#2D4530', color: '#E1DBC9' }}
            aria-label="Save contact"
          >
            Save Contact
          </motion.button>
        )}
      </AnimatePresence>

      {/* Popup */}
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={handleClose}
            />

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed z-50 bottom-0 left-0 right-0 sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:max-w-md w-full"
            >
              <div className="bg-white dark:bg-gray-900 rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden">

                {/* Top accent bar — pine green */}
                <div className="h-1.5" style={{ backgroundColor: '#2D4530' }} />

                {/* Content */}
                <div className="p-6 sm:p-8">
                  {/* Close button */}
                  <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-2xl leading-none transition-colors"
                    aria-label="Close"
                  >
                    ×
                  </button>

                  {/* Heading */}
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Let&apos;s Stay Connected 👋
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    Hi! I&apos;m Walter — PharmD candidate at Pitt bridging pharmacy and technology.
                    Save my contact directly to your phone in one tap.
                  </p>

                  {/* Info pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                      <span>✉️</span> wrn9@pitt.edu
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                      <span>📱</span> (939) 226-4301
                    </span>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="/walter-nieves.vcf"
                      download="Walter_Nieves_Canabal.vcf"
                      onClick={handleClose}
                      className="!bg-[#2D4530] !text-[#E1DBC9] flex-1 flex items-center justify-center gap-2 px-5 py-3 font-semibold rounded-xl transition-colors text-sm shadow-md"
                      style={{ backgroundColor: '#2D4530', color: '#E1DBC9' }}
                    >
                      Save to Contacts
                    </a>
                    <button
                      onClick={handleClose}
                      className="flex-1 px-5 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl transition-colors text-sm"
                    >
                      Maybe Later
                    </button>
                  </div>

                  <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-4">
                    Works on iPhone & Android — no app needed
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ConferencePopup;