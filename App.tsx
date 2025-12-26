
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ShaderShowcase from './components/ui/hero';
import { SpiralAnimation } from './components/ui/spiral-animation';
import { WebGLShader } from './components/ui/web-gl-shader';
import { Navbar } from './components/Navbar';
import { GamesGallery } from './components/GamesGallery';
import { StatsDashboard } from './components/StatsDashboard';
import { CustomCursor } from './components/CustomCursor';
import { LiquidButton } from './components/ui/liquid-glass-button';
import { AuthModule, MarketplaceModule, TournamentsModule, CommunityModule } from './components/OverlayContent';
import { X, Shield, Users, Trophy, ArrowRight, Instagram, Twitter, Twitch, Youtube, Menu as MenuIcon } from 'lucide-react';

const Footer = () => (
  <footer className="bg-[#0a0a0f] pt-20 md:pt-32 pb-16 border-t border-white/10 relative overflow-hidden">
    <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
      <div className="col-span-1 sm:col-span-2 lg:col-span-1">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-[#00f5ff] to-[#ff006e] rounded-sm flex items-center justify-center transform rotate-45">
            <span className="text-black font-black text-xl -rotate-45">E</span>
          </div>
          <span className="text-white font-black text-xl tracking-tighter uppercase">ELITE ARENA</span>
        </div>
        <p className="text-white/40 font-light mb-10 leading-relaxed max-w-sm">Defining the future of competitive gaming through unmatched performance and stunning visual experiences.</p>
        <div className="flex gap-4">
          {[Instagram, Twitter, Twitch, Youtube].map((Icon, i) => (
            <motion.a 
              key={i} 
              href="#" 
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#00f5ff] hover:text-black transition-colors"
              whileHover={{ y: -5 }}
            >
              <Icon className="w-4 h-4" />
            </motion.a>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-6 md:mb-10">Platform</h4>
        <ul className="space-y-4 text-white/40 text-xs font-bold uppercase tracking-widest">
          <li><a href="#" className="hover:text-[#00f5ff] transition-colors">Games</a></li>
          <li><a href="#" className="hover:text-[#00f5ff] transition-colors">Marketplace</a></li>
          <li><a href="#" className="hover:text-[#00f5ff] transition-colors">Tournaments</a></li>
          <li><a href="#" className="hover:text-[#00f5ff] transition-colors">Ranks</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-6 md:mb-10">Company</h4>
        <ul className="space-y-4 text-white/40 text-xs font-bold uppercase tracking-widest">
          <li><a href="#" className="hover:text-[#00f5ff] transition-colors">About Us</a></li>
          <li><a href="#" className="hover:text-[#00f5ff] transition-colors">Careers</a></li>
          <li><a href="#" className="hover:text-[#00f5ff] transition-colors">Press Kit</a></li>
          <li><a href="#" className="hover:text-[#00f5ff] transition-colors">Terms</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-6 md:mb-10">Newsletter</h4>
        <p className="text-white/40 text-xs mb-6 uppercase tracking-widest font-bold">Get elite updates first</p>
        <div className="relative">
          <input 
            type="email" 
            placeholder="YOUR@EMAIL.COM" 
            className="w-full bg-white/5 border border-white/10 rounded-sm py-4 px-6 text-xs text-white outline-none focus:border-[#00f5ff] transition-colors"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#00f5ff]"><ArrowRight className="w-5 h-5" /></button>
        </div>
      </div>
    </div>
    
    <div className="container mx-auto px-6 mt-20 md:mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest text-center md:text-left">© 2024 ELITE ARENA INC. ALL RIGHTS RESERVED.</p>
      <div className="flex gap-8 text-[10px] text-white/20 font-bold uppercase tracking-widest">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeView, setActiveView] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleTrigger = (view: string) => {
    setActiveView(view);
    setIsMobileMenuOpen(false);
  };

  const renderActiveView = () => {
    switch (activeView) {
      case 'auth': return <AuthModule />;
      case 'marketplace': return <MarketplaceModule />;
      case 'tournaments': return <TournamentsModule />;
      case 'community': return <CommunityModule />;
      case 'stats': return (
        <div className="w-full max-w-4xl bg-white/5 p-6 md:p-12 rounded-sm border border-white/10">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-8 text-center md:text-left">Hall of <span className="text-[#00f5ff]">Fame</span></h2>
          <div className="space-y-4">
             {[
               { name: "Neon Wraith", elo: "3482", winrate: "78%" },
               { name: "VoidRunner_X", elo: "3210", winrate: "72%" },
               { name: "Viper_01", elo: "3150", winrate: "69%" },
             ].map((player, i) => (
               <div key={i} className="flex flex-col sm:flex-row items-center justify-between p-4 border-b border-white/5 gap-2 sm:gap-4">
                  <span className="text-white font-black">0{i+1}. {player.name}</span>
                  <div className="flex gap-6 md:gap-8 text-[10px] font-black uppercase tracking-widest">
                    <span className="text-[#00f5ff]">ELO: {player.elo}</span>
                    <span className="text-[#39ff14]">WR: {player.winrate}</span>
                  </div>
               </div>
             ))}
          </div>
        </div>
      );
      default: return null;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-white overflow-hidden selection:bg-[#00f5ff] selection:text-black">
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
            exit={{ opacity: 0, y: -20, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }}
          >
            <motion.div
              className="w-16 h-16 border-2 border-[#00f5ff] border-t-transparent rounded-full mb-8"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.h2 
              className="text-white font-black text-xs uppercase tracking-[0.5em] animate-pulse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Initializing Arena...
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <button 
              onClick={toggleMobileMenu}
              className="absolute top-8 right-8 text-white/60 hover:text-white"
            >
              <X className="w-10 h-10" />
            </button>
            <nav className="flex flex-col items-center gap-8">
              {['Home', 'Marketplace', 'Tournaments', 'Community', 'Stats'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => item === 'Home' ? (setIsMobileMenuOpen(false), window.scrollTo({ top: 0, behavior: 'smooth' })) : handleTrigger(item.toLowerCase())}
                  className="text-3xl font-black text-white uppercase tracking-widest hover:text-[#00f5ff] transition-colors"
                  whileTap={{ scale: 0.9 }}
                >
                  {item}
                </motion.button>
              ))}
            </nav>
            <div className="absolute bottom-12 flex gap-8">
              {[Instagram, Twitter, Twitch].map((Icon, i) => (
                <Icon key={i} className="w-6 h-6 text-white/40" />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeView && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6 md:p-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="absolute inset-0 bg-black/60 backdrop-blur-3xl"
              onClick={() => setActiveView(null)}
            />
            <motion.div 
              className="relative z-10 w-full h-full max-w-6xl bg-white/[0.02] border border-white/10 rounded-sm p-6 sm:p-8 md:p-16 flex flex-col items-center justify-start md:justify-center overflow-y-auto custom-scrollbar"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
            >
              <button 
                onClick={() => setActiveView(null)}
                className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/40 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
              <div className="w-full mt-8 md:mt-0 flex items-center justify-center">
                {renderActiveView()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hidden md:block">
        <CustomCursor />
      </div>
      <Navbar onTrigger={handleTrigger} onMobileMenuToggle={toggleMobileMenu} />
      
      <main>
        <section id="home" className="relative h-screen">
          <ShaderShowcase onTrigger={handleTrigger} />
        </section>

        <section id="about" className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
             <SpiralAnimation />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {[
                { icon: Shield, title: "Elite Security", desc: "Anti-cheat systems integrated at the kernel level for maximum fairness." },
                { icon: Users, title: "Massive Community", desc: "Connect with millions of players across 24 dedicated global regions." },
                { icon: Trophy, title: "Pro Tournaments", desc: "Weekly events with prize pools totaling over $10M+ in value." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-sm group hover:border-[#00f5ff]/30 transition-all cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <item.icon className="w-8 h-8 md:w-10 md:h-10 text-[#00f5ff] mb-6 md:mb-8 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter mb-4">{item.title}</h4>
                  <p className="text-white/40 text-sm font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="marketplace">
          <GamesGallery />
        </section>

        <section id="stats" className="relative overflow-hidden">
          <WebGLShader />
          <StatsDashboard />
        </section>

        <section className="py-20 md:py-32 bg-[#0a0a0f] border-t border-white/10">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[10px] md:text-sm font-black text-[#ff006e] uppercase tracking-[0.3em] mb-6 md:mb-8">Ready to evolve?</h2>
              <h3 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-10 md:mb-12">JOIN THE <span className="text-[#00f5ff]">LEGION</span></h3>
              <div className="flex justify-center">
                <LiquidButton size="xl" variant="primary" className="px-10 md:px-16" onClick={() => handleTrigger('auth')}>
                  Create Account
                </LiquidButton>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
