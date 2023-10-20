import { createRawMaterial, getRawMaterial } from "../controllers/raw-material-controller.js"
import { Router } from "express"



const createRawMaterialRouter = Router()

createRawMaterialRouter.post('/raw-material', createRawMaterial)
createRawMaterialRouter.get('/raw-material', getRawMaterial)


export default createRawMaterialRouter