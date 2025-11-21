import { motion } from "framer-motion";

export default function Process() {
  const processes = [
    {
      step: "01",
      title: "Discovery & Consultation",
      description:
        "We understand your business, define the scope, and identify high-impact AI opportunities.",
    },
    {
      step: "02",
      title: "Data Preparation",
      description:
        "Collect, clean, and prepare high-quality datasets for training powerful models.",
    },
    {
      step: "03",
      title: "Model Development",
      description:
        "Build and optimize cutting-edge AI/ML models tailored to your business goals.",
    },
    {
      step: "04",
      title: "Integration & Deployment",
      description:
        "Deliver seamless integration into your existing systems with cloud-ready deployment.",
    },
    {
      step: "05",
      title: "Monitoring & Optimization",
      description:
        "Track performance, enhance accuracy, and fine-tune models for maximum ROI.",
    },
    {
      step: "06",
      title: "Support & Maintenance",
      description:
        "Ongoing updates, scaling support, and long-term reliability for your AI systems.",
    },
  ];

  return (
    <section
      id="process"
      className="relative py-32 px-6 bg-[#f8f8ff] overflow-hidden"
    >
      {/* Premium background FX */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-purple-300/20 blur-[180px] rounded-full -top-40 left-0"></div>
        <div className="absolute w-[600px] h-[600px] bg-indigo-300/20 blur-[180px] rounded-full bottom-0 right-0"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Our Premium Process
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            A world-class workflow designed for precision and excellence
          </p>
        </motion.div>

        <div className="relative">
  {/* Fixed Height Vertical Line */}
  <div
    className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-purple-400 to-indigo-400 rounded-full"
    style={{
      width: "3px",
      top: "60px",
      bottom: "60px",
    }}
  ></div>

  <div className="flex flex-col gap-20">
    {processes.map((process, index) => {
      const isLeft = index % 2 === 0;
      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: index * 0.15 }}
          className={`relative flex items-center ${
            isLeft ? "justify-start" : "justify-end"
          }`}
        >
          {/* Card */}
          <motion.div
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="w-[90%] md:w-[45%] bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/40 relative"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {process.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {process.description}
            </p>
          </motion.div>

          {/* Step bubble (centered on the line) */}
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="absolute left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 text-white font-extrabold shadow-[0_0_25px_rgba(140,82,255,0.6)] flex items-center justify-center text-xl border-4 border-white"
          >
            {process.step}
          </motion.div>
        </motion.div>
      );
    })}
  </div>
</div>

      </div>
    </section>
  );
}
