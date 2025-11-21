import { motion } from "framer-motion";
import { Heart, DollarSign, ShoppingCart, Factory, Leaf, Truck, Home, BookOpen } from "lucide-react";

const industries = [
  { name: "Healthcare", icon: Heart, color: "bg-red-100 text-red-500" },
  { name: "Fintech", icon: DollarSign, color: "bg-green-100 text-green-500" },
  { name: "Retail", icon: ShoppingCart, color: "bg-yellow-100 text-yellow-500" },
  { name: "Manufacturing", icon: Factory, color: "bg-gray-100 text-gray-700" },
  { name: "Agriculture", icon: Leaf, color: "bg-lime-100 text-lime-500" },
  { name: "Logistics", icon: Truck, color: "bg-blue-100 text-blue-500" },
  { name: "Real Estate", icon: Home, color: "bg-indigo-100 text-indigo-500" },
  { name: "EdTech", icon: BookOpen, color: "bg-purple-100 text-purple-500" },
];

export default function Industries() {
  return (
    <section className="relative py-28 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-500">Delivering AI solutions across diverse sectors</p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.06, rotate: 2, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
                className="relative rounded-3xl p-8 flex flex-col items-center justify-center text-center cursor-pointer bg-white/50 backdrop-blur-lg border border-gray-200 transition-all"
              >
                <div className={`w-16 h-16 flex items-center justify-center mb-4 rounded-full ${industry.color} shadow-lg`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{industry.name}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
