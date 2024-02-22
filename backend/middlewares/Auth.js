import  {  uuidv4 as v4 } from 'uuid';

export default function Auth(req, res, next) {
    const { token } = req.headers;
    if (!token) {
        return res.status(401).json({ error: 'Token is required' });
    }
    req.user = {
        id: v4(),
    };
    next();
}