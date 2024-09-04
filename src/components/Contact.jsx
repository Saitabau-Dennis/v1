import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-3xl font-bold mb-4 leading-tight">
           Let's Connect
          </h2>
          <p className="text-l text-gray-400 mb-8 max-w-2xl mx-auto">
          Have a project in mind or just want to chat? I'm always excited to collaborate on new ideas!
          </p>
          <motion.a
            href="mailto:your.email@example.com"
            className="inline-block border-2 border-white py-4 px-8 rounded-md text-lg font-semibold hover:bg-white hover:text-black transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Say Hello
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
