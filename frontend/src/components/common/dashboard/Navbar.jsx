import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { FiMenu } from "react-icons/fi";
import ProfileMenu from "./ProfileMenu";
import NotificationMenu from "./NotificationMenu";

const Navbar = ({ sideBarWidth, handleDrawerToggle }) => {
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      sx={{
        background: theme.palette.background.paper,
        width: { md: `calc(100% - ${sideBarWidth}px)` },
        ml: { md: `${sideBarWidth}px` },
        color: "text.primary",
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Tooltip title="Menu" arrow>
              <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: "none" } }}
              >
                <FiMenu />
              </IconButton>
            </Tooltip>

            <Typography
              variant="h5"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Dashboard
            </Typography>
          </Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <NotificationMenu />
            <ProfileMenu />
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
