// hooks/useChat.ts
import { useState } from "react";
import { fetchResponseFromAPI } from "../services/chatService";

export interface MessageType {
  text: string;
  isUser: boolean;
}

export const useChat = () => {
  const [messages, setMessages] = useState<MessageType[]>([
    { text: "Hello! How can I help you today?", isUser: false },
  ]);

  const sendMessage = async (input: string) => {
    if (!input.trim()) return;

    const userMessage = { text: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const apiResponse = await fetchResponseFromAPI(input);
      const botMessage = { text: apiResponse.message, isUser: false };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching API response:", error);
      setMessages((prev) => [...prev, { text: "Error processing request.", isUser: false }]);
    }
  };

  return { messages, sendMessage };
};
