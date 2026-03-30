import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gorillaLogo from '../assets/gorilla.png';
import tataLogo from '../assets/tata.png';
import fiservLogo from '../assets/fiserv.png';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  const experiences = [
    {
      company: 'FISERV India',
      position: 'Software Engineer',
      duration: 'June 2025 - Present',
      location: 'Chennai, India',
      description: 'Enterprise financial applications & mainframe development',
      skills: ['Mainframe', 'COBOL', 'JCL', 'DB2', 'CICS'],
      isCurrent: true,
      color: '#10b981',
      logo: fiservLogo,
    },
    {
      company: 'Gorilla Technology',
      position: 'SWE Intern',
      duration: 'May 2024 - July 2024',
      location: 'Taiwan (Remote)',
      description: 'Network automation & SD-WAN dashboard development',
      skills: ['Python', 'Ansible', 'React', 'NETBOX'],
      isCurrent: false,
      color: '#3b82f6',
      logo: gorillaLogo,
    },
    {
      company: 'Tata Communications',
      position: 'Full Stack Intern',
      duration: 'June 2023 - July 2023',
      location: 'Chennai, India',
      description: 'E-commerce platform with Angular & Flask',
      skills: ['Angular', 'Flask', 'Python', 'SQL'],
      isCurrent: false,
      color: '#8b5cf6',
      logo: tataLogo,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline line
      gsap.fromTo(
        '.timeline-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          },
        }
      );

      // Animate each timeline item
      gsap.utils.toArray('.timeline-item').forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Animate dots
      gsap.utils.toArray('.timeline-dot').forEach((dot, i) => {
        gsap.fromTo(
          dot,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.5,
            ease: 'back.out(2)',
            delay: i * 0.2,
            scrollTrigger: {
              trigger: dot,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase mb-2 block">Career Path</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Professional Journey</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Building expertise through diverse experiences in the tech industry</p>
        </motion.div>

        <div ref={timelineRef} className="relative max-w-5xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 via-blue-500 to-purple-600 rounded-full origin-top timeline-line hidden md:block" />
          
          {/* Mobile Timeline Line */}
          <div className="absolute left-8 w-1 h-full bg-gradient-to-b from-green-400 via-blue-500 to-purple-600 rounded-full origin-top timeline-line md:hidden" />

          <div className="space-y-12 md:space-y-0">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`timeline-item relative md:grid md:grid-cols-2 md:gap-8 ${
                  index % 2 === 0 ? '' : 'md:direction-rtl'
                }`}
              >
                {/* Timeline Dot */}
                <div 
                  className="timeline-dot absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg z-10"
                  style={{ backgroundColor: exp.color, top: '24px' }}
                >
                  {exp.isCurrent && (
                    <span className="absolute inset-0 rounded-full animate-ping opacity-75" style={{ backgroundColor: exp.color }} />
                  )}
                </div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'}`}>
                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ y: -5 }}
                  >
                    {/* Header */}
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-200">
                        <img src={exp.logo} alt={exp.company} className="w-10 h-10 object-contain" />
                      </div>
                      <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                        <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                        <p className="text-blue-600 font-medium">{exp.company}</p>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className={`flex flex-wrap gap-3 text-sm text-gray-500 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                        <span>📅</span> {exp.duration}
                      </span>
                      <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                        <span>📍</span> {exp.location}
                      </span>
                      {exp.isCurrent && (
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4">{exp.description}</p>

                    {/* Skills */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                {index % 2 === 0 ? <div className="hidden md:block" /> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;