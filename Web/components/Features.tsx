
import React from 'react';

const FeatureCard: React.FC<{ title: string; desc: string; icon: string; delay: string }> = ({ title, desc, icon, delay }) => (
  <div className={`glass p-8 rounded-3xl group hover:border-indigo-500/50 transition-all duration-500 transform hover:-translate-y-2`}>
    <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">{title}</h3>
    <p className="text-slate-400 leading-relaxed font-light text-sm">
      {desc}
    </p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      title: "Performance First",
      desc: "Websites that load in milliseconds. I prioritize speed and core web vitals to ensure zero bounce rates.",
      icon: "⚡",
    },
    {
      title: "AI-Integrated UX",
      desc: "Leveraging Large Language Models to create truly personalized, conversational user journeys.",
      icon: "🤖",
    },
    {
      title: "Adaptive Systems",
      desc: "Responsive design taken to the next level. Fluid layouts that feel native on every single device size.",
      icon: "📱",
    },
    {
      title: "Motion Narratives",
      desc: "Sophisticated animations that guide the user through your story without distracting from the content.",
      icon: "✨",
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-indigo-500 font-bold uppercase tracking-[0.2em] text-sm mb-4">The Methodology</h2>
        <p className="text-4xl md:text-5xl font-bold text-white mb-6">Built for the Modern Web</p>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
          I combine the rigor of software engineering with the intuition of artistic design. No templates, just bespoke digital craftsmanship.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <FeatureCard key={i} title={f.title} desc={f.desc} icon={f.icon} delay={`${i * 0.1}s`} />
        ))}
      </div>
    </div>
  );
};

export default Features;
