import dbClient from "../utils/db";
import validation from "../utils/validator.js";
import messageSchema from "../models/MessageModel.js";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default class MessageController {
    static async getMessages(req, res) {
        try {
            const messages = await getMessages();
        } catch (error) {
            console.log(error);
        }
    }
    static async sendMessage(req, res) {
        try {
            let { content, chatId } = req.body;
            const userId = req.user._id;
            let chat;

            if (!content) {
                return res.status(400).json({ error: "Message is required" });
            }
            if (!chatId) {
                chatId = uuidv4();
                chat = [{ content, role: "user" }];
            } else {
                // return  only the message and the role
                chat = await dbClient.getChat(chatId);
                chat.push({ content, role: "user" });
            }
            await dbClient.newMessage({
                chatId,
                content,
                userId,
                role: "user",
            });

            // send chat to ai server using fetch and recieve assistant response
            let assistantResponse;

            // fetch("http://0.0.0.0:4000/ask", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({ chat }),
            // })
            //     .then(async (response) => {
            //         if (response.status === 200) {
            //             assistantResponse = response.json().message;
            //             console.log(response);
            //             await dbClient.newMessage({
            //                 chatId,
            //                 content: assistantResponse,
            //                 userId,
            //                 role: "assistant",
            //             });

            //             res.status(200).json({
            //                 content: assistantResponse,
            //                 success: true,
            //             });
            //         } else {
            //             console.log(response);
            //             res.status(500).json({ error: "Server Error" });
            //         }
            //     })
            //     .catch((error) => {
            //         console.log(error);
            //         res.status(500).json({ error: "Server Error" });
            //     });

            // send chat to ai server using axios and recieve assistant response
            try {
                const response = await axios.post("http://0.0.0.0:4000/ask", {
                    chat,
                });
                assistantResponse = response.data.message;
                console.log(response);
                await dbClient.newMessage({
                    chatId,
                    content: assistantResponse,
                    userId,
                    role: "assistant",
                });

                res.status(200).json({
                    content: assistantResponse,
                    success: true,
                });
            } catch (error) {
                console.log(error);
                res.status(500).json({ error: "Server Error" });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Server Error" });
        }
    }
    static async getMessages(req, res) {
        const messages = await dbClient.findMessages({});
        res.status(200).send(messages);
    }
}
