"use client";

import { cubicBezier, motion } from "framer-motion";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs, FaReact } from "react-icons/fa6";
import { RiSupabaseFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiNestjs, SiNextdotjs } from "react-icons/si";

const skillData = [
    {
        name: "React JS",
        icon: <FaReact />,
        description: "I build performant React 18 apps with hooks, context, and reusable component systems — focused on clean architecture and smooth UX.",
    },
    {
        name: "Next JS",
        icon: <SiNextdotjs />,
        description: "I leverage Next.js for SSR, SSG, and App Router patterns — optimizing Web Vitals, routing, and full-stack delivery at scale.",
    },
    {
        name: "Node JS",
        icon: <FaNodeJs />,
        description: "I build fast, event-driven backend services with Node.js — handling REST APIs, file systems, and real-time features efficiently.",
    },
    {
        name: "Mongo DB",
        icon: <SiMongodb />,
        description: "I design flexible NoSQL schemas with MongoDB — managing aggregations, indexing, and data modeling for document-heavy applications.",
    },
    {
        name: "PostgreSQL",
        icon: <BiLogoPostgresql />,
        description: "I work with PostgreSQL for relational data modeling — writing complex queries, managing migrations, and ensuring data integrity.",
    },
    {
        name: "Supabase",
        icon: <RiSupabaseFill />,
        description: "I use Supabase as a Firebase alternative — integrating auth, real-time subscriptions, and row-level security with PostgreSQL under the hood.",
    },
    {
        name: "Express JS",
        icon: <SiExpress />,
        description: "I build lightweight, modular REST APIs with Express — structuring middleware, routing, and error handling for production-ready backends.",
    },
    {
        name: "Nest JS",
        icon: <SiNestjs />,
        description: "I architect scalable server-side apps with NestJS — using decorators, dependency injection, and modular design for enterprise-grade APIs.",
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
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {skillData.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-[#D9D9D9] px-8 h-96 pt-12 flex flex-col items-center transition-all duration-300 hover:bg-[#cecece] hover:-translate-y-2"
                            style={{
                                clipPath: "polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)",
                            }}
                        >
                            {/* ICON AREA */}
                            <div className="mb-6  text-7xl ">
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