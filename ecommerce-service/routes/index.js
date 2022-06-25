var express = require('express');
var router = express.Router();
const userRoutes = require('./users');

/* GET home page. */
router.use('/users', userRoutes);

module.exports = router;
