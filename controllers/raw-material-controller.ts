import { Response, Request } from "express";
import httpStatus from "http-status";
import createRawMaterialService from "../services/raw-material-service.js";



export async function createRawMaterial( req: Request, res: Response) {

    const {nome, quantidade_estoque, unidade_medida, fornecedores, data_validade } = req.body

    try{

    await createRawMaterialService.createRawMaterial(nome, quantidade_estoque, unidade_medida, fornecedores, data_validade)
        return  res.sendStatus(httpStatus.CREATED)

    } catch (err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)

    }

}