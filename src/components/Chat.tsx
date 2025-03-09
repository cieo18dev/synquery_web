import { Box, Typography } from "@mui/material";
import Message from "./Message";
import ChatInput from "./ChatInput";
import { useChat } from "../hooks/useChat";

const Chat = () => {
  const { messages, sendMessage, loading } = useChat();

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
      {/* ✅ Updated Header with Title & Subtext */}
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Typography variant="h6" fontWeight="bold">
          Technician scheduling support
        </Typography>
        <Typography variant="body2" color="gray">
          We typically reply within a few minutes
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} isUser={msg.isUser} isTyping={msg.isTyping} />
        ))}
      </Box>

      <ChatInput onSendMessage={sendMessage} disabled={loading} />
    </Box>
  );
};

export default Chat;
