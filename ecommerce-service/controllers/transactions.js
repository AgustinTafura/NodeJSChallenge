const transactionsService = require('../services/transactions');

const getAll = async (req, res, next) => {
  try {
    const transactions = await transactionsService.getAll();
    res.status(200).json(transactions);
  } catch (e) {
    next(e);
  }
};

const getById = async (req, res, next) => {
  try {
    const transaction = await transactionsService.getById(req.params.id);
    res.status(200).json( transaction );
  } catch (e) {
    next(e);
  }
};

const create = async (req, res, next) => {
  try {
    const transaction = await transactionsService.create(req.body);
    res.status(200).json(transaction);
  } catch (e) {
    next(e);
  }
};

const remove = async (req, res, next) => {
  try {
    await transactionsService.remove(req.params.id);
    res.status(200).json('eliminado');  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    const transaction = await transactionsService.update(req.params.id, req.body);
    res.status(200).json(transaction);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
  update
};
