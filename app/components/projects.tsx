"use client";

import { motion, cubicBezier } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

const projects = [
    {
        id: "01",
        title: "PROJECT CANEL",
        description: "A restaurant website with an integrated POS system for seamless order and billing management.",
        image: "/images/projectCanel.png",
        stack: "React + Express",
        link: "https://deliverycanel.com",
    },
    {
        id: "02",
        title: "PROJECT MONK",
        description: "A restaurant website paired with a POS system to streamline front-of-house and kitchen operations.",
        image: "/images/projectMonk.png",
        stack: "React + Express",
        link: "https://food-ordering-fe.vercel.app",
    },
    {
        id: "03",
        title: "PROJECT PLANFLOW",
        description: "A construction project management platform built to track progress, timelines, and on-site workflows.",
        image: "/images/projectPlanflow.png",
        stack: "React + Express",
        link: "https://planflo.vercel.app",
    },
    {
        id: "04",
        title: "PROJECT SHOPIFY",
        description: "A fraud detection platform where Shopify store owners monitor refund patterns and set custom alert thresholds.",
        image: "/images/projectShopify.png",
        stack: "React + Express",
        link: "https://ecomprotect.co.uk",
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
                ease: cubicBezier(0.76, 0, 0.24, 1),
                delay: 0.2
            }
        }
    };

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

    const sectionTitle = "PROJECTS";

    return (
        <section className="mt-40">
            {/* SECTION HEADER */}
            <div className="py-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-2 w-full border-t border-[#979797]" />
                <div className="absolute bottom-2 w-full border-t border-[#979797]" />

                <motion.h2
                    initial="initial"
                    whileInView="animate"
                    whileHover={{ gap: "1rem" }}
                    transition={{ duration: 0.4, ease: cubicBezier(0.76, 0, 0.24, 1) }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex items-center cursor-default bg-background px-8 z-10 relative"
                    style={{ gap: "0rem" }} >
                    <span className="font-squada text-6xl md:text-7xl leading-none">[</span>

                    <motion.span
                        variants={containerVariants}
                        className="overflow-hidden whitespace-nowrap flex items-center justify-center px-4 md:px-8"
                    >
                        <span className="text-4xl md:text-5xl font-squada uppercase flex">
                            {sectionTitle.split("").map((char, i) => (
                                <motion.span key={i} custom={i} variants={letterVariants}>
                                    {char}
                                </motion.span>
                            ))}
                        </span>
                    </motion.span>

                    <span className="font-squada text-6xl md:text-7xl leading-none">]</span>
                </motion.h2>
            </div>

            {/* PROJECTS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 px-2 gap-4 mt-4">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="group relative flex flex-col bg-[#D9D9D9] overflow-hidden"
                    >
                        {/* ID TAG */}
                        <div className="absolute top-0 left-0 bg-[#808080] text-white font-squada text-sm px-3 py-1 uppercase tracking-wide z-10">
                            {project.id}
                        </div>

                        {/* IMAGE — grayscale by default, color on hover */}
                        <div className="relative w-full aspect-16/10 overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover grayscale transition-all duration-500 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
                            />
                            {/* Dark overlay that fades out on hover */}
                            <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:opacity-0" />
                        </div>

                        {/* BOTTOM INFO */}
                        <div className="px-4 py-4 font-mono relative">
                            <div className="absolute top-0 left-0 w-full border-t border-[#979797]" />
                            <p className="text-xs uppercase opacity-70 mb-2 mt-1">{project.description}</p>

                            <p className="text-xs uppercase opacity-70 mb-2">TECH STACK: {project.stack}</p>

                            <Link
                                href={project.link}
                                className="text-xs flex items-center gap-1 hover:gap-x-2 hover:pl-1 transition-all"
                            >
                                View Site <FiArrowUpRight className="text-lg font-bold" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}