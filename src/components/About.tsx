import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Rocket, Cpu } from "lucide-react";
import { useEffect, useRef } from "react";

const coreValues = [
  {
    title: "Innovation",
    desc: "We push boundaries to build future-ready AI.",
    icon: Rocket,
    color: "text-indigo-600",
  },
  {
    title: "Integrity",
    desc: "We prioritize ethics, transparency, and trust.",
    icon: ShieldCheck,
    color: "text-purple-600",
  },
  {
    title: "Scalability",
    desc: "Solutions designed to scale with your growth.",
    icon: Cpu,
    color: "text-pink-600",
  },
  {
    title: "Security",
    desc: "Data privacy & protection at every layer.",
    icon: Eye,
    color: "text-blue-600",
  },
  {
    title: "Client Success",
    desc: "Your growth defines our success.",
    icon: Target,
    color: "text-green-600",
  },
];

function CoreValuesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollPosition = 0;
    let frameCount = 0;
    const scrollSpeed = 1; // pixels per frame
    const frameSkip = 2; // only move every 3 frames

    const autoScroll = () => {
      frameCount++;
      
      // Only move when frame count reaches frameSkip
      if (frameCount >= frameSkip) {
        scrollPosition += scrollSpeed;
        frameCount = 0; // reset frame count
      }
      
      // Reset to beginning when reaching end
      if (scrollPosition >= container.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      container.scrollLeft = scrollPosition;
      requestAnimationFrame(autoScroll);
    };

    const animationId = requestAnimationFrame(autoScroll);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => requestAnimationFrame(autoScroll);

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Duplicate items for infinite scroll
  const duplicatedValues = [...coreValues, ...coreValues];

  return (
    <motion.div
      className="p-8 md:p-12 rounded-3xl bg-white/80 backdrop-blur-xl border border-gray-200 mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        Our Core Values
      </h3>

      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden"
          style={{ scrollBehavior: 'auto' }}
        >
          {duplicatedValues.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="min-w-[280px] flex-shrink-0 bg-white/90 border border-gray-100 rounded-2xl p-6 transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <Icon className={`w-8 h-8 ${item.color} mb-4`} />
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {

    
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
  

  return (
    <section
      id="about"
      className="relative py-28 px-6 overflow-hidden bg-gradient-to-b from-white to-gray-50"
    >
      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] bg-indigo-200/40 blur-[150px] rounded-full -top-32 -left-20"
          animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 12 }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] bg-purple-200/40 blur-[150px] rounded-full bottom-0 right-0"
          animate={{ opacity: [0.5, 0.8, 0.5], scale: [1.1, 1, 1.1] }}
          transition={{ repeat: Infinity, duration: 13 }}
        />
      </div>

      {/* Faint AI Grid */}
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,rgba(0,0,0,0.25)_1px,transparent_1px)] [background-size:22px_22px]"></div>

      {/* Animated Top Light Line */}

      <div className="relative container mx-auto z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
            Who We Are
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
           We are a team of AI engineers, data scientists, and software developers passionate about solving 
complex business challenges using artificial intelligence and machine learning. From startups to 
large enterprises, we design intelligent systems that deliver measurable results.
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            className="p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Target className="w-8 h-8 text-indigo-600 mr-3" /> Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Empower businesses with intelligent, automated, and data-driven
              solutions that improve performance, reduce operational cost, and
              unlock new opportunities for growth.
            </p>
          </motion.div>

          <motion.div
            className="p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Eye className="w-8 h-8 text-purple-600 mr-3" /> Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To lead global AI innovation—delivering ethical, scalable, and
              human-centered AI systems that shape the future of every industry.
            </p>
          </motion.div>
        </div>

     {/* Core Values - Auto Sliding */} 
      <CoreValuesCarousel />


      </div>
    </section>
  );
}
