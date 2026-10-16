"use client";
import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { RiGithubFill, RiFolder3Line } from "@remixicon/react";

const projects = [
  {
    title: "Chat GPT",
    description: "A ChatGPT-inspired AI chatbot built with the MERN stack, Backend and Frontend.",
    tech: "MERN PROJECT",
    image: "/Images/chatgpt.png",
    githubUrl: "https://github.com/hassaanonlinux-sudo/Chat-GPT",
    liveUrl: "#",
  },
  {
    title: "SPACE X UI/UX CLONE",
    description: "A UI/UX clone of SpaceX website.",
    tech: "REACT / TAILWIND",
    image: "/Images/SPACEX.png",
    githubUrl: "https://github.com/hassaanonlinux-sudo/Space-x",
    liveUrl: "#",
  },
  {
    title: "JOB  APP ",
    description: "A job portal app for job seekers and employers. Users can browse and apply for jobs, and employers can manage job postings.",
    tech: "REACT / TAILWIND",
    image: "/Images/JOB.png",
    githubUrl: "https://github.com/hassaanonlinux-sudo/JOB-APP",
    liveUrl: "#", // Add your live demo links here if you have them
  },
  {
    title: "Career Dashboard",
    description: "A career dashboard that tell you the future of your career.",
    tech: "REACT / TAILWIND",
    image: "/Images/career.png",
    githubUrl: "https://github.com/hassaanonlinux-sudo/Career-PK",
    liveUrl: "#",
  },
  {
    title: "E-COMMERCE ADMIN DASHBOARD",
    description: "A E-commerce admin dashboard for managing products, orders, and customers.",
    tech: "REACT / TAILWIND",
    image: "/Images/ecommerce.png",
    githubUrl: "https://github.com/hassaanonlinux-sudo/E-Commerce-Admin-Panel",
    liveUrl: "#",
  },
  
];

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <>
      {/* 📱 1. MOBILE RESPONSIVE LAYOUT STACK: Visible ONLY on mobile/tablets (md:hidden) */}
      <div className="flex flex-col gap-8 w-full max-w-sm mx-auto px-4 md:hidden">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-[#112240] p-6 rounded-2xl flex flex-col justify-between min-h-[360px] border border-slate-800 shadow-xl"
          >
            {/* Top Row: Decorative Folder & Repository Links */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <RiFolder3Line size={36} className="text-[#64FFDA] stroke-[1.5]" />
                <div className="flex gap-4 items-center text-slate-400">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:text-[#64FFDA] transition-colors"
                  >
                    <RiGithubFill size={24} />
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:text-[#64FFDA] transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Main Content Area */}
              <h3 className="text-xl font-bold text-slate-100 tracking-wide mb-3 lowercase">
                {project.title}
              </h3>
              
              {/* Optional: Project Screenshot Slot to replicate her thumbnail layout */}
              <div className="w-full h-36 rounded-xl overflow-hidden mb-4 border border-slate-800 bg-slate-950">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>

              <p className="text-slate-400 text-[14px] leading-relaxed text-justify mb-6">
                {project.description}
              </p>
            </div>

            {/* Bottom Metadata Bar */}
            <div className="text-xs font-mono tracking-widest text-[#64FFDA]">
              {project.tech}
            </div>
          </div>
        ))}
      </div>

      {/* 💻 2. DESKTOP INTERACTIVE CAROUSEL: Hidden on mobile layouts, reveals on md/lg viewports (hidden md:block) */}
      <div className="hidden md:block relative w-full max-w-5xl mx-auto h-125 bg-[#0A192F] rounded-4xl overflow-hidden shadow-2xl border border-slate-800">
        <div className="relative w-full h-full flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full flex flex-col justify-end items-center text-center p-8 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(10, 25, 47, 0.95) 40%, rgba(10, 25, 47, 0.4) 70%, rgba(0,0,0,0) 100%), url(${projects[currentIndex].image})`,
              }}
            >
              <div className="max-w-2xl z-10 select-none pb-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-slate-100 mb-4">
                  {projects[currentIndex].title}
                </h2>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-3">
                  {projects[currentIndex].description}
                </p>
                <span className="block text-xs md:text-sm font-mono tracking-widest text-[#64FFDA] mb-4">
                  {projects[currentIndex].tech}
                </span>

                <div className="flex gap-6 justify-center items-center">
                  <a
                    href={projects[currentIndex].githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${projects[currentIndex].title} GitHub repository`}
                    className="text-slate-300 hover:text-[#64FFDA] transition-colors p-1"
                  >
                    <RiGithubFill size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={handlePrev}
          aria-label="Previous project"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-slate-400 hover:text-[#64FFDA] bg-slate-900/40 p-2 rounded-full backdrop-blur-sm transition-colors"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next project"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-slate-400 hover:text-[#64FFDA] bg-slate-900/40 p-2 rounded-full backdrop-blur-sm transition-colors"
        >
          <ChevronRight size={28} />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to project ${index + 1}`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
            }}
              className={`h-1 transition-all duration-300 rounded-full ${
                index === currentIndex ? "w-8 bg-[#64FFDA]" : "w-4 bg-slate-600 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
