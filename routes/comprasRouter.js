const express = require("express");
const router = express.Router();

router.get("/compras", function (req, res) {
  res.render("compras", {
    bAgregaNavbar: true,
    bAdmin: true,
  });
});

module.exports = router;
