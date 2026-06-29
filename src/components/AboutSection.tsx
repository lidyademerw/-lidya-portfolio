import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { portfolioOwner } from '../data';

export default function AboutSection() {
  const benefits = [
    { title: '100% Job Success', label: '100% Job Success' },
    { title: '24/7 Support', label: '24/7 Support' },
    { title: 'Fast Delivery', label: 'Fast Delivery' },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative stars / shapes */}
      <div className="absolute top-10 right-10 w-48 h-48 bg-[#0077C0]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column - Sketch Portrait with yellow blob */}
        <div className="lg:col-span-5 flex justify-center relative z-10" id="about-portrait-area">
          {/* Yellow decorative star */}
          <div className="absolute top-12 left-10 text-[#FFC107] animate-pulse">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
            </svg>
          </div>
          <div className="absolute bottom-12 right-12 text-[#FFC107] animate-bounce" style={{ animationDuration: '3s' }}>
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
            </svg>
          </div>

          {/* Floating Sketch Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 15,
            }}
            className="relative w-full max-w-[360px] sm:max-w-[420px] flex items-center justify-center animate-float-slow"
            id="about-sketch-container"
          >
            {/* Fine line artistic sketch portrait wrapper */}
            <div className="relative w-full z-10">
              <img
                src={portfolioOwner.sketchImage}
                alt={`${portfolioOwner.name} Sketch Portrait`}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain mix-blend-multiply"
                id="about-sketch-image"
              />
            </div>
          </motion.div>
        </div>

        {/* Right Column - Text and Benefits */}
        <div className="lg:col-span-7 flex flex-col space-y-8 text-left z-10" id="about-content-area">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest font-mono text-[#0077C0] mb-2 block">
              ABOUT ME
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tight leading-tight">
              Designing Solutions, <br />
              <span className="text-[#0077C0]">Not Just Visuals</span>
            </h2>
          </div>

          <p className="text-base md:text-lg text-slate-500 leading-relaxed font-normal">
            Hi, I'm Lidya. I specialize in building complete digital products for amazing people. With a strong background in graphic design and high performance full stack web engineering, I craft solutions that don't just look visually breathtaking they function flawlessly and solve real world problems.
          </p>

          <p className="text-sm md:text-base text-slate-500 leading-relaxed font-normal">
            I am obsessed with pristine typography, clean spacing, absolute code quality, and meeting tight project milestones. Let's work together to turn your next major vision into an active, polished digital reality!
          </p>

          {/* Benefits grid with custom arrow indicators matching the design */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/60" id="about-benefits">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col space-y-2">
                {/* Arrow symbols representing "▷▷" or ">>" in gold/yellow */}
                <div className="flex items-center space-x-0.5 text-[#FFC107]">
                  <span className="text-xl font-black tracking-tight select-none">▷</span>
                  <span className="text-xl font-black tracking-tight select-none">▷</span>
                </div>
                {/* Benefit text */}
                <h4 className="text-xs md:text-sm font-extrabold text-slate-800 tracking-wide uppercase">
                  {benefit.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
