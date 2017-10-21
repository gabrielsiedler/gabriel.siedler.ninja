const express = require('express');

const router = module.exports = express.Router();

router.use('/codewars', require('./codewars'));
router.use('/github', require('./github'));
