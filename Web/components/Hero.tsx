
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-6 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            Crafting Digital Ecosystems
          </div>
          <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight mb-8">
            Liquid <br />
            <span className="bg-clip-text text-transparent liquid-gradient">Web Architecture</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-lg mb-12 leading-relaxed font-light">
            I build high-performance, future-focused digital experiences. Interfaces that don't just look stunning—they respond, adapt, and convert with precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 rounded-full liquid-gradient text-white font-bold text-lg shadow-xl shadow-indigo-500/20 transform hover:scale-105 transition-all">
              Start Your Project
            </button>
            <button className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-bold text-lg hover:bg-white/5 transition-all">
              Explore Portfolio
            </button>
          </div>
          
          <div className="mt-16 flex items-center gap-8 border-t border-slate-800/50 pt-8">
            <div>
              <div className="text-2xl font-bold text-white">150+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Sites Launched</div>
            </div>
            <div className="w-px h-10 bg-slate-800"></div>
            <div>
              <div className="text-2xl font-bold text-white">100/100</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Lighthouse Score</div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 liquid-gradient rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute inset-0 border border-indigo-500/20 rounded-full animate-[spin_25s_linear_infinite]"></div>
            
            <div className="relative w-full h-full glass rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-8 group">
              <div className="relative w-full h-full bg-slate-950/80 rounded-2xl overflow-hidden border border-slate-800">
                {/* Mockup Browser UI */}
                <div className="h-8 w-full bg-slate-900 flex items-center px-4 gap-1.5 border-b border-slate-800">
                   <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                   <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                   <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                </div>
                <div className="p-4 space-y-4">
                  <div className="h-4 w-2/3 liquid-gradient rounded-full opacity-50"></div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-20 bg-slate-900 rounded-xl animate-pulse"></div>
                    <div className="h-20 bg-slate-900 rounded-xl animate-pulse delay-75"></div>
                  </div>
                  <div className="h-32 w-full border border-indigo-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-slate-600 text-[10px] font-mono">RENDER_CYCLE_ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
