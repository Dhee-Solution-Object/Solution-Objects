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

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.skills.trim()) {
      newErrors.skills = 'Skills are required';
    }
    
    if (!formData.experience.trim()) {
      newErrors.experience = 'Experience is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    if (!resume) {
      newErrors.resume = 'Please upload your resume';
    } else if (resume && !['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(resume.type)) {
      newErrors.resume = 'Please upload a PDF or Word document';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setResume(file);
      
      // Clear error when user selects a file
      if (errors.resume) {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors['resume'];
          return newErrors;
        });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // In a real application, you would send the data to your backend here
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate form submission with resume
      console.log('Career form submitted:', formData, resume);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', skills: '', experience: '', message: '' });
      setResume(null);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    
    
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20 px-6">
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

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
          {submitStatus === 'success' && (
            <div className="mb-8 p-6 bg-green-50 rounded-xl flex items-center gap-3">
              <CheckCircle className="text-green-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-green-800">Application Submitted Successfully!</h3>
                <p className="text-green-700 mt-1">
                  Thank you for your interest in joining Solution Objects. We'll review your application and get back to you soon.
                </p>
              </div>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-8 p-6 bg-red-50 rounded-xl flex items-center gap-3">
              <AlertCircle className="text-red-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-red-800">Submission Failed</h3>
                <p className="text-red-700 mt-1">
                  Something went wrong with your application. Please try again.
                </p>
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors`}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors`}
                  placeholder="Enter your email address"
                />
                {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>}
              </div>
              
              <div>
                <label htmlFor="experience" className="block text-gray-700 font-medium mb-2">
                  Years of Experience *
                </label>
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.experience ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors`}
                  placeholder="e.g., 3 years"
                />
                {errors.experience && <p className="mt-1 text-red-500 text-sm">{errors.experience}</p>}
              </div>
            </div>
            
            <div>
              <label htmlFor="skills" className="block text-gray-700 font-medium mb-2">
                Relevant Skills *
              </label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.skills ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors`}
                placeholder="e.g., React, Node.js, Python, Machine Learning"
              />
              {errors.skills && <p className="mt-1 text-red-500 text-sm">{errors.skills}</p>}
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Why do you want to join us? *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors`}
                placeholder="Tell us about your passion for AI and technology..."
              ></textarea>
              {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Resume Upload *
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className={`flex items-center justify-between px-6 py-4 rounded-xl border-2 border-dashed ${
                  errors.resume ? 'border-red-500' : 'border-gray-300'
                } hover:border-indigo-400 transition-colors cursor-pointer`}>
                  <div className="flex items-center gap-3">
                    <Upload className="text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-700">
                        {resume ? resume.name : 'Click to upload your resume'}
                      </p>
                      <p className="text-sm text-gray-500">
                        {resume ? `${(resume.size / 1024 / 1024).toFixed(2)} MB` : 'PDF, DOC, DOCX (Max 5MB)'}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Browse
                  </button>
                </div>
              </div>
              {errors.resume && <p className="mt-1 text-red-500 text-sm">{errors.resume}</p>}
              <p className="mt-2 text-sm text-gray-500">
                Accepted formats: PDF, DOC, DOCX. Maximum file size: 5MB.
              </p>
            </div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-70"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
            </motion.button>
          </form>
        </div>
        
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
                <span className="text-indigo-600 text-2xl">🚀</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Cutting-edge Projects</h3>
              <p className="text-gray-600">
                Work on innovative AI solutions that shape the future of technology.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">🌱</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Growth Opportunities</h3>
              <p className="text-gray-600">
                Continuous learning and career advancement in a dynamic environment.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-red-50">
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-pink-600 text-2xl">👥</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Collaborative Culture</h3>
              <p className="text-gray-600">
                Be part of a supportive team that values innovation and collaboration.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}