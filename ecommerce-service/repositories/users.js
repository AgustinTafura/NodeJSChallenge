const {sequelize} = require('sequelize');
const db = require('../database/index');

const getAll = async () => {
  const data = await db.Users.findAll({
    group: "Users.id", // necessary in findAll
    attributes: ['id', 'name', 'email',[db.sequelize.fn("COUNT", db.sequelize.col("Products.id")), "seller_user"]],
    include: [
      {
        model: db.Products,
        attributes: [],
      },
      {
        model: db.Transactions,
        // attributes: ["id"],
      }
    ]
  });
  return data;
};

const create = async (data) => {
  const user = await db.Users.create(data);

  return user;
};

const getById = async (id) => {
  const user = await db.Users.findByPk(id, {
    attributes: ['id', 'name', 'email', [db.sequelize.fn("COUNT", db.sequelize.col("Products.id")), "seller_user"]],
    include: [
      {
        model: db.Products,
        attributes: [],
      },
      {
        model: db.Transactions,
        // attributes: ["id"],
      }
    ]
  });
  return user;
};

const findByEmail = async (email) => {
  const data = await db.Users.findOne({
    where: { email },
    raw: true,
  });
  return data;
};

const remove = async (id) => {
  await db.Users.destroy({ where: { id:id } });
  return true;
};

const update = async (id, changes) => {
  const userUpdate = await db.Users.update(
    { name: changes.name, email: changes.email, password: changes.password, },
    {
      attributes: ['id', 'name', 'email', 'password'],
      where: {
        id:id,
      },
    }
    
  );
  return userUpdate;
};

module.exports = {
  getAll,
  getById,
  findByEmail,
  create,
  remove,
  update,
};
