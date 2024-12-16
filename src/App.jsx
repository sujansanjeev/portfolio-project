// import React, { useState, useEffect } from 'react';
// import Navbar from './Components/NavBar';
// import About from './Components/About';
// import Home from './Components/Home';
// import Education from './Components/Education';
// import Skills from './Components/Skills';
// import Projects from './Components/Projects';
// import ContactMe from './Components/ContactMe';
// import Experience from './Components/Experience';
// import { gsap } from 'gsap';
// import bg from './assets/bg.jpg';
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
// import { FaArrowUp } from 'react-icons/fa'; // FontAwesome arrow icon
// import "./App.css";

// gsap.registerPlugin(ScrollToPlugin);

// const App = () => {
//   const [showArrow, setShowArrow] = useState(false);

//   const handleScroll = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       gsap.to(window, {
//         duration: 1,
//         scrollTo: section,
//         ease: 'power2.out',
//       });
//     }
//   };

//   useEffect(() => {
//     const handleScrollEvent = () => {
//       const homeSection = document.getElementById('home');
//       if (window.scrollY > homeSection.clientHeight) {
//         setShowArrow(true);
//       } else {
//         setShowArrow(false);
//       }
//     };

//     window.addEventListener('scroll', handleScrollEvent);
//     return () => {
//       window.removeEventListener('scroll', handleScrollEvent);
//     };
//   }, []);

//   const scrollToHome = () => {
//     handleScroll('home');
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: `url(${bg})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed',
//         minHeight: '100vh',
//         position: 'relative',
//         zIndex: 0,
//       }}
//     >
//       <Navbar handleScroll={handleScroll} />

//       <div style={{ position: 'relative', zIndex: 10 }}>
//         <section id="home" className="h-screen bg-transparent">
//           <Home />
//         </section>
//         <section id="about" className="h-screen bg-transparent">
//           <About />
//         </section>
//         <section id="education" className="h-auto bg-transparent">
//           <Education />
//         </section>
//         <section id="skills" className="h-auto bg-transparent">
//           <Skills />
//         </section>
//         <section id="experience" className="h-auto bg-transparent">
//           <Experience />
//         </section>
//         <section id="projects" className="h-auto bg-transparent">
//           <Projects />
//         </section>
//         <section id="contact" className="h-auto bg-transparent">
//           <ContactMe />
//         </section>
//       </div>

//       {/* Scroll to top arrow */}
//       {showArrow && (
//         <div
//           onClick={scrollToHome}
//           style={{
//             position: 'fixed',
//             bottom: '20px',
//             right: '20px',
//             backgroundColor: '#333',
//             borderRadius: '50%',
//             padding: '10px',
//             cursor: 'pointer',
//             zIndex: 100,
//           }}
//         >
//           <FaArrowUp style={{ color: 'white', fontSize: '20px' }} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;



import React, { useState, useEffect } from 'react';
import Navbar from './Components/NavBar';
import About from './Components/About';
import Home from './Components/Home';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import ContactMe from './Components/ContactMe';
import Experience from './Components/Experience';
import { gsap } from 'gsap';
import bg from './assets/bg.jpg';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { FaArrowUp } from 'react-icons/fa'; // FontAwesome arrow icon
import "./App.css";

gsap.registerPlugin(ScrollToPlugin);

const App = () => {
  const [showArrow, setShowArrow] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      gsap.to(window, {
        duration: 1,
        scrollTo: section,
        ease: 'power2.out',
      });
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      const homeSection = document.getElementById('home');
      if (window.scrollY > homeSection.clientHeight) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  const scrollToHome = () => {
    handleScroll('home');
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        position: 'relative',
        zIndex: 0,
      }}
    >
      <Navbar handleScroll={handleScroll} />

      <div style={{ position: 'relative', zIndex: 10 }}>
        <section id="home" className="h-screen bg-transparent">
          <Home />
        </section>
        <section id="about" className="h-screen bg-transparent">
          <About />
        </section>
        <section id="education" className="h-auto bg-transparent">
          <Education />
        </section>
        <section id="skills" className="h-auto bg-transparent">
          <Skills />
        </section>
        <section id="experience" className="h-auto bg-transparent">
          <Experience />
        </section>
        <section id="projects" className="h-auto bg-transparent">
          <Projects />
        </section>
        <section id="contact" className="h-auto bg-transparent">
          <ContactMe />
        </section>
      </div>

      {/* Scroll to top arrow */}
      <div
        onClick={scrollToHome}
        className={`fixed bottom-5 right-5 bg-gray-800 text-white p-3 rounded-full cursor-pointer transition-all duration-500 ease-in-out transform ${
          showArrow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        } hover:bg-gray-600 z-50`} 
      >
        <FaArrowUp className="text-white text-xl" />
      </div>
    </div>
  );
};

export default App;
