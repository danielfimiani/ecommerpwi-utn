'use strict'

const app = require('./app')
require("dotenv").config();

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`el servitdor se esta ejecutando en http://localhost:${port}`);
})