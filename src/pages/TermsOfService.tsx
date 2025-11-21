import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TermsOfService() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f9fc] via-white to-[#eef1f7] py-20 px-6 relative">

      {/* Back Button */}
    <button
        onClick={() => navigate(-1)}
        className="absolute cursor-pointer top-16 left-20 flex items-center gap-3 text-2xl text-gray-700 hover:text-gray-900 transition font-semibold"
        >
        <ArrowLeft size={35} />
        Back
        </button>


      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-600">
            Last Updated:{' '}
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200"
        >
          <div className="prose prose-lg max-w-none">

            <p className="text-gray-600 mb-8">
              Welcome to Solution Objects Software Pvt Ltd. These terms of service outline the rules and regulations for the use of 
              Solution Objects' website and services.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing this website, we assume you accept these terms of service in full. Do not continue to use Solution Objects' 
              website if you do not accept all of the terms of service stated on this page.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">License to Use Website</h2>
            <p className="text-gray-600 mb-6">
              Unless otherwise stated, Solution Objects Software Pvt Ltd and/or its licensors own the intellectual property rights 
              for all material on Solution Objects. All intellectual property rights are reserved.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">User Responsibilities</h2>
            <p className="text-gray-600 mb-6">
              As a user of our website and services, you agree to:
            </p>
            <ul className="list-disc pl-8 text-gray-600 mb-6 space-y-2">
              <li>Comply with all applicable laws and regulations</li>
              <li>Not engage in any activity that disrupts or interferes with our services</li>
              <li>Not attempt to gain unauthorized access to our systems or networks</li>
              <li>Provide accurate and truthful information when registering or using our services</li>
              <li>Protect the confidentiality of your account credentials</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              All content, trademarks, and other intellectual property on our website are owned by Solution Objects Software Pvt Ltd 
              or its licensors. You may not use, copy, reproduce, modify, translate, publish, broadcast, transmit, distribute, 
              perform, upload, display, license, sell, commercialize or otherwise exploit for any purpose whatsoever any content 
              without our express prior written consent.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              In no event shall Solution Objects Software Pvt Ltd, nor its directors, employees, partners, agents, suppliers, 
              or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including 
              without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-8 text-gray-600 mb-6 space-y-2">
              <li>Your access to or use of or inability to access or use the services</li>
              <li>Any conduct or content of any third party on the services</li>
              <li>Any content obtained from the services</li>
              <li>Unauthorized access, use or alteration of your transmissions or content</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Termination</h2>
            <p className="text-gray-600 mb-6">
              We may terminate or suspend your access to all or part of the services, with or without notice, for any reason, 
              including without limitation if we believe you have violated any provision of these terms of service.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Changes to Terms</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right, at our sole discretion, to modify or replace these terms at any time. If a revision is 
              material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a 
              material change will be determined at our sole discretion.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These terms shall be governed and construed in accordance with the laws of India, without regard to its conflict 
              of law provisions. Our failure to enforce any right or provision of these terms will not be considered a waiver 
              of those rights.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about these terms of service, please contact us:
            </p>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-800 font-medium">Solution Objects Software Pvt Ltd</p>
              <p className="text-gray-600">Email: info@solutionobjects.com</p>
              <p className="text-gray-600">Website: www.solutionobjects.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}