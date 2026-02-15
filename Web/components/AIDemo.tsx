
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIDemo: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  const handleConsult = async () => {
    if (!prompt.trim()) return;
    
    setIsThinking(true);
    setResponse("");

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Act as Lumina's Lead Web Strategist. The user is asking for design or tech advice for their website: "${prompt}". 
        Provide a professional, sophisticated, and encouraging response (under 80 words). 
        Mention how a tech-forward approach with clean UI and high performance would solve their problem. 
        Keep the tone liquid, innovative, and expert.`,
        config: {
          thinkingConfig: { thinkingBudget: 2000 }
        }
      });
      
      setResponse(result.text || "Our strategy nodes are currently syncing. Please try again.");
    } catch (error) {
      console.error(error);
      setResponse("A connection error occurred. Our neural link is being restored.");
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="glass p-12 rounded-[3rem] shadow-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px] -z-10"></div>
        
        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-16 h-16 rounded-2xl liquid-gradient p-1 mb-6 rotate-3">
            <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center text-2xl">
              💡
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Neural Design Consultant</h2>
          <p className="text-slate-400 font-light max-w-md">
            Instantly brainstorm your next digital venture with my AI-powered strategy engine.
          </p>
        </div>

        <div className="relative mb-8">
          <textarea 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="What kind of web experience are we building today?"
            className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl p-6 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all min-h-[100px] resize-none"
          />
          <button 
            onClick={handleConsult}
            disabled={isThinking}
            className="absolute bottom-4 right-4 px-6 py-2 rounded-xl liquid-gradient text-white font-bold text-sm shadow-lg disabled:opacity-50 transition-all hover:scale-105"
          >
            {isThinking ? "Consulting..." : "Analyze Idea"}
          </button>
        </div>

        {isThinking && (
          <div className="space-y-4 mb-8 animate-pulse">
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full liquid-gradient w-1/2 animate-[loading_1.5s_ease-in-out_infinite]"></div>
            </div>
          </div>
        )}

        {response && (
          <div className="bg-white/5 border border-indigo-500/30 rounded-2xl p-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
             <div className="text-indigo-400 text-[10px] font-mono mb-4 uppercase tracking-[0.3em]">STRATEGY_OUTPUT_ALPHA</div>
             <p className="text-slate-200 leading-relaxed italic text-lg font-light">
               "{response}"
             </p>
          </div>
        )}

        {!response && !isThinking && (
          <div className="flex flex-wrap justify-center gap-2">
            {["E-commerce for luxury?", "Minimalist blog?", "Web3 Dashboard?"].map((suggestion) => (
              <button 
                key={suggestion}
                onClick={() => setPrompt(suggestion)}
                className="text-[10px] uppercase tracking-widest text-slate-500 border border-slate-800 px-4 py-2 rounded-full hover:border-indigo-500/50 hover:text-indigo-400 transition-all"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AIDemo;
