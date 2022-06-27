const db = require('../database/index');

const getAll = async () => {
  const data = await db.Users.findAll({
    attributes: ['name', 'email', 'password'],
  });
  return data;
};

const create = async (data) => {
  const user = await db.Users.create(data);

  return user;
};

const getById = async (id) => {
  const user = await db.Users.findByPk(id, {
    attributes: {
      exclude: ['password'],
    },
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
