import { Project, Service } from "./types";

// Import image assets to ensure Vite bundles them correctly
import lidyaProfile from "./assets/image.png";
import lidyaSketch from "./assets/about me photo.png";
import exploringEthiopiaImg from "./assets/exploring Ethiopia.png";
import ecommerceShopImg from "./assets/e-commerce.png";
import vehicleRentalImg from "./assets/Vehicle Rental.png";
import mobileAppDesignImg from "./assets/mobile.png";
import brandIdentityImg from "./assets/brand.png";
import portfolioMockupImg from "./assets/portifolio.png";

export const portfolioOwner = {
  name: "Lidya Demerw",
  shortName: "Lidya",
  logoText: "LD Lidya Demerw",
  title: "Designing for Amazing People",
  role: "Full-Stack Developer & Visual Designer",
  location: "Ethiopia",
  bio: "I am a Full-Stack Developer and Visual Designer based in Ethiopia. I build high-performance websites with beautiful user interfaces and focus on designing solutions, not just visuals.",
  profileImage: lidyaProfile,
  sketchImage: lidyaSketch,
  cvUrl: "C:\Documents\Github\lidya-portfolio\src\assets\lidya_demerw_cv.pdf", // Placeholder for CV download
};

export const services: Service[] = [
  {
    id: "ui-ux",
    title: "UI/UX Design",
    iconName: "Layout",
    description:
      "Creating user-centered interactive wireframes, custom digital mockups, and high-fidelity prototype flows that delight customers.",
    highlighted: false,
  },
  {
    id: "web-dev",
    title: "Web Development",
    iconName: "Code",
    description:
      "Building blazing-fast, responsive, and search-optimized frontend apps with modern tech stacks like React, Vite, and Tailwind.",
    highlighted: true, // highlighted/featured yellow card
  },
  {
    id: "full-stack",
    title: "Full-Stack Logic",
    iconName: "Cpu",
    description:
      "Engineering robust database schemas, secure API controllers, and seamless third-party integrations to power operations.",
    highlighted: false,
  },
];

export const projects: Project[] = [
  {
    id: "exploring-ethiopia",
    title: "Exploring Ethiopia",
    tags: ["UI/UX", "Frontend"],
    image: exploringEthiopiaImg,
    link: "#",
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    tags: ["UI/UX", "Frontend"],
    image: ecommerceShopImg,
    link: "https://gulit-marketplace.vercel.app",
  },
  {
    id: "vehicle-rental",
    title: "Vehicle Rental",
    tags: ["UI/UX", "Frontend"],
    image: vehicleRentalImg,
    link: "#",
  },
  {
    id: "mobile-app",
    title: "Mobile App Design",
    tags: ["UI/UX", "Frontend"],
    image: mobileAppDesignImg,
    link: "#",
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    tags: ["UI/UX", "Frontend"],
    image: brandIdentityImg,
    link: "#",
  },
  {
    id: "portfolio-design",
    title: "Portfolio Design",
    tags: ["UI/UX", "Frontend"],
    image: portfolioMockupImg,
    link: "#",
  },
];
