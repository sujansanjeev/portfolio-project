import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import logo from '../assets/logo.png';

const NAV_ITEMS = [
  { label: 'About', section: 'about' },
  { label: 'Education', section: 'education' },
  { label: 'Skills', section: 'skills' },
  { label: 'Experience', section: 'experience' },
  { label: 'Projects', section: 'projects' },
  { label: 'Contact', section: 'contact' },
];

const Navbar = ({ handleScroll }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    NAV_ITEMS.forEach((item) => {
      const section = document.getElementById(item.section);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (section) => {
    handleScroll(section);
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 liquid-glass"
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4 flex justify-between items-center" style={{ maxWidth: '100vw' }}>
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer shrink-0"
            onClick={() => handleNavClick('home')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={logo}
              alt="Sujan Sanjeev"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover shadow-md"
            />
            <span className="hidden sm:block text-dark-100 font-semibold text-sm md:text-base">
              Sujan Sanjeev
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <motion.button
                key={item.section}
                onClick={() => handleNavClick(item.section)}
                className={`px-3 md:px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeSection === item.section
                    ? 'bg-white/10 text-white'
                    : 'text-dark-300 hover:text-dark-100 hover:bg-white/5'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-dark-300 p-2 rounded-lg hover:bg-dark-800 transition-colors shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="absolute top-0 right-0 bottom-0 liquid-glass border-l border-white/10"
              style={{ width: 'min(280px, 85vw)' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-dark-800">
                <span className="font-semibold text-dark-100">Menu</span>
                <button
                  className="p-2 text-dark-400 hover:text-dark-100 hover:bg-dark-800 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Nav Items */}
              <div className="p-4 space-y-1">
                {NAV_ITEMS.map((item, index) => (
                  <motion.button
                    key={item.section}
                    onClick={() => handleNavClick(item.section)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      activeSection === item.section 
                        ? 'bg-white/10 text-white' 
                        : 'text-dark-300 hover:bg-white/5'
                    }`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-dark-800">
                <div className="flex items-center gap-3">
                  <img
                    src={logo}
                    alt="Sujan Sanjeev"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-dark-100 text-sm">Sujan Sanjeev</p>
                    <p className="text-xs text-dark-500">Software Engineer</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

Navbar.propTypes = {
  handleScroll: PropTypes.func.isRequired,
};

export default Navbar;
