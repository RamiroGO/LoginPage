module.exports = {
	// Método para determinar si existe un usuario loggueado.
	// Cuando se implementa este método, los usuarios que no están logueados no pueden acceder a las rutas donde se implementaron.
	isLoggedIn(req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		}
		return res.redirect('/signin'); // Redirigir al usuario no logueado a la página SignIn para loguearse.
	},
	
	// Cuando se implementa este método, los usuarios que están logueados no pueden acceder a las rutas donde se implementaron.
	isNotLoggedIn(req, res, next) {
		if (!req.isAuthenticated()) {
			return next();
		}
		return res.redirect('/profile'); // Redirigir en su página de profile.
	}
};