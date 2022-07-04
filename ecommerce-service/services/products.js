/* eslint-disable prefer-destructuring */
const productsRepository = require('../repositories/products');

const limit = 10;
const getAll = async () => {
    const products = await productsRepository.getAll();
  return products;
};

const getById = async (id) => {
  const product = await productsRepository.getById(id);
  if (!product) {
    const error = new Error('El producto no existe');
    error.status = 404;
    throw error;
  }
  return product;
};

const create = async (body) => {
  const name = body.name;
  return productsRepository.create(body);
};

const remove = async (id) => {
  const product = await productsRepository.getById(id);
  if (!product) {
    const error = new Error(`El producto no existe`);
    error.status = 404;
    throw error;
  }
  await productsRepository.remove(id);
};

const update = async (id, body) => {
  const product = await productsRepository.getById(id);
  if (!product) {
    const error = new Error('El producto no existe');
    error.status = 404;
    throw error;
  }
  await productsRepository.update(id, body);
  const productUpdate = await productsRepository.getById(id);
  return productUpdate;
};

const addItem = async (id, quantitytoUpdate ) => {
  const product = await getById(id)
  await product.increment('quantity', { by: quantitytoUpdate });
}

const removeItem = async (id, quantitytoUpdate ) => {
  const product = await getById(id)
  await product.decrement('quantity', { by: quantitytoUpdate });
}

module.exports = {
  getAll,
  getById,
  create,
  remove,
  update,
  addItem,
  removeItem
};
