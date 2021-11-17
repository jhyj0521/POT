const express = require('express');
const authRoutes = require('./authRoutes');
const boardsRoutes = require('./boardsRoutes');
const manageRoutes = require('./manageRoutes');
const validateRoutes = require('./validateRoutes');

const router = express.Router();

router.use('/user', authRoutes);
router.use('/boards', boardsRoutes);
router.use('/manage', manageRoutes);
router.use('/validate', validateRoutes);

module.exports = router;
