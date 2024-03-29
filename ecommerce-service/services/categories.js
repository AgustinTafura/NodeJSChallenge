/* eslint-disable prefer-destructuring */
const categoriesRepository = require('../repositories/categories');

const limit = 10;
const getAll = async () => {
    const categories = await categoriesRepository.getAll();
  return categories;
};

const getById = async (id) => {
  const category = await categoriesRepository.getById(id);
  if (!category) {
    const error = new Error('La categoria no existe');
    error.status = 404;
    throw error;
  }
  return category;
};

const create = async (body) => {
  const name = body.name;
  const category = await categoriesRepository.getByName(name);
  if (category) {
    const error = new Error('La categoria ya existe');
    throw error;
  }
  return categoriesRepository.create(body);
};

const remove = async (id) => {
  const category = await categoriesRepository.getById(id);
  if (!category) {
    const error = new Error('La categoria no existe');
    error.status = 404;
    throw error;
  }
  await categoriesRepository.remove(id);
};

const update = async (id, body) => {
  const category = await categoriesRepository.getById(id);
  if (!category) {
    const error = new Error('La categoria no existe');
    error.status = 404;
    throw error;
  }
  await categoriesRepository.update(id, body);
  const categoryUpdate = await categoriesRepository.getById(id);
  return categoryUpdate;
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
  update
};
