import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import sign from '../assets/sign.jpg';
import gpt from '../assets/gpt.jpg';
import rover from '../assets/rover.jpg';

const Projects = () => {
  const projects = [
    {
      name: 'Autonomous Off-Road Rover',
      description: 'Developed an autonomous rover using LiDAR and OpenCV for real-time terrain mapping and geo-location navigation. Implemented SLAM algorithms for simultaneous mapping and localization.',
      duration: 'Sept 2023 - April 2024',
      technologies: ['ROS', 'Python', 'SLAM', 'ML', 'MQTT'],
      image: rover,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'AI Teaching Assistant',
      description: 'Created a web application using GPT-3 API to answer user queries based on YouTube video content. Implemented using Python, Streamlit, and GPT-3 API.',
      duration: 'March 2023 - April 2023',
      technologies: ['Python', 'Streamlit', 'GPT-3', 'NLP'],
      image: gpt,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Sign Language Conversion Tool',
      description: 'Developed a web application for bidirectional conversion between sign language and speech. Utilized Python, Mediapipe, Streamlit, and OpenCV for implementation.',
      duration: 'Jan 2023 - March 2023',
      technologies: ['Python', 'Mediapipe', 'OpenCV', 'Streamlit'],
      image: sign,
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <AnimatedText
            text="Projects"
            className="text-4xl md:text-5xl font-bold text-gray-900"
            delay={200}
          />
          <p className="text-gray-500 mt-4 text-lg">Things I&apos;ve built</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
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
                    alt={project.name}
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
                    {project.name}
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