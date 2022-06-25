const express = require('express');

const router = express.Router();
const usersController = require('../controllers/users');

router
  .get('/', usersController.getAll)
  .put('/:id', usersController.update)
  .delete('/:id', usersController.remove);

module.exports = router;
