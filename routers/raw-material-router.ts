import { createRawMaterial } from "../controllers/raw-material-controller.js"
import { Router } from "express"



const createRawMaterialRouter = Router()

createRawMaterialRouter.post('/raw-material', createRawMaterial)


export default createRawMaterialRouter