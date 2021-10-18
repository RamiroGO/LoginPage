const { format } = require("timeago.js");

const time_ago = {};

// Convertir el formato de timestamp que posee información del momento en UTC, para convertirlo en una interpretación del tiempo transcurrido.
time_ago.timeago = (timestamp) => {
	// console.log(timestamp);
  return format(timestamp);
};

module.exports = time_ago;
