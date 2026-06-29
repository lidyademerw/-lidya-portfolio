import { useState, useEffect } from "react";
import { Menu, X, ArrowDownToLine } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioOwner } from "../data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active link detection
      const sections = ["home", "services", "projects", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => handleLinkClick("home")}
          className="flex items-center cursor-pointer select-none"
          id="logo-container"
        >
          {/* This is your actual logo image */}
          <img
            src="../src/assets/logo.png"
            alt="Lidya Demerw Logo"
            className="h-14 w-auto object-contain"
          />
          <div className="flex flex-col leading-[1.1]">
            <span className="text-[20px] font-bold text-[#0077C0] tracking-tight">
              Lidya
            </span>
            <span className="text-[20px] font-bold text-[#0077C0] tracking-tight">
              Demerw
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`text-sm font-medium transition-colors relative py-1 hover:text-primary-blue cursor-pointer ${
                activeSection === link.id
                  ? "text-primary-blue font-semibold"
                  : "text-slate-600"
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-blue"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* CTA Download CV */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href={portfolioOwner.cvUrl}
            className="flex items-center space-x-2 bg-[#FFC107] hover:bg-[#eab308] px-5 py-2 rounded-full text-sm font-bold shadow-sm transition-all duration-300 transform hover:scale-105 select-none text-slate-900"
            id="download-cv-btn"
          >
            <span>Download CV</span>
            <ArrowDownToLine className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-700 hover:text-primary-blue transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            id="mobile-drawer"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left text-base font-medium py-2 border-b border-slate-50 transition-colors cursor-pointer ${
                    activeSection === link.id
                      ? "text-primary-blue font-semibold"
                      : "text-slate-600"
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <a
                href="
                public/lidya_demerw_cv.pdf"
                download="Lidya_Demerw_CV.pdf"
                className="flex items-center justify-center space-x-2 bg-[#FFC107] hover:bg-[#eab308] text-slate-900 px-4 py-2 rounded-full font-bold transition-all"
              >
                <span>Download CV</span>
                <ArrowDownToLine className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
