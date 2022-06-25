const usersServices = require('../services/users');
const auth = require('../modules/auth');

const isAuth = async (req, res, next) => {
  const bearertoken = req.headers.authorization;
  if (!bearertoken) return res.status(401).json({ error: 'Access denied' });

  try {
    const token = bearertoken.split(' ')[1];
    const { id } = auth.decodeToken(token);
    const userAuth = await usersServices.getById(id);
    req.params.tokenizedUserId = userAuth.id;
    if (!userAuth) return res.status(401).json({ error: 'Access denied' });

    next();
  } catch (error) {
    res.status(401).json({ error: 'Access denied' });
  }
};


module.exports = {
  isAuth,
};
