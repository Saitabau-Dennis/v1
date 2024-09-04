import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Innovative Web App',
      description: 'A cutting-edge application pushing the boundaries of web technology.',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: './src/assets/ecommerce.png',
      githubLink: 'https://github.com/yourusername/innovative-web-app',
      liveLink: 'https://innovative-web-app.com'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'A sleek and efficient online shopping experience for a major retail brand.',
      tags: ['Vue.js', 'Express', 'PostgreSQL'],
      image: './src/assets/ecommerce-platform.png',
      githubLink: 'https://github.com/yourusername/ecommerce-platform',
      liveLink: 'https://ecommerce-platform.com'
    },
    {
      id: 3,
      title: 'AI-Powered Analytics',
      description: 'Leveraging machine learning to provide insightful business analytics.',
      tags: ['Python', 'TensorFlow', 'AWS'],
      image: './src/assets/ai-analytics.png',
      githubLink: 'https://github.com/yourusername/ai-analytics',
      liveLink: 'https://ai-analytics.com'
    },
  ];

  return (
    <section id="projects" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-16 leading-tight"
        >
          Featured
          <span className="block text-gray-500">Projects</span>
        </motion.h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
            >
              <div className="w-full md:w-1/2">
                <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-gray-800 text-sm rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white py-2 px-4 rounded-full hover:bg-white hover:text-black transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> GitHub
                  </motion.a>
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white py-2 px-4 rounded-full hover:bg-white hover:text-black transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
