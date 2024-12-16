import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Gorilla Technology (India) Private Limited',
      position: 'Software Engineer Intern',
      duration: 'May 2024 - July 2024',
      responsibilities: [
        'Developed automation scripts for router topology updates in NETBOX using Ansible, improving efficiency by 30%',
        'Modified OpenWRT UI code to implement external server authentication, enhancing security protocols',
        'Created a web application for internal lab usage, streamlining data collection and analysis processes',
        'Designed and implemented UI for SD-WAN device inventory and dashboard, improving visibility and management of network devices',
        'Developed backend APIs for VPP and FRR using Python, facilitating seamless integration with existing systems',
        'Collaborated with cross-functional teams to deliver high-quality software solutions on schedule'
      ]
    },
    {
      company: 'Tata Communications Ltd.',
      position: 'Full Stack Web Developer Intern',
      duration: 'June 2023 - July 2023',
      responsibilities: [
        'Developed a full-stack e-commerce platform using Angular for front-end and Flask for back-end',
        'Successfully deployed the e-commerce model on a test service',
        'Implemented user-friendly interfaces and robust back-end systems with advanced features',
        'Strengthened skills in Angular, Flask, and related libraries',
        'Demonstrated strong problem-solving, teamwork, and project management abilities'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold text-gray-900">{exp.position}</h3>
                <span className="text-gray-600 text-base">{exp.duration}</span>
              </div>
              <h4 className="text-xl text-gray-700 mb-2">{exp.company}</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {exp.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex} className="text-base">{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;