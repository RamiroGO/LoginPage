const express = require('express');
const router = express.Router();

// Se requieren dos enrutadores para hacer un SignUp o Acceso de Usuario
router.get('/signup', (req, res) => {
	res.render('auth/signup')
})

// ruta para recibir los datos del formulario
router.post('/signup', (req, res) => {
	res.render('')
})

module.exports = router;
