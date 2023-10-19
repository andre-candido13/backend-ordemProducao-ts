import express from "express"
import dotenv from "dotenv"
import cors from "cors"


dotenv.config()

const server = express()
server.use(cors())
server.use(express.json())

//routes



server.listen(5000, () => console.log("Servidor ON na porta", + 5000))