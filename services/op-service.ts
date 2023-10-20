import opRepository from "../repositories/op-repository.js";

async function createOp(nome: string, quantidade: string, data_entrega: Date) {
  const op = opRepository.createOp(nome, quantidade, data_entrega);
  return op;
}

async function getOp() {
  const getOp = opRepository.getOp();
  return getOp;
}

const opService = {
  createOp,
  getOp,
};

export default opService;
