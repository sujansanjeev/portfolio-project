// import React from 'react';
// import { motion } from 'framer-motion';
// import StackIcon from 'tech-stack-icons';
// import langchainLogo from '../assets/lang.png';
// import hug from '../assets/hug.png';
// import llama from '../assets/llama.png';
// import arch from '../assets/arch.png';

// const Skills = () => {
//   const technicalSkills = [
//     {
//       topic: 'Programming Languages',
//       skills: [
//         { name: 'Python', icon: 'python' },
//         { name: 'SQL', icon: 'mysql' },
//         { name: 'Java', icon: 'java' },
//       ],
//     },
//     {
//       topic: 'Web Technologies',
//       skills: [
//         {name:'html', icon: 'html5'},
//         { name :'css', icon: 'css3'},
//         { name: 'JavaScript', icon: 'js' },
//         { name :'bootstrap', icon: 'bootstrap5'},
//         { name: 'ReactJS', icon: 'reactjs' },
//         { name: 'AngularJS', icon: 'angular' },
//         { name: 'NodeJS', icon: 'nodejs' },
//         { name: 'Flask', icon: 'flask' },
//         { name: 'Tailwind CSS', icon: 'tailwindcss' },
//         { name: 'figma', icon: 'figma' },
//         { name: 'materialui', icon: 'materialui' },
//       ],
//     },
//     {
//       topic: 'DL Frameworks',
//       skills: [
//         { name: 'LangChain', customIcon: langchainLogo },
//         { name: 'Hugging Face', customIcon: hug },
//         { name: 'LLaMA', customIcon: llama },
//       ],
//     },
//     {
//       topic: 'DevOps',
//       skills: [
//         { name: 'Git', icon: 'git' },
//         { name: 'Docker', icon: 'docker' },
//         { name: 'Azure', icon: 'azure' },
//         { name: 'Amazon AWS', icon: 'aws' },
//       ],
//     },
//     {
//       topic: 'Tools',
//       skills: [
//         { name: 'VS Code', icon: 'vscode' },
//         { name: 'arch linux', customIcon: arch },
//         { name: 'kitty', icon: 'hyper' },
//         { name: 'firefox', icon: 'firefox' }]
//     }
//   ];

//   return (
//     <section id="skills" className="py-12 bg-transparent">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <motion.h2
//           className="text-4xl font-bold text-center mb-8 text-gray-800"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Skills
//         </motion.h2>

//         {/* Horizontal Skill Categories */}
//         {technicalSkills.map((skillCategory) => (
//           <div key={skillCategory.topic} className="mb-12">
//             {/* Category Title */}
//             <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
//               {skillCategory.topic}
//             </h3>

//             {/* Skills in Horizontal Layout */}
//             <div className="flex justify-center flex-wrap gap-8">
//               {skillCategory.skills.map((skill) => (
//                 <motion.div
//                   key={skill.name}
//                   className="flex flex-col items-center text-center"
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ type: 'spring', stiffness: 100, damping: 10 }}
//                 >
//                   {/* Transparent Icon Container */}
//                   <div
//                     className="flex items-center justify-center w-24 h-24 rounded-full shadow-lg"
//                     style={{
//                       backgroundColor: 'rgba(255, 255, 255, 0.2)',
//                       backdropFilter: 'blur(8px)',
//                     }}
//                   >
//                     {skill.icon ? (
//                       <StackIcon
//                         name={skill.icon}
//                         width="48px"
//                         height="48px"
//                         className="text-blue-600"
//                       />
//                     ) : skill.customIcon ? (
//                       <img
//                         src={skill.customIcon}
//                         alt={skill.name}
//                         className="w-12 h-12"
//                       />
//                     ) : (
//                       <span className="text-gray-800 font-bold text-xl">
//                         {skill.name[0]}
//                       </span>
//                     )}
//                   </div>
//                   {/* Skill Name */}
//                   <p className="mt-2 text-sm text-gray-800 font-medium">
//                     {skill.name}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;


import React from 'react';
import { motion } from 'framer-motion';
import StackIcon from 'tech-stack-icons';
import langchainLogo from '../assets/lang.png';
import hug from '../assets/hug.png';
import llama from '../assets/llama.png';
import arch from '../assets/arch.png';

const Skills = () => {
  const technicalSkills = [
    {
      topic: 'Programming Languages',
      skills: [
        { name: 'Python', icon: 'python' },
        { name: 'SQL', icon: 'mysql' },
        { name: 'Java', icon: 'java' },
      ],
    },
    {
      topic: 'Web Technologies',
      skills: [
        { name: 'html', icon: 'html5' },
        { name: 'css', icon: 'css3' },
        { name: 'JavaScript', icon: 'js' },
        { name: 'bootstrap', icon: 'bootstrap5' },
        { name: 'ReactJS', icon: 'reactjs' },
        { name: 'AngularJS', icon: 'angular' },
        { name: 'NodeJS', icon: 'nodejs' },
        { name: 'Flask', icon: 'flask' },
        { name: 'Tailwind CSS', icon: 'tailwindcss' },
        { name: 'figma', icon: 'figma' },
        { name: 'materialui', icon: 'materialui' },
      ],
    },
    {
      topic: 'DL Frameworks',
      skills: [
        { name: 'LangChain', customIcon: langchainLogo },
        { name: 'Hugging Face', customIcon: hug },
        { name: 'LLaMA', customIcon: llama },
      ],
    },
    {
      topic: 'DevOps',
      skills: [
        { name: 'Git', icon: 'git' },
        { name: 'Docker', icon: 'docker' },
        { name: 'Azure', icon: 'azure' },
        { name: 'Amazon AWS', icon: 'aws' },
      ],
    },
    {
      topic: 'Tools',
      skills: [
        { name: 'VS Code', icon: 'vscode' },
        { name: 'arch linux', customIcon: arch },
        { name: 'kitty', icon: 'hyper' },
        { name: 'firefox', icon: 'firefox' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-12 bg-transparent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.h2
          className="text-4xl font-bold text-center mb-8 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>

        {/* Horizontal Skill Categories */}
        {technicalSkills.map((skillCategory) => (
          <motion.div
            key={skillCategory.topic}
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Category Title */}
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
              {skillCategory.topic}
            </h3>

            {/* Skills in Horizontal Layout */}
            <div className="flex justify-center flex-wrap gap-6">
              {skillCategory.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center text-center"
                  whileInView={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 10 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {/* Transparent Icon Container */}
                  <div
                    className="flex items-center justify-center w-16 h-16 rounded-full shadow-lg"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    {skill.icon ? (
                      <StackIcon
                        name={skill.icon}
                        width="36px"
                        height="36px"
                        className="text-blue-600"
                      />
                    ) : skill.customIcon ? (
                      <img
                        src={skill.customIcon}
                        alt={skill.name}
                        className="w-8 h-8"
                      />
                    ) : (
                      <span className="text-gray-800 font-bold text-xl">
                        {skill.name[0]}
                      </span>
                    )}
                  </div>
                  {/* Skill Name */}
                  <p className="mt-2 text-sm text-gray-800 font-medium">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
