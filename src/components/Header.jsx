import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Logo = () => (
  <a href="/" className="text-white font-bold text-3xl flex items-center">
    <span className="relative">
      <span className="absolute -inset-1 bg-white transform -skew-x-12"></span>
      <span className="relative text-black z-10">D</span>
    </span>
    <span className="ml-1">S</span>
  </a>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-90 backdrop-blur-sm' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Logo />
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a key={item.href} href={item.href} className="text-white hover:text-gray-300 transition duration-300">{item.label}</a>
              ))}
              <motion.a 
                href="/path-to-your-resume.pdf"
                className="inline-block border-2 border-white py-2 px-6 rounded-md text-lg font-semibold hover:bg-white hover:text-black transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
            </div>
            <button onClick={toggleMenu} className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center"
          >
            <div className="absolute top-6 left-6">
              <Logo />
            </div>
            <button onClick={toggleMenu} className="absolute top-6 right-6 text-white">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <motion.ul 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center space-y-8"
            >
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <a
                    href={item.href}
                    className="text-3xl font-bold text-white hover:text-gray-300 transition duration-300 relative group"
                    onClick={toggleMenu}
                  >
                    {item.label}
                    <span className="absolute -bottom-2 left-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <a 
                  href="/path-to-your-resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xl border-2 border-white text-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition duration-300"
                  onClick={toggleMenu}
                >
                  Resume
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
