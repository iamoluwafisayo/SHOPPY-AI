import dbClient from "../utils/db";
import usrSchema from '../models/UserModel.js';
import validation from '../utils/validator.js';
import jwt from "jsonwebtoken";
import SHA1 from "sha1"

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
export default class UserController {
    static async addUser(req, res){
        const isValide = await validation(usrSchema, req.body)
        if(isValide === true){
            const user = req.body
            try {
                await dbClient.newUser(user)
                res.status(201).json({ message: "Registred" })
            } catch (err) {
                if (err.code === 11000){
                    res.status(400).json({error: "User already exists"})
                }
                else {
                    res.status(500).json({error: "server error"})
                }
            }
        } else {
            res.status(401).json({error: isValide})
        }
    }
    static async getUser(req, res){
        const user = req.body
        try {
            const result = await dbClient.getUser(user)
        
            if (result){
                const token = jwt.sign({email: result.email}, process.env.JWT_SECRET_KEY)
                req.session.token = token
                req.session.email = result.email
                req.session.save()
                res.status(200).json(result)
            } else {
                res.status(404).json({error: "User not found"})
            }
        } catch(err){
            console.log(err)
            res.status(500).json({error: "server error"})
        }
    }
    static async updateUser(req, res){
        const user = req.body
        try {
            const result = await dbClient.update(user, req.body)
            if (result){
                res.status(200).json({message: "User updated"})
            } else {
                res.status(404).json({error: "User not found"})
            }
        } catch(err){
            console.log(err)
            res.status(500).json({error: "server error"})
        }
    }
}