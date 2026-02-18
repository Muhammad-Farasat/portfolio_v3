"use client";

import { motion, cubicBezier } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
    {
        id: "01",
        title: "PROJECT 1",
        stack: "React + Express",
        link: "#",
    },
    {
        id: "02",
        title: "PROJECT 2",
        stack: "React + Express",
        link: "#",
    },
    {
        id: "03",
        title: "PROJECT 3",
        stack: "React + Express",
        link: "#",
    },
    {
        id: "04",
        title: "PROJECT 4",
        stack: "React + Express",
        link: "#",
    },
];

export default function Projects() {

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

    const sectionTitle = "PROJECTS";


    return (
        <section className="mt-40 ">
            {/* SECTION HEADER */}
            <div className="py-6 flex items-center justify-center relative overflow-hidden">
                {/* Horizontal background lines to match design */}
                <div className="absolute top-2 w-full border-t border-[#979797]" />
                <div className="absolute bottom-2 w-full border-t border-[#979797]" />

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

            {/* PROJECTS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 px-2 gap-4 mt-4 ">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`group px-4 bg-[#D9D9D9] relative flex flex-col gap-12`}
                    >
                        {/* ID TAG */}
                        <div className="absolute top-0 left-0 bg-[#808080] text-white font-squada text-sm px-3 py-1 uppercase tracking-wide">
                            {project.id}
                        </div>

                        {/* CENTER TITLE */}
                        <div className="grow flex items-center justify-center py-20">
                            <h3 className="text-5xl md:text-7xl font-squada uppercase tracking-tighter transition-transform group-hover:scale-105 duration-300">
                                {project.title}
                            </h3>
                        </div>


                        {/* BOTTOM INFO */}
                        <div className="py-6 font-mono">
                            <div className="absolute w-full left-0  border-b border-[#979797] " />

                            <p className="mt-3 text-xs uppercase opacity-70 mb-2">TECH STACK: {project.stack}</p>
                            <Link
                                href={project.link}
                                className="text-xs flex items-center gap-1 hover:gap-x-2 hover:pl-1 transition-all"
                            >
                                View Site <span className="text-lg"><FiArrowUpRight className="font-bold" /></span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}