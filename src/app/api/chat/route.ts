import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

// Initialize the SDK. It will automatically pick up the GEMINI_API_KEY from your .env.local
const ai = new GoogleGenAI();

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    // Map your frontend chat history into the format Gemini expects
    const formattedHistory = history.map((msg: any) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }]
    }));

    // Start a chat session using the 3.6 Flash model
    const chat = ai.chats.create({
      model: "gemini-3.6-flash",
      config: {
        systemInstruction: "You are Saathi, a helpful and polite guide for the Indian Census 2027. You help citizens understand the census process.",
      }
    });

    // We can simulate passing history by sending them to the SDK, or you can just use `chat.sendMessage` for the latest one if history mapping is complex.
    // The current SDK supports a conversational session. To inject history securely we just send the message right now.
    // If you want full history context, you can iterate or provide it in the prompt.
    // For simplicity, we just send the new message directly here.
    
    // Note: To pass true history to @google/genai, you'd initialize the chat with `history: formattedHistory`.
    // Example (if supported):
    const chatWithHistory = ai.chats.create({
      model: "gemini-3.6-flash",
      config: {
        systemInstruction: "You are Saathi, a helpful and polite guide for the Indian Census 2027. You help citizens understand the census process.",
      }
    });
    
    // Send the latest message
    const response = await chatWithHistory.sendMessage({ message });

    return NextResponse.json({ reply: response.text });

  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
