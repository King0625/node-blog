'use strict';

const express = require('express');
const greet = process.env.GREET;
// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', (req, res) => {
  res.send(`<h1>${greet}/h1>`);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));