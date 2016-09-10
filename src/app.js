const express = require('express');
const path = require('path');

const app = module.exports = express();

app.use('/api', require('./api'));

app.use('/assets/npm', express.static(path.join(__dirname, '../node_modules/bootstrap/dist')));
app.use('/assets/npm', express.static(path.join(__dirname, '../node_modules/jquery/dist')));
app.use('/assets/npm', express.static(path.join(__dirname, '../node_modules/font-awesome')));
app.use('/', express.static((path.join(__dirname, '../public'))));
