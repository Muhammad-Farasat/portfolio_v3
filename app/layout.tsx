// app/layout.tsx

"use client";

import "./globals.css";
import Navbar from "@/app/components/navbar";

import { Pixelify_Sans, Squada_One, Space_Mono } from "next/font/google";
import Footer from "./components/footer";


const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixel"
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono"
});

const squadaOne = Squada_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-squadaOne"
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${pixelify.variable} ${squadaOne.variable} ${spaceMono.variable}`}>
      <head>
        {/* Google Fonts Import */}
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono&family=VT323&family=Inter:wght@900&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/svg+html" href="/favicon.svg" />
        <title>Farasat portfolio</title>
        <meta name="title" content="Farasat portfolio" />
      </head>
      <body className="bg-background text-foreground antialiased">
        <p className="fixed max-sm:hidden max-md:hidden top-96 -rotate-90 left-0 opacity-50 text-xs font-mono ">VERSION.3</p>
        {/* THE SIDE LINES: A centered container with borders */}
        <div className="max-w-350 mx-auto min-h-screen border-x border-[#979797] flex flex-col">
          <Navbar />
          <main className="grow">
            {children}
          </main>
          {/* Your Footer would go here later */}
          <Footer />
        </div>

        <p className="fixed max-sm:hidden max-md:hidden top-96 -rotate-90 right-0 opacity-50 text-xs font-mono ">VERSION.3</p>

      </body>
    </html>
  );
}