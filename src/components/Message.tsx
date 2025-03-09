// components/Message.tsx
import { Box, Typography } from "@mui/material";

interface MessageProps {
  text: string;
  isUser: boolean;
}

const Message = ({ text, isUser }: MessageProps) => {
  return (
    <Box
      sx={{
        maxWidth: "80%",
        p: 2,
        borderRadius: 2,
        backgroundColor: isUser ? "#1976d2" : "#f1f1f1",
        color: isUser ? "white" : "black",
        alignSelf: isUser ? "flex-end" : "flex-start",
        m: 1,
      }}
    >
      <Typography variant="body1">{text}</Typography>
    </Box>
  );
};

export default Message;
