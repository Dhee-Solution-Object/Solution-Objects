import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Brain, Cpu, ShieldCheck, Briefcase, TrendingUp } from "lucide-react";

const values = [
  { icon: Brain, title: "Innovation First", text: "We build future‑ready, intelligent products." },
  { icon: Cpu, title: "Engineering Excellence", text: "Clean, scalable, and high‑performance architecture." },
  { icon: ShieldCheck, title: "Trust & Security", text: "Secure systems with enterprise‑grade standards." },
  { icon: Briefcase, title: "Client Success", text: "Your growth and results come before everything." },
  { icon: TrendingUp, title: "Continuous Improvement", text: "We evolve with every project and every challenge." }
];

export default function ModernValuesSection() {
  return (
    <div className="w-full py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-12 text-gray-800">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <Card className="rounded-2xl border-none shadow-sm hover:shadow-xl transition-all bg-white/70 backdrop-blur-md p-4">
                <CardContent className="flex flex-col items-center text-center py-8">
                  <item.icon className="w-12 h-12 text-gray-700 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
