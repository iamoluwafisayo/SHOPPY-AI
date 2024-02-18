import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useTheme } from "@mui/material/styles";

const pages = ["Home", "Services", "Pricing", "About Us", "Contact Us"];

function ResponsiveNavBar() {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container
        maxWidth="xl"
        sx={{ background: theme.palette.background.paper }}
      >
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <AdbIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                color: theme.palette.text.primary,
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: theme.palette.text.primary,
                textDecoration: "none",
              }}
            >
              SHOPPY AI
            </Typography>
          </Box>

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              color: theme.palette.text.primary,
            }}
          >
            <AdbIcon />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: theme.palette.text.primary,
                textDecoration: "none",
              }}
            >
              SHOPPY AI
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              color: theme.palette.text.primary,
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
                color: theme.palette.red.normal,
                width: "100%",
                "& .MuiMenu-paper": {
                  width: "100%",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Typography>{page}</Typography>
                </MenuItem>
              ))}
              <Box
                sx={{
                  flexGrow: 0,
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Button sx={{ color: theme.palette.text.primary }}>
                  Login
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "20px",
                    background: theme.palette.blue.normal,
                    "&:hover": {
                      background: theme.palette.blue.hover,
                      color: theme.palette.text.secondary,
                    },
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: theme.palette.text.primary,
                  display: "block",
                  "&:hover": {
                    background: theme.palette.grey.lightHover,
                    color: theme.palette.text.secondary,
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <Button sx={{ color: theme.palette.text.primary }}>Login</Button>
            <Button
              color="inherit"
              variant="contained"
              sx={{
                borderRadius: "20px",
                background: theme.palette.blue.normal,
                "&:hover": {
                  background: theme.palette.blue.hover,
                  color: theme.palette.text.secondary,
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveNavBar;
