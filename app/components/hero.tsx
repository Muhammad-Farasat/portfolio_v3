"use client";

export default function Hero() {
    return (
        <section className="min-h-screen mb-4">
            <header className="w-full grid grid-cols-2 border-b border-[#979797] uppercase">
                {/* Left Side: PORT_ */}
                <div className=" border-r border-black/20 ">
                    <h1 className="text-[16vw] text-center font-pixel tracking-tighter leading-none">
                        PORT_
                    </h1>
                </div>

                {/* Right Side: FOLIO */}
                <div className="">
                    <h1 className="text-[16vw] text-center font-pixel tracking-tighter leading-none">
                        FOLIO
                    </h1>
                </div>
            </header>

            {/* 1. THE MASSIVE HEADLINE */}
            <div className="py-12 px-6 max-w-[1400px] mx-auto">
                <h2 className="text-[19vw] text-center leading-[0.85] font-squada uppercase tracking-tighter">
                    I am Farasat
                </h2>
                <h2 className="text-[11.7vw] text-center leading-[0.85] font-squada uppercase tracking-tighter">
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
                <div className="flex items-center col-span-2 mr-16 justify-center bg-background">
                    <div
                        className="relative w-full h-52 rounded-xl bg-[#dcd6c8] p-8 shadow-sm"
                        style={{ clipPath: "polygon(0 0, 40% 0, 50% 24%, 100% 24%, 100% 100%, 0 100%)" }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <span className="font-mono text-xl text-[#484642] opacity-60 uppercase tracking-widest">Status</span>
                            <div className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse" />
                        </div>

                        <p className="font-mono text-[#484642] text-lg mb-12 ">
                            {">"} I am currently available_
                        </p>

                        <div className="flex justify-end">
                            <button className="font-mono text-lg cursor-pointer flex items-center gap-x-2 hover:text-accent transition-colors">
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