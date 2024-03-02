import dbClient from "../utils/db";
import usrSchema from "../models/UserModel.js";
import validation from "../utils/validator.js";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
export default class UserController {
    static async addUser(req, res) {
        const isValide = await validation(usrSchema, req.body);
        if (isValide === true) {
            const user = req.body;
            try {
                await dbClient.newUser(user);
                res.status(201).json({ message: "Registred" });
            } catch (err) {
                if (err.code === 11000) {
                    res.status(400).json({ error: "User already exists" });
                } else {
                    res.status(500).json({ error: "server error" });
                }
            }
        } else {
            res.status(401).json({ error: isValide });
        }
    }
    static async getUser(req, res) {
        const email = req.user.email;
        try {
            const result = await dbClient.getUser({ email });
            if (result) {
                return res.status(200).json(result);
            } else {
                res.status(404).json({ error: "User not found" });
            }
        } catch (err) {
            res.status(500).json({ error: "server error" });
        }
    }
    static async getAllUsers(req, res) {
        try {
            const users = await dbClient.findUsers();
            if (users.length === 0) {
                res.status(200).json({ message: "No User yet" });
            } else {
                res.status(200).json(users);
            }
        } catch (err) {
            res.status(500).send({ error: "Server Error" });
        }
    }

    static async updateUser(req, res) {
        const user = req.body;
        try {
            const result = await dbClient.update(user, req.body);
            if (result) {
                res.status(200).json({ message: "User updated" });
            } else {
                res.status(404).json({ error: "User not found" });
            }
        } catch (err) {
            res.status(500).json({ error: "server error" });
        }
    }
}
