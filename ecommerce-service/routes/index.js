var express = require('express');
var router = express.Router();
const userRoutes = require('./users');
const categoriesRoutes = require('./categories');
const authRouter = require('./auth');
const productsRouter = require('./products');

/* Routes */
router.use('/users', userRoutes);
router.use('/categories', categoriesRoutes);
router.use('/auth', authRouter);
router.use('/products', productsRouter);

module.exports = router;
