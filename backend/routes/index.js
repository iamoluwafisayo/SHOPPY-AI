import verifyToken  from "../middleware/Auth"
import AuthController from "../controllers/AuthController"
import UserController from "../controllers/UserControllers"

export default function routes(app){
    app.get('/api/', (req, res) => {
        console.log(req.cookies)
        res.status(200).send({"name": "From api index"})
    })
    app.post('/api/users', (req, res) => {
        
    })
    app.get('/api/users', (req, res) => {})
    app.get('/api/message/:id', verifyToken, (req, res) => { })
    app.post('/api/messages/:id', (req, res) => {} )
    app.get('/api/messages/', verifyToken, (req, res) => { })
    app.post('/api/messages/', verifyToken, (req, res) => {
        res.status(200).send({email: req.email})
    })
    app.post('/api/login', (req, res) => {
        UserController.getUser(req, res)
    })
    app.post('/api/signup', (req, res) => {
        UserController.addUser(req, res)
    })
    app.post('/api/logout', (req, res) => {
        console.log(req.session)
        req.session.destroy((err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'failed' });
            }
            res.json({ message: 'logout' });
        });
        console.log(req.session)
    });
    
}