"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  BookOpen,
  Globe,
} from "lucide-react";

const icons = {
  Code,
  Database,
  BookOpen,
  Globe,
};



export default function CourseCard({
  course,
  delay,
}) {
  const Icon =
    icons[course.icon_name] || BookOpen;

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
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        bg-white
        border
        border-slate-200
        p-5
        shadow-sm
      "
    >
        


      <div className="absolute inset-0 opacity-40">
        <div className="absolute h-32 w-32 bg-indigo-200 blur-3xl rounded-full -top-8 -left-8" />
        <div className="absolute h-32 w-32 bg-purple-200 blur-3xl rounded-full bottom-0 right-0" />
      </div>

      <div className="relative z-10">
        <Icon
          size={24}
          className="text-indigo-600"
        />

        <h2 className="mt-4 font-semibold text-lg">
          {course.title}
        </h2>

        <div className="mt-5">
          <div className="flex justify-between mb-2 text-sm">
            <span>Progress</span>
            <span>{course.progress}%</span>
          </div>

          <div className="w-full h-2 bg-slate-200 rounded-full">
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${course.progress}%`,
              }}
              transition={{
                duration: 1,
              }}
              className="h-2 rounded-full bg-indigo-600"
            />
          </div>
        </div>
      </div>
    </motion.div>


  );
}

