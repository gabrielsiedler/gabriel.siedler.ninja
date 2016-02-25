const api = require('./src/api');
const app = require('./src/app');
const port = process.env.VIRTUAL_PORT || '8090';

app.listen(port, _ => {
  console.log(`App running on ${port}`);
});
