import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Upload, ArrowLeft } from 'lucide-react';

export default function CareerPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    experience: '',
    message: ''
  });

  const [resume, setResume] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleFileChange = (e: any) => {
    if (e.target.files?.[0]) {
      setResume(e.target.files[0]);

      if (errors.resume) {
        setErrors(prev => {
          const n = { ...prev };
          delete n.resume;
          return n;
        });
      }
    }
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.skills) newErrors.skills = "Skills are required";
    if (!formData.experience) newErrors.experience = "Experience is required";
    if (!formData.message) newErrors.message = "Message is required";
    if (!resume) newErrors.resume = "Resume is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  
    if (!validateForm()) return;
  
    setIsSubmitting(true);
    setSubmitStatus(null);
  
    try {
      const formPayload = new FormData();
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("phone", formData.phone);
      formPayload.append("skills", formData.skills);
      formPayload.append("experience", formData.experience);
      formPayload.append("message", formData.message);
      if (resume) formPayload.append("resume", resume);
  
      await fetch("https://getform.io/f/aqoexgxa", {
        method: "POST",
        body: formPayload,
      });
  
      setSubmitStatus("success");
      setFormData({
        name: '',
        email: '',
        phone: '',
        skills: '',
        experience: '',
        message: ''
      });
      setResume(null);
      setErrors({});
      
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    }
  
    setIsSubmitting(false);
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20 px-6">
      
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-indigo-200/40 blur-[160px] rounded-full -top-40 -left-40"></div>
        <div className="absolute w-[550px] h-[550px] bg-purple-200/40 blur-[150px] rounded-full bottom-0 right-0"></div>
      </div>

     <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[radial-gradient(circle,rgba(0,0,0,0.25)_1px,transparent_1px)] [background-size:18px_18px]"></div>


      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[3px] bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent blur-sm"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

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

      <div className="max-w-4xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our growing team. Submit your application today.
          </p>
        </motion.div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">

          {submitStatus === 'success' && (
            <div className="mb-8 p-6 bg-green-50 rounded-xl flex items-center gap-3">
              <CheckCircle className="text-green-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-green-800">Application Submitted Successfully!</h3>
                <p className="text-green-700 mt-1">
                  Thank you for your interest in joining Solution Objects. We'll review your application soon.
                </p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 p-6 bg-red-50 rounded-xl flex items-center gap-3">
              <AlertCircle className="text-red-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-red-800">Submission Failed</h3>
                <p className="text-red-700 mt-1">Something went wrong. Please try again.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Grid Inputs */}
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 rounded-xl border ${errors.name ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-indigo-500`}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email *</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 rounded-xl border ${errors.email ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-indigo-500`}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone *</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-indigo-500`}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

              {/* Experience */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Experience *</label>
                <input
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="e.g., 3 years"
                  className={`w-full px-4 py-3 rounded-xl border ${errors.experience ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-indigo-500`}
                />
                {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
              </div>
            </div>

            {/* Skills */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Skills *</label>
              <input
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="React, Python, AI..."
                className={`w-full px-4 py-3 rounded-xl border ${errors.skills ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-indigo-500`}
              />
              {errors.skills && <p className="text-red-500 text-sm">{errors.skills}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Why do you want to join us? *</label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us your motivation..."
                className={`w-full px-4 py-3 rounded-xl border ${errors.message ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-indigo-500`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            {/* Resume Upload */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Resume Upload *</label>

              <div className="relative">
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />

                <div
                  className={`flex items-center justify-between px-6 py-4 border-2 border-dashed rounded-xl cursor-pointer ${
                    errors.resume ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Upload className="text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-700">
                        {resume ? resume.name : "Click to upload resume"}
                      </p>
                      <p className="text-sm text-gray-500">
                        {resume ? `${(resume.size / 1024 / 1024).toFixed(2)} MB` : "PDF, DOC, DOCX — Max 5MB"}
                      </p>
                    </div>
                  </div>

                  <button className="px-4 py-2 bg-gray-100 rounded-lg">Browse</button>
                </div>
              </div>

              {errors.resume && <p className="text-red-500 text-sm">{errors.resume}</p>}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl disabled:opacity-70"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </motion.button>

          </form>
        </div>

        {/* Why Join Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Join Solution Objects?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                🚀
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Cutting-edge Projects</h3>
              <p className="text-gray-600">Work on AI solutions that shape the future.</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                🌱
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Growth Opportunities</h3>
              <p className="text-gray-600">Continuous learning & career advancement.</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-red-50">
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
                👥
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Collaborative Culture</h3>
              <p className="text-gray-600">Join a team that values innovation & teamwork.</p>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}
