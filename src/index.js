import express from 'express';

import constants from './config/constants.js';
import './config/database.js';
import middlewaresConfig from './config/middlewares.js';

const app = express();

middlewaresConfig(app);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(constants.PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(`
      Server running on port: ${constants.PORT}
      ---
      Running on ${process.env.NODE_ENV}
      ---
      Make something great
    `);
  }
});