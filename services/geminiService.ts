
import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

const MODEL_NAME = 'gemini-2.5-pro';

if (!process.env.API_KEY) {
  throw new Error("VITE_API_KEY environment variable not set. Please add it to your .env file.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Create a single chat instance to maintain conversation history
const chat: Chat = ai.chats.create({
  model: MODEL_NAME,
  config: {
    systemInstruction: SYSTEM_INSTRUCTION,
  },
});


export const sendMessageToAI = async (userInput: string): Promise<string> => {
  if (!userInput.trim()) {
    // This case is handled in the UI, but as a fallback.
    return "I can't read your mind if you don't type anything!";
  }

  try {
    const response = await chat.sendMessage({ message: userInput });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    // Provide a user-friendly error message
    return "My circuits are fried from trying to comprehend that. Maybe try something simpler, or check if my AI brain is still plugged in. (Check API key and network connection).";
  }
};
