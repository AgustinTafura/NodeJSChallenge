const db = require('../database/index');

const getAll = async () => {
  const allCategories = await db.Categories.findAll({
    attributes: ['id', 'name', 'description']
  });
  return allCategories;
};

const getById = async (id) => {
  const category = await db.Categories.findByPk(id);
  return category;
};

const getByName = async (name) => {
  const category = await db.Categories.findOne({ where: { name } });
  return category;
};

const create = async (body) => {
  const category = await db.Categories.create(body);
  return category;
};

const remove = async (id) => {
  await db.Categories.destroy({ where: { id } });
};

const update = async (id, data) => {
  const category = await db.Categories.update(data, { where: { id } });
  return category;
};

const count = async () => {
  const data = await db.Categories.count();
  return data;
};
module.exports = {
  getAll,
  getByName,
  getById,
  create,
  remove,
  update,
  count,
};
