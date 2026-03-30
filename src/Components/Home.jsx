import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedText from './AnimatedText';

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
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
    // Mark as loaded after a short delay to prevent initial twitching
    const loadTimer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [roles.length]);

  const featureCards = [
    { icon: '💻', title: 'Full Stack', desc: 'End-to-end' },
    { icon: '🧠', title: 'AI/ML', desc: 'Intelligence' },
    { icon: '⚙️', title: 'Mainframe', desc: 'Enterprise' },
    { icon: '☁️', title: 'Cloud', desc: 'Scalable' },
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20 md:pt-24 pb-8"
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center">
          {/* Animated greeting */}
          <motion.p
            className="text-xs sm:text-sm md:text-base text-gray-400 font-medium tracking-widest uppercase mb-2 md:mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 10 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hello, I am
          </motion.p>

          {/* Name with letter animation */}
          <div className="mb-2 md:mb-4">
            <AnimatedText
              text="Sujan Sanjeev"
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 tracking-tight"
              delay={300}
            />
          </div>

          {/* Role with typewriter effect */}
          <motion.div
            className="flex items-baseline justify-center mb-3 md:mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 font-light mr-2 leading-none">a</span>
            <div className="relative h-6 sm:h-7 md:h-8 lg:h-9 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold inline-block leading-none"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    {roles[currentRole]}
                  </span>
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Animated line separator */}
          <motion.div
            className="w-12 sm:w-16 md:w-20 lg:w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4 md:mb-6 lg:mb-8"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: isLoaded ? 1 : 0, opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{ transformOrigin: 'center' }}
          />

          {/* Description */}
          <motion.div
            className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto mb-6 md:mb-8 lg:mb-10 px-2 sm:px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <p className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              Building innovative solutions at{' '}
              <span className="text-blue-600 font-semibold">
                FISERV India
              </span>
              {' '}— passionate about technology that makes a difference.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12 lg:mb-16 w-full sm:w-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-gray-900 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-base"
            >
              Let&apos;s Connect
            </button>

            <button
              onClick={() => scrollToSection('about')}
              className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-white text-gray-700 rounded-full font-medium border border-gray-200 hover:bg-gray-50 hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-200 shadow-sm text-sm sm:text-base"
            >
              Explore My Work
            </button>
          </motion.div>

          {/* Feature cards - Static layout, no complex animations */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-2xl mx-auto w-full px-2 sm:px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            {featureCards.map((feature, index) => (
              <div
                key={index}
                className="feature-card p-3 sm:p-4 md:p-5 lg:p-6 bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-200 cursor-pointer"
              >
                <div className="text-xl sm:text-2xl md:text-3xl mb-1 md:mb-2">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">{feature.title}</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <span className="text-[10px] sm:text-xs text-gray-400 mb-1 sm:mb-2 tracking-wider">SCROLL</span>
          <div className="w-4 sm:w-5 h-6 sm:h-8 md:w-6 md:h-10 border-2 border-gray-300 rounded-full flex justify-center pt-1">
            <motion.div
              className="w-0.5 sm:w-1 h-1 sm:h-1.5 md:h-2 bg-gray-400 rounded-full"
              animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;