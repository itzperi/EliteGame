
"use client"
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, User, Menu, X, Search } from "lucide-react";

interface NavbarProps {
  onTrigger: (view: string) => void;
  onMobileMenuToggle: () => void;
}

export const Navbar = ({ onTrigger, onMobileMenuToggle }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', view: null, href: '#home' },
    { label: 'Marketplace', view: 'marketplace', href: '#marketplace' },
    { label: 'Tournaments', view: 'tournaments', href: '#tournaments' },
    { label: 'Community', view: 'community', href: '#community' },
    { label: 'Stats', view: 'stats', href: '#stats' }
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-3" : "bg-transparent py-4 md:py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <motion.div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 md:gap-3 group cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#00f5ff] to-[#ff006e] rounded-sm flex items-center justify-center transform rotate-45 group-hover:rotate-0 transition-transform duration-300 shadow-[0_0_15px_rgba(0,245,255,0.4)]">
            <span className="text-black font-black text-lg md:text-xl -rotate-45 group-hover:rotate-0 transition-transform duration-300">E</span>
          </div>
          <span className="text-white font-black text-lg md:text-xl tracking-tighter uppercase">ELITE <span className="text-[#00f5ff] hidden sm:inline">ARENA</span></span>
        </motion.div>

        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          {navItems.map((item) => (
            <motion.button
              key={item.label}
              onClick={() => item.view ? onTrigger(item.view) : window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-white/60 text-[10px] lg:text-xs font-bold uppercase tracking-widest hover:text-[#00f5ff] transition-colors relative group cursor-pointer"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00f5ff] transition-all group-hover:w-full" />
            </motion.button>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden lg:flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-1.5 focus-within:border-[#00f5ff]/50 transition-colors">
            <Search className="w-4 h-4 text-white/40" />
            <input 
              type="text" 
              placeholder="Search games..." 
              className="bg-transparent border-none outline-none text-xs text-white px-2 w-24 focus:w-40 transition-all"
            />
          </div>
          <motion.button 
            onClick={() => onTrigger('marketplace')}
            className="relative text-white/80 hover:text-white cursor-pointer p-1.5" 
            whileHover={{ scale: 1.1 }}
          >
            <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" />
            <span className="absolute -top-1 -right-1 bg-[#ff006e] text-white text-[8px] md:text-[10px] w-3.5 h-3.5 md:w-4 md:h-4 rounded-full flex items-center justify-center font-bold">2</span>
          </motion.button>
          <motion.button 
            onClick={() => onTrigger('auth')}
            className="bg-white/10 hover:bg-white/20 p-1.5 md:p-2 rounded-full border border-white/10 cursor-pointer" 
            whileHover={{ scale: 1.1 }}
          >
            <User className="w-4 h-4 md:w-5 md:h-5 text-[#00f5ff]" />
          </motion.button>
          <button 
            onClick={onMobileMenuToggle}
            className="md:hidden text-white p-1.5"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.header>
  );
};
