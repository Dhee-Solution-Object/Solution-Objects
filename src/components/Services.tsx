import { motion } from 'framer-motion';
import { Brain, Cpu, Database, BarChart3, Shield, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "AI Strategy & Consulting",
      description: "We help businesses identify opportunities for AI integration and develop a roadmap for implementation.",
      icon: Brain,
      features: ["AI Readiness Assessment", "Technology Roadmap", "ROI Analysis"]
    },
    {
      title: "Machine Learning Solutions",
      description: "Custom ML models tailored to your business needs, from predictive analytics to computer vision.",
      icon: Cpu,
      features: ["Predictive Modeling", "Computer Vision", "Natural Language Processing"]
    },
    {
      title: "Data Engineering",
      description: "Transform raw data into actionable insights with our comprehensive data pipeline solutions.",
      icon: Database,
      features: ["Data Pipeline Development", "Data Warehousing", "ETL Processes"]
    },
    {
      title: "Business Intelligence",
      description: "Turn data into strategic advantages with advanced analytics and visualization dashboards.",
      icon: BarChart3,
      features: ["Dashboard Development", "KPI Tracking", "Advanced Analytics"]
    },
    {
      title: "AI Security & Compliance",
      description: "Ensure your AI systems meet industry standards with our security and compliance solutions.",
      icon: Shield,
      features: ["Data Privacy", "Model Security", "Regulatory Compliance"]
    },
    {
      title: "AI Implementation & Deployment",
      description: "From prototype to production, we deploy and maintain your AI solutions at scale.",
      icon: Zap,
      features: ["Model Deployment", "CI/CD Pipelines", "Performance Monitoring"]
    }
  ];

  return (
    <section id="services" className="py-28 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-indigo-200/30 blur-[150px] rounded-full -top-40 -right-40"></div>
        <div className="absolute w-[600px] h-[600px] bg-purple-200/30 blur-[150px] rounded-full bottom-0 left-0"></div>
      </div>
      
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle,rgba(0,0,0,0.25)_1px,transparent_1px)] [background-size:22px_22px]"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our AI Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations and drive innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featIndex) => (
                    <li key={featIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}