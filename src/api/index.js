const codewarsAPI = require('./codewars');
const githubAPI = require('./github');
const express = require('express');

const router = module.exports = express.Router();

router.use('/codewars', codewarsAPI);
router.use('/github', githubAPI);
