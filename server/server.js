const express = require("express");
const next = require("next");
const bugsnag = require("bugsnag");
const path = require("path");

const api = require("./api");
const routes = require("./routes");

const isProduction = process.env.NODE_ENV === "production";
const app = next({ dev: !isProduction });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

app
  .prepare()
  .then(() => {
    const server = express();

    if (isProduction) {
      bugsnag.register(process.env.BUGSNAG_KEY);
    }

    server.get("/robots.txt", (req, res) =>
      res.sendFile(path.join(__dirname, "../static/robots.txt"))
    );
    server.get("/sitemap.xml", (req, res) =>
      res.sendFile(path.join(__dirname, "../static/sitemap.xml"))
    );

    server.use("/api", api);
    server.get("*", routes(app));
    server.get("*", (req, res) => handle(req, res));

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
      console.log(`> Environment: ${process.env.NODE_ENV || "development"}\n`); // eslint-disable-line no-console
    });
  })
  .catch(ex => {
    console.error(ex.stack); // eslint-disable-line no-console
    process.exit(1);
  });
