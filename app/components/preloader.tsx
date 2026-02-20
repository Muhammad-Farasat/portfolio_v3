"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Single digit roller slot
function DigitRoller({ digit, id }: { digit: string; id: string }) {
  // unified wrapper (even for "%") with a fixed, font-relative height so
  // entering/exiting digits don't cause layout jitter.
  return (
    <span
      className="inline-block overflow-hidden relative align-bottom"
      style={{  lineHeight: "1em" }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={`${id}-${digit}`} // keyed on BOTH position + digit value
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="block text-white text-4xl md:text-8xl font-bebas tracking-tighter leading-none"
          style={{ lineHeight: "1em" }}
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 600);
          return 100;
        }
        return Math.min(prev + Math.floor(Math.random() * 4) + 1, 100);
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  const logs = [
    "INITIALIZING_KERNEL_v4.2.0...",
    "FETCHING_STYLING_ASSETS...",
    "LOADING_ANIME_ENGINE...",
    "MOUNTING_BRUTALIST_GRID...",
    "CONNECTING_TO_BIO_DATABASE...",
    "ESTABLISHING_NEURAL_LINK...",
  ];

  // Pad to always 3 digits so slots don't shift layout e.g. "007", "042", "100"
  const digits = String(progress).padStart(3, "0").split("");

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-9999 bg-[#0A0A0A] flex flex-col items-center justify-center font-mono p-6"
        >
          {/* TOP DECORATION */}
          <div className="absolute top-10 left-10 text-[#39FF14] text-xs opacity-40 uppercase tracking-widest hidden md:block">
            System_Boot_Sequence // Farasat_OS
          </div>

          <div className="w-full max-w-xl">
            {/* TECHNICAL LOGS */}
            <div className="mb-4 h-20 overflow-hidden text-[#39FF14] text-[10px] md:text-xs opacity-60">
              {logs.slice(0, Math.floor(progress / 15)).map((log, i) => (
                <div key={i} className="mb-1">{`> ${log}`}</div>
              ))}
            </div>

            {/* ROLLING PROGRESS PERCENTAGE */}
            <div className="flex items-baseline justify-between mb-2">
              <div className="flex items-baseline gap-0">
                {digits.map((digit, i) => (
                  <DigitRoller key={i} id={String(i)} digit={digit} />
                ))}
                <DigitRoller  digit="%" id="percent" />
              </div>
              <span className="text-[#39FF14] text-xs animate-pulse">
                [ LOADING... ]
              </span>
            </div>

            {/* BRUTALIST PROGRESS BAR */}
            <div className="w-full h-4 border border-white/20 p-0.5">
              <motion.div
                className="h-full bg-[#39FF14]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* BOTTOM DECORATION */}
          <div className="absolute bottom-10 right-10 flex flex-col items-end gap-2 opacity-30 text-[10px] text-white uppercase">
            <span>Core: 0x823_System</span>
            <span>Auth: Verified_User</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}