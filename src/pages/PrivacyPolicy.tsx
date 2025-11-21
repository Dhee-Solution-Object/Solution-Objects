import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f9fc] via-white to-[#eef1f7] py-20 px-6 relative">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute cursor-pointer top-16 left-20 flex items-center gap-3 text-2xl text-gray-700 hover:text-gray-900 transition font-semibold"
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
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
              At Solution Objects Software Pvt Ltd, we respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our website 
              (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Important Information and Who We Are</h2>
            <p className="text-gray-600 mb-6">
              Solution Objects Software Pvt Ltd is the controller and responsible for your personal data (collectively referred to as 
              "COMPANY", "we", "us" or "our" in this privacy policy).
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">The Data We Collect About You</h2>
            <p className="text-gray-600 mb-6">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-8 text-gray-600 mb-6 space-y-2">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, 
              time zone setting and location, browser plug-in types and versions, operating system and platform and other technology 
              on the devices you use to access this website.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">How We Collect Your Personal Data</h2>
            <p className="text-gray-600 mb-6">
              We use different methods to collect data from and about you including through:
            </p>
            <ul className="list-disc pl-8 text-gray-600 mb-6 space-y-2">
              <li><strong>Direct interactions.</strong> You may give us your Identity, Contact and Financial Data by filling in forms 
              or by corresponding with us by post, phone, email or otherwise.</li>
              <li><strong>Automated technologies or interactions.</strong> As you interact with our website, we may automatically 
              collect Technical Data about your equipment, browsing actions and patterns.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">How We Use Your Personal Data</h2>
            <p className="text-gray-600 mb-6">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-8 text-gray-600 mb-6 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental 
              rights do not override those interests.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Data Security</h2>
            <p className="text-gray-600 mb-6">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
              used or accessed in an unauthorised way, altered or disclosed.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Data Retention</h2>
            <p className="text-gray-600 mb-6">
              We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, 
              including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Your Legal Rights</h2>
            <p className="text-gray-600 mb-6">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data:
            </p>
            <ul className="list-disc pl-8 text-gray-600 mb-6 space-y-2">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this privacy policy or our privacy practices, please contact us:
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