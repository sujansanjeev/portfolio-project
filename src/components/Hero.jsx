import { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';

const AntigravityBackground = lazy(() => import('./AntigravityBackground'));

// Custom hook for typing effect — only starts when `trigger` becomes true
const useTypewriter = (text, startDelay = 0, speed = 40, trigger = true) => {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!trigger) return;
    const startTimer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(startTimer);
  }, [startDelay, trigger]);

  useEffect(() => {
    if (!started) return;
    if (displayedText.length >= text.length) {
      setFinished(true);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText(text.slice(0, displayedText.length + 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [started, displayedText, text, speed]);

  // Reset when trigger flips from false → true (e.g. on role change)
  useEffect(() => {
    if (trigger) {
      setDisplayedText('');
      setStarted(false);
      setFinished(false);
    }
  }, [trigger]);

  return { displayedText, isComplete: finished };
};

const TypewriterText = ({ text, className = '', startDelay = 0, speed = 40, trigger = true, onComplete }) => {
  const { displayedText, isComplete } = useTypewriter(text, startDelay, speed, trigger);

  useEffect(() => {
    if (isComplete && onComplete) onComplete();
  }, [isComplete, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && trigger && (
        <motion.span
          className="inline-block w-0.5 h-[1em] bg-accent-blue ml-0.5 align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      )}
    </span>
  );
};

const Hero = ({ isLoading = false }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showRole, setShowRole] = useState(false);
  const [showLine, setShowLine] = useState(false);
  const [showName, setShowName] = useState(false);
  const [roleCycleActive, setRoleCycleActive] = useState(false);
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
    if (!isLoading) {
      // Start hero animation sequence only after loading screen is gone
      const timer = setTimeout(() => setIsLoaded(true), 100);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // Start role cycling after initial reveal
  useEffect(() => {
    if (!showRole) return;
    const revealTimer = setTimeout(() => {
      setRoleCycleActive(true);
      setShowLine(true);
    }, 1200);
    return () => clearTimeout(revealTimer);
  }, [showRole]);

  useEffect(() => {
    if (!roleCycleActive) return;
    const timer = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [roleCycleActive, roles.length]);

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
      {/* Antigravity Particle Background */}
      <div className="absolute inset-0 z-[1] hidden md:block" aria-hidden="true">
        <Suspense fallback={null}>
          <AntigravityBackground />
        </Suspense>
      </div>

      {/* Mobile fallback - simple gradient */}
      <div
        className="absolute inset-0 z-[0] pointer-events-none md:hidden"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(0, 102, 255, 0.15) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <div className="flex flex-col items-center w-full">
          {/* Animated greeting with typing effect */}
          <motion.p
            className="text-xs sm:text-sm md:text-base text-dark-400 font-medium tracking-widest uppercase mb-2 md:mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <TypewriterText text="Hello, I am" startDelay={100} speed={50} trigger={isLoaded} onComplete={() => setShowName(true)} />
          </motion.p>

          {/* Name with fade-in effect */}
          <motion.div
            className="mb-2 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showName ? 1 : 0, y: showName ? 0 : 20 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            onAnimationComplete={() => {
              if (showName) setShowRole(true);
            }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-dark-100 tracking-tight drop-shadow-lg">
              Sujan Sanjeev
            </h1>
          </motion.div>

          {/* Role — fade in static, then cycle */}
          <motion.div
            className="flex items-baseline justify-center mb-3 md:mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: showRole ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-dark-400 font-light mr-2 leading-none">a</span>
            <div className="relative h-6 sm:h-7 md:h-8 lg:h-9 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold inline-block leading-none"
                  initial={!roleCycleActive ? false : { opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <TypewriterText
                    text={roles[currentRole]}
                    startDelay={0}
                    speed={60}
                    trigger={showRole}
                    className="bg-gradient-to-r from-accent-blue via-accent-gold to-accent-blue bg-clip-text text-transparent"
                  />
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Animated line separator */}
          <motion.div
            className="w-12 sm:w-16 md:w-20 lg:w-24 h-0.5 bg-gradient-to-r from-accent-blue to-accent-gold rounded-full mb-4 md:mb-6 lg:mb-8"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: showLine ? 1 : 0, opacity: showLine ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            style={{ transformOrigin: 'center' }}
          />

          {/* Description — fade in as a block */}
          <motion.div
            className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto mb-6 md:mb-8 lg:mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: showLine ? 1 : 0, y: showLine ? 0 : 10 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="text-dark-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              Building innovative solutions at FISERV India — passionate about technology that makes a difference.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12 lg:mb-16 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showLine ? 1 : 0, y: showLine ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MagneticButton
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-accent-blue text-white rounded-full font-medium shadow-lg shadow-accent-blue/25 hover:shadow-accent-blue/40 transition-shadow duration-200 text-sm sm:text-base"
              strength={0.2}
            >
              Let&apos;s Connect
            </MagneticButton>

            <MagneticButton
              onClick={() => scrollToSection('about')}
              className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-transparent text-dark-200 rounded-full font-medium border border-dark-600 hover:border-dark-400 hover:bg-dark-800/50 transition-all duration-200 text-sm sm:text-base"
              strength={0.2}
            >
              Explore My Work
            </MagneticButton>
          </motion.div>

          {/* Feature cards */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-2xl mx-auto w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: showLine ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {featureCards.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card p-3 sm:p-4 md:p-5 lg:p-6 bg-dark-800/60 backdrop-blur-md rounded-xl md:rounded-2xl border border-dark-700 shadow-sm hover:shadow-md hover:border-accent-blue/30 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-200 cursor-pointer"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-xl sm:text-2xl md:text-3xl mb-1 md:mb-2">{feature.icon}</div>
                <h3 className="font-semibold text-dark-200 text-xs sm:text-sm md:text-base">{feature.title}</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-dark-500">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: showLine ? 1 : 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <span className="text-[10px] sm:text-xs text-dark-500 mb-1 sm:mb-2 tracking-wider">SCROLL</span>
          <div className="w-4 sm:w-5 h-6 sm:h-8 md:w-6 md:h-10 border-2 border-dark-600 rounded-full flex justify-center pt-1">
            <motion.div
              className="w-0.5 sm:w-1 h-1 sm:h-1.5 md:h-2 bg-dark-400 rounded-full"
              animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
