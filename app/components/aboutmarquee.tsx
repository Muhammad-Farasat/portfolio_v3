"use client";
import { useRef, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";


const skills = [
  "ACCESSING CORE_SYSTEM_DATA",
  "BIOGRAPHY_LOG_v2.0",
  "INITIALIZING WHOAMI",
];

const SEP = "\u00A0\u00A0//\u00A0\u00A0";
const marqueeText = SEP + skills.join(SEP);


export default function AboutMarquee() {
  const ref = useRef<HTMLSpanElement>(null);
  const controls = useAnimationControls();

  useEffect(() => {
    if (!ref.current) return;
    const width = ref.current.offsetWidth;

    controls.start({
      x: [0, -width],
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 15,
      },
    });
  }, [controls]);

  return (
    <div className="absolute left-0 w-full overflow-hidden bg-[#211E1E] py-8 border-y border-black">
      <motion.div className="flex whitespace-nowrap w-max" animate={controls}>
        <span
          ref={ref}
          className="text-white font-mono text-sm md:text-base uppercase tracking-[0.2em] shrink-0"
        >
          {marqueeText}
        </span>
        <span
          aria-hidden
          className="text-white font-mono text-sm md:text-base uppercase tracking-[0.2em] shrink-0"
        >
          {marqueeText}
        </span>
      </motion.div>
    </div>
  );
}