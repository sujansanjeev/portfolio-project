import React from 'react';
import { motion } from 'framer-motion';
import sign from '../assets/sign.jpg';
import gpt from '../assets/gpt.jpg';
import rover from '../assets/rover.jpg';

const Projects = () => {
  const projects = [
    {
      name: 'Autonomous Off-Road Rover on Unknown Terrain Without Map',
      description: `Developed an autonomous rover using LiDAR and OpenCV for real-time terrain mapping and geo-location navigation. Implemented SLAM algorithms for simultaneous mapping and localization. Designed advanced path planning algorithms for optimal route selection in challenging terrains.`,
      duration: 'September 2023 - April 2024',
      technologies: 'ROS, Python, SLAM, Machine Learning, MQTT',
      image: rover,
    },
    {
      name: 'AI Teaching Assistant for YouTube',
      description: `Created a web application using GPT-3 API to answer user queries based on YouTube video content. Implemented the solution using Python, Streamlit, and GPT-3 API.`,
      duration: 'March 2023 - April 2023',
      technologies: 'Python, Streamlit, GPT-3 API',
      image: gpt,
    },
    {
      name: 'Sign Language Conversion Tool',
      description: `Developed a web application for bidirectional conversion between sign language and speech. Utilized Python, Mediapipe, Streamlit, and OpenCV for implementation.`,
      duration: 'January 2023 - March 2023',
      technologies: 'Python, Mediapipe, Streamlit, OpenCV',
      // projectLink: 'https://github.com/your-repository',
      image: sign,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="relative p-6 rounded-lg bg-white/20 backdrop-blur-md shadow-md border border-transparent transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Gradient Border (Pseudo-element) */}
              <div className="absolute inset-0 rounded-lg border-gradient z-[-1] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

              {/* Project Thumbnail */}
              <img
                src={project.image}
                alt={`${project.name} Thumbnail`}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />

              {/* Project Content */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p className="text-gray-600 mb-2">
                <strong>Duration:</strong> {project.duration}
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Technologies Used:</strong> {project.technologies}
              </p>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
