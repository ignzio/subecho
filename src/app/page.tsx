'use client'
import React from "react";
import Hero from "./components/Hero";
import { motion } from "motion/react"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] dark:bg-[#181818] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated and draggable background blocks with floating motion */}
      <motion.div
        className="absolute top-2/5 left-1/12 w-40 h-40 bg-[#ffbe0b] rounded-lg shadow-[8px_8px_0_0_#222] z-0 cursor-grab active:cursor-grabbing"
        initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
        animate={{
          x: [0, 20, -10, 0],
          y: [0, 10, -10, 0],
          rotate: [0, 8, -6, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
        drag
        dragMomentum={false}
        whileDrag={{ scale: 1.1, zIndex: 50 }}
        whileHover={{ scale: 1.05 }}
        dragElastic={0.3}
      />
      <motion.div
        className="absolute bottom-2/3 right-2/14 w-56 h-56 bg-[#3a86ff] rounded-lg shadow-[8px_8px_0_0_#222] z-0 cursor-grab active:cursor-grabbing"
        initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
        animate={{
          x: [0, -30, 15, 0],
          y: [0, -15, 20, 0],
          rotate: [0, -10, 8, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
        drag
        dragMomentum={false}
        whileDrag={{ scale: 1.1, zIndex: 50 }}
        whileHover={{ scale: 1.05 }}
        dragElastic={0.3}
      />
      <Hero />
    </div>
  );
}
