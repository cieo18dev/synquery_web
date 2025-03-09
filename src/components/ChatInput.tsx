import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const ChatInput = ({ onSendMessage, disabled = false }: ChatInputProps) => {
  const [input, setInput] = useState("");

  const handleSendClick = () => {
    if (!input.trim() || disabled) return;
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
        disabled={disabled}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSendClick}
        sx={{ ml: 1 }}
        disabled={disabled}
      >
        Send
      </Button>
    </Box>
  );
};

export default ChatInput;
