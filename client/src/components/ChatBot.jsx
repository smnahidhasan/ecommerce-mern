import React, { useState } from 'react';
import {
  Box,
  Fab,
  Dialog,
  DialogContent,
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => {
    setOpen(!open);
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Example of a simple bot response (you can replace this with API call)
    const botReply = generateBotResponse(input);
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: botReply },
      ]);
    }, 1000);

    setInput('');
  };

  const generateBotResponse = (input) => {
    if (input.toLowerCase().includes('order')) {
      return 'You can track your order in the "My Orders" section.';
    } else if (input.toLowerCase().includes('return')) {
      return 'We have a 30-day return policy. Please visit our Returns page for more details.';
    } else if (input.toLowerCase().includes('payment')) {
      return 'We accept all major credit cards, PayPal, and other online payment methods.';
    } else {
      return "I'm here to help! Please provide more details or check our Help Center.";
    }
  };

  return (
    <>
      {/* Floating Chat Icon */}
      <Fab
        color="primary"
        aria-label="chat"
        onClick={toggleChat}
        sx={{ position: 'fixed', bottom: 20, right: 20 }}
      >
        <ChatIcon />
      </Fab>

      {/* Chat Window */}
      <Dialog
        open={open}
        onClose={toggleChat}
        PaperProps={{
          sx: {
            position: 'fixed',
            bottom: 80,
            right: 20,
            width: '300px',
            maxHeight: '500px',
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={2}
        >
          <Typography variant="h6">Chat with Us</Typography>
          <IconButton onClick={toggleChat}>
            <CloseIcon />
          </IconButton>
        </Box>

        <DialogContent
          dividers
          sx={{ flexGrow: 1, overflowY: 'auto', padding: 2 }}
        >
          <List>
            {messages.map((message, index) => (
              <ListItem
                key={index}
                sx={{
                  justifyContent:
                    message.sender === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <ListItemText
                  primary={message.text}
                  primaryTypographyProps={{
                    sx: {
                      bgcolor:
                        message.sender === 'user' ? 'primary.main' : 'grey.300',
                      color: message.sender === 'user' ? 'white' : 'black',
                      borderRadius: 1,
                      padding: 1,
                      maxWidth: '80%',
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </DialogContent>

        <Box display="flex" p={2} borderTop="1px solid #ddd">
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSendMessage();
            }}
          />
          <IconButton color="primary" onClick={handleSendMessage}>
            <SendIcon />
          </IconButton>
        </Box>
      </Dialog>
    </>
  );
};

export default ChatBot;
