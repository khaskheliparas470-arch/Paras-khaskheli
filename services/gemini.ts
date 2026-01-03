
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateSEOSuggestions = async (url: string) => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Analyze this website for SEO improvements: ${url}. Provide technical keypoints, content strategy, and ranking suggestions.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          score: { type: Type.NUMBER },
          keywords: { type: Type.ARRAY, items: { type: Type.STRING } },
          issues: { type: Type.ARRAY, items: { type: Type.STRING } },
          recommendations: { type: Type.ARRAY, items: { type: Type.STRING } },
          clientStrategy: { type: Type.STRING }
        },
        required: ["score", "keywords", "issues", "recommendations", "clientStrategy"]
      }
    }
  });

  return JSON.parse(response.text || '{}');
};
