
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import Process from './components/Process';
import Footer from './components/Footer';
import CTASection from './components/CTASection';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CareerPage from './pages/CareerPage';
import { useEffect } from "react";
import ScrollToTop from './components/scrollup';


function App() {
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-background overflow-hidden">
        {/* AI Gradient Blobs - Fixed to viewport */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute w-[600px] h-[600px] bg-indigo-200/40 blur-[160px] rounded-full -top-40 -left-40"></div>
          <div className="absolute w-[550px] h-[550px] bg-purple-200/40 blur-[150px] rounded-full bottom-0 right-0"></div>
        </div>

        {/* Faint AI Grid Pattern - Fixed to viewport */}
        <div className="fixed inset-0 opacity-[0.15] bg-[radial-gradient(circle,rgba(0,0,0,0.25)_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none z-0"></div>

        <div className="relative z-10">
          <Routes>
            <Route path="/" element={
              <>
                <Header scrollToSection={scrollToSection} />
                
                <HeroSection scrollToSection={scrollToSection} />

                <About />

                <Services />

                <Industries />

                <Process />

                <CTASection />

                <Footer />






              </>
            } />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/career" element={<CareerPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;