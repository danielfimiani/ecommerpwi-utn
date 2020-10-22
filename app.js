'use strict'

// requires
const express = require('express')
const bodyparser = require('body-parser')
require("dotenv").config();


// ejecutar express
const app = express();

// CARGAR FICHEROS DE RUTAS

// Middlewares
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

// rescribir rutas

// Exportar modulo 
module.exports = app;