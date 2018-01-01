const express = require('express');
const bodyParser = require('body-parser');

const contactApi = require('./contact');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.use('/contact', contactApi);

module.exports = router;
