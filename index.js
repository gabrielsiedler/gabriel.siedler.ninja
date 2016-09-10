const app = require('./src/app');

const port = process.env.VIRTUAL_PORT || '8090';

app.listen(port, () => {
  console.log(`App running on ${port}`);
});
