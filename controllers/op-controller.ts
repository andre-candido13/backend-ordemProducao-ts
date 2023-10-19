import { Request, Response } from 'express';
import httpStatus from 'http-status';
import createOpService from 'services/op-service';

export async function createOp (req: Request, res: Response) {

    const { nome, quantidade, data_entrega } = req.body;


    try {

        await createOpService.createOp(nome, quantidade, data_entrega)
            return res.sendStatus(httpStatus.CREATED)

    } catch (err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
    }

}