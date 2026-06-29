import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  const handleHireMeClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 bg-white border-y border-slate-100/60 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-[#0077C0]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Column */}
        <div className="text-center md:text-left max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tight leading-tight">
            Have a project in mind? <br />
            <span className="text-[#0077C0]">Let's work together!</span>
          </h2>
        </div>

        {/* Button Column */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="flex-shrink-0"
          id="cta-btn-container"
        >
          <button
            onClick={handleHireMeClick}
            className="group flex items-center bg-[#FFC107] hover:bg-[#eab308] text-slate-900 font-extrabold pl-7 pr-2.5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            id="cta-hire-me-btn"
          >
            <span className="mr-3 text-lg select-none">Hire Me !</span>
            <div className="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="w-5 h-5" />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
