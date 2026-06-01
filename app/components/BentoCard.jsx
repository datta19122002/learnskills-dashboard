"use client";

import { motion } from "framer-motion";

export default function BentoCard({
  children,
  className = "",
  delay = 0,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        scale: 1.02,
        y: -4,
      }}
      transition={{
        opacity: {
          duration: 0.4,
          delay,
        },
        y: {
          type: "spring",
          stiffness: 300,
          damping: 20,
          delay,
        },
        scale: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      }}
      className={`
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        hover:border-indigo-300
        hover:shadow-xl
        transition-colors
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}