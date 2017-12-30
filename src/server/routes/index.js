const express = require('express');

const router = express.Router();

const routes = (app) => {
  router.get('/', (req, res) => {
    const actualPage = '/home';
    app.render(req, res, actualPage);
  });

  router.get('/agency-enterprise', (req, res) => {
    const actualPage = '/agency-enterprise';
    app.render(req, res, actualPage);
  });

  return router;
};

module.exports = routes;
