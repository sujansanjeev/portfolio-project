import React from 'react';
import Navbar from './Components/NavBar';
import About from './Components/About';
import Home from './Components/Home';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import ContactMe from './Components/ContactMe';
import Experience from './Components/Experience';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const App = () => {
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

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar handleScroll={handleScroll} />
     
      <section id="home" className="h-screen bg-blue-50">
        <Home />
      </section>
      <section id="about" className="h-screen bg-white">
        <About />
      </section>
      <section id="education" className="h-screen bg-gray-200">
        <Education />
      </section>
      <section id="skills" className="h-screen bg-blue-100">
        <Skills />
      </section>
      <section id="experience" className="h-screen bg-white">
        <Experience />
      </section>
      <section id="projects" className="h-screen bg-white">
        <Projects />
      </section>
      <section id="contact" className="h-screen bg-gray-100">
        <ContactMe />
      </section>
    </div>
  );
};

export default App;