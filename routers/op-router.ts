import { createOp } from "../controllers/op-controller.js"
import { getOp } from "../controllers/op-controller.js";
import { Router } from "express";





const createOpRouter = Router();

createOpRouter.post('/create-op', createOp)
createOpRouter.get('/create-op', getOp)



export default createOpRouter;