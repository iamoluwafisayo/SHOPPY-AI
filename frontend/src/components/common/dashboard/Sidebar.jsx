import {
  Box,
  CardMedia,
  Divider,
  Drawer,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { navigationLinks } from "../../../data/links";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";

const Sidebar = ({ window, sideBarWidth, mobileOpen, handleDrawerToggle }) => {
  const links = navigationLinks;
  const drawer = (
    <Box>
      <Toolbar>
        <CardMedia
          component="img"
          image="/images/logo.png"
          alt="Logo"
          sx={{ width: 40 }}
        />
        <Typography variant="h6" sx={{ fontWeight: "bold", ml: 2, color:"grey.dark" }}>
          Shoppy Ai
        </Typography>
      </Toolbar>
      <Divider />
      <List disablePadding>
        {links?.map((link, index) =>
          link?.subLinks ? (
            <SidebarItemCollapse {...link} key={index} />
          ) : (
            <SidebarItem {...link} key={index} />
          )
        )}
      </List>
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
