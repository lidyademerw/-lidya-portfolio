import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "../data";
import { Project } from "../types";

export default function LatestProjects() {
  const [showAll, setShowAll] = useState(false);

  // Divide projects based on state
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
    exit: {
      y: 20,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          className="flex items-end justify-between mb-16"
          id="projects-header"
        >
          <div className="text-left">
            <span className="text-sm font-bold uppercase tracking-widest font-mono text-[#0077C0] mb-2 block">
              portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tight">
              Latest Projects
            </h2>
          </div>

          {/* See All Action Toggle */}
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center space-x-2 text-base font-extrabold text-slate-800 hover:text-[#0077C0] transition-colors cursor-pointer select-none py-2"
            id="see-all-toggle-btn"
          >
            <span>{showAll ? "Show Less" : "See All"}</span>
            {showAll ? (
              <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            ) : (
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            )}
          </button>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="projects-grid"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project: Project, index: number) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ y: -10, scale: 1.03 }}
                className="group flex flex-col bg-slate-50 border border-slate-100/80 rounded-[32px] overflow-hidden p-4 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
                id={`project-card-${project.id}`}
              >
                {/* Project Image Area wrapped in a link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  id={`project-link-${project.id}`}
                >
                  <div
                    className="relative aspect-[4/3] rounded-[24px] overflow-hidden bg-slate-200 group cursor-pointer"
                    id={`project-img-container-${project.id}`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      id={`project-image-${project.id}`}
                    />

                    {/* Subtle hover overlay */}
                    <div className="absolute inset-0 bg-[#0077C0]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/95 text-slate-900 p-3.5 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <ExternalLink className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </a>

                {/* Content Area */}
                <div className="flex flex-col p-4 text-left">
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#0077C0] transition-colors duration-200">
                    {project.title}
                  </h3>

                  {/* Pill Tags */}
                  <div
                    className="flex flex-wrap gap-2 mt-auto"
                    id={`project-tags-${project.id}`}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-bold tracking-wide uppercase font-mono px-3 py-1 rounded-full bg-white border border-slate-200/60 text-slate-500 shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
