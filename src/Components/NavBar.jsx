import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Navbar = ({ handleScroll }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { label: "About", section: "about" },
    { label: "Education", section: "education" },
    { label: "Skills", section: "skills" },
    { label: "Experience", section: "experience" },
    { label: "Projects", section: "projects" },
    { label: "Contact", section: "contact" },
  ];

  
  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    navItems.forEach((item) => {
      const section = document.getElementById(item.section);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (section) => {
    handleScroll(section);
    setActiveSection(section);
    setIsMenuOpen(false); 
  };

  return (
    <>
      {/* Navbar */}
      <nav className=" h-auto m-3 fixed left-1/2 transform -translate-x-1/2 w-[85%] bg-white/70 backdrop-blur-md z-50 shadow-md rounded-full">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center relative">
          {/* Logo */}
          <div
            onClick={() => handleNavClick("home")}
            className="cursor-pointer transform transition-transform hover:scale-105"
          >
            <img src={logo} alt="logo" className="h-12 w-auto" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="z-[60] md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center items-center space-x-3 rounded-3xl  border-black border mx-3 text-sm">
            {navItems.map((item) => (
              <div
                key={item.section}
                onClick={() => handleNavClick(item.section)}
                className={`
                  relative px-3 py-2 rounded-md transition-all duration-300 cursor-pointer 
                  ${
                    activeSection === item.section
                      ? "bg-black text-white scale-80 rounded-3xl"
                      : "hover:bg-gray-300 hover:scale-80 rounded-3xl"
                  }
                `}
              >
                <span className="font-medium">{item.label}</span>
                {activeSection === item.section && (
                  <span className="absolute bottom-0 left-0 w-full h-1 transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`
      fixed inset-0 z-[60] md:hidden
      bg-white/90 backdrop-blur-lg
      transition-transform duration-500 ease-in-out
    `}
        >
          <div className="flex flex-col h-full justify-center items-center px-6 space-y-6">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleNavClick(item.section)}
                className={`
            text-2xl font-semibold text-center py-3 w-full
            transition-all duration-300
            ${
              activeSection === item.section
                ? "text-black scale-105"
                : "text-gray-700 hover:text-blue-500"
            }
          `}
              >
                {item.label}
                {activeSection === item.section && (
                  <div className="w-full h-1 bg-black mt-2" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;



