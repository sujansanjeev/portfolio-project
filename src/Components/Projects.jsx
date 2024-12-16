import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'Autonomous Off-Road Rover on Unknown Terrain Without Map',
      description: `Developed an autonomous rover using LiDAR and OpenCV for real-time terrain mapping and geo-location navigation. Implemented SLAM algorithms for simultaneous mapping and localization. Designed advanced path planning algorithms for optimal route selection in challenging terrains.`,
      duration: 'September 2023 - April 2024',
      teamSize: '4',
      technologies: 'ROS, Python, SLAM, Machine Learning, MQTT'
    },
    {
      name: 'AI Teaching Assistant for YouTube',
      description: `Created a web application using GPT-3 API to answer user queries based on YouTube video content. Implemented the solution using Python, Streamlit, and GPT-3 API.`,
      duration: 'March 2023 - April 2023',
      teamSize: '4',
      technologies: 'Python, Streamlit, GPT-3 API'
    },
    {
      name: 'Sign Language Conversion Tool',
      description: `Developed a web application for bidirectional conversion between sign language and speech. Utilized Python, Mediapipe, Streamlit, and OpenCV for implementation.`,
      duration: 'January 2023 - March 2023',
      teamSize: '4',
      technologies: 'Python, Mediapipe, Streamlit, OpenCV',
      projectLink: 'GitHub Repository'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
              <p className="text-gray-600 mb-2">{project.description}</p>
              <p className="text-gray-600 mb-2"><strong>Duration:</strong> {project.duration}</p>
              <p className="text-gray-600 mb-2"><strong>Team Size:</strong> {project.teamSize}</p>
              <p className="text-gray-600 mb-4"><strong>Technologies Used:</strong> {project.technologies}</p>
              {project.projectLink && (
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Project on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
