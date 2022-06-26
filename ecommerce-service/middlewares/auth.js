const usersServices = require('../services/users');
const jwt = require('../modules/auth');

const isAuth = async (req, res, next) => {
  const bearertoken = req.headers.authorization;
  if (!bearertoken) return res.status(401).json({ error: 'Access denied: no token, please login o register' });
  
  try {
    const token = bearertoken.split(' ')[1];
    const { id } = jwt.decodeToken(token);
    const userAuth = await usersServices.getById(id);
    if (!userAuth) return res.status(401).json({ error: 'Access denied: invalid token, please login o register' });

    next();
  } catch (error) {
    res.status(401).json({ error: 'Access denied' });
  }
};


module.exports = {
  isAuth,
};
