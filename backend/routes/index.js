import { log } from "util"
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
    app.get('/api/users/:id', (req, res) => { })
    app.post('/api/users/:id', (req, res) => {} )
    app.post('/api/login', (req, res) => {
        UserController.getUser(req, res)
    })
    app.post('/api/signup', (req, res) => {
        
        UserController.addUser(req, res)
    })
    
}