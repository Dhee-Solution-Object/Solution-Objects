import { motion } from 'framer-motion';

function Process() {
  const processes = [
    {
      step: '01',
      title: 'Discovery & Consultation',
      description:
        'We analyze your business needs, identify opportunities, and define project scope and objectives.',
    },
    {
      step: '02',
      title: 'Data Collection & Preparation',
      description:
        'Gather, clean, and prepare high-quality datasets essential for training accurate AI models.',
    },
    {
      step: '03',
      title: 'Model Development',
      description:
        'Design, train, and optimize machine learning models using cutting-edge algorithms and techniques.',
    },
    {
      step: '04',
      title: 'Integration & Deployment',
      description:
        'Seamlessly integrate AI solutions into your existing systems and deploy to production environments.',
    },
    {
      step: '05',
      title: 'Monitoring & Optimization',
      description:
        'Continuously monitor performance, gather feedback, and refine models for optimal results.',
    },
    {
      step: '06',
      title: 'Support & Maintenance',
      description:
        'Provide ongoing support, updates, and enhancements to ensure long-term success.',
    },
  ];

  return (
    <section id="process" className="relative py-28 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Animated Background Blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-purple-200/30 blur-[150px] rounded-full -top-32 -left-32"></div>
        <div className="absolute w-[500px] h-[500px] bg-indigo-200/30 blur-[150px] rounded-full bottom-0 right-0"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A premium methodology to deliver AI solutions efficiently
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-300 to-indigo-300 rounded"></div>

          {processes.map((process, index) => (
            <motion.div
              key={index}
              className="flex gap-6 mb-16 relative z-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* Step Circle with Animated Graphics */}
              <div className="flex-shrink-0 relative z-10">
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-white shadow-lg bg-gradient-to-br from-purple-400 to-indigo-400 cursor-pointer"
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {process.step}
                </motion.div>
                {/* Pulse Effect */}
                <motion.div
                  className="absolute w-20 h-20 rounded-full bg-purple-400/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.2, 0.4] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              </div>

              {/* Card */}
              <motion.div
                className="bg-white p-6 rounded-2xl shadow-md flex-1 hover:shadow-xl transition-shadow"
                whileHover={{ x: 10 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">{process.title}</h3>
                <p className="text-gray-500">{process.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
