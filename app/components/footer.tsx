"use client";

import { FiArrowUp, FiArrowUpRight } from "react-icons/fi";

const cv = '/PDF/Farasat-Professional-Resume.pdf'


export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="border-t border-[#979797] font-mono mt-12">
            {/* TOP SECTION: CONTACT DATA */}
            <div className="grid grid-cols-1 md:grid-cols-12">
                {/* LEFT COLUMN: PROTOCOL */}
                <div className="md:col-span-9 p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#979797] flex flex-col gap-10">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
                        CONTACT PROTOCOL ::
                    </h2>

                    <div className="flex flex-col gap-4 text-sm md:text-base">
                        <div className="flex flex-col md:flex-row md:gap-4">
                            <span className=" uppercase">EMAIL:</span>
                            <a href="mailto:farasatkhan687@gmail.com" className="hover:underline">
                                farasatkhan687@gmail.com
                            </a>
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-4">
                            <span className=" uppercase">PHONE:</span>
                            <span>+92 315 2557056</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: LINKS */}
                <div className="md:col-span-3 px-4 py-8 flex flex-col gap-6 items-start">
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center cursor-pointer hover:gap-x-4 text-xl gap-2 hover:text-accent transition-all duration-300"
                    >
                        <span className="font-squada text-4xl">[</span>
                        <p className="flex items-center gap-x-2">
                            BACK_TO_TOP <FiArrowUp />
                        </p>
                        <span className="font-squada text-4xl ">]</span>
                    </button>

                    <nav className="flex flex-col gap-4 uppercase text-lg mt-4">
                        <a href="https://github.com/muhammad-Farasat" target="_blank" className="flex items-center gap-2 hover:opacity-50 transition-opacity">
                            GITHUB <FiArrowUpRight />
                        </a>
                        <a href="https://linkedin.com/in/muhammad-farasat1" target="_blank" className="flex items-center gap-2 hover:opacity-50 transition-opacity">
                            LINKEDIN <FiArrowUpRight />
                        </a>
                        <a href={cv} download={cv} target="_blank" className="flex items-center gap-2 hover:opacity-50 transition-opacity">
                            RESUME <FiArrowUpRight />
                        </a>
                    </nav>
                </div>
            </div>

            {/* BOTTOM SECTION: COPYRIGHT & CREDITS */}
            <div className="grid grid-cols-1 md:grid-cols-12 border-t border-[#979797] text-[10px] md:text-xs uppercase tracking-widest">
                <div className="md:col-span-9 p-6 md:border-r-2 border-[#979797] opacity-60">
                    &copy; 2026 ALL RIGHTS RESERVED
                </div>
                <div className="md:col-span-3 p-6 italic flex justify-end md:justify-start">
                    developed & designed by me :)
                </div>
            </div>
        </footer>
    );
}