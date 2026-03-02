"use client";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Portfolio } from "@/components/sections/Portfolio";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <div className="max-w-5xl mx-auto px-4 py-16 space-y-24 w-full">
        <About />
        <Experience />
        <Portfolio />
      </div>
    </div>
  );
}
