"use client";
import { motion } from "framer-motion";

export default function AboutMarquee() {
  const text = "ACCESSING CORE_SYSTEM_DATA /// BIOGRAPHY_LOG_v2.0 /// INITIALIZING WHOAMI /// ";

  return (
    <div className="absolute left-0 z-50 w-full overflow-hidden bg-[#1A1A1A] py-3 border-y border-black/50">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 15, // Slightly faster than the skills marquee for "data processing" vibe
        }}
      >
        {/* Render text multiple times to ensure no gaps */}
        {[...Array(4)].map((_, i) => (
          <span 
            key={i} 
            className="text-white font-mono text-sm md:text-base uppercase tracking-[0.2em] px-2"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}