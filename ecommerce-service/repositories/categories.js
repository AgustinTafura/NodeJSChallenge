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


module.exports = {
  getAll,
  getById,
  create,
  remove,
  update,
};
