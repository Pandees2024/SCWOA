
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function askAssistant(question: string, context: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a helpful Owners Association Assistant. Use the following community context to answer the user's question. If you don't know, suggest they contact the office bearers.
      
      CONTEXT:
      ${context}
      
      USER QUESTION:
      ${question}`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to my brain right now. Please try again or visit the office.";
  }
}
