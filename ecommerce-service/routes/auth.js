const express = require('express');
const router = express.Router();
const authController = require('../controllers/users');

router.post(
  '/register',
  authController.create
);

router.post(
  '/login',
  authController.login
);

module.exports = router;
