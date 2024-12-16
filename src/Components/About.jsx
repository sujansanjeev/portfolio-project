import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mr-8">
            {/* Remove Profile Image */}
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-600 mb-6">
              Results-driven final-year Computer Science student specializing in Internet of Things (IoT). Passionate about bridging theoretical knowledge with practical applications. Seeking opportunities to contribute problem-solving skills and technical expertise in software development, IoT solutions, and cybersecurity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
