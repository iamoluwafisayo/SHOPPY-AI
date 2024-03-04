import React from "react";
import styled from "@emotion/styled";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
  Toolbar,
  CardMedia,
} from "@mui/material";
import { timestampFormatter } from "../utils/chatUtils/time";
import { FiSend } from "react-icons/fi";
import { FaRobot, FaUserTie } from "react-icons/fa";
import { ChatReducer } from "../reducers/ChatReducer";
import ACTIONS from "../reducers/actions";
import { ChatState } from "../reducers/states/initState";

const Chat = ({ newConversation, conversations }) => {
  const messagesEndRef = React.useRef(null);
  const [state, dispatch] = React.useReducer(ChatReducer, ChatState);

  React.useEffect(() => {
    if (Object.keys(conversations).length > 0) {
      dispatch({
        type: ACTIONS.SET_CHAT_DATA,
        payload: { conversations: conversations, isReady: true },
      });
    }
  }, [newConversation, conversations]);

  console.log(conversations);

  React.useEffect(() => {
    scrollToBottom();
  }, [state.messages]);

  const handleMessageChange = (event) => {
    dispatch({
      type: ACTIONS.SET_NEW_MESSAGE,
      payload: event.target.value,
    });
  };

  const generateMessageId = () => {
    return "m" + Math.random().toString(36).substr(2, 9);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleSendMessage = () => {
    if (state.newMessage.trim() !== "") {
      const messageId = generateMessageId();
      const timestamp = new Date().toISOString();
      const message = {
        id: messageId,
        text: state.newMessage,
        createdAt: timestamp,
        user: {
          id: "u2",
          name: "Lukas",
        },
      };
      dispatch({
        type: ACTIONS.SET_APPEND_MESSAGE,
        payload: { id: conversations.id, message: message },
      });
    }
  };
  console.log(state.conversations.discussions);
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const MessageBox = styled(Box)(({ theme }) => ({
    position: "relative",
    padding: "8px",
    borderRadius: "5px",
    maxWidth: "400px",
    width: "100%",
    wordWrap: "break-word",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      width: "10px",
      height: "10px",
    },
  }));

  return (
    <>
      <Box>
        <Toolbar>
          <CardMedia
            component="img"
            image="/images/logo.png"
            alt="Logo"
            sx={{ width: 30 }}
          />
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", ml: 2, color: "grey.dark" }}
          >
            Shoppy Ai
          </Typography>
        </Toolbar>
      </Box>

      <Divider />

      <Box
        sx={{
          height: "80vh",
          overflow: "auto",
          p: 3,
        }}
      >
        {state.conversations?.discussions?.length > 0 ? (
          state.conversations.discussions.map(
            ({ id, text, user, createdAt }) => (
              <Box key={id}>
                <Box
                  sx={{
                    display: "flex",
                    mt: 2,
                    justifyContent:
                      user.id === "u1" ? "flex-start" : "flex-end",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: "30px",
                      height: "30px",
                      order: user.id === "u2" && 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      backgroundColor: user.id === "u1" ? "#027edd" : "chatBox",
                    }}
                  >
                    {user.id === "u1" ? <FaRobot /> : <FaUserTie />}
                  </Box>

                  <Box>
                    <MessageBox
                      sx={{
                        backgroundColor:
                          user.id === "u1" ? "#027edd" : "chatBox",
                        color: user.id === "u1" && "#fff",
                        "&::before": {
                          backgroundColor:
                            user.id === "u1" ? "#027edd" : "chatBox",
                          transform: `rotate(45deg) ${
                            user.id === "u1"
                              ? "translateX(-7px)"
                              : "translateX(7px)"
                          } `,
                          left: user.id === "u1" && 0,
                          right: user.id === "u2" && 0,
                          top: user.id === "u1" && "10px !important",
                        },
                      }}
                    >
                      {text}
                    </MessageBox>
                    <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                      {timestampFormatter(createdAt)}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            )
          )
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              mt: 8,
              p: 1,
              gap: 3,
            }}
          >
            <CardMedia
              component="img"
              image="/images/logo.png"
              alt="Logo"
              sx={{ width: 70 }}
            />
            <Typography variant="h5">How can i help you Today?</Typography>
          </Box>
        )}
        <div ref={messagesEndRef} />
      </Box>

      <Box sx={{ mt: 3, pb: 1 }}>
        <TextField
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Avatar sx={{ width: "20px", height: "20px" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Tooltip title="Send">
                  <IconButton
                    sx={{ fontSize: "17px", color: "text.primary" }}
                    onClick={handleSendMessage}
                  >
                    <FiSend />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
          }}
          variant="outlined"
          fullWidth
          sx={{ paddingX: "20px" }}
          size="small"
          value={state.newMessage}
          placeholder="Enter a message"
          onChange={handleMessageChange}
          onKeyPress={handleKeyPress}
        />
      </Box>
    </>
  );
};

export default Chat;
