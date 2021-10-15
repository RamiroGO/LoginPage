const express = require("express");
const router = express.Router();

// Traer las variables de autenticación del usuario desde el módulo passport
const passport = require("../../lib/passport.js");

// Se requieren dos enrutadores para hacer un SignUp o Acceso de Usuario
router.get("/signup", (req, res) => {
	res.render("auth/signup");
});

// ruta para recibir los datos del formulario
router.post("/signup", (req, res) => {
	// Sería una falla de seguridad mostrar este dato
	console.log("Falla de Seguridad: Datos Ingresados: ", req.body);
	passport.authenticate("local.signup", {
		successRedirect: "/profile", // Ir a la ruta profile que se define dentro de este mismo archivo
		failureRedirect: "/signup", // En caso de error, volver a ver el formulario inicial.
		failureFlash: true,
	});

	res.render("profile");
});

// Una ruta igual a la anterior, pero que se ejecuta cuando se falla en la autenticación
// Hace uso de las mismas rutas.
router.post(
	"/signup",
	passport.authenticate("local.signup", {
		successRedirect: "/profile", // Ir a la ruta profile que se define dentro de este mismo archivo
		failureRedirect: "/signup", // En caso de error, volver a ver el formulario inicial.
		failureFlash: true,
	})
);

// Ruta para visualizar el formulario SignIn
router.get("/signin", (req, res) => {
	res.render("auth/signin");
});

// Ruta para acceder con los datos ya ingresados en la página SignIN
router.post("/signin", (req, res, next) => {
	passport.authenticate("local.signin", {
		successRedirect: "/profile",
		failureRedirect: "/signin",
		failureFlash: true,
	})(req, res, next);
});

router.get("/profile", (req, res) => {
	res.render("profile");
});

module.exports = router;
