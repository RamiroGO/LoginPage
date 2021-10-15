const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const patch = require("path");
const flash = require("connect-flash");
const session = require('express-session');
const MySQLStore = require('express-mysql-session');
const { database } = require('../database/keys.js');

// initializations
const connect_server = express();
const PORT = 3000;

// Settings
connect_server.set("port", process.env.PORT || PORT);
connect_server.set("views", patch.join(__dirname, "../views"));
connect_server.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: patch.join(connect_server.get("views"), "layouts"),
    partialsDir: patch.join(connect_server.get("views"), "partials"),
    extname: ".hbs",
    helpers: require("../lib/handlebars.js"),
  })
);
connect_server.set("view engine", ".hbs");

// Middlewares
// - Importar servicio para enviar mensajes entre vistas.
// - Se requiere de un session
connect_server.use(session({
  secret: 'loginpageslinks',
  resave: false,
  saveUninitialized: false,
  store: new MySQLStore(database) // La sesion se almacenará en la base de datos de MySQL y no en el servidor.
}));

connect_server.use(flash());
// connect_server.use(passport.initialize());
// connect_server.use(passport.session());

connect_server.use(morgan("dev"));
connect_server.use(express.urlencoded({ extended: false }));
connect_server.use(express.json());

// Global Variables
connect_server.use((req, res, next) => {
  connect_server.locals.message = req.flash("message");
  connect_server.locals.success = req.flash('success');
  connect_server.locals.user = req.user;
  next();
});

// Routes
connect_server.use(require("./routes/routes.js"));
connect_server.use(require("./routes/authentication"));
connect_server.use(
  "/links",
  require("./routes/routes_server2links_database.js")
);

// Public
connect_server.use(express.static(patch.join(__dirname, "public")));

// Starting the Server
connect_server.listen(connect_server.get("port"), () => {
  console.log("Server on Port", connect_server.get("port"));
});
