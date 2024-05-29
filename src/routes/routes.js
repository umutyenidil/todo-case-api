const express = require('express');

const apiRoutes = require('./api/api-routes');

const router = express.Router();

router.use('/api', apiRoutes);

module.exports = router;