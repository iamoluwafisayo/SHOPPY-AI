import routes from "./routes/index"
import express from 'express'
import session from "express-session"
import dotenv from 'dotenv'

dotenv.config()
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json());
app.use(session ({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))


routes(app)
app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`)
})