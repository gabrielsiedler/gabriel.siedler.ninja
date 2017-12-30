const express = require('express');
const next = require('next');

const api = require('./api');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: 'src/app', dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

app
  .prepare()
  .then(() => {
    const server = express();

    server.use('/api', api);
    server.get('*', routes(app));
    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
    });
  })
  .catch((ex) => {
    console.error(ex.stack); // eslint-disable-line no-console
    process.exit(1);
  });
