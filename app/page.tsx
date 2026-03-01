"use client";

import AboutTerminal from "./components/about";
import AboutMarquee from "./components/aboutmarquee";
import Experience from "./components/experience";
import Hero from "./components/hero";
import { Marquee } from "./components/marquee";
import Preloader from "./components/preloader";
import Projects from "./components/projects";
import Skills from "./components/skills";


export default function Home() {
  return (
    <>
      <Preloader />
      {/* <section className="container"> */}

        <Hero />
        <Marquee text={[
          "FRONTEND",
          "BACKEND",
          "REACT",
          "NEXT",
          "NEST",
          "POSTGRES",
          "MONGO DB",
          "SUPABASE",
        ]} />
        <Projects />
        <Experience />
        <Skills />
        <AboutTerminal />
      {/* </section> */}
    </>
  );
}
