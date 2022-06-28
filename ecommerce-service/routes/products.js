const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products');
const authMiddleware = require('../middlewares/auth');


router.get('/', authMiddleware.isAuth, productsController.getAll);
router.get('/:id', authMiddleware.isAuth, productsController.getById);
router.delete('/:id', authMiddleware.isAuth, productsController.remove);
router.put('/:id', authMiddleware.isAuth, productsController.update);
router.post('/', authMiddleware.isAuth, productsController.create);

module.exports = router;
