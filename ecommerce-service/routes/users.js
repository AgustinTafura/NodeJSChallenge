const express = require('express');

const router = express.Router();
const usersController = require('../controllers/users');
const authMiddleware = require('../middlewares/auth');

router
  .get('/',authMiddleware.isAuth, usersController.getAll)
  .get('/:id', authMiddleware.isAuth, usersController.getById)
  .put('/:id', authMiddleware.isAuth, usersController.update)
  .delete('/:id', authMiddleware.isAuth, usersController.remove);

module.exports = router;
