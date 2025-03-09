// components/Chat.tsx
import { Box, Typography } from "@mui/material";
import Message from "./Message";
import ChatInput from "./ChatInput";
import { useChat } from "../hooks/useChat";

const Chat = () => {
  const { messages, sendMessage } = useChat();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "80vh",
        width: "100%",
        maxWidth: "500px",
        margin: "auto",
        border: "1px solid #ccc",
        borderRadius: 2,
        p: 2,
        backgroundColor: "white",
      }}
    >
      <Typography variant="h6" align="center" mb={2}>
        Technician Scheduling Support
      </Typography>

      <Box sx={{ flexGrow: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} isUser={msg.isUser} />
        ))}
      </Box>

      <ChatInput onSendMessage={sendMessage} />
    </Box>
  );
};

export default Chat;
