import routes from "./routes/index"
import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json());

routes(app)
app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`)
})