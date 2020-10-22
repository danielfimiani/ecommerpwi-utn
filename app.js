"use strict";

// requires
const express = require("express");
const bodyparser = require("body-parser");
var exphbs = require("express-handlebars");
require("dotenv").config();

// ejecutar express
const app = express();

//fichero de rutas
const indexRouter = require("./routes/indexRoutes");

// Middlewares
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//Render Engine
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use("/", indexRouter);

require("dotenv").config();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`el servitdor se esta ejecutando en http://localhost:${port}`);
});
