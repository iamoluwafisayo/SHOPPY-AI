import React from "react";
import { Box, Paper } from "@mui/material";
import Chat from "../components/chats/Chat";
import Sidebar from "../components/common/dashboard/Sidebar";
import { ChatReducer } from "../components/reducers/ChatReducer";
import { ChatState } from "../components/reducers/states/initState";
import ACTIONS from "../components/reducers/actions";
import { messages } from "../data/messages";

const sideBarWidth = 300;
const Chats = () => {
  const [state, dispatch] = React.useReducer(ChatReducer, ChatState);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleSelectUser = (conversations) => {
    dispatch({
      type: ACTIONS.SET_CHAT_USER,
      payload: { conversations: conversations, isReady: true },
    });
  };
  const handleNewConversation = () => {
    dispatch({
      type: ACTIONS.SET_NEW_CONVERSATION,
      payload: "",
    });
  };
  return (
    <Box component="section">
      <Sidebar
        sideBarWidth={sideBarWidth}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        onSelectUser={handleSelectUser}
        newConversation={handleNewConversation}
      />
      <Paper
        sx={{
          borderRadius: "12px",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "divider",
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          width: "74%",
        }}
      >
        <Chat
          selectedUser={state.selectedUser}
          conversations={state.conversations}
          newConversation={state.newConversation}
        />
      </Paper>
    </Box>
  );
};

export default Chats;
