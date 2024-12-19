import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/me.jpg";

const About = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const rect = aboutSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && !hasAnimated) {
        setHasAnimated(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimated]);

  const fadeInEffect = {
    opacity: hasAnimated ? 1 : 0,
    y: hasAnimated ? 0 : 50,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 25,
      delay: 0.2,
    },
  };

  return (
    <section id="about" className="py-16 bg-white bg-opacity-5">
      <div className="container mx-auto px-4 text-gray-800">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <motion.img
            src={profileImage}
            alt="Profile"
            className="w-60 h-60 md:w-80 md:h-80 rounded-lg object-cover shadow-lg border-2 border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            animate={fadeInEffect}
          />

          {/* Description Section */}
          <motion.div
            className="lg:w-2/3 p-6 bg-white rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-purple-50"
            initial={{ opacity: 0, y: 50 }}
            animate={fadeInEffect}
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center lg:text-left">
              I'm a final-year Computer Science student passionate about
              Internet of Things (IoT) technology. I thrive on solving problems
              and exploring new technologies. My focus lies in bridging
              theoretical knowledge with practical applications. I specialize in
              software development, IoT solutions, and cybersecurity, and I aim
              to create impactful innovations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
