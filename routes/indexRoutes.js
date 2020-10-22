const express = require("express");
const router = express.Router();

//HOME
router.get("/", function (req, res) {
  res.render("home");
});

//Login
router.get("/login", function (req, res) {
  res.render("login");
});

//Registro
router.get("/registro", function (req, res) {
  res.render("registro");
});

//ADMIN PRODUCTOS
router.get("/admin/productos", function (req, res) {
  res.render("productos");
});

router.get("/admin/compras", function (req, res) {
  res.render("compras");
});

module.exports = router;
