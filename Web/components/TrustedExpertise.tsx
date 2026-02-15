
import React from 'react';

const TrustedExpertise: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div className="relative order-2 md:order-1">
          <div className="aspect-[4/5] glass rounded-[3rem] overflow-hidden p-4">
             <div className="w-full h-full bg-slate-900 rounded-[2.5rem] relative overflow-hidden group">
               <img 
                 src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800" 
                 alt="Professional workspace" 
                 className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-[3000ms]"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
               
               <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex gap-2 mb-4">
                    {["React", "Next.js", "TypeScript", "GSAP"].map(tech => (
                      <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] text-slate-400 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2 italic">Clean Code, Pure Motion.</h4>
                  <p className="text-slate-400 text-sm font-light">Industry-standard engineering with a boutique design sensibility.</p>
               </div>
             </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-indigo-500 font-bold uppercase tracking-[0.2em] text-sm mb-4">The Professional Link</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">Your Vision, <br />Scientifically Rendered</h3>
          <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
            I don't just build websites; I architect conversion engines. By combining behavioral psychology with cutting-edge front-end technologies, I ensure your digital presence is both a masterpiece and a powerhouse.
          </p>
          <div className="grid gap-6">
            {[
              { title: "Strategic Oversight", desc: "Every project begins with a deep dive into your business goals and user personas." },
              { title: "Technical Excellence", desc: "Semantic HTML, optimized assets, and accessible ARIA patterns are my foundation." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex-shrink-0 flex items-center justify-center text-xl group-hover:bg-indigo-500 transition-all duration-500">
                  {i === 0 ? "🎯" : "🛠️"}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-slate-500 text-sm font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedExpertise;
