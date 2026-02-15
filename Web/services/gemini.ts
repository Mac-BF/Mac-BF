
import { GoogleGenAI } from "@google/genai";

export const getLuminaInsights = async (prompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      temperature: 0.9,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 256,
      thinkingConfig: { thinkingBudget: 1000 }
    },
  });
  return response.text;
};
