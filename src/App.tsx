import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="min-h-screen bg-[#070313] text-slate-100 flex flex-col font-sans relative antialiased selection:bg-purple-600 selection:text-white overflow-hidden">
      {/* Background stars backdrop decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-950/10 via-[#070313] to-[#070313] pointer-events-none z-0" />

      {/* Primary components hierarchy */}
      <Navbar activeSection="home" onNavigate={() => {}} />
      
      <main className="flex-grow z-10 flex items-center justify-center">
        <Hero onScrollDown={() => {}} />
      </main>
    </div>
  );
}


