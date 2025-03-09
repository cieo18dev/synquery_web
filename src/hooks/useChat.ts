import { useState } from "react";
import { fetchResponseFromAPI } from "../services/chatService";

export interface MessageType {
  text: string;
  isUser: boolean;
  isTyping?: boolean;
}

export const useChat = () => {
  const [messages, setMessages] = useState<MessageType[]>([
    { text: "Hello! How can I help you today?", isUser: false },
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (input: string) => {
    if (!input.trim()) return;

    const userMessage = { text: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]);

    setMessages((prev) => [...prev, { text: "Typing...", isUser: false, isTyping: true }]);
    setLoading(true);

    try {
      const apiResponse = await fetchResponseFromAPI(input);
      console.log("API response:", apiResponse);

      setMessages((prev) => prev.filter((msg) => !msg.isTyping));

      const botMessage = { text: apiResponse.message, isUser: false };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching API response:", error);

      setMessages((prev) => prev.filter((msg) => !msg.isTyping));
      setMessages((prev) => [...prev, { text: "Error processing request.", isUser: false }]);
    } finally {
      setLoading(false);
    }
  };

  return { messages, sendMessage, loading };
};
