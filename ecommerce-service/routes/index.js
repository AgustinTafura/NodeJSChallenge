var express = require('express');
var router = express.Router();
const userRoutes = require('./users');
const categoriesRoutes = require('./categories');
const authRouter = require('./auth');
const productsRouter = require('./products');
const transactionsRouter = require('./transactions');

/* Routes */
router.get('/',(req,res)=>res.json('App running'))

router.use('/users', userRoutes);
router.use('/categories', categoriesRoutes);
router.use('/auth', authRouter);
router.use('/products', productsRouter);
router.use('/transactions', transactionsRouter);

module.exports = router;
