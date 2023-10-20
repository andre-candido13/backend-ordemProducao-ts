import { Request, Response } from "express";
import httpStatus from "http-status";
import opService from "../services/op-service.js";

export async function createOp(req: Request, res: Response) {
  const { nome, quantidade, data_entrega } = req.body;

  try {
    await opService.createOp(nome, quantidade, data_entrega);
    return res.sendStatus(httpStatus.CREATED);
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
  }
}

export async function getOp(req: Request, res: Response) {
  try {
    const getOp = await opService.getOp();
    return res.send(getOp);
  } catch (err) {
    res.status(httpStatus.NOT_FOUND).send(err.message);
  }
}
