/* eslint-disable prefer-destructuring */
const transactionsRepository = require('../repositories/transactions');
const productsRepository = require('../repositories/products');
const products = require('../models/products');

const limit = 10;
const getAll = async () => {
    const transactions = await transactionsRepository.getAll();
  return transactions;
};

const getById = async (id) => {
  const transaction = await transactionsRepository.getById(id);
  if (!transaction) {
    const error = new Error('La transacción no existe!');
    error.status = 404;
    throw error;
  }
  console.log(44)
  return transaction;
};

const create = async (body) => {
  // const name = body.name;
  console.log(111)
  const transaction = await transactionsRepository.create(body);
  console.log(33, transaction.id)
   const fullTransaction = await getById(transaction.id)
   console.log(55, transaction.id)
   return fullTransaction
};

const remove = async (id) => {
  const transaction = await transactionsRepository.getById(id);
  if (!transaction) {
    const error = new Error(`La transacción no existe.`);
    error.status = 404;
    throw error;
  }
  await transactionsRepository.remove(id);
};

const update = async (id, body) => {
  const transaction = await transactionsRepository.getById(id);
  if (!transaction) {
    const error = new Error('La transacción no existe');
    error.status = 404;
    throw error;
  }
  await transactionsRepository.update(id, body);
  const transactionUpdate = await transactionsRepository.getById(id);
  return transactionUpdate;
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
  update
};
