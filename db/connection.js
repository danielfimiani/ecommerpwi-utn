var mysql = require("mysql");
require("dotenv").config();

//Probamos la conection
objConn = mysql.createConnection({
  host: process.env.DB_SERVER,
  user: process.env.DB_USSER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DB,
});

module.exports = objConn;
