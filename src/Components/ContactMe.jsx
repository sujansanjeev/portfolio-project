import React from 'react';

const ContactMe = () => {
  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Contact Me</h2>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 border rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 mb-4 border rounded-lg"
          ></textarea>
          <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
