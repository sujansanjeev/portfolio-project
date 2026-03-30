import { motion } from 'framer-motion';
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiFlask,
  SiHtml5,
  SiDocker,
  SiGit,
  SiLinux,
  SiAnsible,
  SiNeovim,
  SiLangchain,
  SiHuggingface,
  SiOllama,
} from 'react-icons/si';
import { DiJava, DiDatabase, DiAws, DiMysql } from 'react-icons/di';
import { FaServer, FaDesktop, FaSave } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';

const iconMap = {
  Python: SiPython,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Java: DiJava,
  COBOL: FaDesktop,
  SQL: DiMysql,
  React: SiReact,
  Angular: SiAngular,
  'Node.js': SiNodedotjs,
  Flask: SiFlask,
  'HTML/CSS': SiHtml5,
  AWS: DiAws,
  Azure: VscAzure,
  Docker: SiDocker,
  Git: SiGit,
  Linux: SiLinux,
  Ansible: SiAnsible,
  Neovim: SiNeovim,
  Mainframe: FaServer,
  DB2: DiDatabase,
  JCL: FaDesktop,
  CICS: FaDesktop,
  VSAM: FaSave,
  LangChain: SiLangchain,
  'Hugging Face': SiHuggingface,
  Ollama: SiOllama,
};

const colorMap = {
  Python: '#3776ab',
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  Java: '#ed8b00',
  COBOL: '#005ca5',
  SQL: '#e38c00',
  React: '#61dafb',
  Angular: '#dd0031',
  'Node.js': '#339933',
  Flask: '#000000',
  'HTML/CSS': '#e34f26',
  AWS: '#ff9900',
  Azure: '#0078d4',
  Docker: '#2496ed',
  Git: '#f05032',
  Linux: '#fcc624',
  Ansible: '#ee0000',
  Neovim: '#57a64a',
  Mainframe: '#4b0082',
  DB2: '#0530ad',
  JCL: '#6b5b95',
  CICS: '#ff6600',
  VSAM: '#2e8b57',
  LangChain: '#3b82f6',
  'Hugging Face': '#ffd21e',
  Ollama: '#f2f2f2',
};

const Skills = () => {
  const skillCategories = [
    {
      topic: 'Languages',
      fullTopic: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'COBOL', 'SQL'],
    },
    {
      topic: 'Mainframe',
      fullTopic: 'Mainframe & Database',
      skills: ['Mainframe', 'DB2', 'JCL', 'CICS', 'VSAM'],
    },
    {
      topic: 'Web Dev',
      fullTopic: 'Web Development',
      skills: ['React', 'Angular', 'Node.js', 'Flask', 'HTML/CSS'],
    },
    {
      topic: 'AI/ML & Cloud',
      fullTopic: 'AI/ML & Cloud',
      skills: ['AWS', 'Azure', 'Docker', 'LangChain', 'Hugging Face', 'Ollama'],
    },
    {
      topic: 'Tools',
      fullTopic: 'Tools & Systems',
      skills: ['Git', 'Linux', 'Ansible', 'Neovim'],
    },
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
            Skills & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Tools and technologies I work with
          </p>
        </motion.div>

        {/* Mobile Layout - Accordion Style */}
        <div className="md:hidden max-w-lg mx-auto space-y-3">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.topic}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-gray-50 rounded-xl p-4"
            >
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                {category.topic}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const IconComponent = iconMap[skill];
                  const color = colorMap[skill] || '#666';
                  
                  return (
                    <div
                      key={skill}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white rounded-lg border border-gray-200"
                    >
                      {IconComponent ? (
                        <IconComponent size={14} color={color} />
                      ) : (
                        <span className="text-xs font-bold" style={{ color }}>
                          {skill.charAt(0)}
                        </span>
                      )}
                      <span className="text-xs text-gray-700 font-medium">
                        {skill}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block space-y-10 md:space-y-14 max-w-5xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.topic}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6 text-center">
                {category.fullTopic}
              </h3>

              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = iconMap[skill];
                  const color = colorMap[skill] || '#666';

                  return (
                    <motion.div
                      key={skill}
                      className="group"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.05 }}
                    >
                      <motion.div
                        className="flex flex-col items-center p-3 md:p-5 bg-white rounded-xl md:rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all cursor-pointer min-w-[100px]"
                        whileHover={{ y: -5 }}
                      >
                        <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center mb-2 md:mb-3">
                          {IconComponent ? (
                            <IconComponent
                              size={40}
                              color={color}
                              className="group-hover:scale-110 transition-transform"
                            />
                          ) : (
                            <span className="text-2xl md:text-3xl font-bold" style={{ color }}>
                              {skill.charAt(0)}
                            </span>
                          )}
                        </div>
                        <span className="text-sm md:text-base text-gray-700 font-medium group-hover:text-blue-600 transition-colors text-center">
                          {skill}
                        </span>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;