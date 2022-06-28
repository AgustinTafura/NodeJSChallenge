/* eslint-disable prefer-destructuring */
const productsRepository = require('../repositories/products');

const limit = 10;
const getAll = async () => {
    const products = await productsRepository.getAll();
  return products;
};

const getById = async (id) => {
  const category = await productsRepository.getById(id);
  if (!category) {
    const error = new Error('La categoria no existe!');
    error.status = 404;
    throw error;
  }
  return category;
};

const create = async (body) => {
  const name = body.name;
  const category = await productsRepository.getByName(name);
  if (category) {
    const error = new Error('Category already exists.');
    throw error;
  }
  return productsRepository.create(body);
};

const remove = async (id) => {
  const category = await productsRepository.getById(id);
  if (!category) {
    const error = new Error(`The category ${id} does not exist.`);
    error.status = 404;
    throw error;
  }
  await productsRepository.remove(id);
};

const update = async (id, body) => {
  const category = await productsRepository.getById(id);
  if (!category) {
    const error = new Error('La categoria no existe');
    error.status = 404;
    throw error;
  }
  await productsRepository.update(id, body);
  const categoryUpdate = await productsRepository.getById(id);
  return categoryUpdate;
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
  update
};
