const express = require("express");
const router = express.Router();

//HOME
router.get("/", function (req, res) {
  res.render("home", { bAgregaNavbar: true });
});

//Login
router.get("/login", function (req, res) {
  res.render("login", { bAgregaNavbar: false });
});

//Registro
router.get("/registro", function (req, res) {
  res.render("registro", { bAgregaNavbar: false });
});

//ADMIN PRODUCTOS
router.get("/admin/productos", function (req, res) {
  res.render("productos", { bAgregaNavbar: true });
});

router.get("/admin/compras", function (req, res) {
  res.render("compras", { bAgregaNavbar: true });
});

module.exports = router;
