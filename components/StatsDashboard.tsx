
"use client"
import React from "react";
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Trophy, TrendingUp, Globe, Clock } from "lucide-react";

const DATA = [
  { name: 'Mon', active: 4000, tournaments: 24 },
  { name: 'Tue', active: 3000, tournaments: 13 },
  { name: 'Wed', active: 2000, tournaments: 35 },
  { name: 'Thu', active: 2780, tournaments: 39 },
  { name: 'Fri', active: 1890, tournaments: 48 },
  { name: 'Sat', active: 2390, tournaments: 52 },
  { name: 'Sun', active: 3490, tournaments: 38 },
];

const StatCard = ({ icon: Icon, label, value, color }: { icon: any, label: string, value: string, color: string }) => (
  <motion.div 
    className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-sm hover:border-white/20 transition-all group"
    whileHover={{ y: -5 }}
  >
    <Icon className="w-6 h-6 md:w-8 md:h-8 mb-4 md:mb-6 group-hover:scale-110 transition-transform" style={{ color }} />
    <h4 className="text-white/40 text-[8px] md:text-[10px] font-black uppercase tracking-widest mb-1">{label}</h4>
    <p className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-none">{value}</p>
    <div className="mt-4 flex items-center gap-2 text-[8px] md:text-[10px] font-bold text-[#39ff14]">
      <TrendingUp className="w-3 h-3" />
      <span>+12.5% vs PREV</span>
    </div>
  </motion.div>
);

export const StatsDashboard = () => {
  return (
    <section className="py-20 md:py-32 bg-[#0a0a0f]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-[10px] md:text-sm font-black text-[#8b5cf6] uppercase tracking-[0.3em] mb-4">Real-Time Data</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 md:mb-8 leading-none">Global <span className="text-white/20">Network</span> Status</h3>
            <p className="text-white/60 text-base md:text-lg font-light mb-10 md:mb-12 max-w-lg">Monitor every heartbeat of the arena. Our real-time analytics provide deep insights into match outcomes and performance metrics.</p>
            
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <StatCard icon={Globe} label="Server Regions" value="24" color="#00f5ff" />
              <StatCard icon={Trophy} label="Total Rewards" value="$12.4M" color="#ffd700" />
              <StatCard icon={Clock} label="Avg Queue Time" value="1.2s" color="#ff006e" />
              <StatCard icon={TrendingUp} label="Daily Matches" value="840k" color="#39ff14" />
            </div>
          </div>

          <div className="order-1 lg:order-2 bg-white/5 border border-white/10 p-6 md:p-10 rounded-sm relative group">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 md:mb-10 gap-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-[10px] md:text-xs">Concurrent Users Activity</h4>
              <div className="flex gap-4">
                <span className="flex items-center gap-2 text-[8px] md:text-[10px] text-white/40 font-bold"><div className="w-2 h-2 rounded-full bg-[#00f5ff]" /> ACTIVE</span>
                <span className="flex items-center gap-2 text-[8px] md:text-[10px] text-white/40 font-bold"><div className="w-2 h-2 rounded-full bg-[#ff006e]" /> QUEUED</span>
              </div>
            </div>
            
            <div className="h-[250px] sm:h-[350px] md:h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={DATA}>
                  <defs>
                    <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00f5ff" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#00f5ff" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#ffffff20" fontSize={10} fontWeight="bold" tickLine={false} axisLine={false} />
                  <YAxis stroke="#ffffff20" fontSize={10} fontWeight="bold" tickLine={false} axisLine={false} hide={true} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '4px' }}
                    itemStyle={{ color: '#fff', fontSize: '10px', fontWeight: 'bold' }}
                    cursor={{ stroke: '#00f5ff20', strokeWidth: 1 }}
                  />
                  <Area type="monotone" dataKey="active" stroke="#00f5ff" fillOpacity={1} fill="url(#colorActive)" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="absolute top-0 right-0 -mt-6 -mr-6 md:-mt-10 md:-mr-10 w-24 h-24 md:w-40 md:h-40 border-t-2 border-r-2 border-[#00f5ff]/20 pointer-events-none transition-all group-hover:scale-110" />
            <div className="absolute bottom-0 left-0 -mb-6 -ml-6 md:-mb-10 md:-ml-10 w-24 h-24 md:w-40 md:h-40 border-b-2 border-l-2 border-[#ff006e]/20 pointer-events-none transition-all group-hover:scale-110" />
          </div>
        </div>
      </div>
    </section>
  );
};
