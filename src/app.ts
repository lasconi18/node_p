import express from 'express'
import cors from "cors"
import bodyParser from 'body-parser'
import userRoutes from "./routes/user.routes"
import {errorMiddlware} from "./middlewares/error.middleware"

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use("/user",userRoutes)
app.use(errorMiddlware)

export default app