// components/ChatInput.tsx
import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [input, setInput] = useState("");

  const handleSendClick = () => {
    if (!input.trim()) return;
    onSendMessage(input);
    setInput("");
  };

  return (
    <Box sx={{ display: "flex", mt: 2 }}>
      <TextField
        fullWidth
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        onKeyPress={(e) => e.key === "Enter" && handleSendClick()}
      />
      <Button variant="contained" color="primary" onClick={handleSendClick} sx={{ ml: 1 }}>
        Send
      </Button>
    </Box>
  );
};

export default ChatInput;
