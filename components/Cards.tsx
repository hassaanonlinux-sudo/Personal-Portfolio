"use client";
import { motion, type Variants } from "framer-motion";
import { RiGithubFill, RiFolder3Line } from "@remixicon/react";

// 1. Defining your secondary archive projects
const archiveProjects = [
  {
    title: "Contact Manager",
    description: "A dynamic contact management application designed with a fully responsive layout interface to handle real-time state, query filtering, and secure user data storage pipelines.",
    tech: "React.js, Vite, Tailwind CSS",
    githubUrl: "https://github.com/hassaanonlinux-sudo/Contact-Manager",
  },
  {
    title: "Shopping Cart",
    description: "An interactive e-commerce shopping client featuring modular state hooks for seamless item manipulation, quantity updates, dynamic pricing calculations, and a smooth checkout simulation.",
    tech: "JavaScript, HTML / CSS",
    githubUrl: "https://github.com/hassaanonlinux-sudo/Shopping-Cart",
  },
  {
    title: "Website Responsive A.I.",
    description: "A sleek web portal layout integrated with conditional media frameworks to dynamically adapt device viewports while optimizing cross-platform structural assets.",
    tech: "Javascript, HTML / CSS",
    githubUrl: "https://github.com/hassaanonlinux-sudo/Automatic-Reponsive---AI",
  },
];

// Animation presets matching our slow-motion staggered effect
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProjectGrid() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      // Added max-w-sm on mobile to keep the stacked cards perfectly centered and neat on phone screens
      className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-sm md:max-w-5xl px-4 md:px-0"
    >
      {archiveProjects.map((project, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          whileHover={{ y: -6 }} // Smooth lift action exactly like Gazi's layout
          className="bg-[#112240] ml-3 p-6 rounded-xl flex flex-col justify-between min-h-85 transition-all duration-300 border border-transparent hover:border-slate-700/50 shadow-lg group mt-3"
        >
          {/* Top Panel: Header Icons */}
          <div>
            <div className="flex justify-between items-center mb-6">
              {/* Swapped to RiFolder3Line to match her minimal icon line style weight */}
              <RiFolder3Line size={36} className="text-[#64FFDA] stroke-[1.5]" />
              <div className="flex gap-4 items-center text-slate-400">
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-[#64FFDA] hover:text-slate-100 transition-colors">
                  <RiGithubFill size={24} />
                </a>
              </div>
            </div>

            {/* Central Panel: Core Meta Content */}
            <h3 className="text-xl md:text-[24px] font-bold text-font tracking-wide mb-3 transition-colors ">
              {project.title}
            </h3>
            
            {/* 💡 CHANGED FOR MOBILE UX: Turned off 'text-justify' and switched to a responsive font scale 'text-base md:text-[18px]' */}
            <p className=" text-(--second-color-font) text-base md:text-[18px] text-left leading-relaxed mb-6">
              {project.description}
            </p>
          </div>

          {/* Bottom Panel: Tech Metadata Footer */}
          <div className="text-xs font-mono tracking-wide text-(--second-color-font)">
            {project.tech}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
