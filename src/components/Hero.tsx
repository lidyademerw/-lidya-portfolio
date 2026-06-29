import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { portfolioOwner } from "../data";
const words = "Designing for Amazing People".split(" ");

const containerVars = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const wordVars = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const, // The "as const" fixes the TypeScript error
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  const words = portfolioOwner.title.split(" ");

  // Stagger heading animation container
  const containerVars = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  // Heading word animation
  const wordVars = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const handleHireMeClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center bg-white overflow-hidden"
    >
      {/* Background Decorative Accents */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary-yellow/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column - Intro and Heading */}
        <div className="lg:col-span-7 flex flex-col space-y-8 text-left z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-primary-blue/10 text-primary-blue px-4 py-1.5 rounded-full w-fit"
            id="hero-badge"
          >
            <Sparkles className="w-4 h-4 animate-pulse-slow" />
            <span className="text-xs font-bold uppercase tracking-wider font-mono">
              Available for Freelance
            </span>
          </motion.div>

          {/* Staggered Heading */}
          <motion.h1
            variants={containerVars}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl xl:text-7xl font-black text-[#1A1A1A] leading-[1.1] tracking-tight"
            id="hero-heading"
          >
            {words.map((word, idx) => {
              const isHighlight = word === "Amazing" || word === "People";
              return (
                <span
                  key={idx}
                  className={`inline-block mr-3 overflow-hidden py-1 ${isHighlight ? "text-[#0077C0]" : ""}`}
                >
                  <motion.span
                    variants={wordVars}
                    className="inline-block font-black"
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg md:text-xl text-slate-500 font-normal leading-relaxed max-w-xl"
            id="hero-description"
          >
            I am a{" "}
            <span className="font-semibold text-primary-blue">
              {portfolioOwner.role}
            </span>{" "}
            based in {portfolioOwner.location}. I construct high performance
            digital solutions with breathtakingly polished user interfaces.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4"
            id="hero-buttons-container"
          >
            {/* Custom Hire Me Button styled like the screenshot */}
            <button
              onClick={handleHireMeClick}
              className="group flex items-center bg-[#FFC107] hover:bg-[#eab308] text-slate-900 font-extrabold pl-6 pr-2 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              id="hero-hire-me-btn"
            >
              <span className="mr-3 text-lg select-none">Hire Me !</span>
              <div className="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="w-5 h-5" />
              </div>
            </button>
          </motion.div>
        </div>

        {/* Right Column - Profile Illustration with floating/popping animations */}
        <div
          className="lg:col-span-5 flex justify-center items-center relative z-10"
          id="hero-avatar-area"
        >
          {/* Decorative Stars around the frame */}
          {/* Top Star */}
          <div className="absolute top-0 left-1/4 text-[#FFC107] animate-pulse-slow">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
            </svg>
          </div>
          {/* Right Top Star */}
          <div
            className="absolute top-10 right-10 text-[#FFC107] animate-bounce"
            style={{ animationDuration: "4s" }}
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
            </svg>
          </div>
          {/* Bottom Left Star */}
          <div className="absolute bottom-20 left-4 text-[#0077C0] animate-pulse-slow">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
            </svg>
          </div>

          {/* Main Photo Wrapper with entrance pop & float effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring" as const,
              stiffness: 120,
              damping: 14,
              delay: 0.3,
            }}
            className="relative w-full max-w-[450px] md:max-w-[500px] flex items-center justify-center animate-float-slow"
            id="hero-profile-container"
          >
            {/* Display the profile image uncropped to let the pointing hand and the integrated yellow/blue circles shine */}
            <img
              src={portfolioOwner.profileImage}
              alt={portfolioOwner.name}
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain drop-shadow-lg"
              id="hero-avatar-image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
