import { useState, useEffect } from "react";
import { Send, Terminal } from "lucide-react";
import { PORTFOLIO_OWNER } from "../data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="portfolio-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#070313]/90 backdrop-blur-md border-b border-purple-500/20 py-3 shadow-lg shadow-purple-950/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          id="navbar-logo-container"
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-purple-600 to-violet-900 flex items-center justify-center border border-purple-400/30 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            <Terminal className="w-5 h-5 text-purple-200 group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <span className="font-display font-bold text-xl tracking-wider text-white">
            IMRAN<span className="text-purple-400">AHMED</span>
            <span className="text-purple-500 ml-1 font-mono text-sm">&lt;/&gt;</span>
          </span>
        </div>

        {/* Let's Talk Button - Directly connects to Mail */}
        <div>
          <a
            href={`mailto:${PORTFOLIO_OWNER.email}`}
            className="relative overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-violet-800 text-sm font-semibold tracking-wide text-white border border-purple-400/30 shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
          >
            <span>Let's Talk</span>
            <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </nav>
  );
}
