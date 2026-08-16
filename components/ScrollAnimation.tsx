"use client"; // Required for Framer Motion in Next.js App Router

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function ScrollAnimation({ children, className = "", id }: ScrollProps) {
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y: 60 }} // Starts invisible and 60px lower
      whileInView={{ opacity: 1, y: 0 }} // Animates to full opacity and original position
      viewport={{ once: true, margin: "-100px" }} // Triggers slightly before it enters the screen
      transition={{ duration: 0.8, ease: "easeOut" }} // Slow-motion 0.8 second smooth ease
    >
      {children}
    </motion.div>
  );
}
