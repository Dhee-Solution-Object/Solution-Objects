import { motion } from 'framer-motion';
import { Brain, ShieldCheck, Briefcase, Cpu, TrendingUp } from "lucide-react";


interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  } as const;

  return (
    <section id="home" className="pt-32 pb-20 px-6 overflow-hidden relative ">
      {/* AI Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-indigo-200/40 blur-[160px] rounded-full -top-40 -left-40"></div>
        <div className="absolute w-[550px] h-[550px] bg-purple-200/40 blur-[150px] rounded-full bottom-0 right-0"></div>
      </div>

      {/* Faint AI Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(circle,rgba(0,0,0,0.25)_1px,transparent_1px)] [background-size:18px_18px]"></div>

      {/* Animated Light Streak */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[3px] bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent blur-sm"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 rounded-full text-sm font-semibold mb-6 border border-indigo-200"
            >
              🚀 AI-Powered Business Solutions
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight text-center">
              Transforming Businesses with{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI & Machine Learning
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed text-center">
              We build intelligent solutions that automate processes, improve decision-making, and drive
              sustainable growth through cutting-edge artificial intelligence.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-indigo-400 to-purple-400 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
              >
                Get a Free Consultation
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-indigo-300 text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('services')}
              >
                Explore Our Services
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
              {[
                { value: '100+', label: 'AI Projects' },
                { value: '95%', label: 'Client Satisfaction' },
                { value: '24/7', label: 'Support' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 mt-1 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us Cards */}
        <motion.div
  className="mt-20 grid md:grid-cols-5 gap-6 "
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={containerVariants}
>
  {[
    { title: 'Custom AI & ML Solutions', icon: Brain },
    { title: 'Scalable & Secure Architecture', icon: ShieldCheck },
    { title: 'Industry-Specific Expertise', icon: Briefcase },
    { title: 'End-to-End Deployment', icon: Cpu },
    { title: 'Proven Business Impact', icon: TrendingUp },
  ].map((item, index) => (
    <motion.div
      key={index}
      className="relative bg-gradient-to-br from-[#FAF5FF] to-[#EDE9FE] p-8 rounded-2xl border border-slate-200 
  hover:shadow-lg transition-all group cursor-pointer hover:-translate-y-2"


      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Minimal Icon */}
      <div className="mb-6 flex items-center justify-center">
        <item.icon
          className="w-10 h-10 text-slate-700 group-hover:text-indigo-600 transition-all"
        />
      </div>

      {/* Title */}
      <p className="relative text-base font-semibold text-slate-800 leading-snug text-center 
      group-hover:text-indigo-600 transition-colors">
        {item.title}
      </p>

    </motion.div>
  ))}
</motion.div>

      </div>
    </section>
  );
}
