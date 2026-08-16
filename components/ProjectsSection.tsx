"use client";
import { MoveRight } from 'lucide-react';
import ProjectSlider from "./ImagesSlider";
import { RiFolder3Line } from "@remixicon/react";
import ProjectGrid from './Cards';
import { motion, type Variants } from "framer-motion";

// Animation settings matching your tech-stack transition speed
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="lg:min-h-[70vh] w-full  px-6 md:px-12 py-20 lg:py-30 select-none scroll-mt-20">

      
      {/* Moved your elements inside the motion.div wrapper to apply the animation properly */}
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="heading flex lg:justify-between items-start lg:flex-row flex-col select-none"
      >
        <h1 className="text-3xl md:text-5xl   lg:mr-2 font-bold">/ Projects</h1>

        <div className=" hidden lg:block section-long-header lg:mr-9"></div>
        <div className="view-all ">
          <a className='flex text-[18px] text-hover lg:ml-6 items-center gap-2' href="https://github.com/hassaanonlinux-sudo">
            View all projects <MoveRight size={20} />
          </a>
        </div>
      </motion.div>

      <div className=" flex image-slider w-full lg:h-[50vh] m-2">
        <ProjectSlider />
      </div>
      
      <div className="  lgflex projects-card mt-8">
        <ProjectGrid />
      </div>

    </section>
  );
}
