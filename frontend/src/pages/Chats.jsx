import React, { useEffect } from "react";
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
import { FaPaperPlane } from "react-icons/fa";
import Markdown from "react-markdown";
import { BASE_URL } from "../App";

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

const Chat = ({ chatId }) => {
    const [chat, setChat] = React.useState([]);
    const [searching, setSearching] = React.useState(false);
    const [fetchingChat, setFetchingChat] = React.useState(false);
    const [message, setMessage] = React.useState("");

    // fetch chats
    useEffect(() => {
        setFetchingChat(true);
        try {
            const response = axios.get(
                `${BASE_URL}user/chat/${chatId || "new"}`,
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
                setFetchingChat(false);
                console.log(res.data);
                setChat(res.data.chat);
            });
        } catch {
            console.log("Error fetching chat");
            setFetchingChat(false);
        }
    }, [chatId]);

    const handleSendMessage = () => {
        if (message.trim() === "") return;

        setSearching(true);
        setChat((prevChat) => [
            ...prevChat,
            { role: "user", content: message },
        ]);
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
                setSearching(false);
                setChat((prevChat) => [
                    ...prevChat,
                    { role: "assistant", content: res.data.content },
                ]);
                if (!chatId) {
                    chatId = res.data.chatId;
                }
            });
        } catch {
            console.log("Error sending message");
            setSearching(false);
            setChat((prevChat) => [
                ...prevChat,
                {
                    role: "assistant",
                    content:
                        "Sorry, I encountered an error while searching, don't worry it's probably my fault. Try again later",
                },
            ]);
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
                        justifyContent: "left",
                        alignItems: "center",
                        bgcolor: "#f2f2f2",
                        color: "black",
                        height: 65,
                        p: 2,
                        pl: 5,
                        borderBottom: 1,
                        borderColor: "divider",
                    }}
                >
                    <CardMedia
                        component="img"
                        image="/images/shoppyAi.png"
                        alt="Shoppy AI"
                        sx={{ width: 40, height: 40, m: 2 }}
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
                {chat.length > 0 ? (
                    chat.map((message, index) => (
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
                    ))
                ) : (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            flexFlow: "column nowrap",
                        }}
                    >
                        <CardMedia
                            component="img"
                            image="/images/shoppyAi.png"
                            alt="Shoppy AI"
                            sx={{ width: 200, height: 200, m: 2 }}
                        />
                        <Typography variant="h6">
                            Describe what you're looking for...
                        </Typography>
                    </Box>
                )}
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
                    placeholder="Type a description..."
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
    const [chatId, setChatId] = React.useState("");
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleSelectChat = (chatId) => {
        setChatId(chatId);
        console.log(chatId);
    };

    const handleNewChat = () => {
        setChatId("");
    };
    return (
        <Box component="section">
            <Sidebar
                sideBarWidth={sideBarWidth}
                mobileOpen={mobileOpen}
                handleSelectChat={handleSelectChat}
                handleNewChat={handleNewChat}
            />
            <Chat chatId={chatId} />
        </Box>
    );
};

export default Chats;
