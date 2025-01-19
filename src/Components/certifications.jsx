import React from 'react';
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
      skills: [
        'Mastered core concepts of Generative AI including transformer architecture, LLMs, and their applications',
        'Gained practical experience with model pre-training, fine-tuning, and deployment strategies',
        'Completed hands-on projects in text generation, summarization, and model optimization',
        'Developed understanding of RLHF, prompt engineering, and responsible AI practices',
        'Applied knowledge through practical labs using industry-standard tools and frameworks'
      ]
    },
    {
      title: 'Google Cybersecurity Professional Certificate',
      issuer: 'Google',
      completionDate: 'August 2024',
      thumbnail: cyber, 
      skills: [
        'Mastered foundational cybersecurity concepts including network security, encryption, and risk management',
        'Gained hands-on experience with security tools such as Linux command line, SQL, and SIEM tools',
        'Developed skills in threat detection, vulnerability assessment, and incident response',
        'Completed projects in security audits, risk assessments, and network traffic analysis',
        'Demonstrated proficiency in compliance frameworks and security best practices'
      ]
    }
  ];

  return (
    <section id="certifications" className="py-12 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          Professional Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-white/80 backdrop-blur-lg p-6 rounded-lg shadow-lg border-2 border-gradient-to-r h-full transform transition-transform hover:scale-[1.02]">
                <div className="absolute -top-3 -right-3 bg-blue-600 text-white text-sm px-4 py-1 rounded-full">
                  {cert.completionDate}
                </div>

                <div className="flex flex-col gap-4">
                  {/* Thumbnail Container */}
                  <motion.div
                    className="relative group cursor-pointer overflow-hidden rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={cert.thumbnail}
                      alt={`${cert.title} Certificate`}
                      className="w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:opacity-90"
                    />
                
                  </motion.div>

                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {cert.issuer}
                    </p>
                  </div>

                  <motion.ul 
                    className="space-y-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {cert.skills.map((skill, skillIndex) => (
                      <motion.li
                        key={skillIndex}
                        className="flex items-start space-x-2 text-gray-700 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + skillIndex * 0.1 }}
                      >
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{skill}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;