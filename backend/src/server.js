const express = require('express');
const cors = require('cors');
const routes = require('./routes');

// largura: 51cm
// profundidade: 63cm
// altura: 32cm

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/** Start Server */
const port = 3333;
app.listen(port, () => {
  console.log(`Listening on http://127.0.0.1:${port} ...`);
});
