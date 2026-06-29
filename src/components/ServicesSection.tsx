import { motion } from "motion/react";
import { services } from "../data";
import { Service } from "../types";

export default function ServicesSection() {
  // This function draws the specific icons from your design
  const renderIllustration = (id: string, isHighlighted: boolean) => {
    const strokeColor = isHighlighted ? "#1E293B" : "#1E293B"; // Dark lines for both

    if (id === "ui-ux") {
      return (
        <svg
          width="80"
          height="64"
          viewBox="0 0 80 64"
          fill="none"
          className="mb-6"
        >
          <rect
            x="2"
            y="2"
            width="76"
            height="60"
            rx="6"
            stroke={strokeColor}
            strokeWidth="3"
            fill="white"
          />
          <path d="M2 14H78" stroke={strokeColor} strokeWidth="3" />
          <circle cx="10" cy="8" r="2" fill="#FF5F56" />
          <circle cx="16" cy="8" r="2" fill="#FFBD2E" />
          <circle cx="22" cy="8" r="2" fill="#27C93F" />
          <circle cx="28" cy="38" r="12" fill="#FFC107" />
          <text
            x="28"
            y="42"
            textAnchor="middle"
            fontSize="10"
            fontWeight="bold"
            fill={strokeColor}
          >
            UX
          </text>
          <rect x="46" y="32" width="20" height="3" rx="1.5" fill="#E2E8F0" />
          <rect x="46" y="40" width="20" height="3" rx="1.5" fill="#E2E8F0" />
        </svg>
      );
    }

    if (id === "web-dev") {
      return (
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          className="mb-6"
        >
          <circle
            cx="40"
            cy="40"
            r="30"
            stroke={strokeColor}
            strokeWidth="2.5"
          />
          <ellipse
            cx="40"
            cy="40"
            rx="12"
            ry="30"
            stroke={strokeColor}
            strokeWidth="2.5"
          />
          <path d="M10 40H70" stroke={strokeColor} strokeWidth="2.5" />
          <path
            d="M15 25H65"
            stroke={strokeColor}
            strokeWidth="1.5"
            opacity="0.5"
          />
          <path
            d="M15 55H65"
            stroke={strokeColor}
            strokeWidth="1.5"
            opacity="0.5"
          />
        </svg>
      );
    }

    if (id === "full-stack") {
      return (
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          className="mb-6"
        >
          <path
            d="M15 30L40 18L65 30L40 42L15 30Z"
            fill="#FFC107"
            stroke={strokeColor}
            strokeWidth="2.5"
          />
          <path
            d="M15 40L40 52L65 40"
            stroke={strokeColor}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M15 50L40 62L65 50"
            stroke={strokeColor}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      );
    }
    return null;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 80,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FFC107]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center"
          id="services-header"
        >
          <span className="text-sm font-bold uppercase tracking-widest font-mono text-[#0077C0] mb-2">
            services
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tight mb-4">
            My Services
          </h2>
          <p className="text-base md:text-lg text-slate-500">
            I provide high-quality design and development solutions built to
            scale.
          </p>
        </div>

        {/* Services Cards Grid with staggered reveal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          id="services-grid"
        >
          {services.map((service: Service) => {
            const isHighlighted = !!service.highlighted;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative p-8 py-12 rounded-[32px] border flex flex-col items-center text-center transition-all duration-300 ${
                  isHighlighted
                    ? "bg-[#FFC107] border-[#FFC107] text-slate-900 shadow-xl shadow-[#FFC107]/20"
                    : "bg-white border-slate-100 text-slate-900 shadow-lg hover:shadow-xl"
                }`}
                id={`service-card-${service.id}`}
              >
                {/* Visual Highlight Dot for non-highlighted cards */}
                {!isHighlighted && (
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#0077C0]/30 group-hover:bg-[#0077C0] transition-colors duration-300" />
                )}

                {/* Custom Big SVG Illustration */}
                <div className="mb-6 flex items-center justify-center">
                  {renderIllustration(service.id, isHighlighted)}
                </div>

                {/* Centered Card Title */}
                <h3 className="text-2xl font-black tracking-tight">
                  {service.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
