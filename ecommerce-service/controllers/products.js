const productsService = require('../services/products');

const getAll = async (req, res, next) => {
  try {
    const products = await productsService.getAll();
    res.status(200).json(products);
  } catch (e) {
    next(e);
  }
};

const getById = async (req, res, next) => {
  try {
    const products = await productsService.getById(req.params.id);
    res.status(200).json( products );
  } catch (e) {
    next(e);
  }
};

const create = async (req, res, next) => {
  try {
    const products = await productsService.create(req.body);
    res.status(200).json( products );
  } catch (e) {

    next(e);
  }
};

const remove = async (req, res, next) => {
  try {
    await productsService.remove(req.params.id);
    res.status(200).json('eliminado');

  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    const product = await productsService.update(req.params.id, req.body);
    res.status(200).json(product);
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
