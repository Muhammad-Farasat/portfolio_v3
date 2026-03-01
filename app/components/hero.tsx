"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 1000);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleHoverStart = () => setGlitch(true);
  const handleHoverEnd = () => setTimeout(() => setGlitch(false), 800);

  return (
    <>
      <style>{`
        @keyframes glitch-clip-1 {
          0%   { clip-path: inset(20% 0 60% 0); transform: translate(-4px, 0); opacity: 1; }
          20%  { clip-path: inset(55% 0 10% 0); transform: translate(4px, 0); }
          40%  { clip-path: inset(5%  0 80% 0); transform: translate(-3px, 2px); }
          60%  { clip-path: inset(70% 0 5%  0); transform: translate(3px, -2px); }
          80%  { clip-path: inset(30% 0 40% 0); transform: translate(-2px, 1px); }
          100% { clip-path: inset(0% 0 100% 0);  transform: translate(0, 0); opacity: 0; }
        }

        @keyframes glitch-clip-2 {
          0%   { clip-path: inset(60% 0 10% 0); transform: translate(5px, 0);  opacity: 1; }
          25%  { clip-path: inset(10% 0 70% 0); transform: translate(-5px, 0); }
          50%  { clip-path: inset(80% 0 5%  0); transform: translate(4px, -1px); }
          75%  { clip-path: inset(35% 0 45% 0); transform: translate(-4px, 1px); }
          100% { clip-path: inset(0%  0 100% 0); transform: translate(0, 0); opacity: 0; }
        }

        @keyframes glitch-rgb-shift {
          0%   { text-shadow: 3px 0 0 rgba(255,0,60,0.8), -3px 0 0 rgba(0,255,255,0.8); }
          20%  { text-shadow: -4px 0 0 rgba(255,0,60,0.8), 4px 0 0 rgba(0,255,255,0.8); }
          40%  { text-shadow: 2px 2px 0 rgba(255,0,60,0.8), -2px -2px 0 rgba(0,255,255,0.8); }
          60%  { text-shadow: -3px 1px 0 rgba(255,0,60,0.8), 3px -1px 0 rgba(0,255,255,0.8); }
          80%  { text-shadow: 1px -2px 0 rgba(255,0,60,0.8), -1px 2px 0 rgba(0,255,255,0.8); }
          100% { text-shadow: none; }
        }

        .glitch-base {
          position: relative;
          display: inline-block;
        }

        .glitch-base.is-glitching {
          animation: glitch-rgb-shift 0.8s steps(1) forwards;
        }

        .glitch-base::before,
        .glitch-base::after {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          font-size: inherit;
          font-family: inherit;
          font-weight: inherit;
          letter-spacing: inherit;
          line-height: inherit;
          text-align: inherit;
          width: 100%;
          opacity: 0;
          pointer-events: none;
        }

        .glitch-base::before { color: rgba(255, 0, 60, 0.9); left: 0; }
        .glitch-base::after  { color: rgba(0, 255, 255, 0.9); left: 0; }

        .glitch-base.is-glitching::before {
          animation: glitch-clip-1 0.8s steps(1) forwards;
        }

        .glitch-base.is-glitching::after {
          animation: glitch-clip-2 0.8s steps(1) 0.05s forwards;
        }
      `}</style>

      <section className="min-h-screen mb-8 sm:mb-12">

        {/* ── HEADER ── */}
        <header
          onMouseEnter={handleHoverStart}
          onMouseLeave={handleHoverEnd}
          className="cursor-default w-full grid grid-cols-2 border-b border-[#979797] uppercase"
        >
          <div className="border-r border-black/20 px-2">
            <h1
              className={`glitch-base text-[16vw] max-sm:text-[16vw] text-center font-pixel tracking-wide leading-none${glitch ? " is-glitching" : ""}`}
              data-text="PORT_"
            >
              PORT_
            </h1>
          </div>
          <div>
            <h1
              className={`glitch-base text-[16vw] max-sm:pl-1 max-sm:text-[16vw] text-center font-pixel tracking-wide leading-none${glitch ? " is-glitching" : ""}`}
              data-text="FOLIO"
            >
              FOLIO
            </h1>
          </div>
        </header>

        {/* ── HEADLINE ── */}
        <div className="py-8 sm:py-12 text-center cursor-default px-0 overflow-hidden">
          <h2
            className="leading-[0.85] font-squada uppercase tracking-tight whitespace-nowrap"
            style={{ fontSize: "clamp(2rem, 19.2vw, 99rem)" }}
          >
            I am Farasat
          </h2>
          <h2
            className="leading-[0.85] font-squada uppercase tracking-tight whitespace-nowrap"
            style={{ fontSize: "clamp(1.2rem, 11.85vw, 99rem)" }}
          >
            Full Stack Developer
          </h2>
        </div>

        {/* ── CONTENT GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 px-3 sm:px-0">

          {/* Stats */}
          <div className="flex flex-row max-sm:flex-col md:flex-col gap-4 md:gap-6">
            <StatBox label="EXPERIENCE" value="2+" />
            <StatBox label="PROJECTS" value="10+" />
          </div>

          {/* Status Card */}
          <div className="flex items-center col-span-1 md:col-span-2 md:mr-12 justify-center md:justify-end bg-background">
            <div
              className="relative w-full md:w-[80%] min-h-45 sm:h-52 rounded-2xl bg-[#dcd6c8] p-6 sm:p-8 shadow-sm"
              style={{
                clipPath: "polygon(0 0, 45% 0, 55% 12%, 100% 14%, 100% 100%, 0 100%)",
              }}
            >
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <p className="font-mono relative text-lg max-sm:text-sm text-[#484642] uppercase tracking-widest">
                  Status
                  <span className="w-3 h-3 absolute top-0 -right-2 rounded-full bg-[#39FF14] animate-pulse" />
                </p>
              </div>

              <p className="font-mono text-[#484642] text-base max-sm:text-sm mb-8 sm:mb-12">
                {">"} I am currently available
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  _
                </motion.span>
              </p>

              <div className="flex justify-end pr-2 sm:pr-4">
                <a
                  href="https://mail.google.com/mail/?view=cm&to=farasatkhan687@gmail.com&su=Hey, let's work together!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="font-mono text-base max-sm:text-sm hover:gap-x-4 hover:pr-1 cursor-pointer flex items-center gap-x-2 hover:text-accent transition-all">
                    <span className="font-squada text-2xl sm:text-3xl">[</span>
                    CONTACT_ME
                    <span className="font-squada text-2xl sm:text-3xl">]</span>
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-[#979797] sm:border-y sm:border-r sm:border-l-0 h-20 sm:h-22 p-3 sm:p-4 flex justify-between items-center flex-1 md:flex-none md:max-w-sm">
      <span className="font-mono text-lg sm:text-2xl tracking-widest">{label}</span>
      <span className="font-mono text-lg sm:text-xl font-bold">{value}</span>
    </div>
  );
}