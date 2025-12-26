
"use client"
import React from "react";
import { motion } from "framer-motion";
import { Star, Users, Zap } from "lucide-react";

const GAMES = [
  { id: 1, title: "Neon Strike", genre: "FPS", players: "125k", rating: 4.9, img: "https://picsum.photos/600/800?random=1", color: "#00f5ff" },
  { id: 2, title: "Quantum Void", genre: "RPG", players: "84k", rating: 4.8, img: "https://picsum.photos/600/800?random=2", color: "#ff006e" },
  { id: 3, title: "Mecha War", genre: "Tactical", players: "92k", rating: 4.7, img: "https://picsum.photos/600/800?random=3", color: "#39ff14" },
  { id: 4, title: "Space Drifters", genre: "Racing", players: "45k", rating: 4.5, img: "https://picsum.photos/600/800?random=4", color: "#8b5cf6" },
];

const GameCard = ({ game }: { game: typeof GAMES[0]; key?: React.Key }) => {
  return (
    <motion.div
      className="relative min-w-[260px] md:min-w-[300px] h-[380px] md:h-[450px] group cursor-pointer rounded-sm overflow-hidden border border-white/10 shrink-0"
      whileHover={{ y: -10 }}
      style={{
        perspective: "1000px"
      }}
    >
      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${game.img})` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />
      
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 transition-transform duration-500 group-hover:translate-y-[-10px]">
        <div className="flex items-center gap-2 mb-2 md:mb-3">
          <span className="bg-white/10 backdrop-blur-md px-2 md:px-3 py-1 rounded-sm text-[8px] md:text-[10px] font-black uppercase tracking-widest text-white border border-white/10">{game.genre}</span>
          <div className="flex items-center gap-1 text-[#ffd700]">
            <Star className="w-2.5 h-2.5 md:w-3 md:h-3 fill-current" />
            <span className="text-[9px] md:text-[10px] font-bold">{game.rating}</span>
          </div>
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-3 md:mb-4 group-hover:text-[#00f5ff] transition-colors line-clamp-2 leading-none">{game.title}</h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4 text-white/60 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">
            <span className="flex items-center gap-1"><Users className="w-2.5 h-2.5 md:w-3 md:h-3" /> {game.players}</span>
            <span className="flex items-center gap-1"><Zap className="w-2.5 h-2.5 md:w-3 md:h-3" /> Competitive</span>
          </div>
          <motion.div 
            className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            animate={{ scale: 1 }}
          >
            <Zap className="w-4 h-4 md:w-5 md:h-5 text-black fill-current" />
          </motion.div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-1 bg-[#00f5ff] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" style={{ backgroundColor: game.color }} />
    </motion.div>
  );
};

export const GamesGallery = () => {
  return (
    <section className="py-20 md:py-32 bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#00f5ff]/5 blur-[80px] md:blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#ff006e]/5 blur-[80px] md:blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-6 mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[10px] md:text-sm font-black text-[#00f5ff] uppercase tracking-[0.3em] mb-4 text-center md:text-left">The Selection</h2>
            <h3 className="text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tighter text-center md:text-left leading-none">Featured <span className="text-white/20">Battles</span></h3>
          </motion.div>
          <motion.button 
            className="text-white/60 hover:text-white text-[10px] md:text-xs font-bold uppercase tracking-widest border-b border-white/20 pb-2 mb-2 self-center md:self-auto"
            whileHover={{ letterSpacing: "0.15em" }}
          >
            View All Games
          </motion.button>
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar pb-10 px-6 touch-pan-x">
        <div className="container mx-auto flex gap-6 md:gap-8">
          {GAMES.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
          {GAMES.map((game) => (
            <GameCard key={`dup-${game.id}`} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};
