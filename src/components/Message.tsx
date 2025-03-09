import { Box, Typography } from "@mui/material";

interface MessageProps {
  text: string;
  isUser: boolean;
  isTyping?: boolean;
}

const Message = ({ text, isUser, isTyping }: MessageProps) => {
  return (
    <Box
      sx={{
        alignSelf: isUser ? "flex-end" : "flex-start",
        backgroundColor: isUser ? "#1976d2" : "#f0f0f0",
        color: isUser ? "white" : "black",
        padding: "8px 12px",
        borderRadius: "12px",
        margin: "4px",
        maxWidth: "75%",
        position: "relative",
      }}
    >
      {isTyping ? (
        <Typography sx={{ fontStyle: "italic", opacity: 0.7 }}>Typing...</Typography>
      ) : (
        <Typography>{text}</Typography>
      )}
    </Box>
  );
};

export default Message;
