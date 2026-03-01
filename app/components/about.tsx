"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import AboutMarquee from "./aboutmarquee";
import { Marquee } from "./marquee";

export default function AboutTerminal() {
  // We use a ref to define the "fence" the terminal can be dragged in
  const constraintsRef = useRef(null);

  return (
    <>
      <Marquee text={[
        "ACCESSING CORE_SYSTEM_DATA",
        "BIOGRAPHY_LOG_v2.0",
        "INITIALIZING WHOAMI",
        ""
      ]} about={true} />

      <section
        ref={constraintsRef}
        className="relative h-screen w-full mt-40 bg-background overflow-hidden flex items-center justify-center p-4 md:p-20"
      >
        {/* Background Decoration: Subtly indicating this is a draggable zone */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none font-mono text-[10px] overflow-hidden leading-none select-none">
          {Array(100).fill("DRAG_INTERFACE_ENABLED ").join("")}
        </div>

        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragMomentum={false}
          className="w-full max-w-6xl bg-[#1A1A1A] rounded-lg shadow-2xl cursor-grab active:cursor-grabbing overflow-hidden border border-white/10"
        >
          {/* TERMINAL HEADER BAR */}
          <div className="bg-[#333333] px-4 py-2 flex items-center justify-between select-none">
            {/* Mac Style Dots */}
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>

            {/* Window Title */}
            <div className="text-white/40 font-mono text-xs hidden md:block">
              farasat_bio.sh — 80x24
            </div>

            {/* Windows Style Icons */}
            <div className="flex gap-4 text-white/60 font-mono text-xs">
              <span>_</span>
              <span>□</span>
              <span>×</span>
            </div>
          </div>

          {/* TERMINAL BODY */}
          <div className="p-6 font-mono text-sm md:text-base min-h-140">
            {/* Command 1 */}
            <div className="mb-8">
              <div className="flex gap-2 mb-1">
                <span className="text-[#39FF14]">farasat@portfolio:~$</span>
                <span className="text-white">whoami</span>
              </div>
              <div className="text-[#39FF14] opacity-90 pl-4">
                {">"} Software Engineering Student. Full-stack Developer.
              </div>
            </div>

            {/* Command 2 */}
            <div className="mb-8">
              <div className="flex gap-2 mb-1">
                <span className="text-[#39FF14]">farasat@portfolio:~$</span>
                <span className="text-white">run mission_statement</span>
              </div>
              <div className="text-[#39FF14] opacity-60 pl-4 italic">
                {">"} [ LOADING... ]
              </div>
              <div className="text-[#39FF14] opacity-90 pl-4 mt-2 max-w-xl">
                {">"} "I build high-performance systems that look as good as
                they function. No fluff. Just logic."
              </div>
            </div>

            {/* Blinking Cursor */}
            <div className="flex gap-2">
              <span className="text-[#39FF14]">farasat@portfolio:~$</span>
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2.5 h-5 bg-[#39FF14]"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}