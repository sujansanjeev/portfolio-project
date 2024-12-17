// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import snu from '../assets/snu.png';
// import mlm from '../assets/mlm.jpg';

// const Education = () => {
  
//   const [inView, setInView] = useState(false);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.4, 
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, x: -50 }, 
//     visible: {
//       opacity: 1,
//       x: 0, 
//       transition: { type: 'spring', stiffness: 100, damping: 30 },
//     },
//   };

 
//   const lineVariants = {
//     hidden: { height: 0 },
//     visible: { height: '100%', transition: { duration: 3, ease: 'easeInOut' } }, 
//   };

  
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0];
//         if (entry.isIntersecting) {
//           setInView(true);
//         }
//       },
//       { threshold: 0.5 } // Trigger when 50% of the section is in view
//     );

//     const container = document.getElementById('education');
//     if (container) {
//       observer.observe(container);
//     }

//     return () => {
//       if (container) {
//         observer.unobserve(container);
//       }
//     };
//   }, []);

//   return (
//     <section id="education" className="py-20">
//       <div className="container mx-auto px-4">
//         {/* Title always visible */}
//         <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Education</h2>

//         {/* Container with staggered children animation */}
//         <motion.div
//           className="relative"
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? 'visible' : 'hidden'} // Animate when in viewport
//         >
//           {/* Timeline Line on the left */}
//           <motion.div
//             className="absolute left-0 top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
//             variants={lineVariants}
//             style={{ transform: 'translateX(-50%)' }}
//           ></motion.div>

//           {/* University Education */}
//           <motion.div
//             className="flex items-center justify-start bg-white shadow-md rounded-lg p-6 mb-8 relative z-10"
//             variants={itemVariants}
//             style={{ marginLeft: '2rem' }} // Adding left margin for the branch effect
//           >
//             <img
//               src={snu} // Placeholder for logo
//               alt="Shiv Nadar University Logo"
//               className="w-auto h-12 rounded-full mr-6"
//             />
//             <div>
//               <h4 className="font-bold text-2xl mb-2 text-gray-900">Shiv Nadar University, Chennai</h4>
//               <p className="text-lg text-gray-700 mb-2">B.Tech. in Computer Science and Engineering - Internet of Things</p>
//               <div className="flex justify-between text-gray-600">
//                 <span>2021 - 2025 (Expected)</span>
//                 <span>CGPA: 8.0/10.0</span>
//               </div>
//             </div>
//           </motion.div>

//           {/* 12th Grade */}
//           <motion.div
//             className="flex items-center justify-start bg-white shadow-md rounded-lg p-6 mb-8 relative z-10"
//             variants={itemVariants}
//             style={{ marginLeft: '2rem' }} // Adding left margin for the branch effect
//           >
//             <img
//               src={mlm} // Placeholder for logo
//               alt="MLM Mamallan School Logo"
//               className="w-auto h-20 rounded-full mr-6"
//             />
//             <div>
//               <h4 className="font-bold text-2xl mb-2 text-gray-900">M.L.M Mamallan Matriculation Higher Secondary School</h4>
//               <p className="text-lg text-gray-700 mb-2">12th Grade, Tamil Nadu State Board</p>
//               <div className="flex justify-between text-gray-600">
//                 <span>2021</span>
//                 <span>Percentage: 92%</span>
//               </div>
//             </div>
//           </motion.div>

//           {/* 10th Grade */}
//           <motion.div
//             className="flex items-center justify-start bg-white shadow-md rounded-lg p-6 mb-8 relative z-10"
//             variants={itemVariants}
//             style={{ marginLeft: '2rem' }} // Adding left margin for the branch effect
//           >
//             <img
//               src={mlm} // Placeholder for logo
//               alt="MLM Mamallan School Logo"
//               className="w-auto h-20 rounded-full mr-6"
//             />
//             <div>
//               <h4 className="font-bold text-2xl mb-2 text-gray-900">M.L.M Mamallan Matriculation Higher Secondary School</h4>
//               <p className="text-lg text-gray-700 mb-2">10th Grade, Tamil Nadu State Board</p>
//               <div className="flex justify-between text-gray-600">
//                 <span>2019</span>
//                 <span>Percentage: 90%</span>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Education;


import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import snu from '../assets/snu.png';
import mlm from '../assets/mlm.jpg';

const Education = () => {
  const [inView, setInView] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 100, damping: 30 },
    },
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: { height: '100%', transition: { duration: 3, ease: 'easeInOut' } },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    const container = document.getElementById('education');
    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        {/* Title always visible */}
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Education</h2>

        {/* Container with staggered children animation */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Timeline Line on the left */}
          <motion.div
            className="absolute left-0 top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
            variants={lineVariants}
            style={{ transform: 'translateX(-50%)' }}
          ></motion.div>

          {/* University Education */}
          <motion.div
            className="flex items-center justify-start bg-white shadow-md rounded-lg p-6 mb-8 relative z-10"
            variants={itemVariants}
            style={{ marginLeft: '2rem' }}
            whileHover={{
              scale: 1.05, // Slightly scale up the container on hover
              backgroundColor: 'linear-gradient(to right, #ff7e5f, #feb47b)', // Light gradient on hover
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <img
              src={snu}
              alt="Shiv Nadar University Logo"
              className="w-auto h-12 rounded-full mr-6"
            />
            <div>
              <h4 className="font-bold text-2xl mb-2 text-gray-900">Shiv Nadar University, Chennai</h4>
              <p className="text-lg text-gray-700 mb-2">B.Tech. in Computer Science and Engineering - Internet of Things</p>
              <div className="flex justify-between text-gray-600">
                <span>2021 - 2025 (Expected)</span>
                <span>CGPA: 8.0/10.0</span>
              </div>
            </div>
          </motion.div>

          {/* 12th Grade */}
          <motion.div
            className="flex items-center justify-start bg-white shadow-md rounded-lg p-6 mb-8 relative z-10"
            variants={itemVariants}
            style={{ marginLeft: '2rem' }}
            whileHover={{
              scale: 1.05,
              backgroundColor: 'linear-gradient(to right, #ff7e5f, #feb47b)',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <img
              src={mlm}
              alt="MLM Mamallan School Logo"
              className="w-auto h-20 rounded-full mr-6"
            />
            <div>
              <h4 className="font-bold text-2xl mb-2 text-gray-900">M.L.M Mamallan Matriculation Higher Secondary School</h4>
              <p className="text-lg text-gray-700 mb-2">12th Grade, Tamil Nadu State Board</p>
              <div className="flex justify-between text-gray-600">
                <span>2021</span>
                <span>Percentage: 92%</span>
              </div>
            </div>
          </motion.div>

          {/* 10th Grade */}
          <motion.div
            className="flex items-center justify-start bg-white shadow-md rounded-lg p-6 mb-8 relative z-10"
            variants={itemVariants}
            style={{ marginLeft: '2rem' }}
            whileHover={{
              scale: 1.05,
              backgroundColor: 'linear-gradient(to right, #ff7e5f, #feb47b)',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <img
              src={mlm}
              alt="MLM Mamallan School Logo"
              className="w-auto h-20 rounded-full mr-6"
            />
            <div>
              <h4 className="font-bold text-2xl mb-2 text-gray-900">M.L.M Mamallan Matriculation Higher Secondary School</h4>
              <p className="text-lg text-gray-700 mb-2">10th Grade, Tamil Nadu State Board</p>
              <div className="flex justify-between text-gray-600">
                <span>2019</span>
                <span>Percentage: 90%</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
