import { motion } from 'framer-motion';
import gen from '../assets/gen.jpg';
import cyber from '../assets/cyber.jpg';

const Certifications = () => {
  const certifications = [
    {
      title: 'Generative AI Foundations',
      issuer: 'DeepLearning.AI, AWS',
      completionDate: 'December 2024',
      thumbnail: gen,
      gradient: 'from-blue-500 to-purple-500',
      skills: [
        'Transformer architecture & LLMs',
        'Model pre-training & fine-tuning',
        'Text generation & summarization',
        'RLHF & prompt engineering',
        'Responsible AI practices',
      ],
    },
    {
      title: 'Google Cybersecurity Professional Certificate',
      issuer: 'Google',
      completionDate: 'August 2024',
      thumbnail: cyber,
      gradient: 'from-green-500 to-teal-500',
      skills: [
        'Network security & encryption',
        'Linux command line & SIEM tools',
        'Threat detection & assessment',
        'Security audits & risk analysis',
        'Compliance frameworks',
      ],
    },
  ];

  return (
    <section id="certifications" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
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
            Certifications
          </motion.h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto px-4">
            Professional achievements and learning milestones
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6 md:gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="relative bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
                  whileHover={{ y: -5 }}
                >
                  {/* Gradient top bar */}
                  <div className={`h-2 bg-gradient-to-r ${cert.gradient}`} />
                  
                  <div className="p-5 md:p-8">
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                      {/* Certificate Image - Larger */}
                      <div className="flex-shrink-0 mx-auto sm:mx-0">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden shadow-lg">
                          <img
                            src={cert.thumbnail}
                            alt={cert.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                          <div>
                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1">
                              {cert.title}
                            </h3>
                            <p className={`bg-gradient-to-r ${cert.gradient} bg-clip-text text-transparent font-medium text-sm md:text-base`}>
                              {cert.issuer}
                            </p>
                          </div>
                          <span className="px-3 py-1 bg-gray-50 text-gray-500 text-xs md:text-sm rounded-full whitespace-nowrap self-start mx-auto sm:mx-0">
                            {cert.completionDate}
                          </span>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-1.5 md:gap-2 justify-center sm:justify-start">
                          {cert.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skillIndex}
                              className="px-2 md:px-3 py-1 text-xs md:text-sm text-gray-600 bg-gray-50 rounded-full"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.05 * skillIndex }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;