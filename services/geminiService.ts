import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

// Initialize the client.
// The API key must be obtained exclusively from process.env.API_KEY.
// We use a lazy initialization or safe check to prevent app crashes if the key is missing.
const apiKey = process.env.API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
    try {
        ai = new GoogleGenAI({ apiKey: apiKey });
    } catch (error) {
        console.error("Failed to initialize GoogleGenAI client:", error);
    }
} else {
    console.warn("FoTI: process.env.API_KEY is missing. AI features will be disabled.");
}

const SYSTEM_INSTRUCTION = `
You are the "FoTI Smart Assistant", an AI representative for the Foundations of Tourism Institute (FoTI).
Your goal is to assist two types of users:
1. Potential Tourists/Customers: Help them find tours, suggest itineraries based on African regions, and explain the unique value of FoTI (student-run, research-backed).
2. Students/Researchers: Assist them in brainstorming tourism product ideas, drafting academic abstracts, or outlining documentary scripts.

Tone: Professional, academic, yet commercially inviting and warm.
Knowledge Base:
- FoTI allows students to run tourism businesses during studies.
- Revenue funds research.
- Outputs must include documentary evidence and academic publication.
- Career path: Student -> Travel Agency for Hire -> Think Tank.

When suggesting tours, use general knowledge about African tourism but mention that FoTI students specialize in niche, research-based experiences like "Eco-Conservation in Serengeti" or "Heritage Tours in Zanzibar".
`;

export const sendMessageToGemini = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  if (!ai) {
    return "I am currently unable to connect to the AI service. Please ensure the API Key is configured in the application settings.";
  }

  try {
    // We construct a chat session for context.
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      })),
    });

    const response = await chat.sendMessage({
      message: newMessage
    });

    return response.text || "I apologize, but I couldn't generate a response at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the FoTI knowledge base right now. Please try again later.";
  }
};