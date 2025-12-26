
"use client"
import React, { useEffect, useRef, useState } from "react"
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react"
import { motion } from "framer-motion"

interface ShaderShowcaseProps {
  onTrigger: (view: string) => void;
}

export default function ShaderShowcase({ onTrigger }: ShaderShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="h-screen bg-black relative overflow-hidden flex flex-col">
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix type="matrix" values="1 0 0 0 0.02 0 1 0 0 0.02 0 0 1 0 0.05 0 0 0 0.9 0" result="tint" />
          </filter>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f5ff" /><stop offset="50%" stopColor="#ffffff" /><stop offset="100%" stopColor="#ff006e" />
          </linearGradient>
          <filter id="text-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
      </svg>

      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#0a0a0f", "#00f5ff", "#ff006e", "#39ff14", "#8b5cf6"]}
        speed={0.15}
        backgroundColor="#0a0a0f"
      />

      <main className="relative z-20 flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          <motion.div
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md mb-6 md:mb-8 border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#00f5ff] text-[10px] md:text-xs font-bold uppercase tracking-widest mr-2">LIVE</span>
            <span className="text-white/80 text-[10px] md:text-sm font-medium tracking-wide whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px] sm:max-w-none">
              12,482 PLAYERS CURRENTLY IN ARENA
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white mb-6 md:mb-8 leading-[0.9] tracking-tighter uppercase"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block italic text-[#00f5ff] drop-shadow-[0_0_15px_rgba(0,245,255,0.5)]">Enter</span>
            <span className="block">The Arena</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl font-light text-white/70 mb-10 md:mb-12 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            The world's most advanced competitive gaming platform. Low latency, elite performance, and immersive battles await.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              onClick={() => onTrigger('auth')}
              className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 rounded-sm bg-[#00f5ff] text-black font-black text-xs md:text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
              whileHover={{ x: 5 }}
            >
              Start Playing
            </motion.button>
            <motion.button
              onClick={() => onTrigger('marketplace')}
              className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 rounded-sm bg-transparent border border-white/20 text-white font-bold text-xs md:text-sm uppercase tracking-widest backdrop-blur-sm transition-all hover:bg-white/10 cursor-pointer"
            >
              Explore Games
            </motion.button>
          </motion.div>
        </div>
      </main>

      <div className="absolute bottom-12 right-12 z-30 hidden xl:block">
        <div className="relative w-24 h-24 flex items-center justify-center">
          <PulsingBorder
            colors={["#00f5ff", "#ff006e", "#39ff14", "#8b5cf6", "#ffffff"]}
            colorBack="#00000000"
            speed={2}
            roundness={1}
            thickness={0.05}
            softness={0.1}
            intensity={4}
            pulse={0.2}
            scale={0.8}
            style={{ width: "80px", height: "80px", borderRadius: "50%" }}
          />
          <motion.svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{ transform: "scale(1.4)" }}
          >
            <defs><path id="circle-path" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" /></defs>
            <text className="text-[6px] fill-white/40 font-bold tracking-[2px] uppercase">
              <textPath href="#circle-path" startOffset="0%">
                ELITE STATUS • READY TO JOIN • GLOBAL NETWORK • ARENA IS OPEN •
              </textPath>
            </text>
          </motion.svg>
        </div>
      </div>
    </div>
  )
}
