const express = require('express');

const router = express.Router();

const categoriesController = require('../controllers/categories');
const authMiddleware = require('../middlewares/auth');


router.get('/', authMiddleware.isAuth, categoriesController.getAll);
router.get('/:id', authMiddleware.isAuth, categoriesController.getById);
router.delete('/:id', authMiddleware.isAuth, categoriesController.remove);
router.put('/:id', authMiddleware.isAuth, categoriesController.update);
router.post('/', authMiddleware.isAuth, categoriesController.create);

module.exports = router;
