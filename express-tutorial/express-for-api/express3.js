const express = require('express');
const logger = require('../express-for-api/middleware-logger');
const authorize = require('../express-for-api/MW-authorize');

const app = express();

/** experss middleware are functions that execute
during the request to the server this is ever were
in an express app
*/

// this invoke middleware on every route

app.use(logger, authorize);

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.get('/api/products', (req, res) => {
  res.send('products')
});

app.get('/api/items', (req, res) => {
  res.send('items')
});

app.listen('5000', () => {
  console.log('starting server.......');
});
