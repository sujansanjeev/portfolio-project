import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { FaArrowUp } from 'react-icons/fa';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import './App.css';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showArrow, setShowArrow] = useState(false);
  const lenisRef = useRef(null);

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section && lenisRef.current) {
      lenisRef.current.scrollTo(section, {
        offset: 0,
        duration: 1.5,
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

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      <ParticleBackground />
      
      <div className="relative z-10">
        <Navbar handleScroll={handleScroll} />

        <section id="home">
          <Hero isLoading={isLoading} />
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
          <Contact />
        </section>
      </div>

      <div
        onClick={scrollToHome}
        className={`fixed bottom-6 right-6 p-3 rounded-full cursor-pointer transition-all duration-500 shadow-lg z-50 ${
          showArrow
            ? 'opacity-100 translate-y-0 bg-accent-blue text-white shadow-accent-blue/30'
            : 'opacity-0 translate-y-5 pointer-events-none'
        } hover:shadow-xl hover:scale-110`}
      >
        <FaArrowUp className="text-lg" />
      </div>
    </>
  );
};

export default App;
