export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export const sendMessageToGemini = async (
  message: string,
  history: ChatMessage[] = [],
  context: any = {}
): Promise<string> => {
  try {
    // Call our secure Next.js API route
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message, history, context }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.reply;
    
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again later.";
  }
};
