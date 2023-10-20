import createRawMaterialRepository from "../repositories/raw-material-respository.js"




async function createRawMaterial (nome: string, quantidade_estoque: string, unidade_medida:string, fornecedores: string, data_validade: Date) {

    const rawMaterial = await createRawMaterialRepository.createRawMaterial(nome, quantidade_estoque, unidade_medida, fornecedores, data_validade, )
        return rawMaterial

}

const createRawMaterialService = {
    createRawMaterial
}

export default createRawMaterialService