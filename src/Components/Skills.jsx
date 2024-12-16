import React from 'react';

const Skills = () => {
  const technicalSkills = [
    {
      topic: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'SQL']
    },
    {
      topic: 'Web Technologies',
      skills: ['ReactJS', 'AngularJS', 'NodeJS', 'Flask']
    },
    {
      topic: 'IoT & Networking',
      skills: ['ROS', 'MQTT', 'SLAM']
    },
    {
      topic: 'Operating Systems',
      skills: ['Linux (Ubuntu, Arch, Kali)']
    },
    {
      topic: 'Other',
      skills: ['Git', 'Docker', 'Gen AI', 'Cyber Security']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalSkills.map((skillCategory) => (
            <div 
              key={skillCategory.topic} 
              className="bg-white rounded-lg shadow-md p-6 h-full"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{skillCategory.topic}</h3>
              <div className="grid grid-cols-2 gap-3">
                {skillCategory.skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-gray-100 p-3 rounded-md text-center hover:bg-gray-200 transition"
                  >
                    <span className="text-base text-gray-800">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;