import React from 'react';

const Home = () => {
  return (
    <section id="home" className="pt-20 bg-blue-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Hi, I'm <span className="text-blue-600">Sujan Sanjeev </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Full Stack Developer | Tech Enthusiast | Linux Freak
        </p>
        <button
          onClick={() => (window.location.href = '/contact')}
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default Home;





