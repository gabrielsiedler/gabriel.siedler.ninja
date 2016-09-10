const express = require('express');
const path = require('path');

const app = module.exports = express();

app.use('/api', require('./api'));

app.use('/', express.static((path.join(__dirname, '../public'))));
