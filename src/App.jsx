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
import bg from './assets/bg1.jpg';
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
    <div style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundAttachment: 'fixed', 
      minHeight: '100vh',
      position: 'relative',
      zIndex: 0
    }}>
      <Navbar handleScroll={handleScroll} />
      
      <div style={{ position: 'relative', zIndex: 10 }}>
        <section id="home" className="h-screen bg-transparent">
          <Home />
        </section>
        <section id="about" className="h-auto bg-transparent">
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
    </div>
  );
};

export default App;
