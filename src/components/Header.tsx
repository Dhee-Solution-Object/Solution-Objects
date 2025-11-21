import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from "../assets/SO.png";
interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl md:text-3xl font-bold flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => scrollToSection('home')}
          >
            {/* Logo */}
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <img
                src={Logo}
                alt="Company Logo"
                className="w-full h-full object-contain"
                />
            </div>
            {/* Text */}
            <div className="flex items-center">
              <span className="text-red-600">Solution</span><span className="text-gray-900">Objects</span>
              
            </div>
          </motion.div>
          <div className="hidden md:flex items-center space-x-2">
            {['Home', 'About', 'Services', 'Industries', 'Process', 'Contact'].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="px-5 py-2.5 text-gray-600 hover:text-gray-800 font-medium transition-all rounded-lg hover:bg-gray-50 relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 to-purple-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
