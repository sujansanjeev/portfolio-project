import React, { useState, useEffect } from "react";

const Home = () => {
  const designations = [
    "Full Stack Developer",
    "Tech Enthusiast",
    "Linux Freak",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % designations.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section
      id="home"
      className="pt-20 bg-blend-screen min-h-screen flex items-center"
      style={{ fontFamily: "Quantico, sans-serif" }}
    >
      <div className="container mx-auto px-4 text-center my-24">
        <h1 className="text-7xl font-bold text-gray-800 mb-4">
          Hi, I'm <span className="text-blue-600">Sujan Sanjeev </span>
        </h1>

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
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default Home;
