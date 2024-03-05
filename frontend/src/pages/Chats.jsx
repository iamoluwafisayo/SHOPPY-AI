import React from "react";
import {
    Box,
    Button,
    TextField,
    Link,
    Typography,
    Container,
    CardMedia,
    Chip,
    Divider,
    IconButton,
    InputAdornment,
    Paper,
} from "@mui/material";
import axios from "axios";
import Sidebar from "../components/common/dashboard/Sidebar";
import { ChatReducer } from "../components/reducers/ChatReducer";
import { ChatState } from "../components/reducers/states/initState";
import ACTIONS from "../components/reducers/actions";
import { FaPaperPlane } from "react-icons/fa";
import Markdown from "react-markdown";
import { BASE_URL } from "../App";
import { set } from "react-hook-form";

const chat = [
    {
        role: "user",
        content: "I want adidas or ASICS sneakers lace up blue in color",
    },
    {
        role: "assistant",
        content: "I have found 5 products for you. Which one do you like?",
    },
    { role: "user", content: "I want the first one" },
    {
        role: "assistant",
        content:
            "I see you're looking for blue lace-up sneakers from adidas or ASICS. Here are a few options for you to consider:\n\n1. **[ASICS Women's Water Shoe](https://www.amazon.co.uk/dp/B07DWN5QB6)**\n   - Price: £12.99 - £18.12\n   - Brand: JOINFREE\n   - Features a stretchy and breathable upper with a durable sole, perfect for water sports and beach activities\n\n2. **[ASICS Unisex Kid's Trainer](https://www.amazon.co.uk/dp/B0864HGHZ3)**\n   - Price: £24.85 - £77.51\n   - Brand: Gola\n   - A stylish option with a suede outer material, synthetic inner, and rubber sole, featuring a lace-up closure\n\n3. **[PUMA Unisex Kid's Tazon Sneaker](https://www.amazon.co.uk/dp/B07QRDFTK7)**\n   - Price: £29.80 - £141.64\n   - Brand: PUMA\n   - This sneaker boasts a synthetic upper and rubber sole with hook and loop closure, suitable for various activities\n\nThese options should give you a good range of blue lace-up sneakers to choose from. Let me know if you need more information or have any specific preferences.",
    },
];

const Chat = ({ chat, chatId }) => {
    const [searching, setSearching] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const handleSendMessage = () => {
        setSearching(true);
        chat.push({ role: "user", content: message });
        const messageToSend = message;
        setMessage("");
        try {
            const response = axios.post(
                `${BASE_URL}user/send_message`,
                {
                    content: messageToSend,
                    chatId,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );

            response.then((res) => {
                console.log(res);
                setSearching(false);
                chat.push({ role: "assistant", content: res.data.content });
            });
        } catch {
            console.log("Error sending message");
            setSearching(false);
            chat.push({
                role: "assistant",
                content:
                    "Sorry, I couldn't find any products for you try again later",
            });
        }
    };
    return (
        <Box
            component={Paper}
            sx={{
                width: "100%",
                height: "100vh",
                position: "absolute",
                right: 0,
                top: 0,
            }}
        >
            {/* Bar that shows logo icon by the left and name Shoppy AI  */}
            <Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: "#f2f2f2",
                        color: "black",
                        height: 65,
                        p: 2,
                        borderBottom: 1,
                        borderColor: "divider",
                    }}
                >
                    <CardMedia
                        component="img"
                        image="/images/shoppyAi.png"
                        alt="Shoppy AI"
                        sx={{ width: 40, height: 40, mr: 1 }}
                    />
                    <Typography variant="h6">Shoppy AI</Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    height: "calc(100% - 125px)",
                    overflowY: "auto",
                    p: 2,
                }}
            >
                {chat.map((message, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: "flex",
                            justifyContent:
                                message.role === "user"
                                    ? "flex-end"
                                    : "flex-start",
                            mb: 2,
                        }}
                    >
                        <Box
                            sx={{
                                p: 1,
                                borderRadius: 1,
                                bgcolor:
                                    message.role === "user"
                                        ? "primary.main"
                                        : "background.paper",
                                color:
                                    message.role === "user"
                                        ? "white"
                                        : "text.primary",
                            }}
                        >
                            {message.role === "user" ? (
                                message.content
                            ) : (
                                <Markdown>{message.content}</Markdown>
                            )}
                        </Box>
                    </Box>
                ))}
                {searching && (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            mb: 2,
                        }}
                    >
                        <Chip
                            label="Searching..."
                            color="primary"
                            variant="outlined"
                        />
                    </Box>
                )}
            </Box>
            {/* input field (use faIcon for send icon flying envelope) */}

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: 60,
                }}
            >
                <TextField
                    fullWidth
                    variant="outlined"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            handleSendMessage();
                        }
                    }}
                    placeholder="Describe what you're looking for..."
                    sx={{
                        borderRadius: 1,
                        m: 1,
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleSendMessage}
                                    color="primary"
                                >
                                    <FaPaperPlane />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
        </Box>
    );
};

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
            <Chat chat={chat} />
        </Box>
    );
};

export default Chats;
