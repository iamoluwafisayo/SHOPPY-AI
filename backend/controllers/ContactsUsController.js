import dbClient from "../utils/db";
import validation from "../utils/validator.js";
import contactSchema from "../models/ContactModel.js";


export default class ContactsUsController {
    static async contactUs(req, res) {
        const validateData = contactSchema.validate(req.body);
        if (validateData.error) {
            const error = validateData.error.details[0].message.replace(/"/g, '')
            res.status(400).json({ error });
            return;
        }
        try {
            await dbClient.newContact(validateData.value);
            res.status(201).json({ message: "Message sent" });
        } catch (err) {
            console.log(err)
            res.status(500).json({ error: "server error" });
        }

    }
    static async getContacts(req, res){
        try {
            const contacts = await dbClient.getContacts()
            res.status(200).send(contacts)
        }catch(err){
            res.status(500).json({ error: "server error" });
        }
    }
}