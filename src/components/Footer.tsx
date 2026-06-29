import { Github, Linkedin, Dribbble, Send } from "lucide-react";

export default function Footer() {
  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
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

  return (
    <footer
      className="bg-[#717171] text-white pt-16 pb-8 border-t border-white/10"
      id="footer"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
        {/* Column 1: Logo and Branding */}
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
        {/* Column 2: Menu Links */}
        <div className="flex flex-col space-y-4" id="footer-col-2">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
            Menu Links
          </h4>
          <ul className="space-y-2.5 text-sm font-medium">
            <li>
              <button
                onClick={() => handleLinkClick("home")}
                className="hover:text-[#FFC107] transition-colors cursor-pointer text-white/80"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("about")}
                className="hover:text-[#FFC107] transition-colors cursor-pointer text-white/80"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("services")}
                className="hover:text-[#FFC107] transition-colors cursor-pointer text-white/80"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("projects")}
                className="hover:text-[#FFC107] transition-colors cursor-pointer text-white/80"
              >
                Projects
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div className="flex flex-col space-y-4" id="footer-col-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
            Social Media
          </h4>
          <div className="flex flex-col space-y-3 text-sm">
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white/80 hover:text-pink-400 transition-colors"
            >
              <Dribbble className="w-4 h-4" />
              <span className="font-medium">Dribbble</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white/80 hover:text-sky-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="font-medium">Github</span>
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white/80 hover:text-sky-300 transition-colors"
            >
              <Send className="w-4 h-4" />
              <span className="font-medium">Telegram</span>
            </a>
          </div>
        </div>

        {/* Column 4: Services */}
        <div className="flex flex-col space-y-4" id="footer-col-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
            Services
          </h4>
          <ul className="space-y-2.5 text-sm text-white/80 font-medium">
            <li>Branding</li>
            <li>UI/UX Design</li>
            <li>Development</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom copyright */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 font-mono">
        <p id="copyright-text">Copyright: &quot;© 2026 Lidya&quot;</p>
      </div>
    </footer>
  );
}
