import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import profileImage from '../assets/me.jpg';

const About = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    { label: 'Years Learning', value: '1.5+' },
    { label: 'Projects Completed', value: '5+' },
    { label: 'Technologies', value: '20+' },
    { label: 'Certifications', value: '3+' },
  ];

  const skills = [
    'Software Engineering', 'Full Stack Development', 'AI/ML',
    'IoT Solutions', 'Cloud Computing', 'Linux Enthusiast','MAINFRAME Development', 'Financial Services Technology'
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <AnimatedText
            text="About Me"
            className="text-4xl md:text-5xl font-bold text-gray-900"
            delay={200}
          />
          <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            className="relative order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative inline-block"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 blur-xl" />
              <img
                src={profileImage}
                alt="Sujan Sanjeev"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -right-6 md:right-auto md:-left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <div>
                  <p className="text-sm text-gray-500">Currently at</p>
                  <p className="font-semibold text-gray-900">FISERV India</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Hello, I&apos;m <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sujan Sanjeev</span>
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                A passionate <span className="font-medium text-gray-900">Software Engineer</span> based in Chennai, India. 
                Currently working at <span className="font-medium text-blue-600">FISERV India</span> since June 2025, 
                specializing in mainframe development and financial services technology.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                I thrive on solving complex problems and exploring new technologies. 
                My focus lies in bridging theoretical knowledge with practical applications 
                in software development, IoT solutions, and AI/ML technologies.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-full text-sm font-medium border border-gray-100"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2 + index * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {item.value}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;