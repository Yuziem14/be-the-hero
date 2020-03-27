const app = require('./app');

/** Start Server */
const port = 3333;
app.listen(port, () => {
  console.log(`Listening on http://127.0.0.1:${port} ...`);
});
