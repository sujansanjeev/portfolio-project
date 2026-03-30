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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-sm'
            : 'bg-transparent'
        }`}
        initial={{ y: '-100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-1.5 sm:gap-2 cursor-pointer"
            onClick={() => handleNavClick('home')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={logo}
              alt="Sujan Sanjeev"
              className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full object-cover shadow-md"
            />
            <span className="hidden sm:block text-gray-900 font-semibold text-sm md:text-base">
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
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
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
            className="md:hidden text-gray-700 p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="absolute top-0 right-0 bottom-0 w-[280px] max-w-[85vw] bg-white shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <span className="font-semibold text-gray-900">Menu</span>
                <button
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
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
                        ? 'bg-blue-50 text-blue-600' 
                        : 'text-gray-700 hover:bg-gray-50'
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
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <img
                    src={logo}
                    alt="Sujan Sanjeev"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Sujan Sanjeev</p>
                    <p className="text-xs text-gray-500">Software Engineer</p>
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