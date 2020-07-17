'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1>Hello from docker</h1>');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));