"use client";
import { motion, Variants } from "framer-motion";
import { Play } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="lg:min-h-[65vh] w-full flex flex-col lg:flex-row items-center justify-center px-6 md:px-12  py-20 lg:py-20 select-none scroll-mt-20"
    >
      {/* Left side text container */}
      <div className="left w-full lg:max-w-xl">
        <div className="heading flex justify-start items-center">
          {/* Made header highly visible, clean, and bold */}
          <h1 className="text-3xl md:text-5xl font-bold text-font">/ about me</h1>
          <div className=" hidden lg:block section-header"></div>
        </div>
        
        <div className="about-content">
          {/* 💡 CHANGED: Swapped broken color variables for clean, high-contrast Tailwind text-slate-300 */}
          {/* 📱 MOBILE: text-base (16px) makes paragraph lines perfectly crisp and readable on a phone viewport */}
          {/* 💻 DESKTOP: md:text-lg scales the text up gracefully for large laptop displays */}
          <p className=" text-xl md:text-lg pt-5 w-full lg:w-[90%] text-(--second-color-font) text-justify ">
            I am currently a{" "}
            <span className="font-bold text-hover">Full Stack Developer</span>{" "}
            with amazing skills and experience. I help you build a product,
            feature or website. Look through some of my work and experience.
            <p className="pt-3 text-(--text-color2)  md:text-lg font-bold  ">
              Loyalty is a two way street, if I am asking for it from you, then you are getting it from me {" "}
            </p>
          </p>
          
        </div>
        
        <div className="about-description">
          <p className="text-base md:text-lg pt-5 w-full lg:w-[90%] text-(--second-color-font) text-justify leading-relaxed">
            Here are some technologies and design tools I have been working with:
          </p>
        </div>
        
        
  <div className="tech-stack mt-5">
            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid lg:text-[16px]  text-(--second-color-font) grid-cols-2 gap-4 mt-5"
            >
              <motion.li 
                variants={itemVariants} 
                whileHover={{ scale: 1.05, x: 5 }} 
                className="font-bold flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Play size={14} className="text-hover" />
                HTML
              </motion.li>
              <motion.li 
                variants={itemVariants} 
                whileHover={{ scale: 1.05, x: 5 }} 
                className="font-bold flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Play size={14} className="text-hover" />
                CSS
              </motion.li>
              <motion.li 
                variants={itemVariants} 
                whileHover={{ scale: 1.05, x: 5 }} 
                className="font-bold flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Play size={14} className="text-hover" />
                Tailwind CSS
              </motion.li>
              <motion.li 
                variants={itemVariants} 
                whileHover={{ scale: 1.05, x: 5 }} 
                className="font-bold flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Play size={14} className="text-hover" />
                JavaScript ES6+
              </motion.li>
              <motion.li 
                variants={itemVariants} 
                whileHover={{ scale: 1.05, x: 5 }} 
                className="font-bold flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Play size={14} className="text-hover" />
                React
              </motion.li>
              <motion.li 
                variants={itemVariants} 
                whileHover={{ scale: 1.05, x: 5 }} 
                className="font-bold flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Play size={14} className="text-hover" />
                Next.js
              </motion.li>
              <motion.li 
                variants={itemVariants} 
                whileHover={{ scale: 1.05, x: 5 }} 
                className="font-bold flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Play size={14} className="text-hover" />
                Node.js
              </motion.li>
              <motion.li 
                variants={itemVariants} 
                whileHover={{ scale: 1.05, x: 5 }} 
                className="font-bold flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Play size={14} className="text-hover" />
                Express.js
              </motion.li>
              <motion.li 
                variants={itemVariants} 
                whileHover={{ scale: 1.05, x: 5 }} 
                className="font-bold flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Play size={14} className="text-hover" />
                MongoDB
              </motion.li>
              <motion.li 
                variants={itemVariants} 
                whileHover={{ scale: 1.05, x: 5 }} 
                className="font-bold flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Play size={14} className="text-hover" />
                UI/UX Design
              </motion.li>
              <motion.li 
                variants={itemVariants} 
                whileHover={{ scale: 1.05, x: 5 }} 
                className="font-bold flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Play size={14} className="text-hover" />
                Figma
              </motion.li>
            </motion.ul>
          </div>
        
        
        <div className="line-about-me text-base md:text-lg pt-5 w-full lg:w-[90%] text-(--second-color-font) text-justify leading-relaxed">
          <p>In my free time, I like to play football, and love to play Chess and I am very ambitious about Solving World Problems Like Elon Musk😉. And play battle royale games too.</p>
        </div>
      </div>

      {/* Right side image container */}
      <div className="right hidden lg:flex w-80 h-80 lg:w-96 lg:h-96 shrink-0">
        <img
          src="/Images/man.jpg"
          alt="Hassaan profile illustration"
          className="w-full h-full object-cover rounded-2xl hover:-translate-y-1 transition-transform duration-300 shadow-xl"
        />
      </div>
    </section>
  );
}
