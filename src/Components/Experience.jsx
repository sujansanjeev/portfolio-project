import { motion } from 'framer-motion';
import gorillaLogo from '../assets/gorilla.png';
import tataLogo from '../assets/tata.png';
import fiservLogo from '../assets/fiserv.png';

const Experience = () => {
  const experiences = [
    {
      company: 'FISERV India',
      position: 'Software Engineer',
      duration: 'June 2025 - Present',
      location: 'Chennai, India',
      type: 'Full-time',
      description: 'Working on mainframe development and financial services technology',
      highlights: [
        'Enterprise-level financial applications',
        'Mainframe technologies for mission-critical systems',
        'Cross-functional team collaboration',
      ],
      skills: ['Mainframe', 'COBOL', 'JCL', 'DB2', 'CICS'],
      isCurrent: true,
      gradient: 'from-green-500 to-emerald-500',
      logo: fiservLogo,
    },
    {
      company: 'Gorilla Technology',
      position: 'Software Engineer Intern',
      duration: 'May 2024 - July 2024',
      location: 'Taiwan (Remote)',
      type: 'Internship',
      highlights: [
        'Network automation with Ansible & NETBOX',
        'OpenWRT UI development',
        'SD-WAN dashboard design',
      ],
      skills: ['Python', 'Ansible', 'JavaScript', 'React'],
      isCurrent: false,
      gradient: 'from-blue-500 to-cyan-500',
      logo: gorillaLogo,
    },
    {
      company: 'Tata Communications',
      position: 'Full Stack Developer Intern',
      duration: 'June 2023 - July 2023',
      location: 'Chennai, India',
      type: 'Internship',
      highlights: [
        'Full-stack e-commerce platform',
        'Angular + Flask development',
        'RESTful API implementation',
      ],
      skills: ['Angular', 'Flask', 'Python', 'SQL'],
      isCurrent: false,
      gradient: 'from-purple-500 to-pink-500',
      logo: tataLogo,
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Professional Journey
          </motion.h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Building expertise through diverse experiences
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`relative rounded-2xl md:rounded-3xl overflow-hidden ${exp.isCurrent ? 'ring-2 ring-green-500/30' : ''}`}>
                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-0 w-1 md:w-2 h-full bg-gradient-to-b ${exp.gradient}`} />
                
                <div className="bg-white p-5 md:p-8 pl-6 md:pl-10">
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                    {/* Company Logo */}
                    <div className="flex-shrink-0 flex items-center justify-center sm:items-start">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                        {exp.logo ? (
                          <img src={exp.logo} alt={exp.company} className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                        ) : (
                          <span className="text-gray-700 font-bold text-xl md:text-2xl">{exp.company.charAt(0)}</span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">{exp.position}</h3>
                          <p className="text-blue-600 font-medium text-sm md:text-base">{exp.company}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.isCurrent && (
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full whitespace-nowrap">
                              Current
                            </span>
                          )}
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full whitespace-nowrap">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
                        <span className="flex items-center gap-1">
                          <span>📅</span> {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <span>📍</span> {exp.location}
                        </span>
                      </div>

                      {/* Description */}
                      {exp.description && (
                        <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4 hidden sm:block">{exp.description}</p>
                      )}

                      {/* Highlights */}
                      <div className="mb-3 md:mb-4">
                        <ul className="space-y-1 md:space-y-2">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-600 text-xs md:text-sm">
                              <span className="text-blue-500 mt-0.5 flex-shrink-0">▸</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      {exp.skills && (
                        <div className="flex flex-wrap gap-1.5 md:gap-2">
                          {exp.skills.map((skill, i) => (
                            <span key={i} className={`px-2 md:px-3 py-1 text-xs font-medium rounded-full ${exp.isCurrent ? 'bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border border-green-200' : 'bg-gray-100 text-gray-600'}`}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;