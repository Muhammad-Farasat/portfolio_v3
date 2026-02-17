// app/layout.tsx

"use client";

import "./globals.css";
import Navbar from "@/app/components/navbar";

import { Pixelify_Sans, Squada_One, Space_Mono } from "next/font/google";


const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixel"
});

const spaceMono = Space_Mono({ 
  weight: ["400", "700"], 
  subsets: ["latin"], 
  variable: "--font-mono" 
});

const squada = Squada_One({
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
    <html lang="en" className={`${pixelify.variable} ${squada.variable} ${spaceMono.variable}`}>
      <head>
        {/* Google Fonts Import */}
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono&family=VT323&family=Inter:wght@900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-foreground antialiased">
        {/* THE SIDE LINES: A centered container with borders */}
        <div className="max-w-[1400px] mx-auto min-h-screen border-x border-[#979797] flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          {/* Your Footer would go here later */}
        </div>
      </body>
    </html>
  );
}