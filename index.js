"use strict";

const { render } = require("./app");
const app = require("./app");

require("dotenv").config();

const port = process.env.PORT || 5000;


app.get("/", (req, res) => {
  res.render('main', {layout:'index'});
});

app.listen(port, () => {
  console.log(`el servitdor se esta ejecutando en http://localhost:${port}`);
});
