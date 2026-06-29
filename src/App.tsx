import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeRibbon from './components/MarqueeRibbon';
import ServicesSection from './components/ServicesSection';
import LatestProjects from './components/LatestProjects';
import AboutSection from './components/AboutSection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-primary-blue/20 selection:text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <MarqueeRibbon />
        <ServicesSection />
        <LatestProjects />
        <AboutSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
