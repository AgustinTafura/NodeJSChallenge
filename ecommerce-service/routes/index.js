var express = require('express');
var router = express.Router();
const userRoutes = require('./users');
const categoriesRoutes = require('./categories');
const authRouter = require('./auth');

/* Routes */
router.use('/users', userRoutes);
router.use('/categories', categoriesRoutes);
router.use('/auth', authRouter);

module.exports = router;
