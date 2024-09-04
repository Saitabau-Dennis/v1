import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "React",
    "Node.js",
    "HTML/CSS",
    "Tailwind CSS",
    "PostgresSQL",
    "MySQL",
  ];

  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-16 leading-tight"
        >
          About
          <span className="block text-gray-500">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="text-l space-y-6">
              <p>
                Hello! I'm Dennis, a web developer passionate about creating
                digital experiences that live on the internet. My journey in web
                development began with a curiosity to understand how websites
                work, and it has evolved into a professional pursuit of crafting
                innovative and user-friendly web solutions.
              </p>
              <p>
                With a background in both front-end and back-end technologies, I
                bring a holistic approach to every project. I thrive on
                challenges and am always excited to embrace new technologies
                that can enhance my craft.
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
            </div>

            <ul className="grid grid-cols-2 gap-2 mt-6">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="text-lg flex items-center before:content-['▹'] before:text-blue-400 before:mr-2"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-64 h-64 mx-auto md:mx-0">
              <div className="absolute inset-0 border-2 border-white rounded translate-x-5 translate-y-5"></div>
              <img
                src="./src/assets/saita.jpg"
                alt="Dennis Saitabau"
                className="relative z-10 w-full h-full object-cover rounded transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
