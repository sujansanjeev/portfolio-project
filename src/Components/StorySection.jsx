import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const StorySection = ({ children, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className={`py-20 md:py-32 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.section>
  );
};

export const StoryTitle = ({ children, highlight = false }) => {
  return (
    <motion.h2
      className={`text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 ${
        highlight ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent' : 'text-gray-900'
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.h2>
  );
};

export const StorySubtitle = ({ children }) => {
  return (
    <motion.p
      className="text-gray-500 text-lg md:text-xl text-center max-w-2xl mx-auto mb-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      {children}
    </motion.p>
  );
};

export const StoryCard = ({ children, className = '', gradient = false }) => {
  return (
    <motion.div
      className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 ${
        gradient ? 'bg-gradient-to-br from-blue-50 to-purple-50' : ''
      } ${className}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

StorySection.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  delay: PropTypes.number,
};

StoryTitle.propTypes = {
  children: PropTypes.node,
  highlight: PropTypes.bool,
};

StorySubtitle.propTypes = {
  children: PropTypes.node,
};

StoryCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  gradient: PropTypes.bool,
};

export default StorySection;