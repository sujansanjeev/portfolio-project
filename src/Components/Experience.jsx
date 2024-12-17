import React from 'react';
import { motion } from 'framer-motion';
import gorillaLogo from '../assets/gorilla.png';
import tataLogo from '../assets/tata.png';

const Experience = () => {
  const experiences = [
    {
      company: 'Gorilla Technology (India) Private Limited',
      position: 'Software Engineer Intern',
      duration: 'May 2024 - July 2024',
      thumbnail: gorillaLogo,
      responsibilities: [
        'Developed automation scripts for router topology updates in NETBOX using Ansible, improving efficiency by 30%',
        'Modified OpenWRT UI code to implement external server authentication, enhancing security protocols',
        'Created a web application for internal lab usage, streamlining data collection and analysis processes',
        'Designed and implemented UI for SD-WAN device inventory and dashboard, improving visibility and management of network devices',
        'Developed backend APIs for VPP and FRR using Python, facilitating seamless integration with existing systems',
        'Collaborated with cross-functional teams to deliver high-quality software solutions on schedule',
      ],
    },
    {
      company: 'Tata Communications Ltd.',
      position: 'Full Stack Web Developer Intern',
      duration: 'June 2023 - July 2023',
      thumbnail: tataLogo,
      responsibilities: [
        'Developed a full-stack e-commerce platform using Angular for front-end and Flask for back-end',
        'Successfully deployed the e-commerce model on a test service',
        'Implemented user-friendly interfaces and robust back-end systems with advanced features',
        'Strengthened skills in Angular, Flask, and related libraries',
        'Demonstrated strong problem-solving, teamwork, and project management abilities',
      ],
    },
  ];

  return (
    <section id="experience" className="py-12 bg-transparent">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          Professional Experience
        </motion.h2>

        {/* Vertical Card Layout */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
              } items-center md:items-start gap-8`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Thumbnail */}
              <div className="flex-shrink-0">
                <img
                  src={exp.thumbnail}
                  alt={`${exp.company} logo`}
                  className="h-24 w-24 md:h-32 md:w-32 object-contain rounded-full shadow-md border-gradient-to-r"
                />
              </div>

              {/* Content */}
              <div className="bg-white/80 backdrop-blur-lg p-6 rounded-lg shadow-md w-full border-2 border-gradient-to-r">
                <h3 className="text-2xl font-semibold text-gray-800">{exp.position}</h3>
                <span className="text-gray-600 text-sm block mb-4">{exp.duration}</span>
                <h4 className="text-xl text-gray-700 mb-4">{exp.company}</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
