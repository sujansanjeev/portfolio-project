import { motion } from 'framer-motion';
import sign from '../assets/sign.jpg';
import gpt from '../assets/gpt.jpg';
import rover from '../assets/rover.jpg';

const Projects = () => {
  const projects = [
    {
      name: 'Autonomous Rover',
      fullName: 'Autonomous Off-Road Rover',
      shortDesc: 'LiDAR & OpenCV based navigation with SLAM',
      description: 'Developed an autonomous rover using LiDAR and OpenCV for real-time terrain mapping and geo-location navigation. Implemented SLAM algorithms for simultaneous mapping and localization.',
      duration: 'Sept 2023 - April 2024',
      technologies: ['ROS', 'Python', 'SLAM', 'ML', 'MQTT'],
      image: rover,
      gradient: 'from-blue-500 to-cyan-500',
      color: '#3b82f6',
    },
    {
      name: 'AI Teaching Assistant',
      fullName: 'AI Teaching Assistant',
      shortDesc: 'GPT-3 powered Q&A from YouTube videos',
      description: 'Created a web application using GPT-3 API to answer user queries based on YouTube video content. Implemented using Python, Streamlit, and GPT-3 API.',
      duration: 'Mar - Apr 2023',
      technologies: ['Python', 'Streamlit', 'GPT-3', 'NLP'],
      image: gpt,
      gradient: 'from-purple-500 to-pink-500',
      color: '#8b5cf6',
    },
    {
      name: 'Sign Language Tool',
      fullName: 'Sign Language Conversion Tool',
      shortDesc: 'Bidirectional sign-speech conversion',
      description: 'Developed a web application for bidirectional conversion between sign language and speech. Utilized Python, Mediapipe, Streamlit, and OpenCV for implementation.',
      duration: 'Jan - Mar 2023',
      technologies: ['Python', 'Mediapipe', 'OpenCV', 'Streamlit'],
      image: sign,
      gradient: 'from-orange-500 to-red-500',
      color: '#f97316',
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
            Projects
          </h2>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg">Things I&apos;ve built</p>
        </motion.div>

        {/* Mobile Layout - Horizontal Scroll Cards */}
        <div className="md:hidden -mx-4 px-4">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[280px] snap-start"
              >
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm h-full">
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                    <div 
                      className="absolute inset-0 opacity-20"
                      style={{ background: `linear-gradient(to top right, ${project.color}, transparent)` }}
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span 
                        className="px-2 py-0.5 text-white text-[10px] font-medium rounded-full"
                        style={{ backgroundColor: project.color }}
                      >
                        {project.duration}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">
                      {project.name}
                    </h3>
                    <p className="text-gray-500 text-xs mb-3 line-clamp-2">
                      {project.shortDesc}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-1.5 py-0.5 bg-gray-50 text-gray-600 rounded text-[10px] border border-gray-100"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-1.5 py-0.5 text-gray-400 text-[10px]">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="relative h-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.fullName}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs font-medium rounded-full`}>
                      {project.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.fullName}
                  </h3>

                  <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-50 text-gray-600 rounded-md text-xs font-medium border border-gray-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;