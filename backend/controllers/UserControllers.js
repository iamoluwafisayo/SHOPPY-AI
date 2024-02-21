import dbClient from "../utils/db";
import SHA1 from "sha1"

export default class UserController {
    static async addUser(req, res){
        /*const user = {
            firstname: req.body.firstname,
            lastname:  req.body.lastname,
            email: req.body.email,
            password: SHA1(req.body.password)
        }*/
        const user = req.body
        try {
            await dbClient.newUser(user)
            res.status(201).json({message: "User created"})
        } catch(err){
            console.log(err)
            res.status(500).json({error: "server error"})
        }
    }
    static async getUser(req, res){
        const user = req.body
        try {
            const result = await dbClient.getUser(user)
            if (result){
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