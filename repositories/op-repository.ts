import { QueryResult } from "pg";
import { db } from "../database/database.js";




async function createOp (nome: string, quantidade: string, data_entrega: Date) {

    await db.query(`INSERT INTO produtos ("nome", "quantidade", "data_entrega") VALUES ($1, $2, $3)`,
    [nome, quantidade, data_entrega]);

}

    async function getOp () {

    const getOp: QueryResult = await db.query(`SELECT * FROM "produtos"`)
        return getOp.rows
}


const opRepository = {
    createOp, 
    getOp
}

export default opRepository;