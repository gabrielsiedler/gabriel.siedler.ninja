const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = module.exports = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use('/api', require('./api'));

app.use('/npm', express.static(path.join(__dirname, '../node_modules/bootstrap/dist')));
app.use('/npm', express.static(path.join(__dirname, '../node_modules/jquery/dist')));
app.use('/npm', express.static(path.join(__dirname, '../node_modules/font-awesome')));
app.use('/npm', express.static(path.join(__dirname, '../node_modules/slick-carousel/slick')));
app.use('/', express.static((path.join(__dirname, '../app/public'))));
