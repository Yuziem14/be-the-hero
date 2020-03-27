const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

// largura: 51cm
// profundidade: 63cm
// altura: 32cm

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
