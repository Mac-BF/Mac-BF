
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', href: '#features' },
    { label: 'Consultant', href: '#ai-demo' },
    { label: 'Studio', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass border-b' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl liquid-gradient flex items-center justify-center p-0.5 transform rotate-3 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <span className="text-xl font-bold bg-clip-text text-transparent liquid-gradient">L</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tighter text-white leading-none">LUMINA</span>
            <span className="text-[10px] font-mono text-slate-500 tracking-[0.2em]">DESIGN_STUDIO</span>
          </div>
        </a>

        <div className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-xs font-bold text-slate-400 hover:text-white transition-colors tracking-[0.2em] uppercase"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button className="hidden lg:block px-6 py-2 rounded-full text-xs font-bold border border-white/20 text-white hover:bg-white hover:text-slate-950 transition-all transform hover:scale-105 active:scale-95">
          Estimate Project
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
