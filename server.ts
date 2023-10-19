import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import createOpRouter from "./routers/op-router.js"


dotenv.config()

const server = express()
server.use(cors())
server.use(express.json())

//routes
server.use(createOpRouter)



server.listen(5000, () => console.log("Servidor ON na porta", + 5000))