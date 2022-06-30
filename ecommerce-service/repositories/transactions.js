const db = require('../database/index');

const getAll = async () => {
  const transactions = await db.Transactions.findAll({
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'deletedAt'],
    },
    include: [
      {
        model: db.Products,
      },
    ]
  });
  return transactions;
};

const getById = async (id) => {
  const transaction = await db.Transactions.findByPk(id, {
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'deletedAt'],
    },
    include: [
      {
        model: db.Products,
        attributes: ['id'],
        through: { attributes: [] }, // no include nested field from next through table
      },
    ]
  });
  return transaction;
};

const getByName = async (name) => {
  const transaction = await db.Transactions.findOne({ where: { name } });
  return transaction;
};

const create = async (body) => {
  const transaction = await db.Transactions.create(body)
  body.products.map(async product => {
    await transaction.addProduct(product, { through: 'Transactions_Products' });
  })
  return transaction;
};

const remove = async (id) => {
  await db.Transactions.destroy({ where: { id } });
};

const update = async (id, data) => {
  const transaction = await db.Transactions.update(data, { where: { id } });
  return transaction;
};


module.exports = {
  getAll,
  getByName,
  getById,
  create,
  remove,
  update,
};
