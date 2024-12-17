import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/me.jpg";

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === descriptionRef.current && entry.isIntersecting) {
          setIsVisible(true);
        }
        if (entry.target === imageRef.current && entry.isIntersecting) {
          setIsImageVisible(true);
        }
      });
    }, options);

    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (descriptionRef.current) observer.unobserve(descriptionRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible && isImageVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, isImageVisible]);

  const fadeInEffect = {
    opacity: hasAnimated ? 1 : 0,
    y: hasAnimated ? 0 : 50,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 25,
      delay: 0.3,
    },
  };

  return (
    <section id="about" className="py-20 bg-white bg-opacity-5">
      <div className="container mx-auto px-4 text-gray-800">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
          {/* Image Section */}
          <motion.div
            ref={imageRef}
            className="md:w-1/3 mb-8 md:mr-8"
            style={{ perspective: 1000 }}
            initial={{ opacity: 0, y: 50 }} // Initially invisible
            animate={fadeInEffect}
          >
            <img
              src={profileImage}
              alt="Profile"
              className="w-80 h-80 rounded-lg object-cover shadow-lg mx-auto border-2 border-gray-200"
            />
          </motion.div>

          {/* Description Section */}
          <motion.div
            ref={descriptionRef}
            className="md:w-3/4 p-8 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-purple-50 hover:md:w-5/6 flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }} // Initially invisible
            animate={fadeInEffect}
            style={{
              minHeight: "24rem", // Ensure stable height
              display: "flex",
              alignItems: "center",
            }}
          >
            <p className="text-lg text-gray-700 mb-6 text-center">
              I'm a final-year Computer Science student with a deep passion for
              Internet of Things (IoT) technology. I enjoy solving problems and
              am always eager to explore new technologies. I focus on bringing
              theoretical knowledge to life through practical applications. My
              expertise extends to software development, IoT solutions, and
              cybersecurity, and I'm excited about opportunities to create
              meaningful innovations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
