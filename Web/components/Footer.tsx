
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full liquid-gradient"></div>
             <span className="text-lg font-bold text-white tracking-tighter">LUMINA AI</span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Architecture</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Neural-link</a>
            <a href="#" className="hover:text-white transition-colors">Ethics Codex</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="text-slate-600 text-xs font-mono uppercase tracking-widest">
            © 2025 LUMINA_SYS.ALL_RIGHTS_RESERVED
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
