import dbClient from "../utils/db";
import jwt from "jsonwebtoken";
import sha1 from "sha1";

export default class AuthController {
    static async login(req, res) {
        const user = req.body;
        user.password = sha1(user.password);
        try {
            const result = await dbClient.getUser(user);

            if (result) {
                const { email, password } = result;
                result.password = undefined;
                const token = jwt.sign({ result }, process.env.JWT_SECRET_KEY, {
                    expiresIn: "7d",
                });
                req.session.token = token;
                req.session.email = result.email;
                req.session.save();
                res.status(200).json({ email, token });
            } else {
                res.status(404).json({ error: "User not found" });
            }
        } catch (err) {
            res.status(500).json({ error: "server error" });
        }
    }
}
