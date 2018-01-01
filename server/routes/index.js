const express = require('express');

const router = express.Router();

const routes = (app) => {
  router.get('/', (req, res) => {
    const actualPage = '/home';
    app.render(req, res, actualPage);
  });

  router.get('/work', (req, res) => {
    const actualPage = '/work';
    app.render(req, res, actualPage);
  });

  router.get('/contact', (req, res) => {
    const actualPage = '/contact';
    app.render(req, res, actualPage);
  });

  return router;
};

module.exports = routes;
