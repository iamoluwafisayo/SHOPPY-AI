import React from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  Typography,
  ListItemButton,
  IconButton,
} from "@mui/material";
import { FaRegEdit } from "react-icons/fa";
import { customers, conversations } from "../../../data/customers";

const Sidebar = ({
  window,
  sideBarWidth,
  mobileOpen,
  handleDrawerToggle,
  onSelectUser,
  newConversation,
}) => {
  const drawer = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box p={1.75}>
        <Button
          fullWidth
          role={undefined}
          onClick={newConversation}
          tabIndex={-1}
          endIcon={<FaRegEdit />}
        >
          New Chat
        </Button>
      </Box>
      <Divider />
      <Box sx={{ flex: 1, overflowY: "auto" }}>
        <List disablePadding>
          {conversations.map(({ id, topic, discussions }) => (
            <ListItemButton
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              key={id}
              onClick={() => onSelectUser({ id, topic, discussions })}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  <Typography>{topic}</Typography>
                </Box>
              </Box>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <IconButton
                  sx={{
                    width: "16px",
                    height: "16px",
                    backgroundColor: "#fc424a !important",
                    color: "#fff",
                    fontSize: "10px",
                    float: "right",
                  }}
                >
                  {Math.floor(Math.random() * 10)}
                </IconButton>
              </Box>
            </ListItemButton>
          ))}
        </List>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "calc(100vh - 660px)",
        }}
      >
        <Box p={1}>
          <Button
            fullWidth
            role={undefined}
            onClick={newConversation}
            tabIndex={-1}
            endIcon={<FaRegEdit />}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{
        width: { md: sideBarWidth },
        flexShrink: { md: 0 },
      }}
      aria-label="mailbox folders"
    >
      {/* For Mobile and Small Sized Tablets. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: sideBarWidth,
            backgroundColor: "sidebar.background",
            color: "sidebar.textColor",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* For Desktop and large Sized Tablets. */}
      <Drawer
        variant="permanent"
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
          "& .MuiDrawer-paper": {
            width: sideBarWidth,
            boxSizing: "border-box",
            borderRight: 0,
            backgroundColor: "grey.light",
            color: "sidebar.textColor",
          },
          "& .MuiListItemButton-root:hover": {
            backgroundColor: "grey.lightActive",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
