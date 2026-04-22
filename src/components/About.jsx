import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTilt } from '../hooks/useTilt';
import ScrollReveal from './ScrollReveal';
import Counter from './Counter';
import profileImage from '../assets/me.jpg';

const About = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const { ref: tiltRef, handleMouseMove, handleMouseLeave } = useTilt(15);

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
    { label: 'Years Learning', value: 1.5, suffix: '+' },
    { label: 'Projects Completed', value: 5, suffix: '+' },
    { label: 'Technologies', value: 20, suffix: '+' },
    { label: 'Certifications', value: 3, suffix: '+' },
  ];

  const skills = [
    'Software Engineering', 'Full Stack Development', 'AI/ML',
    'IoT Solutions', 'Cloud Computing', 'Linux Enthusiast', 'MAINFRAME Development', 'Financial Services Technology'
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-dark-900 relative">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-100">
            About Me
          </h2>
          <p className="text-dark-500 mt-4 text-lg max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column — Profile Photo with 3D Tilt */}
          <ScrollReveal direction="left" className="relative order-2 md:order-1">
            <div
              ref={tiltRef}
              className="relative inline-block w-full max-w-md mx-auto"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-blue/20 to-accent-gold/20 rounded-3xl opacity-60 blur-2xl" />
              
              <img
                src={profileImage}
                alt="Sujan Sanjeev"
                className="relative w-full rounded-2xl shadow-2xl shadow-dark-950/50"
                style={{ transform: 'translateZ(20px)' }}
              />
              
              {/* Glare effect */}
              <div 
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.05) 45%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.05) 55%, transparent 60%)',
                }}
              />
            </div>

            <motion.div
              className="absolute -bottom-3 right-1 md:right-auto md:-left-6 bg-dark-800 rounded-xl md:rounded-2xl p-2.5 md:p-4 shadow-xl border border-dark-700"
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
            >
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse shrink-0" />
                <div>
                  <p className="text-xs md:text-sm text-dark-500">Currently at</p>
                  <p className="text-sm md:text-base font-semibold text-dark-100">FISERV India</p>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Right Column — Text Content */}
          <ScrollReveal direction="right" className="order-1 md:order-2">
            <div className="bg-dark-800 rounded-3xl p-6 md:p-8 shadow-sm border border-dark-700">
              <h3 className="text-2xl md:text-3xl font-bold text-dark-100 mb-4">
                Hello, I&apos;m <span className="bg-gradient-to-r from-accent-blue to-accent-gold bg-clip-text text-transparent">Sujan Sanjeev</span>
              </h3>
              
              <p className="text-dark-400 leading-relaxed mb-4">
                A passionate <span className="font-medium text-dark-200">Software Engineer</span> based in Chennai, India. 
                Currently working at <span className="font-medium text-accent-blue">FISERV India</span> since June 2025, 
                specializing in mainframe development and financial services technology.
              </p>
              
              <p className="text-dark-400 leading-relaxed mb-6">
                I thrive on solving complex problems and exploring new technologies. 
                My focus lies in bridging theoretical knowledge with practical applications 
                in software development, IoT solutions, and AI/ML technologies.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1.5 bg-dark-700 text-dark-300 rounded-full text-sm font-medium border border-dark-600 hover:border-accent-blue/50 hover:text-accent-blue transition-colors"
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
                  className="bg-dark-800 rounded-2xl p-4 text-center shadow-sm border border-dark-700 hover:shadow-lg hover:border-dark-600 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <p className="text-3xl font-bold bg-gradient-to-r from-accent-blue to-accent-gold bg-clip-text text-transparent">
                    <Counter end={item.value} suffix={item.suffix} />
                  </p>
                  <p className="text-dark-500 text-sm mt-1">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
