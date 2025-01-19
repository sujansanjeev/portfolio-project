import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const designations = [
    "<Full Stack Developer/>",
    "Gen A.I. Enthusiast 🤖",
    "Tech Enthusiast 🖥️",
    "Linux Freak 🐧",
    "Music Artist 🎵",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % designations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Add smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-transparent relative overflow-hidden px-4 sm:px-4 md:px-12"
    >
      <motion.div
        className="container mx-auto flex flex-col items-center justify-center text-center max-w-5xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="space-y-8 w-full" variants={itemVariants}>
          <motion.h1
            className="text-5xl sm:text-5xl lg:text-8xl font-extrabold leading-tight px-2"
            variants={itemVariants}
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text block mt-4 sm:inline">
              Sujan Sanjeev
            </span>
          </motion.h1>

          <motion.div 
            className="relative h-16 mt-6 sm:mt-0" 
            variants={itemVariants}
          >
            <motion.p
              className="text-2xl sm:text-2xl lg:text-3xl text-gray-600 absolute left-0 right-0 px-4 font-semibold"
              key={currentIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {designations[currentIndex]}
            </motion.p>
          </motion.div>

          <motion.p
            className="text-gray-600 text-lg sm:text-base lg:text-lg mx-auto max-w-2xl px-4 sm:px-0 font-medium"
            variants={itemVariants}
          >
            Passionate about creating innovative solutions and pushing the
            boundaries of technology. Let's build something amazing together.
          </motion.p>

          <motion.div
            className="flex flex-row gap-4 justify-center items-center w-full px-4 sm:px-0"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="bg-black text-white px-4 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all flex-1 sm:flex-none text-center text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Connected
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('about')}
              className="bg-white text-black px-4 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all border-2 border-black flex-1 sm:flex-none text-center text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              More
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const Home = () => {
//   const designations = [
//     "<Full Stack Developer/>",
//     "Gen A.I. Enthusiast 🤖",
//     "Tech Enthusiast 🖥️",
//     "Linux Freak 🐧",
//     "Music Artist 🎵",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isMobile, setIsMobile] = useState(false);

//   // Check if device is mobile
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
    
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   // Handle mouse movement
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     if (!isMobile) {
//       window.addEventListener('mousemove', handleMouseMove);
//       return () => window.removeEventListener('mousemove', handleMouseMove);
//     }
//   }, [isMobile]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % designations.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.3, delayChildren: 0.2 },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center bg-transparent relative overflow-hidden px-4 sm:px-4 md:px-12"
//     >
//       {!isMobile && (
//         <motion.div
//           className="pointer-events-none fixed inset-0 z-30"
//           style={{
//             background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
//           }}
//         />
//       )}
      
//       <motion.div
//         className="container mx-auto flex flex-col items-center justify-center text-center max-w-5xl"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         <motion.div className="space-y-8 w-full" variants={itemVariants}>
//           <motion.h1
//             className="text-5xl sm:text-5xl lg:text-8xl font-extrabold leading-tight px-2"
//             variants={itemVariants}
//           >
//             Hi, I'm{" "}
//             <span className="text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text block mt-4 sm:inline">
//               Sujan Sanjeev
//             </span>
//           </motion.h1>

//           <motion.div 
//             className="relative h-16 mt-6 sm:mt-0" 
//             variants={itemVariants}
//           >
//             <motion.p
//               className="text-2xl sm:text-2xl lg:text-3xl text-gray-600 absolute left-0 right-0 px-4 font-semibold"
//               key={currentIndex}
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: -20, opacity: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               {designations[currentIndex]}
//             </motion.p>
//           </motion.div>

//           <motion.p
//             className="text-gray-600 text-lg sm:text-base lg:text-lg mx-auto max-w-2xl px-4 sm:px-0 font-medium"
//             variants={itemVariants}
//           >
//             Passionate about creating innovative solutions and pushing the
//             boundaries of technology. Let's build something amazing together.
//           </motion.p>

//           <motion.div
//             className="flex flex-row gap-4 justify-center items-center w-full px-4 sm:px-0"
//             variants={itemVariants}
//           >
//             <motion.button
//               onClick={() => scrollToSection('contact')}
//               className="bg-black text-white px-4 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all flex-1 sm:flex-none text-center text-sm sm:text-base"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Get Connected
//             </motion.button>
//             <motion.button
//               onClick={() => scrollToSection('about')}
//               className="bg-white text-black px-4 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all border-2 border-black flex-1 sm:flex-none text-center text-sm sm:text-base"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               More
//             </motion.button>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Home;