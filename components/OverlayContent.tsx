
"use client"
import React from "react";
import { motion } from "framer-motion";
import { Trophy, Shield, Zap, Users, ShoppingBag, MessageSquare, Star, ArrowRight } from "lucide-react";

export const AuthModule = () => (
  <div className="flex flex-col gap-6 w-full max-w-md px-2">
    <div className="text-center mb-4">
      <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-2">Initialize <span className="text-[#00f5ff]">Account</span></h2>
      <p className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-widest">Access the elite network</p>
    </div>
    <div className="space-y-4">
      <input type="email" placeholder="NEURAL_ID@PROTOCOL.COM" className="w-full bg-white/5 border border-white/10 rounded-sm py-3 md:py-4 px-5 md:px-6 text-[10px] md:text-xs text-white outline-none focus:border-[#00f5ff] transition-colors" />
      <input type="password" placeholder="SECURE_PHRASE" className="w-full bg-white/5 border border-white/10 rounded-sm py-3 md:py-4 px-5 md:px-6 text-[10px] md:text-xs text-white outline-none focus:border-[#00f5ff] transition-colors" />
      <button className="w-full py-4 bg-[#00f5ff] text-black font-black uppercase tracking-widest text-xs md:text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(0,245,255,0.3)]">Establish Connection</button>
    </div>
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/30 text-center sm:text-left">
      <a href="#" className="hover:text-white transition-colors">Forgot Phrase?</a>
      <a href="#" className="hover:text-[#ff006e] transition-colors text-[#ff006e]/60">Create New Neural ID</a>
    </div>
  </div>
);

export const MarketplaceModule = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-5xl px-2">
    {[
      { name: "Obsidian Core Skin", price: "2.4 ETH", rarity: "Legendary", color: "#ffd700" },
      { name: "Neon Wraith Blade", price: "1.1 ETH", rarity: "Epic", color: "#8b5cf6" },
      { name: "Void Runner Armor", price: "0.8 ETH", rarity: "Rare", color: "#00f5ff" },
    ].map((item, i) => (
      <motion.div key={i} className="bg-white/5 border border-white/10 p-5 md:p-6 rounded-sm group hover:border-white/30 transition-all" whileHover={{ y: -5 }}>
        <div className="aspect-square bg-white/5 rounded-sm mb-4 md:mb-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
          <ShoppingBag className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 text-white/10 group-hover:text-white/20 transition-colors" />
        </div>
        <div className="flex justify-between items-start mb-2">
          <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest px-2 py-0.5 md:py-1 bg-white/5 border border-white/10 rounded-sm" style={{ color: item.color }}>{item.rarity}</span>
          <span className="text-white font-black text-sm md:text-base">{item.price}</span>
        </div>
        <h4 className="text-lg md:text-xl font-black text-white uppercase tracking-tighter mb-4">{item.name}</h4>
        <button className="w-full py-2 border border-white/10 text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">Acquire Asset</button>
      </motion.div>
    ))}
  </div>
);

export const TournamentsModule = () => (
  <div className="w-full max-w-4xl px-2">
    <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between mb-8 md:mb-12 gap-6">
      <div className="text-center sm:text-left">
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-1">Active <span className="text-[#ff006e]">Brackets</span></h2>
        <p className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-widest">Global Major Series 2024</p>
      </div>
      <div className="text-center sm:text-right bg-white/5 px-6 py-3 border border-white/10 rounded-sm">
        <p className="text-[#39ff14] text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1 animate-pulse">Live Finals In</p>
        <p className="text-xl md:text-2xl font-black text-white tracking-tighter">02:45:12</p>
      </div>
    </div>
    <div className="space-y-4">
      {[
        { teamA: "Team Liquid", teamB: "G2 Esports", status: "Live", score: "1 - 0", time: "MAP 2" },
        { teamB: "NAVI", teamA: "FaZe Clan", status: "Upcoming", score: "VS", time: "20:00 UTC" },
      ].map((match, i) => (
        <div key={i} className="bg-white/5 border border-white/10 p-4 md:p-6 flex flex-col sm:flex-row items-center justify-between group hover:bg-white/10 transition-all gap-4">
          <div className="flex-1 flex items-center justify-between sm:justify-center gap-4 md:gap-8 w-full">
             <div className="text-left sm:text-right flex-1"><p className="text-base md:text-xl font-black text-white uppercase">{match.teamA}</p></div>
             <div className="px-4 md:px-6 py-2 bg-white/10 border border-white/10 rounded-sm text-center min-w-[80px] md:min-w-[100px]">
                <p className="text-[#00f5ff] text-[9px] md:text-[10px] font-black mb-0.5">{match.status}</p>
                <p className="text-lg md:text-xl font-black text-white tracking-widest">{match.score}</p>
             </div>
             <div className="flex-1 text-right sm:text-left"><p className="text-base md:text-xl font-black text-white uppercase">{match.teamB}</p></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const CommunityModule = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-4xl px-2">
    <div className="space-y-6">
       <h4 className="text-[10px] md:text-xs font-black text-[#00f5ff] uppercase tracking-[0.3em] mb-4 text-center md:text-left">Neural Feed</h4>
       {[
         { user: "Viper_01", msg: "Just hit Immortal rank! LFG for tournaments.", time: "2m ago" },
         { user: "GhostProtocol", msg: "New Mecha War strategy guide posted in forums.", time: "15m ago" },
         { user: "NeonQueen", msg: "Recruiting for Elite Legion clan. 2 slots left.", time: "1h ago" },
       ].map((post, i) => (
         <div key={i} className="bg-white/5 border-l-2 border-[#ff006e] p-4 flex gap-4 transition-transform hover:translate-x-1">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 shrink-0" />
            <div>
              <p className="text-[9px] md:text-[10px] font-black text-white uppercase mb-1">{post.user} <span className="text-white/20 ml-2">{post.time}</span></p>
              <p className="text-xs md:text-sm text-white/60 font-light leading-snug">{post.msg}</p>
            </div>
         </div>
       ))}
    </div>
    <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-sm flex flex-col h-full">
      <h4 className="text-[10px] md:text-xs font-black text-white uppercase tracking-[0.3em] mb-6">Global Chat</h4>
      <div className="flex-1 min-h-[150px] md:min-h-[200px] border-b border-white/10 mb-6 flex flex-col justify-end gap-3 pb-4 overflow-y-auto">
        <p className="text-[9px] md:text-[10px] text-white/40 leading-tight"><span className="text-[#00f5ff] font-black">System:</span> Arena #402 initialized and ready for deployment.</p>
        <p className="text-[9px] md:text-[10px] text-white/40 leading-tight"><span className="text-white font-black">Admin_Zero:</span> Welcome to the Elite Network. Watch your six.</p>
      </div>
      <div className="flex gap-2">
        <input type="text" placeholder="TYPE_MESSAGE..." className="flex-1 bg-white/5 border border-white/10 px-3 md:px-4 py-2 text-[9px] md:text-[10px] text-white outline-none focus:border-[#00f5ff]/50" />
        <button className="p-2 bg-[#00f5ff] text-black hover:bg-[#00f5ff]/80 transition-colors"><ArrowRight className="w-4 h-4" /></button>
      </div>
    </div>
  </div>
);
