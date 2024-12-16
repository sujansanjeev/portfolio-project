import React from 'react';

const Home = () => {
  return (
    <section id="home" className="pt-20 bg-blend-screen min-h-screen flex items-center">
      <div className="container mx-auto px-4 text-center my-24">
        <h1 className="text-7xl font-bold text-gray-800 mb-4">
          Hi, I'm <span className="text-blue-600">Sujan Sanjeev </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Full Stack Developer | Tech Enthusiast | Linux Freak
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





