import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import snu from '../assets/snu.png';
import mlm from '../assets/mlm.jpg';

const Education = () => {
  const educationData = [
    {
      institution: 'Shiv Nadar University, Chennai',
      degree: 'B.Tech. CSE (IoT)',
      fullDegree: 'B.Tech. in Computer Science and Engineering',
      specialization: 'Internet of Things',
      duration: '2021 - 2025',
      score: 'CGPA: 8.0/10.0',
      logo: snu,
      isCurrent: true,
      courses: ['IoT Systems', 'Machine Learning', 'Cloud Computing', 'Data Structures'],
    },
    {
      institution: 'M.L.M HSS',
      fullInstitution: 'M.L.M Mamallan Matriculation HSS',
      degree: 'Higher Secondary',
      fullDegree: 'Higher Secondary Certificate',
      specialization: 'Computer Science',
      duration: '2019 - 2021',
      score: '92%',
      logo: mlm,
      isCurrent: false,
    },
    {
      institution: 'M.L.M HSS',
      fullInstitution: 'M.L.M Mamallan Matriculation HSS',
      degree: 'Secondary',
      fullDegree: 'Secondary School Certificate',
      specialization: 'General Studies',
      duration: '2017 - 2019',
      score: '90%',
      logo: mlm,
      isCurrent: false,
    },
  ];

  return (
    <section id="education" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-dark-900 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <ScrollReveal className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-100 mb-2 sm:mb-4">
            Education
          </h2>
          <p className="text-dark-500 text-sm sm:text-base md:text-lg">My academic journey</p>
        </ScrollReveal>

        {/* Mobile Layout - Compact Cards */}
        <div className="md:hidden max-w-lg mx-auto space-y-4">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-800 rounded-xl p-4 border border-dark-700 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-dark-700 flex-shrink-0">
                  <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain p-1" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-dark-100 text-sm truncate">
                      {edu.institution}
                    </h3>
                    {edu.isCurrent && (
                      <span className="px-2 py-0.5 bg-green-500/10 text-green-400 text-[10px] font-semibold rounded-full flex-shrink-0 border border-green-500/20">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-dark-400 text-xs mb-1">{edu.degree}</p>
                  <p className="text-dark-500 text-xs mb-2">{edu.specialization}</p>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-dark-700 text-dark-400 text-[10px] rounded-full border border-dark-600">
                      {edu.duration}
                    </span>
                    <span className="px-2 py-0.5 bg-accent-blue/10 text-accent-blue text-[10px] font-medium rounded-full border border-accent-blue/20">
                      {edu.score}
                    </span>
                  </div>
                </div>
              </div>
              {edu.courses && (
                <div className="mt-3 pt-3 border-t border-dark-700">
                  <div className="flex flex-wrap gap-1">
                    {edu.courses.map((course, i) => (
                      <span key={i} className="px-2 py-0.5 bg-dark-700 text-dark-400 text-[10px] rounded border border-dark-600">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block max-w-6xl mx-auto">
          {/* Featured - Current Education */}
          <ScrollReveal>
            <div className="mb-8">
              <div className="relative bg-gradient-to-br from-accent-blue via-accent-gold to-accent-blue rounded-3xl p-1">
                <div className="bg-dark-800 rounded-3xl p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden bg-dark-700 shadow-lg border border-dark-600">
                        <img src={educationData[0].logo} alt={educationData[0].institution} className="w-full h-full object-contain p-2" />
                      </div>
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-3">
                        {educationData[0].isCurrent && (
                          <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold rounded-full">
                            Current
                          </span>
                        )}
                        <span className="px-3 py-1 bg-dark-700 text-accent-blue text-sm font-medium rounded-full border border-dark-600">
                          {educationData[0].duration}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-dark-100 mb-2">
                        {educationData[0].fullInstitution || educationData[0].institution}
                      </h3>
                      
                      <p className="text-lg text-dark-400 mb-2">{educationData[0].fullDegree}</p>
                      <p className="text-accent-gold font-medium mb-4">{educationData[0].specialization}</p>
                      
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-blue to-accent-gold text-white rounded-full font-semibold">
                        {educationData[0].score}
                      </div>
                      
                      {educationData[0].courses && (
                        <div className="mt-6">
                          <p className="text-sm text-dark-500 mb-2">Key Courses:</p>
                          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                            {educationData[0].courses.map((course, i) => (
                              <span key={i} className="px-3 py-1 bg-dark-700 text-dark-300 text-sm rounded-full border border-dark-600">
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Grid for previous education */}
          <div className="grid md:grid-cols-2 gap-6">
            {educationData.slice(1).map((edu, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div whileHover={{ y: -5 }} className="h-full">
                  <div className="bg-dark-800 rounded-2xl p-6 border border-dark-700 hover:border-dark-600 shadow-sm hover:shadow-md transition-all h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-dark-700 flex-shrink-0 border border-dark-600">
                        <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain p-1" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-dark-100 mb-1 leading-tight">
                          {edu.fullInstitution || edu.institution}
                        </h3>
                        <p className="text-sm text-dark-400 mb-1">{edu.fullDegree}</p>
                        <p className="text-sm text-dark-500 mb-3">{edu.specialization}</p>
                        
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2 py-1 bg-dark-700 text-dark-400 text-xs rounded-full border border-dark-600">
                            {edu.duration}
                          </span>
                          <span className="px-2 py-1 bg-gradient-to-r from-dark-600 to-dark-700 text-dark-200 text-xs font-medium rounded-full border border-dark-600">
                            {edu.score}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
