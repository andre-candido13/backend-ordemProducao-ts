import { createOp } from "../controllers/op-controller.js"
import { Router } from "express";





const createOpRouter = Router();

createOpRouter.post('/create-op', createOp)



export default createOpRouter;