import dbClient from "../utils/db";
import jwt from "jsonwebtoken";
import sha1 from 'sha1'


export default class AuthController{
    static async getUser(req, res) {
        const user = req.body
        user.password = sha1(user.password)
        try {
            const result = await dbClient.getUser(user)

            if (result) {
                const { email, password } = result;
                const token = jwt.sign({ email: result.email }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })
                req.session.token = token
                req.session.email = result.email
                req.session.save()
                res.status(200).json({ email, token })
            } else {
                res.status(404).json({ error: "User not found" })
            }
        } catch (err) {
            res.status(500).json({ error: "server error" })
        }
    }

}