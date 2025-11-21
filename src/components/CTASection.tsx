import { motion } from 'framer-motion';
import bgImage from '../assets/bg.jpg'; // adjust path

interface CTASectionProps {
  className?: string;
  id?: string;
}

export default function CTASection({ 
  className = '', 
  id = 'contact' 
}: CTASectionProps) {
  return (
    <section
      id={id}
      className={`relative py-20 px-6 ${className}`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Subtle gradient overlay at the bottom */}
      <div className="absolute inset-0 backdrop-blur-[4px]"></div>

      <div className="relative container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Ready to Build the Future with AI?
          </h2>
          <p className="text-xl text-white/90 mb-4 max-w-2xl mx-auto drop-shadow-md">
            Let's turn your data into intelligent solutions.
          </p>
          <motion.button
            className="px-10 py-5 bg-indigo-600 text-white rounded-full font-bold text-lg shadow-2xl"
            whileHover={{ scale: 1.1, boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/contact'}
          >
            Contact Us Today
          </motion.button>

          <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8 text-white drop-shadow-md">
            <motion.a 
              href="mailto:info@solutionobjects.com" 
              whileHover={{ scale: 1.05 }} 
              className="flex items-center gap-2 hover:underline"
            >
              <span className="text-2xl">✉</span>
              <span className="text-lg">info@solutionobjects.com</span>
            </motion.a>
            <motion.a 
              href="https://www.solutionobjects.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }} 
              className="flex items-center gap-2 hover:underline"
            >
              <span className="text-2xl">🌐</span>
              <span className="text-lg">www.solutionobjects.com</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
