import dbClient from '../utils/db';
import validation from '../utils/validator.js';
import messageSchema from '../models/MessageModel.js';

export default class MessageController{
    static async getMessages(req, res){
        try {
            const messages = await getMessages();
        } catch (error) {
            console.log(error);
        }
    }
    static async sendMessage(req, res){

        try {
            const message = req.body;
            if (message) {
                message.sender = req.email;
                const isValide = await validation(messageSchema, message);
            if (isValide === true) {
                await dbClient.newMessage(message);
                res.status(201).json({ message: 'Message sent' });
            } else {
                res.status(400).json({ error: isValide });
            }
        }
        } catch (error) {
            res.status(400).json({error: "Message not sent"});
        }
    }
    static async getMessages(req, res) {
       const messages = await dbClient.findMessages({})
       res.status(200).send(messages)
    }
}