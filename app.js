"use strict";

// requires
const express = require("express");
const bodyparser = require("body-parser");
const exphbs = require("express-handlebars");
require("dotenv").config();

// ejecutar express
const indexRouter = require('./routes/indexRoutes');
const app = express();

// CARGAR FICHEROS DE RUTAS

// Middlewares
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//Sets our app to use the handlebars engine
app.set('view engine', 'handlebars');
//Sets handlebars configurations (we will go through them later on)
app.engine('handlebars', handlebars({
  layoutsDir: __dirname + '/views/layouts',
}));
app.use('/', indexRouter);
// rescribir rutas
// Exportar modulo
module.exports = app;
