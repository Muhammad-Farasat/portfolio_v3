"use client";

import { cubicBezier, motion } from "framer-motion";

const experienceData = [
    {
        date: "MAY 2025 - PRESENT",
        role: "Full STACK MERN DEVELOPER",
        level: "Mid-Level",
        company: "@DOTCLICK LLC",
    },
    {
        date: "MAR 2025 - APR 2025",
        role: "FRONTEND DEVELOPER",
        level: "Intern",
        company: "@SAMZ TECHNOLOGIES",
    },
    {
        date: "FEB 2024 - JUL 2024",
        role: "FRONTEND DEVELOPER",
        level: "Intern",
        company: "@GLOBAL DEZIGNS",
    },
];

export default function Experience() {


    const containerVariants = {
        initial: { width: 0, opacity: 0 },
        animate: {
            width: "auto",
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: cubicBezier(0.76, 0, 0.24, 1), // Custom mechanical ease
                delay: 0.2
            }
        }
    };

    // Variants for individual letters
    const letterVariants = {
        initial: { opacity: 0, y: 10 },
        animate: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.8 + (i * 0.05),
                duration: 0.3
            }
        })
    };

    const sectionTitle = "EXPERIENCE";

    return (
        <section className="mt-16">
            {/* SECTION HEADER WITH LEDGER LINES */}
            <div >
                <div className="h-4 w-full" />
                <div className="py-3 flex items-center justify-center relative">
                    <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none">
                        <div className="border-t border-[#979797] w-full" />
                        <div className="border-t border-[#979797] w-full" />
                    </div>
                    <motion.h2
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex items-center bg-background px-8 z-10 relative"
                    >
                        {/* LEFT BRACKET */}
                        <span className="font-squada text-6xl md:text-7xl leading-none">
                            [
                        </span>

                        {/* EXPANDING CONTAINER */}
                        <motion.span
                            variants={containerVariants}
                            className="overflow-hidden whitespace-nowrap flex items-center justify-center px-4 md:px-8"
                        >
                            <span className="text-4xl md:text-5xl font-squada uppercase flex">
                                {sectionTitle.split("").map((char, i) => (
                                    <motion.span
                                        key={i}
                                        custom={i}
                                        variants={letterVariants}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                        </motion.span>

                        {/* RIGHT BRACKET */}
                        <span className="font-squada text-6xl md:text-7xl leading-none">
                            ]
                        </span>
                    </motion.h2>
                </div>
                <div className="h-4 w-full" />
            </div>

            {/* EXPERIENCE TABLE */}
            <div className="flex flex-col my-auto mt-16 border-t border-[#979797]">
                {experienceData.map((item, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-1 md:grid-cols-12 border-b border-[#979797] group hover:text-accent transition-colors duration-300"
                    >
                        {/* DATE COLUMN */}
                        <div className="md:col-span-3 p-6 flex items-center  md:border-r border-[#979797] font-mono text-sm md:text-base tracking-tighter">
                            [{item.date}]
                        </div>

                        {/* ROLE COLUMN */}
                        <div className="md:col-span-6 p-6 flex flex-col justify-center md:border-r border-[#979797] font-mono">
                            <span className="text-xl md:text-2xl font-bold uppercase leading-none">
                                {item.role}
                            </span>
                            <span className="text-[10px] md:text-xs opacity-70 mt-1 uppercase tracking-widest">
                                [{item.level}]
                            </span>
                        </div>

                        {/* COMPANY COLUMN */}
                        <div className="md:col-span-3 p-6 flex items-center  font-mono text-sm md:text-lg font-bold tracking-tight">
                            {item.company}
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}