"use client";

import { cubicBezier, motion } from "framer-motion";

const skillData = [
    {
        name: "React",
        icon: (
            <svg className="w-16 h-16 fill-accent" viewBox="0 0 24 24">
                <path d="M12 1.5C6.75 1.5 2.5 5.75 2.5 11s4.25 9.5 9.5 9.5 9.5-4.25 9.5-9.5-4.25-9.5-9.5-9.5zm0 17c-4.14 0-7.5-3.36-7.5-7.5s3.36-7.5 7.5-7.5 7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5z" />
                <circle cx="12" cy="11" r="2" />
            </svg>
        ),
        description: "I specialize in React 18 and Next.js, focus on optimizing Web Vitals and building reusable design systems that scale globally.",
    },
    {
        name: "Node JS",
        icon: (
            <svg className="w-16 h-16 fill-accent" viewBox="0 0 24 24">
                <path d="M12 2L4.5 6.34v8.66L12 19.34l7.5-4.34v-8.66L12 2zm5.5 12.06L12 16.94l-5.5-2.88V7.94L12 5.06l5.5 2.88v6.12z" />
            </svg>
        ),
        description: "I specialize in React 18 and Next.js, focus on optimizing Web Vitals and building reusable design systems that scale globally.",
    },
    {
        name: "Mongo DB",
        icon: (
            <svg className="w-16 h-16 fill-accent" viewBox="0 0 24 24">
                <path d="M12 2C7.58 2 4 5.58 4 10c0 5.5 5 10 8 12 3-2 8-6.5 8-12 0-4.42-3.58-8-8-8zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
            </svg>
        ),
        description: "I specialize in React 18 and Next.js, focus on optimizing Web Vitals and building reusable design systems that scale globally.",
    },
];

export default function Skills() {


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
                delay: 0.8 + (i * 0.05), // Starts after brackets expand
                duration: 0.3
            }
        })
    };

    const sectionTitle = "SKILLS";


    return (
        <section className="mt-36 mb-12">
            {/* SECTION HEADER WITH LEDGER LINES */}
            <div >
                <div className="h-4 w-full" />
                <div className="py-6 flex items-center justify-center relative">
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

            {/* SKILLS GRID */}
            <div className=" mx-auto px-6 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillData.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-[#D9D9D9] px-8 h-96 pt-12 flex flex-col items-center transition-all duration-300 hover:bg-[#cecece] hover:-translate-y-2"
                            style={{
                                clipPath: "polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)",
                            }}
                        >
                            {/* ICON AREA */}
                            <div className="mb-6 text-[#39FF14] filter drop-shadow-[0_0_8px_rgba(57,255,20,0.4)]">
                                {skill.icon}
                            </div>

                            {/* TITLE */}
                            <h3 className="text-3xl font-squada uppercase mb-8 tracking-tight">
                                {skill.name}
                            </h3>

                            {/* DESCRIPTION */}
                            <p className="font-mono text-sm leading-relaxed text-left self-start opacity-80">
                                {"> "} {skill.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}