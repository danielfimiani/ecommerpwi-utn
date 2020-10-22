"use strict";

// requires
const express = require("express");
const bodyparser = require("body-parser");
const exphbs = require("express-handlebars");
require("dotenv").config();

// ejecutar express
const app = express();

// CARGAR FICHEROS DE RUTAS

// Middlewares
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.engine(".hbs", exphbs({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", ".hbs");

// rescribir rutas

// Exportar modulo
module.exports = app;
