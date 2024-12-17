import React from 'react';
import { motion } from 'framer-motion';

const ContactMe = () => {
  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          Contact Me
        </motion.h2>

        {/* Contact Button */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <a
            href="mailto:sujan21110114@snuchennai.edu.in"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition-all duration-300"
          >
            Send me an email
          </a>
        </motion.div>

        {/* Footer */}
        <footer className=" text-black py-6 mt-12">
          <div className="container mx-auto text-center">
            <p className="text-lg">Feel free to reach out for collaboration or inquiries.</p>
            <p className="text-sm mt-2">© {new Date().getFullYear()} Sujan Sanjeev D</p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ContactMe;
