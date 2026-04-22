import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';
import fiservLogo from '../assets/fiserv.png';
import sign from '../assets/sign.jpg';
import gpt from '../assets/gpt.jpg';
import rover from '../assets/rover.jpg';

const Projects = () => {
  const orgProject = {
    name: 'Integrated Disputes System',
    company: 'FISERV India',
    division: 'Merchant Solutions Tech',
    description: 'Working on the Integrated Disputes System within Merchant Solutions Technology at FISERV. Building enterprise-grade dispute resolution workflows, case management systems, and financial transaction dispute handling solutions.',
    duration: 'June 2025 - Present',
    technologies: ['Mainframe', 'COBOL', 'JCL', 'DB2', 'CICS', 'VSAM'],
    logo: fiservLogo,
    color: '#10b981',
  };

  const universityProjects = [
    {
      name: 'Autonomous Rover',
      fullName: 'Autonomous Off-Road Rover',
      shortDesc: 'LiDAR & OpenCV based navigation with SLAM',
      description: 'Developed an autonomous rover using LiDAR and OpenCV for real-time terrain mapping and geo-location navigation. Implemented SLAM algorithms for simultaneous mapping and localization.',
      duration: 'Sept 2023 - April 2024',
      technologies: ['ROS', 'Python', 'SLAM', 'ML', 'MQTT'],
      image: rover,
      gradient: 'from-accent-blue to-cyan-500',
      color: '#0066FF',
    },
    {
      name: 'AI Teaching Assistant',
      fullName: 'AI Teaching Assistant',
      shortDesc: 'GPT-3 powered Q&A from YouTube videos',
      description: 'Created a web application using GPT-3 API to answer user queries based on YouTube video content. Implemented using Python, Streamlit, and GPT-3 API.',
      duration: 'Mar - Apr 2023',
      technologies: ['Python', 'Streamlit', 'GPT-3', 'NLP'],
      image: gpt,
      gradient: 'from-accent-gold to-orange-500',
      color: '#D4AF37',
    },
    {
      name: 'Sign Language Tool',
      fullName: 'Sign Language Conversion Tool',
      shortDesc: 'Bidirectional sign-speech conversion',
      description: 'Developed a web application for bidirectional conversion between sign language and speech. Utilized Python, Mediapipe, Streamlit, and OpenCV for implementation.',
      duration: 'Jan - Mar 2023',
      technologies: ['Python', 'Mediapipe', 'OpenCV', 'Streamlit'],
      image: sign,
      gradient: 'from-purple-500 to-pink-500',
      color: '#8b5cf6',
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-dark-900 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent" />

      <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: '100vw' }}>
        {/* Header */}
        <ScrollReveal className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-100 mb-2 sm:mb-4">
            Projects
          </h2>
          <p className="text-dark-500 text-sm sm:text-base md:text-lg">Work I&apos;ve shipped and built</p>
        </ScrollReveal>

        {/* ─── Organization Project (BIG) ─── */}
        <ScrollReveal className="mb-12 sm:mb-16 md:mb-20">
          <div className="text-center mb-6 md:mb-8">
            <span className="text-xs sm:text-sm font-semibold text-accent-blue tracking-wider uppercase mb-2 block">
              Organization Project
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-dark-100">
              Current Work
            </h3>
          </div>

          <TiltCard tiltAmount={5} glare={false} className="group">
            <div className="relative bg-dark-800 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-dark-700 hover:border-dark-600 transition-all duration-300 max-w-5xl mx-auto">
              {/* Top Color Bar */}
              <div className="h-1.5 sm:h-2 w-full" style={{ backgroundColor: orgProject.color }} />

              <div className="p-5 sm:p-6 md:p-8 lg:p-10">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  {/* Logo */}
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-xl md:rounded-2xl bg-dark-700 flex items-center justify-center border border-dark-600 p-3 md:p-4">
                      <img src={orgProject.logo} alt={orgProject.company} className="w-full h-full object-contain" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 mb-3">
                      <span
                        className="px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-white"
                        style={{ backgroundColor: orgProject.color }}
                      >
                        {orgProject.duration}
                      </span>
                      <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold border border-green-500/20">
                        Current
                      </span>
                    </div>

                    <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-dark-100 mb-2">
                      {orgProject.name}
                    </h4>
                    <p className="text-accent-blue font-medium text-base sm:text-lg mb-3">
                      {orgProject.company} — {orgProject.division}
                    </p>
                    <p className="text-dark-400 text-sm sm:text-base leading-relaxed mb-5 max-w-3xl">
                      {orgProject.description}
                    </p>

                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {orgProject.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-dark-700 text-dark-300 rounded-full text-xs sm:text-sm font-medium border border-dark-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </ScrollReveal>

        {/* ─── University Projects (SMALL) ─── */}
        <div className="text-center mb-6 md:mb-8">
          <span className="text-xs sm:text-sm font-semibold text-accent-gold tracking-wider uppercase mb-2 block">
            University Projects
          </span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-dark-100">
            Academic Work
          </h3>
        </div>

        {/* Mobile Layout - Horizontal Scroll Cards */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            {universityProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 snap-start"
                style={{ width: 'min(280px, 82vw)' }}
              >
                <div className="bg-dark-800 rounded-xl overflow-hidden border border-dark-700 shadow-sm h-full">
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
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
                    <h3 className="font-semibold text-dark-100 text-sm mb-1">
                      {project.name}
                    </h3>
                    <p className="text-dark-500 text-xs mb-3 line-clamp-2">
                      {project.shortDesc}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-1.5 py-0.5 bg-dark-700 text-dark-400 rounded text-[10px] border border-dark-600"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-1.5 py-0.5 text-dark-500 text-[10px]">
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
        <div className="hidden md:grid md:grid-cols-3 gap-5 md:gap-6 mx-auto" style={{ maxWidth: '72rem' }}>
          {universityProjects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <div className="group relative h-full">
                <div className="relative h-full bg-dark-800 rounded-2xl overflow-hidden shadow-sm border border-dark-700 hover:shadow-xl hover:border-dark-600 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.fullName}
                      className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2.5 py-0.5 bg-gradient-to-r ${project.gradient} text-white text-xs font-medium rounded-full`}>
                        {project.duration}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-dark-100 mb-2 group-hover:text-accent-blue transition-colors">
                      {project.fullName}
                    </h3>

                    <p className="text-dark-500 text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-0.5 bg-dark-700 text-dark-400 rounded text-xs font-medium border border-dark-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
