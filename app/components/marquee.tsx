"use client";
import { motion } from "framer-motion";

const skills = [
  "FRONTEND",
  "BACKEND",
  "REACT",
  "NEXT",
  "NEST",
  "POSTGRES",
  "MONGO DB",
  "SUPABASE",
];

export default function Marquee() {
  // Create a string of skills separated by ++
  const marqueeText = skills.join(" ++ ") + " ++ ";

  return (
    <div className="absolute left-0 w-full overflow-hidden bg-[#211E1E] py-4 border-y border-black">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20, // Adjust speed here (higher = slower)
        }}
      >
        {/* Render the text twice to create the infinite loop effect */}
        <span className="text-white font-mono text-xl md:text-2xl uppercase tracking-widest px-4">
          {marqueeText}
          {marqueeText}
          {marqueeText}
          {marqueeText}
        </span>
      </motion.div>
    </div>
  );
}