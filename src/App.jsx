import { useState, useEffect } from 'react';
import Navbar from './Components/NavBar';
import About from './Components/About';
import Home from './Components/Home';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import ContactMe from './Components/ContactMe';
import Experience from './Components/Experience';
import Certifications from './Components/certifications';
import ParticleBackground from './Components/ParticleBackground';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { FaArrowUp } from 'react-icons/fa';
import './App.css';

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
      if (homeSection && window.scrollY > homeSection.clientHeight / 2) {
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
    <>
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar handleScroll={handleScroll} />

        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="certifications">
          <Certifications />
        </section>

        <section id="contact">
          <ContactMe />
        </section>
      </div>

      <div
        onClick={scrollToHome}
        className={`fixed bottom-6 right-6 p-3 rounded-full cursor-pointer transition-all duration-500 shadow-lg z-50 ${
          showArrow
            ? 'opacity-100 translate-y-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white'
            : 'opacity-0 translate-y-5 pointer-events-none'
        } hover:shadow-xl`}
      >
        <FaArrowUp className="text-lg" />
      </div>
    </>
  );
};

export default App;