import verifyToken  from "../middleware/Auth"
import AuthController from "../controllers/AuthController"
import UserController from "../controllers/UserControllers"
import MessageController from "../controllers/MessagesController"
import PasswordController from "../controllers/passwordController"

export default function routes(app){
    app.get('/api/', (req, res) => {
        res.status(200).send({"message": "Welcome to ShopyAi's API"})
    })
    app.post('/api/users', (req, res) => {
        
    })
    app.get('/api/users', (req, res) => {
        UserController.getAllUsers(req, res)
    })
    
    
    app.post('/api/login', (req, res) => {
        AuthController.getUser(req, res)
    })
    app.post('/api/signup', (req, res) => {
        UserController.addUser(req, res)
    })
    app.get('/api/profile', verifyToken,  (req, res) => {
        const email = req.email;
        try {
            UserController.getUser(req, res);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error while retrieving profile' });
        }
    });
    app.post('/api/user/pass_forgot', (req, res) => {
        PasswordController.recovery(req, res)
    })
    app.put('/api/user/reset_password', (req, res) => {
        PasswordController.resetPassword(req, res)
    
    })
    app.post('/api/user/check_otp', (req, res) => {
        PasswordController.checkOtp(req, res)
    })
    app.post('/api/user/send_message', verifyToken, (req, res) => {
        MessageController.sendMessage(req, res);
    })
    app.get('/api/messages', verifyToken, (req, res) => { 
        MessageController.getMessages(req, res)
    })
    
    app.post('/api/logout', (req, res) => {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({ error: 'failed' });
            }
            res.json({ message: 'logout' });
        });
    });
    
}