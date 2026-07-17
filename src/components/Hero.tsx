import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Github, Facebook, Instagram } from "lucide-react";
import { PORTFOLIO_OWNER } from "../data";

interface HeroProps {
  onScrollDown: () => void;
}

export default function Hero({ onScrollDown }: HeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger entrance animation on mount
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-between overflow-hidden bg-[#070313] pt-20 px-6 lg:px-12"
    >
      {/* Background Image Overlay - Kakashi Face (Image 2) */}
      <div 
        id="hero-bg-overlay"
        className={`absolute inset-0 z-0 pointer-events-none md:flex justify-end items-center transition-all duration-1500 ease-out ${
          mounted ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-105 blur-sm"
        }`}
      >
        <div className="relative w-full md:w-[60%] h-full">
          {/* Main Kakashi face image */}
          <img
            src="https://i.postimg.cc/0ypWTJyZ/file-000000002f9c71f4baa9c9fb40591a8b.png"
            alt="Kakashi Face background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover md:object-right opacity-30 md:opacity-80 mix-blend-screen select-none"
          />
          {/* Radial and Linear Gradients to blend the image seamlessly */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070313] via-[#070313]/90 to-transparent md:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070313] via-transparent to-[#070313]/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070313] via-transparent to-[#070313]/50" />
          <div className="absolute inset-0 bg-radial-[circle_at_right] from-transparent via-[#070313]/50 to-[#070313]" />
        </div>
      </div>

      {/* Far-Left Social Bar */}
      <div 
        id="hero-social-sidebar"
        className={`absolute left-6 bottom-32 z-20 hidden md:flex flex-col items-center gap-6 transition-all duration-1000 delay-500 ease-out ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="w-[1px] h-20 bg-gradient-to-t from-purple-500/80 to-transparent" />
        <a
          href={PORTFOLIO_OWNER.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-purple-400 transition-all hover:scale-125 duration-300"
          aria-label="GitHub Profile"
        >
          <Github className="w-5 h-5 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
        </a>
        <a
          href={PORTFOLIO_OWNER.socials.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-purple-400 transition-all hover:scale-125 duration-300"
          aria-label="Facebook Profile"
        >
          <Facebook className="w-5 h-5 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
        </a>
        <a
          href={PORTFOLIO_OWNER.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-purple-400 transition-all hover:scale-125 duration-300"
          aria-label="Instagram Profile"
        >
          <Instagram className="w-5 h-5 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
        </a>
        <div className="w-[1px] h-10 bg-gradient-to-b from-purple-500/80 to-transparent" />
        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-ping" />
      </div>

      {/* Far-Right Japanese Text & Fan Sign */}
      <div 
        id="hero-right-japanese-bar"
        className={`absolute right-6 top-[35%] z-20 hidden md:flex flex-col items-center gap-4 transition-all duration-1000 delay-700 ease-out ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Fan Sign (Uchiha/Anime symbol - red and white fan) */}
        <div className="w-10 h-10 rounded-full bg-purple-950/40 border border-purple-500/30 flex items-center justify-center p-1.5 shadow-[0_0_15px_rgba(168,85,247,0.2)] animate-pulse">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_5px_rgba(239,68,68,0.7)]" aria-hidden="true">
            {/* Top half: red */}
            <path d="M 50,50 L 15,35 A 40,40 0 0,1 85,35 Z" fill="#ef4444" />
            {/* Bottom half: white */}
            <path d="M 50,50 L 15,35 A 40,40 0 0,0 85,35 Z" fill="#ffffff" />
            {/* Fan handle */}
            <rect x="46" y="50" width="8" height="35" rx="3" fill="#ffffff" />
          </svg>
        </div>
        {/* Japanese vertical text */}
        <div className="text-purple-400 font-display font-medium text-lg tracking-[0.5em] leading-none [writing-mode:vertical-rl] select-none text-shadow-purple">
          うちはサスケ
        </div>
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto w-full z-10 grid md:grid-cols-12 items-center gap-8 py-12">
        <div 
          className={`md:col-span-8 flex flex-col justify-center text-left transition-all duration-1000 ease-out transform ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Welcome Tag */}
          <div className="flex items-center gap-2 mb-6">
            <span className="h-[2px] w-8 bg-purple-500 rounded-full" />
            <span className="font-mono text-sm tracking-wider text-purple-400 uppercase">
              Welcome to my shinobi realm
            </span>
          </div>

          {/* Main Name Heading with Distressed and Neon styling */}
          <div className="relative mb-6">
            <h1 className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none text-white select-none">
              Hi, I'm <br />
              <span className="text-slate-100 font-extrabold uppercase mr-3 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] inline-block">
                IMRAN
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-500 font-extrabold uppercase drop-shadow-[0_0_30px_rgba(168,85,247,0.6)] relative inline-block">
                AHMED
                {/* Embedded Hidden Sharingan SVG behind name for neon depth */}
                <span className="absolute -right-16 top-1/2 -translate-y-1/2 w-14 h-14 opacity-80 animate-spin-slow">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-purple-400">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                    <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="4" />
                    <circle cx="50" cy="50" r="8" fill="currentColor" />
                    {/* Tomoe */}
                    <path d="M 50,25 C 45,25 40,20 40,15 C 40,10 45,10 50,15 Z" fill="currentColor" />
                    <path d="M 71.6,62.5 C 69,58 64.6,58 60.3,60.5 C 56,63 58.5,67.3 62.8,64.8 Z" fill="currentColor" />
                    <path d="M 28.4,62.5 C 26,67 21.6,67 17.3,64.5 C 13,62 15.5,57.7 19.8,60.2 Z" fill="currentColor" />
                  </svg>
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle / Role Tag */}
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-purple-400 font-bold text-lg md:text-xl">&lt;/&gt;</span>
            <span className="font-sans text-xl md:text-2xl font-semibold text-purple-100 tracking-wide">
              {PORTFOLIO_OWNER.title}
            </span>
            <span className="w-2.5 h-6 bg-purple-500 rounded-sm animate-pulse" />
          </div>

          {/* Tagline Bio */}
          <p className="text-slate-400 font-sans text-base md:text-lg max-w-xl leading-relaxed mb-10">
            {PORTFOLIO_OWNER.tagline}
          </p>

          {/* Sleek small contact / social connect icons at the bottom */}
          <div className="flex flex-wrap gap-3 mt-4 items-center">
            <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">Connect:</span>
            
            {/* Github Link */}
            <a
              href={PORTFOLIO_OWNER.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-950/30 border border-purple-500/15 hover:border-purple-400/40 hover:bg-purple-900/20 text-slate-300 hover:text-white transition-all duration-300 group"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-mono tracking-wide">GitHub</span>
            </a>

            {/* Facebook Link */}
            <a
              href={PORTFOLIO_OWNER.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-950/30 border border-purple-500/15 hover:border-purple-400/40 hover:bg-purple-900/20 text-slate-300 hover:text-white transition-all duration-300 group"
              aria-label="Facebook Profile"
            >
              <Facebook className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-mono tracking-wide">Facebook</span>
            </a>

            {/* Instagram Link */}
            <a
              href={PORTFOLIO_OWNER.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-950/30 border border-purple-500/15 hover:border-purple-400/40 hover:bg-purple-900/20 text-slate-300 hover:text-white transition-all duration-300 group"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-mono tracking-wide">Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Sparkles & Ninja Particles */}
      <div className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full bg-purple-400 opacity-60 animate-ping" />
      <div className="absolute bottom-[25%] left-[25%] w-3 h-3 rounded-full bg-indigo-400 opacity-40 animate-pulse" />
      <div className="absolute top-[40%] right-[30%] w-1.5 h-1.5 rounded-full bg-purple-500 opacity-50 animate-ping" />
    </section>
  );
}
