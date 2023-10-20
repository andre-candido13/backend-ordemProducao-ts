import { db } from "../database/database.js";



async function createRawMaterial (nome: string, quantidade_estoque: string, unidade_medida:string, fornecedores: string, data_validade: Date) {

    await db.query(`INSERT INTO "materia-prima" ("nome", "quantidade_estoque", "unidade_medida", 
    "fornecedores",  "data_validade") VALUES ($1, $2, $3, $4, $5)`, ([nome, quantidade_estoque, 
    unidade_medida, fornecedores, data_validade ]))

}

const createRawMaterialRepository = {
    createRawMaterial
}

export default createRawMaterialRepository