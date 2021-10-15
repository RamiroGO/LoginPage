const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const patch = require('path');
const flash = require('connect-flash');

// initializations
const connect_server = express();
const PORT = 3000;

// settings
connect_server.set('port', process.env.PORT || PORT);
connect_server.set('views', patch.join(__dirname, '../views'));
connect_server.engine('.hbs', exphbs({
	defaultLayout: 'main',
	layoutsDir: patch.join(connect_server.get('views'), 'layouts'),
	partialsDir: patch.join(connect_server.get('views'), 'partials'),
	extname: '.hbs',
	helpers: require('../lib/handlebars.js')
}));
connect_server.set('view engine', '.hbs');

// Middlewares
connect_server.use(morgan('dev'));
connect_server.use(express.urlencoded({ extended: false }));
connect_server.use(express.json());
// - Importar servicio para enviar mensajes entre vistas:
connect_server.use(flash());

// Global Variables
connect_server.use((req, res, next) => {
	connect_server.locals.success = req.flash('success');
	next();
})

// Routes
connect_server.use(require('./routes/routes.js'));
connect_server.use(require('./routes/authentication'));
connect_server.use('/links', require('./routes/routes_server2links_database.js'));

// Public
connect_server.use(express.static(patch.join(__dirname, 'public')));

// Starting the Server
connect_server.listen(connect_server.get('port'), () => {
	console.log('Server on Port', connect_server.get('port'));
});
