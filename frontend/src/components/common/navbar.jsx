import * as React from "react";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Menu,
    Container,
    Button,
    useTheme,
    MenuItem,
    CardMedia,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import ButtonLink from "../utils/ButtonLink";
import { Link } from "react-router-dom";

const pages = ["Home", "Services", "Pricing", "About Us", "Contact Us"];

console.log(localStorage.getItem("token"));
const ResponsiveNavBar = () => {
    const theme = useTheme();
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
            position="fixed"
            sx={{ background: theme.palette.background.paper, pl: 10, pr: 10 }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: "none",
                                md: "flex",
                            },
                        }}
                    >
                        <style>
                            @import
                            url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap')
                        </style>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "left",
                                alignItems: "center",
                                color: "black",
                                height: 65,
                                borderBottom: 1,
                                borderColor: "divider",
                            }}
                        >
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    flexGrow: 1,
                                    fontFamily: "Space Mono, monospace",
                                    fontWeight: "bold",
                                }}
                            >
                                Shoppy AI
                            </Typography>

                            <CardMedia
                                component="img"
                                image="/images/shoppyAi.png"
                                alt="Shoppy AI"
                                sx={{ width: 40, height: 40, mr: 1 }}
                            />
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: { xs: "flex", md: "none" },
                            mr: 1,
                            color: theme.palette.text.primary,
                        }}
                    >
                        <AdbIcon />
                        <ButtonLink theme={theme} />
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
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <ButtonLink
                                        page={page}
                                        handleCloseNavMenu={handleCloseNavMenu}
                                    />
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
                                {localStorage.getItem("token") ? (
                                    <Button
                                        component={Link}
                                        to="/dashboard/chats"
                                        variant="contained"
                                        sx={{
                                            borderRadius: "20px",
                                            background:
                                                theme.palette.blue.normal,
                                            "&:hover": {
                                                background:
                                                    theme.palette.blue.hover,
                                                color: theme.palette.text
                                                    .secondary,
                                            },
                                        }}
                                    >
                                        Chat
                                    </Button>
                                ) : (
                                    <div>
                                        <Button
                                            component={Link}
                                            to="/auth/signin"
                                            sx={{
                                                color: theme.palette.text
                                                    .primary,
                                            }}
                                        >
                                            Login
                                        </Button>
                                        <Button
                                            component={Link}
                                            to="/auth/signup"
                                            variant="contained"
                                            sx={{
                                                borderRadius: "20px",
                                                background:
                                                    theme.palette.blue.normal,
                                                "&:hover": {
                                                    background:
                                                        theme.palette.blue
                                                            .hover,
                                                    color: theme.palette.text
                                                        .secondary,
                                                },
                                            }}
                                        >
                                            Get Started
                                        </Button>
                                    </div>
                                )}
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
                                sx={{
                                    my: 2,
                                    color: theme.palette.text.primary,
                                    "&:hover": {
                                        background:
                                            theme.palette.grey.lightHover,
                                        color: theme.palette.text.secondary,
                                    },
                                }}
                            >
                                <ButtonLink page={page} />
                            </Button>
                        ))}
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 0,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {localStorage.getItem("token") ? (
                            <Button
                                component={Link}
                                to="/dashboard/chats"
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
                                Chat
                            </Button>
                        ) : (
                            <div>
                                <Button
                                    component={Link}
                                    to="/auth/signin"
                                    sx={{
                                        color: theme.palette.text.primary,
                                    }}
                                >
                                    Login
                                </Button>
                                <Button
                                    component={Link}
                                    to="/auth/signup"
                                    variant="contained"
                                    sx={{
                                        borderRadius: "20px",
                                        background: theme.palette.blue.normal,
                                        "&:hover": {
                                            background:
                                                theme.palette.blue.hover,
                                            color: theme.palette.text.secondary,
                                        },
                                    }}
                                >
                                    Get Started
                                </Button>
                            </div>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveNavBar;
