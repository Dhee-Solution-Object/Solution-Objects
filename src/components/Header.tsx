import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/SO.png";
interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Set up intersection observer for section detection
    observer.current = new IntersectionObserver(
      (entries) => {
        // Find the section with the highest intersection ratio
        let mostVisibleSection = '';
        let highestRatio = 0;
        
        entries.forEach(entry => {
          if (entry.intersectionRatio > highestRatio) {
            highestRatio = entry.intersectionRatio;
            mostVisibleSection = entry.target.id;
          }
        });
        
        // Only update if we found a visible section
        if (mostVisibleSection) {
          setActiveSection(mostVisibleSection);
        }
      },
      { 
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1], // More granular thresholds
        rootMargin: '0px 0px -20% 0px' // Less aggressive root margin
      }
    );
    
    // Observe all sections
    const observeSections = () => {
      setTimeout(() => {
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
          if (observer.current) {
            observer.current.observe(section as Element);
          }
        });
      }, 100);
    };
    
    // Initial observation
    observeSections();
    
    // Also observe after a short delay in case of dynamic content
    setTimeout(observeSections, 1000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.current?.disconnect();
    };
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
            className="text-2xl md:text-3xl flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => scrollToSection('home')}
          >
            {/* Logo */}
            <div className="relative w-8 h-8 md:w-12 md:h-12">
              <img
                src={Logo}
                alt="Company Logo"
                className="w-full h-full object-contain"
                />
            </div>
            {/* Text */}
            <div className="flex items-center">
            <div className="text-4xl font-roboto-condensed">
          <span className="text-red-600">Solution</span>
          <span className="text-gray-800">Objects</span>
        </div>
              
            </div>
          </motion.div>
          <div className="hidden md:flex items-center space-x-2">
            {[
              { name: 'Home', id: 'home' },
              { name: 'About', id: 'about' },
              { name: 'Services', id: 'services' },
              { name: 'Industries', id: 'industries' },
              { name: 'Process', id: 'process' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <motion.button
                key={item.name}
                onClick={() => {
                  if (item.id === 'contact') {
                    navigate('/contact');
                  } else {
                    scrollToSection(item.id);
                  }
                }}
                className={`px-5 py-2.5 font-medium transition-all rounded-lg relative group ${
                  activeSection === item.id
                    ? 'text-gray-800 bg-gray-50' 
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
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
