"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="min-h-screen mb-12">
            <header className="w-full grid grid-cols-2 border-b border-[#979797] uppercase">
                {/* Left Side: PORT_ */}
                <div className=" border-r border-black/20 px-2 ">
                    <h1 className="text-[16vw] text-center font-pixel tracking-wide leading-none">
                        PORT_
                    </h1>
                </div>

                {/* Right Side: FOLIO */}
                <div className="">
                    <h1 className="text-[16vw] text-center font-pixel tracking-wide leading-none">
                        FOLIO
                    </h1>
                </div>
            </header>

            {/* 1. THE MASSIVE HEADLINE */}
            <div className="py-12  max-w-350 mx-auto px-2 ">
                <h2 className="text-[19vw]  leading-[0.85] font-squada uppercase tracking-tight">
                    I am Farasat
                </h2>
                <h2 className="text-[11.7vw]  leading-[0.85] font-squada uppercase tracking-tight">
                    Full Stack Developer
                </h2>
            </div>

            {/* 2. THE CONTENT GRID (Stats + Status Box) */}
            <div className="grid grid-cols-1 md:grid-cols-3">

                {/* LEFT COLUMN: Stats */}
                <div className=" flex flex-col gap-6">
                    <StatBox label="EXPERIENCE" value="2+" />
                    <StatBox label="PROJECTS" value="10+" />
                </div>

                {/* RIGHT COLUMN: Status Card */}
                <div className="flex items-center col-span-2 mr-12 justify-end bg-background">
                    <div
                        className="relative w-[80%] h-52 rounded-2xl bg-[#dcd6c8] p-8 shadow-sm"
                        style={{ clipPath: "polygon(0 0, 50% 0, 60% 16%, 100% 18%, 100% 100%, 0 100%)" }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <p className="font-mono relative text-xl text-[#484642]  uppercase tracking-widest">Status

                                <span className="w-3 h-3 absolute top-0 -right-2 rounded-full bg-[#39FF14] animate-pulse" />
                            </p>
                        </div>

                        <p className="font-mono text-[#484642] text-lg mb-12 ">
                            {">"} I am currently available
                            <motion.span
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                _
                            </motion.span>
                        </p>

                        <div className="flex justify-end pr-4">
                            <button className="font-mono text-lg hover:gap-x-4 hover:pr-1 cursor-pointer flex items-center gap-x-2 hover:text-accent transition-all">
                                <span className="font-squada text-3xl ">[</span>
                                CONTACT_ME
                                <span className="font-squada text-3xl">]</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

// Sub-component for the Stat Boxes
function StatBox({ label, value }: { label: string; value: string }) {
    return (
        <div className="border-y h-22 border-r border-[#979797] p-4 flex justify-between items-center max-w-sm">
            <span className="font-mono text-2xl tracking-widest">{label}</span>
            <span className="font-mono text-xl font-bold">{value}</span>
        </div>
    );
}