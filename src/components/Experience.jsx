import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';
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
    <section ref={sectionRef} id="experience" className="py-20 md:py-32 bg-dark-900 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent" />
      
      <div className="mx-auto px-4 md:px-6" style={{ maxWidth: '100vw' }}>
        <ScrollReveal className="text-center mb-16 md:mb-20">
          <span className="text-sm font-semibold text-accent-blue tracking-wider uppercase mb-2 block">Career Path</span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-100 mb-4">Professional Journey</h2>
          <p className="text-dark-500 text-lg max-w-2xl mx-auto">Building expertise through diverse experiences in the tech industry</p>
        </ScrollReveal>

        <div ref={timelineRef} className="relative mx-auto" style={{ maxWidth: '64rem' }}>
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-blue via-accent-gold to-accent-blue rounded-full origin-top timeline-line hidden md:block" />
          
          {/* Mobile Timeline Line */}
          <div className="absolute left-4 w-1 h-full bg-gradient-to-b from-accent-blue via-accent-gold to-accent-blue rounded-full origin-top timeline-line md:hidden" />

          <div className="space-y-12 md:space-y-0">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="timeline-item relative md:grid md:grid-cols-2 md:gap-8"
              >
                {/* Timeline Dot */}
                <div 
                  className="timeline-dot absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full border-4 border-dark-900 shadow-lg z-10"
                  style={{ backgroundColor: exp.color, top: '24px' }}
                >
                  {exp.isCurrent && (
                    <span className="absolute inset-0 rounded-full animate-ping opacity-75" style={{ backgroundColor: exp.color }} />
                  )}
                </div>

                {/* Content */}
                <div className={`pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'}`}>
                  <TiltCard tiltAmount={5} glare={false}>
                    <div className="bg-dark-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-dark-700 hover:shadow-xl hover:border-dark-600 transition-all duration-300">
                      {/* Header */}
                      <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-dark-700 flex items-center justify-center flex-shrink-0 border border-dark-600">
                          <img src={exp.logo} alt={exp.company} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                        </div>
                        <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                          <h3 className="text-lg sm:text-xl font-bold text-dark-100">{exp.position}</h3>
                          <p className="text-accent-blue font-medium text-sm sm:text-base">{exp.company}</p>
                        </div>
                      </div>

                      {/* Meta */}
                      <div className={`flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-dark-500 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span className="flex items-center gap-1 bg-dark-700 px-2 sm:px-3 py-1 rounded-full border border-dark-600">
                          <span>📅</span> {exp.duration}
                        </span>
                        <span className="flex items-center gap-1 bg-dark-700 px-2 sm:px-3 py-1 rounded-full border border-dark-600">
                          <span>📍</span> {exp.location}
                        </span>
                        {exp.isCurrent && (
                          <span className="bg-green-500/10 text-green-400 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold border border-green-500/20">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-dark-400 text-sm mb-4">{exp.description}</p>

                      {/* Skills */}
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2 sm:px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-dark-300 border border-dark-600 hover:bg-dark-600 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
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
