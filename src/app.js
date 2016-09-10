const express = require('express');
const path = require('path');

const app = module.exports = express();

app.use('/api', require('./api'));

app.use('/npm', express.static(path.join(__dirname, '../node_modules/bootstrap/dist')));
app.use('/npm', express.static(path.join(__dirname, '../node_modules/jquery/dist')));
app.use('/npm', express.static(path.join(__dirname, '../node_modules/font-awesome')));
app.use('/', express.static((path.join(__dirname, '../app/public'))));
