import { db } from "database/database";




async function createOp (nome: string, quantidade: string, data_entrega: Date) {

    await db.query(`INSERT INTO produtos ("nome", "quantidade", "data_entrega") VALUES ($1, $2, $3)`,
    [nome, quantidade, data_entrega]);

}




const createOpRepository = {
    createOp
}

export default createOpRepository;