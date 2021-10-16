const express = require("express");
const router = express.Router();

// Solo se debe implementar en las rutas que se desean proteger, no en las rutas de acceso.
const {isNotLoggedIn} = require("../../lib/auth.js");

// Ventana de Inicio de la página web
router.get("/", isNotLoggedIn, (req, res) => {
  res.redirect("/profile");
});

module.exports = router;
