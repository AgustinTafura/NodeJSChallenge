const {Op} = require('sequelize');
const db = require('../database/index');

const getAll = async (req) => {
  const { type } = req.query
  var havingStatement = {}
  if (type === 'buyer' || type === 'seller') {
    const column = type === 'seller' ? db.sequelize.col("Products.id") : db.sequelize.col("Transactions.id")
    havingStatement = db.sequelize.where(db.sequelize.fn('COUNT', column), Op.gte, 1)
  }
  
  const data = await db.Users.findAll({
    group: "Users.id", // necessary in findAll
    attributes: [
      'id', 'name', 'email',
      [db.sequelize.fn("COUNT", db.sequelize.col("Products.id")), "seller"],
      [db.sequelize.fn("COUNT", db.sequelize.col("Transactions.id")), "buyer"],
    ],
    include: [
      {
        model: db.Products,
        attributes: [],
      },
      {
        model: db.Transactions,
        attributes: [],
      }
    ],
    having: havingStatement
  });
  return data;
};

const create = async (data) => {
  const user = await db.Users.create(data);

  return user;
};

const getById = async (id) => {
  const user = await db.Users.findByPk(id, {
    attributes: ['id', 'name', 'email'],
    include: [
      {
        model: db.Products,
        attributes: ['name'],

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
