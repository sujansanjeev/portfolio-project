import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import AnimatedText from './AnimatedText';

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const containerRef = useRef(null);

  const roles = [
    'Software Engineer',
    'Full Stack Developer',
    'Gen AI Enthusiast',
    'Tech Explorer',
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowSubtitle(true), 800),
      setTimeout(() => setShowDescription(true), 1200),
      setTimeout(() => setShowCTA(true), 1600),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16 md:pt-20"
    >
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="flex flex-col items-center">
          {/* Animated greeting */}
          <motion.p
            className="text-sm md:text-base text-gray-400 font-medium tracking-widest uppercase mb-2 md:mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hello, I am
          </motion.p>

          {/* Name with letter animation */}
          <div className="mb-3 md:mb-4">
            <AnimatedText
              text="Sujan Sanjeev"
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 tracking-tight"
              delay={400}
            />
          </div>

          {/* Role with typewriter effect */}
          <motion.div
            className="h-10 md:h-14 flex items-center justify-center mb-4 md:mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: showSubtitle ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-lg sm:text-xl md:text-2xl text-gray-500 font-light mr-2">a</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRole}
                className="text-lg sm:text-xl md:text-2xl font-semibold"
                initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {roles[currentRole]}
                </span>
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Animated line separator */}
          <motion.div
            className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 md:mb-8"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: showSubtitle ? 1 : 0, opacity: showSubtitle ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ transformOrigin: 'center' }}
          />

          {/* Description with fade in */}
          <motion.div
            className="max-w-xl md:max-w-2xl mx-auto mb-8 md:mb-10 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showDescription ? 1 : 0, y: showDescription ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-500 text-base md:text-lg lg:text-xl leading-relaxed">
              Building innovative solutions at{' '}
              <motion.span
                className="text-blue-600 font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                FISERV India
              </motion.span>
              {' '}— passionate about technology that makes a difference.
            </p>
          </motion.div>

          {/* CTA Buttons with staggered animation */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showCTA ? 1 : 0, y: showCTA ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-3.5 bg-gray-900 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Connect
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('about')}
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-3.5 bg-white text-gray-700 rounded-full font-medium border border-gray-200 hover:bg-gray-50 transition-all shadow-sm"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore My Work
            </motion.button>
          </motion.div>

          {/* Feature cards */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: showCTA ? 1 : 0, y: showCTA ? 0 : 30 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {[
              { icon: '💻', title: 'Full Stack', desc: 'End-to-end' },
              { icon: '🧠', title: 'AI/ML', desc: 'Intelligence' },
              { icon: '⚙️', title: 'Mainframe', desc: 'Enterprise' },
              { icon: '☁️', title: 'Cloud', desc: 'Scalable' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-3 md:p-5 lg:p-6 bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-pointer"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showCTA ? 1 : 0, y: showCTA ? 0 : 20 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="text-2xl md:text-3xl mb-1 md:mb-2">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 text-sm md:text-base">{feature.title}</h3>
                <p className="text-xs md:text-sm text-gray-500">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: showCTA ? 1 : 0 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => scrollToSection('about')}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs text-gray-400 mb-2 tracking-wider">SCROLL</span>
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-gray-300 rounded-full flex justify-center pt-1">
            <motion.div
              className="w-1 h-1.5 md:h-2 bg-gray-400 rounded-full"
              animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;