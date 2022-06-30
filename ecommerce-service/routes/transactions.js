const express = require('express');

const router = express.Router();

const transactionsController = require('../controllers/transactions');
const authMiddleware = require('../middlewares/auth');


router.get('/', authMiddleware.isAuth, transactionsController.getAll);
router.get('/:id', authMiddleware.isAuth, transactionsController.getById);
router.delete('/:id', authMiddleware.isAuth, transactionsController.remove);
router.put('/:id', authMiddleware.isAuth, transactionsController.update);
router.post('/', authMiddleware.isAuth, transactionsController.create);

module.exports = router;
