import React from "react";
import Hero from "./components/Hero";
import AnimatedBackground from "./components/AnimatedBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] dark:bg-[#181818] flex flex-col items-center justify-center relative overflow-hidden">
      <AnimatedBackground />
      <Hero />
    </div>
  );
}
