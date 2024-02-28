import  {  uuidv4 as v4 } from 'uuid';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export default function verifyToken(req, res, next) {
    const token = req.session.token
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        req.email = decoded.email;
        next();
    });
}