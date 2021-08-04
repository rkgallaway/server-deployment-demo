'use strict';

// bring in express
const express  =require('express');
const app = express();

// allow frontend to access data from the backend with CORS
const cors = require('cors');
app.use(cors());

// use dotenv to access our .env file
require('dotenv').config();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hurray Server!');
});

// listen for any routes that might be called
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
