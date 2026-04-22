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
  SiNeovim,
  SiLangchain,
  SiHuggingface,
  SiOllama,
} from 'react-icons/si';
import { DiJava, DiDatabase, DiAws, DiMysql } from 'react-icons/di';
import { FaServer, FaDesktop, FaSave, FaTerminal, FaCode, FaWindowMaximize } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import ScrollReveal from './ScrollReveal';
import ParallaxLayer from './ParallaxLayer';
import Counter from './Counter';

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
  'Agent Zero': FaTerminal,
  OpenCode: FaCode,
  Hyprland: FaWindowMaximize,
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
  Flask: '#aaaaaa',
  'HTML/CSS': '#e34f26',
  AWS: '#ff9900',
  Azure: '#0078d4',
  Docker: '#2496ed',
  Git: '#f05032',
  Linux: '#fcc624',
  'Agent Zero': '#ff6b35',
  OpenCode: '#00d4aa',
  Hyprland: '#00aaff',
  Neovim: '#57a64a',
  Mainframe: '#9b59b6',
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
      speed: 1.0,
    },
    {
      topic: 'Mainframe',
      fullTopic: 'Mainframe & Database',
      skills: ['Mainframe', 'DB2', 'JCL', 'CICS', 'VSAM'],
      speed: 0.85,
    },
    {
      topic: 'Web Dev',
      fullTopic: 'Web Development',
      skills: ['React', 'Angular', 'Node.js', 'Flask', 'HTML/CSS'],
      speed: 1.15,
    },
    {
      topic: 'AI/ML & Cloud',
      fullTopic: 'AI/ML & Cloud',
      skills: ['AWS', 'Azure', 'Docker', 'LangChain', 'Hugging Face', 'Ollama'],
      speed: 0.9,
    },
    {
      topic: 'Tools',
      fullTopic: 'Tools & Systems',
      skills: ['Git', 'Linux', 'Agent Zero', 'OpenCode', 'Hyprland', 'Neovim'],
      speed: 1.05,
    },
  ];

  const stats = [
    { value: 1.5, suffix: '+', label: 'Years Experience' },
    { value: 20, suffix: '+', label: 'Technologies' },
    { value: 3, suffix: '+', label: 'Certifications' },
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-dark-900 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <ScrollReveal className="text-center mb-8 sm:mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-100 mb-2 sm:mb-4">
            Skills & <span className="bg-gradient-to-r from-accent-blue to-accent-gold bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-dark-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Tools and technologies I work with
          </p>
        </ScrollReveal>

        {/* Stats Row */}
        <ScrollReveal className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-100 mb-1">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs sm:text-sm text-dark-500">{stat.label}</div>
            </div>
          ))}
        </ScrollReveal>

        {/* Mobile Layout - Accordion Style */}
        <div className="md:hidden max-w-lg mx-auto space-y-3">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.topic}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-dark-800 rounded-xl p-4 border border-dark-700"
            >
              <h3 className="text-sm font-semibold text-dark-300 mb-3">
                {category.topic}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const IconComponent = iconMap[skill];
                  const color = colorMap[skill] || '#666';
                  
                  return (
                    <div
                      key={skill}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 bg-dark-700 rounded-lg border border-dark-600"
                    >
                      {IconComponent ? (
                        <IconComponent size={14} color={color} />
                      ) : (
                        <span className="text-xs font-bold" style={{ color }}>
                          {skill.charAt(0)}
                        </span>
                      )}
                      <span className="text-xs text-dark-300 font-medium">
                        {skill}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Layout with Parallax */}
        <div className="hidden md:block space-y-10 md:space-y-14 max-w-5xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <ParallaxLayer key={category.topic} speed={category.speed}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <h3 className="text-lg md:text-xl font-semibold text-dark-200 mb-4 md:mb-6 text-center">
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
                          className="flex flex-col items-center p-3 md:p-5 bg-dark-800 rounded-xl md:rounded-2xl border border-dark-700 hover:border-accent-blue/50 hover:shadow-lg hover:shadow-accent-blue/10 transition-all cursor-pointer min-w-[100px]"
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
                          <span className="text-sm md:text-base text-dark-300 font-medium group-hover:text-accent-blue transition-colors text-center">
                            {skill}
                          </span>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </ParallaxLayer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
