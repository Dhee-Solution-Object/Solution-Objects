import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, Globe } from 'lucide-react';
import Logo from '../assets/SOfooter.png';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-8 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-6">

        {/* LEFT — Brand + Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-2">
            <img src={Logo} alt="Logo" className="w-8 h-8 object-contain" />
            <span className="text-2xl font-roboto-condensed ">
              <span className="text-red-600">Solution</span>
              <span className="text-white-700">Objects</span>
            </span>
          </div>
          <p className="text-gray-400 leading-relaxed text-[14px] max-w-xs mb-4">
            AI-driven automation & software solutions that enhance decision-making and optimize operations.
          </p>
        </div>

        {/* CENTER — Company Links */}
        <div className="flex gap-6 text-gray-400 text-sm">
          <Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-white transition">Terms of Service</Link>
          <Link to="/career" className="hover:text-white transition">Careers</Link>
        </div>

        {/* RIGHT — Social Icons */}
        <div className="flex gap-4">
          {[
            { icon: Linkedin, link: "https://www.linkedin.com/company/solution-objects-software-private-limited" },
            { icon: Twitter, link: "#" },
            { icon: Mail, link: "mailto:info@solutionobjects.com" },
            { icon: Globe, link: "https://www.solutionobjects.com" },
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition"
              whileHover={{ y: -4, scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="w-4 h-4 text-gray-200" />
            </motion.a>
          ))}
        </div>

      </div>

      {/* Bottom Note */}
      <div className="mt-2 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Solution Objects Software Pvt Ltd. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
