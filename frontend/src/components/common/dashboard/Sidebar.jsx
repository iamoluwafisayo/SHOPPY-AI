import React from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL } from "../../../App";
import {
    Box,
    Button,
    Divider,
    Drawer,
    List,
    Typography,
    ListItemButton,
} from "@mui/material";
import { FaRegEdit, FaSignOutAlt } from "react-icons/fa";

const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully");
    window.location.reload();
};

const Sidebar = ({
    window,
    sideBarWidth,
    mobileOpen,
    handleSelectChat,
    handleNewChat,
}) => {
    console.log(mobileOpen, sideBarWidth);
    const [chats, setChats] = React.useState([]);
    React.useEffect(() => {
        // fetch chats
        try {
            const response = axios.get(`${BASE_URL}user/chats`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            response.then((res) => {
                setChats(res.data);
            });
        } catch {
            console.log("Error fetching chat");
        }
    }, []);
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
                    onClick={handleNewChat}
                    tabIndex={-1}
                    endIcon={<FaRegEdit />}
                >
                    New Chat
                </Button>
            </Box>
            <Divider />
            <Box sx={{ flex: 1, overflowY: "auto" }}>
                <List disablePadding>
                    {chats.length > 0 &&
                        chats.map(({ _id, title }) => (
                            <ListItemButton
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                                key={_id}
                                onClick={() => handleSelectChat(_id)}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: {
                                                xs: "none",
                                                sm: "block",
                                            },
                                        }}
                                    >
                                        <Typography>{title}</Typography>
                                    </Box>
                                </Box>
                            </ListItemButton>
                        ))}
                </List>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: {md: "calc(100vh - 660px)", xs: "auto",},
                }}
            >
                <Box p={1}>
                    <Button
                        fullWidth
                        role={undefined}
                        onClick={handleLogout}
                        tabIndex={-1}
                        endIcon={<FaSignOutAlt />}
                        sx={{ color: "error.main" }}
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
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: sideBarWidth,
                        // backgroundColor: "sidebar.background",
                        // color: "sidebar.textColor",
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
