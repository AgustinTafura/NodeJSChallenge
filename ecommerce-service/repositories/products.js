const db = require('../database/index');

const getAll = async () => {
  const products = await db.Products.findAll({
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'deletedAt', 'categories', 'transactions', 'seller_user'],
    },
    include: [
      {
          model: db.Users,
          attributes: ['id'],
      },
      {
        model: db.Transactions,
        attributes: ['id'],
    },
      {
        model: db.Categories,
        attributes: ['id'],
      },
    ],
  }); 
  return products;
};

const getById = async (id) => {
  const product = await db.Products.findByPk(id, {
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'deletedAt', 'categories', 'transactions', 'seller_user'],
    },
    include: [
      {
          model: db.Users,
          attributes: ['id'],
      },
      {
        model: db.Transactions,
        attributes: ['id'],
    },
      {
        model: db.Categories,
        attributes: ['id'],
      },
    ],
  });
  return product;
};

const getByName = async (name) => {
  const product = await db.Products.findOne({ where: { name } });
  return product;
};

const create = async (body) => {
  const product = await db.Products.create(body);
  return product;
};

const remove = async (id) => {
  await db.Products.destroy({ where: { id } });
};

const update = async (id, data) => {
  const product = await db.Products.update(data, { where: { id } });
  return product;
};

module.exports = {
  getAll,
  getById,
  getByName,
  create,
  remove,
  update,
};
