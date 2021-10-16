const { format } = require("timeago.js");

const helpers = {};

// Convertir el formato de timestamp que posee información del momento en UTC, para convertirlo en una interpretación del tiempo transcurrido.
helpers.timeago = (timestamp) => {
	// console.log(timestamp);
  return format(timestamp);
};

module.exports = helpers;
