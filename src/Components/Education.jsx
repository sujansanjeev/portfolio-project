import { motion } from 'framer-motion';
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
    <section id="education" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
            Education
          </h2>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg">My academic journey</p>
        </motion.div>

        {/* Mobile Layout - Compact Cards */}
        <div className="md:hidden max-w-lg mx-auto space-y-4">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0">
                  <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain p-1" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900 text-sm truncate">
                      {edu.institution}
                    </h3>
                    {edu.isCurrent && (
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-semibold rounded-full flex-shrink-0">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-xs mb-1">{edu.degree}</p>
                  <p className="text-gray-500 text-xs mb-2">{edu.specialization}</p>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded-full">
                      {edu.duration}
                    </span>
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-medium rounded-full">
                      {edu.score}
                    </span>
                  </div>
                </div>
              </div>
              {edu.courses && (
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="flex flex-wrap gap-1">
                    {edu.courses.map((course, i) => (
                      <span key={i} className="px-2 py-0.5 bg-gray-50 text-gray-600 text-[10px] rounded">
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
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-1">
              <div className="bg-white rounded-3xl p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden bg-white shadow-lg">
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
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                        {educationData[0].duration}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {educationData[0].fullInstitution || educationData[0].institution}
                    </h3>
                    
                    <p className="text-lg text-gray-600 mb-2">{educationData[0].fullDegree}</p>
                    <p className="text-purple-600 font-medium mb-4">{educationData[0].specialization}</p>
                    
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold">
                      {educationData[0].score}
                    </div>
                    
                    {educationData[0].courses && (
                      <div className="mt-6">
                        <p className="text-sm text-gray-500 mb-2">Key Courses:</p>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                          {educationData[0].courses.map((course, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
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
          </motion.div>

          {/* Grid for previous education */}
          <div className="grid md:grid-cols-2 gap-6">
            {educationData.slice(1).map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                      <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain p-1" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 leading-tight">
                        {edu.fullInstitution || edu.institution}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">{edu.fullDegree}</p>
                      <p className="text-sm text-gray-500 mb-3">{edu.specialization}</p>
                      
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {edu.duration}
                        </span>
                        <span className="px-2 py-1 bg-gradient-to-r from-gray-700 to-gray-900 text-white text-xs font-medium rounded-full">
                          {edu.score}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;