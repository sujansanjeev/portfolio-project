import { useEffect, useRef, useState } from 'react';
import { Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import Counter from './Counter';
import gen from '../assets/gen.jpg';
import cyber from '../assets/cyber.jpg';

const Certifications = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const certifications = [
    {
      title: 'Generative AI',
      subtitle: 'Foundations',
      issuer: 'DeepLearning.AI & AWS',
      completionDate: 'Dec 2024',
      thumbnail: gen,
      color: '#6366f1',
      skills: ['LLMs', 'Transformers', 'Fine-tuning', 'RLHF'],
    },
    {
      title: 'Cybersecurity',
      subtitle: 'Professional Certificate',
      issuer: 'Google',
      completionDate: 'Aug 2024',
      thumbnail: cyber,
      color: '#10b981',
      skills: ['Network Security', 'SIEM', 'Threat Detection', 'Linux'],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="certifications" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-dark-900 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-xs sm:text-sm font-semibold text-accent-gold tracking-wider uppercase mb-2 block">Achievements</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-100 mb-3 sm:mb-4">Certifications</h2>
          <p className="text-dark-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Professional credentials validating expertise in cutting-edge technologies
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`cert-card group relative bg-dark-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-dark-700 hover:border-dark-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Top Color Bar */}
              <div className="h-1.5 sm:h-2 w-full" style={{ backgroundColor: cert.color }} />

              <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6">
                  {/* Certificate Image with Badge Overlay */}
                  <div className="relative flex-shrink-0 mx-auto sm:mx-0">
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-xl sm:rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300 border border-dark-600">
                      <img
                        src={cert.thumbnail}
                        alt={cert.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Floating Badge */}
                    <div
                      className="absolute -top-2 -right-2 sm:-top-2.5 sm:-right-2.5 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-md"
                      style={{ backgroundColor: cert.color }}
                    >
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center sm:text-left">
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-dark-100 mb-0.5 sm:mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg text-dark-400">{cert.subtitle}</p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-3 sm:mb-4">
                      <span
                        className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium text-white"
                        style={{ backgroundColor: cert.color }}
                      >
                        {cert.issuer}
                      </span>
                      <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-dark-700 text-dark-400 rounded-full text-xs sm:text-sm border border-dark-600">
                        {cert.completionDate}
                      </span>
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center sm:justify-start">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm rounded-full border transition-all duration-200 hover:scale-105 cursor-default border-dark-600"
                          style={{
                            borderColor: `${cert.color}40`,
                            color: cert.color,
                            backgroundColor: `${cert.color}10`,
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner - hidden on small mobile to prevent overflow */}
              <div
                className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 w-16 sm:w-32 h-16 sm:h-32 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500 hidden sm:block"
                style={{ backgroundColor: cert.color }}
              />
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div
          className={`mt-12 sm:mt-16 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          {[
            { value: 2, label: 'Certifications' },
            { value: 100, suffix: '+', label: 'Hours Learned' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-100 mb-1">
                <Counter end={stat.value} suffix={stat.suffix || ''} />
              </div>
              <div className="text-xs sm:text-sm text-dark-500">{stat.label}</div>
            </div>
          ))}
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-100 mb-1">
              Google & AWS
            </div>
            <div className="text-xs sm:text-sm text-dark-500">Top Providers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
