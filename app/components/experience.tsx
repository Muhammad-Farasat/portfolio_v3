"use client";

const experienceData = [
    {
        date: "2025 - PRESENT",
        role: "MERN STACK DEVELOPER",
        level: "Mid-Level",
        company: "@DOTCLICK LLC",
    },
    {
        date: "2024 - 2025",
        role: "FRONTEND DEVELOPER",
        level: "Intern",
        company: "@GLOBAL DEZIGNS",
    },
];

export default function Experience() {
    return (
        <section className="mt-24">
            {/* SECTION HEADER WITH LEDGER LINES */}
            <div >
                <div className="h-4 w-full" />
                <div className="py-3 flex items-center justify-center relative">
                    <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none">
                        <div className="border-t border-[#979797] w-full" />
                        <div className="border-t border-[#979797] w-full" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-squada flex items-center gap-x-2    uppercase bg-background px-8 z-10">
                        <span className="font-squada text-7xl">
                            [
                        </span>
                        EXPERIENCE
                        <span className="font-squada text-7xl">
                            ]
                        </span>
                    </h2>
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
                        <div className="md:col-span-3 p-6 flex items-center justify-center md:border-r border-[#979797] font-mono text-sm md:text-base tracking-tighter">
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
                        <div className="md:col-span-3 p-6 flex items-center justify-center font-mono text-sm md:text-lg font-bold tracking-tight">
                            {item.company}
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}