"use client";
import { useRef, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";


export const Marquee = ({text, about}: {text: string[], about?: boolean}) => {
  
  const SEP = about ? "\u00A0//\u00A0" :  "\u00A0\u00A0++\u00A0\u00A0";
  
  const marqueeText = SEP + text.join(SEP);

  const ref = useRef<HTMLSpanElement>(null);
  const controls = useAnimationControls();

  useEffect(() => {
    if (!ref.current) return;

    const width = ref.current.offsetWidth; // exact pixel width of one copy

    controls.start({
      x: [0, -width],
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 20,
      },
    });
  }, [controls]);

  return (
    <div className="absolute left-0 w-full overflow-hidden bg-[#211E1E] py-8 border-y border-black">
      <motion.div className="flex whitespace-nowrap w-max" animate={controls}>
        <span
          ref={ref}
          className="text-white font-mono text-xl md:text-2xl uppercase tracking-widest shrink-0"
        >
          {marqueeText}
        </span>
        <span
          aria-hidden
          className="text-white font-mono text-xl md:text-2xl uppercase tracking-widest shrink-0"
        >
          {marqueeText}
        </span>
      </motion.div>
    </div>
  );
}