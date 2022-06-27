const jwt = require('../modules/auth');
const usersRepository = require('../repositories/users');

const getAll = async () => {
  const users = await usersRepository.getAll();
  return users;
};

const create = async (body) => {
  body.password = body.password;
  const checkEmail = await usersRepository.findByEmail(body.email);
  if (checkEmail) {
    throw new Error('Email already registered');
  }
  const user = await usersRepository.create(body);
  const userData = {
    id: user.id,
    name: user.name,
    email: user.email,

  };
  const token = jwt.createToken(userData);
  const data = {
    user,
    token
  }
  return data;
};

const getById = async (id) => {
  const user = await usersRepository.getById(id);
  return user;
};

const login = async (body) => {
  const user = await usersRepository.findByEmail(body.email);
  if (!user) {
    throw new Error('Email invalido');
  }
  if (body.password !== user.password) {
    throw new Error('Password invalido');
  } else {
    const userData = {
      id: user.id,
      name: user.name,
      email: user.email,

    };

    const token = jwt.createToken(userData);
    return token;
  }
};

const remove = async (req) => {

  const user = await usersRepository.getById(req.params.id);
  if (!user) {
    throw new Error('Usuario inexistente');
  }
  const deletedUser = await usersRepository.remove(req.params.id);
  return deletedUser;
};

const update = async (req) => {
  if (req.params.id !== req.params.tokenizedUserId.toString() && req.params.adminRole >= 2) {
    throw new Error('Sin autorizacion');
  }
  const changes = {
    name: req.body.name,
    email: req.body.email,
  };
  const userUpdate = await usersRepository.update(req.params.id, changes);
  if (!userUpdate) {
    throw new Error('Error en los datos a actualizar');
  }
  return userUpdate;
};

module.exports = {
  getAll,
  getById,
  login,
  create,
  remove,
  update
};
