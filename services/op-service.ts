import createOpRepository from "../repositories/op-repository.js";



async function createOp (nome: string, quantidade: string, data_entrega: Date) {



    const op = createOpRepository.createOp(nome, quantidade, data_entrega)
        return op

}





const createOpService = {
    createOp
}


export default createOpService;