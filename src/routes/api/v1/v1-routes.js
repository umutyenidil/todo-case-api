const express = require('express');

const todoRoutes = require('./todos/todos-routes');

const router = express.Router();

router.use('/todos', todoRoutes);

module.exports = router;