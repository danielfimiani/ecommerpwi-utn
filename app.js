"use strict";

// requires
const express = require("express");
const bodyparser = require("body-parser");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
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
app.use(express.static("./public/common"));

//ROUTER
app.use("/", indexRouter);

//Probamos la conection
// var con = mysql.createConnection({
//   host: process.env.DB_SERVER,
//   user: process.env.DB_USSER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DB,
// });

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected to Database!");
// });

//con.end();

//PORT
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on  http://localhost:${port}`);
});
