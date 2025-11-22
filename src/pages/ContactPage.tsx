import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft } from 'lucide-react';

export default function ContactPage() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email";

    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      const updated = { ...errors };
      delete updated[name];
      setErrors(updated);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!validateForm()) return;

    const { name, email, phone, message } = formData;

    const body =
      `Name: ${encodeURIComponent(name)}%0A` +
      `Email: ${encodeURIComponent(email)}%0A` +
      `Phone: ${encodeURIComponent(phone)}%0A` +
      `Message: ${encodeURIComponent(message)}`;

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=info@solutionobjects.com&su=Contact%20Form&body=${body}`;

    window.open(gmailURL, "_blank");

    setSubmitStatus("success");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 py-24 px-6">

      {/* Back Button */}
      <button
        onClick={() => {
          window.history.back();
          setTimeout(() => window.scrollTo(0, 0), 50);
        }}
        className="absolute top-16 left-20 flex items-center gap-3 text-2xl text-gray-700 hover:text-gray-900 transition font-semibold z-20"
      >
        <ArrowLeft size={30} />
        Back
      </button>

      {/* Background FX */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-indigo-200/30 blur-[150px] rounded-full -top-40 left-10"></div>
        <div className="absolute w-[500px] h-[500px] bg-purple-200/30 blur-[160px] rounded-full bottom-0 right-0"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions or want to discuss a project? Our team will respond shortly.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-10 rounded-3xl bg-white/60 backdrop-blur-xl shadow-xl border border-white/50"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>

            <div className="space-y-8">

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center shadow-sm">
                  <span className="text-indigo-600 text-2xl">✉</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <a
                    href="mailto:info@solutionobjects.com"
                    className="text-gray-600 hover:text-indigo-600 transition"
                  >
                    info@solutionobjects.com
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center shadow-sm">
                  <span className="text-purple-600 text-2xl">🌐</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Website</h3>
                  <a
                    href="https://www.solutionobjects.com"
                    className="text-gray-600 hover:text-purple-600 transition"
                  >
                    www.solutionobjects.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center shadow-sm">
                  <span className="text-pink-600 text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Office Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Solution Objects Software Pvt Ltd<br />
                    No.14, 1st Floor, Brigade Tech Park,<br />
                    Tower B, Whitefield, Bengaluru - 560066<br />
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-12 p-5 rounded-2xl bg-white/40 backdrop-blur-md border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">Office Hours</h3>
              <p className="text-gray-700 text-sm tracking-wide">
                Mon – Fri: <span className="font-medium">9:00 AM – 6:00 PM</span>
              </p>
            </div>

          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-10 rounded-3xl bg-white/70 backdrop-blur-xl shadow-xl border border-white/60"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 rounded-xl flex items-center gap-3">
                <CheckCircle className="text-green-500" />
                <p className="text-green-700">Message ready in Gmail! Please click Send.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">

              {[ 
                { id: "name", label: "Full Name *", type: "text", placeholder: "Enter your full name" },
                { id: "email", label: "Email Address *", type: "email", placeholder: "Enter your email address" },
                { id: "phone", label: "Phone Number *", type: "tel", placeholder: "Enter your phone number" },
              ].map(field => (
                <div key={field.id}>
                  <label className="block text-gray-700 font-medium mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.id}
                    value={(formData as any)[field.id]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className={`w-full px-4 py-3 rounded-xl bg-white/60 border 
                      ${errors[field.id] ? "border-red-500" : "border-gray-300"} 
                      focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all shadow-sm`}
                  />
                  {errors[field.id] && (
                    <p className="text-red-500 text-sm mt-1">{errors[field.id]}</p>
                  )}
                </div>
              ))}

              <div>
                <label className="block text-gray-700 font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-white/60 border
                    ${errors.message ? "border-red-500" : "border-gray-300"}
                    focus:ring-2 focus:ring-indigo-400 shadow-sm`}
                  placeholder="How can we help you?"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                Send via Gmail
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
