import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import landingImage from "../assets/welcome1.jpg"; 

const Home = () => {
  const designations = [
    "<Full Stack Developer/>",
    "Tech Enthusiast 🖥️",
    "Linux Freak 🐧",
    "Music Artist 🎵",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % designations.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Subtle tilt effect (rotation) based on mouse position
  const tiltEffect = {
    rotateX: (mousePosition.y - window.innerHeight / 2) / 40, // Rotate based on Y-axis
    rotateY: (mousePosition.x - window.innerWidth / 2) / 40, // Rotate based on X-axis
    transition: { type: "spring", stiffness: 300, damping: 20 },
  };

  return (
    <section
      id="home"
      className={`pt-20 min-h-screen flex items-center bg-blend-screen transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ fontFamily: "Quantico, sans-serif" }}
    >
      <div className="container mx-auto px-4 text-center my-24">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text">
            Hi, I'm Sujan Sanjeev
          </span>
        </h1>

        {/* Circular Image with subtle tilt effect */}
        <motion.div
          className="mx-auto mb-8"
          style={{ perspective: 1000 }}
          animate={tiltEffect}
        >
          <img
            src={landingImage}
            alt="Sujan"
            className="w-auto h-80 rounded-full mx-auto shadow-lg"
          />
        </motion.div>

        <p
          className={`text-3xl text-gray-600 mb-8 transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {designations[currentIndex]}
        </p>

        <a
          href="#contact"
          className="bg-white text-black px-6 py-3 shadow-lg hover:bg-black hover:text-white transition border-2 border-black rounded-3xl"
        >
          Get Connected
        </a>
      </div>
    </section>
  );
};

export default Home;



