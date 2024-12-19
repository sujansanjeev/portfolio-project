import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import landingImage from "../assets/welcome2.png";

const Home = () => {
  const designations = [
    "<Full Stack Developer/>",
    "Tech Enthusiast 🖥️",
    "Linux Freak 🐧",
    "Music Artist 🎵",
  ];

  const name = "Hi, I'm Sujan Sanjeev";

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

  const tiltEffect = {
    rotateX: (mousePosition.y - window.innerHeight / 2) / 40,
    rotateY: (mousePosition.x - window.innerWidth / 2) / 40,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  };

  const bounceEffect = {
    y: ["0", "-10px", "0"],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 2,
    },
  };

  return (
    <section
      id="home"
      className={`pt-20 min-h-screen flex items-center bg-blend-screen transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ fontFamily: "poppins, sans-serif" }}
    >
      <div className="container mx-auto px-4 text-center my-24">
        {/* Animated text with a gentle up and down effect */}
        <motion.h1
          className="text-5xl lg:text-7xl font-bold mb-4"
          style={{
            display: "inline-block",
            marginBottom: "1rem",
          }}
          animate={bounceEffect}
        >
          <span className="text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text">
            {name}
          </span>
        </motion.h1>

        {/* Image with tilt effect */}
        <motion.div
          className="mx-auto mb-8"
          style={{ perspective: 1000 }}
          animate={tiltEffect}
        >
          <div className="w-96 h-96 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden mx-auto">
            <img
              src={landingImage}
              alt="Sujan"
              className="w-full h-full object-fit"
            />
          </div>
        </motion.div>

        {/* Designation with fade effect */}
        <p
          className={`text-3xl lg:text-4xl text-gray-600 mb-8 transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {designations[currentIndex]}
        </p>

        {/* Button */}
        <a
          href="#contact"
          className="bg-white text-black px-8 py-4 lg:px-10 lg:py-5 shadow-lg hover:bg-black hover:text-white transition border-2 border-black rounded-3xl"
        >
          Get Connected
        </a>
      </div>
    </section>
  );
};

export default Home;