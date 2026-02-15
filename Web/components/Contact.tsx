
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-6 text-center">
      <div className="max-w-4xl mx-auto py-24 px-10 rounded-[4rem] relative overflow-hidden glass border-white/5">
        <div className="absolute inset-0 liquid-gradient opacity-10 blur-[150px] -z-10"></div>
        
        <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold tracking-widest uppercase mb-8">
          Availability: Opening Q3 2025
        </div>
        
        <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight">Let's build the <span className="italic">Future Web</span>.</h2>
        <p className="text-slate-400 text-xl mb-12 font-light max-w-2xl mx-auto">
          Ready to elevate your brand with a high-performance digital ecosystem? Let's discuss your roadmap.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input 
            type="email" 
            placeholder="Your digital address..."
            className="w-full sm:w-96 bg-slate-950 border border-slate-800 rounded-full px-8 py-5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
          <button className="px-10 py-5 rounded-full bg-white text-slate-950 font-bold text-lg hover:bg-indigo-500 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-2xl">
            Initialize Collaboration
          </button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-wrap justify-center gap-8 text-[10px] text-slate-500 font-mono tracking-widest">
           <span>INSTAGRAM: @LUMINA.DESIGN</span>
           <span>LINKEDIN: /IN/LUMINAWEB</span>
           <span>DRIBBBLE: /LUMINA</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
