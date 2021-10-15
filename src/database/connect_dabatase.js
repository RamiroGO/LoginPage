const mysql = require('mysql');
const { promisify} = require('util');
const { database } = require('./keys.js');

// En lugar de createConnetion se usa createPool para que las conexiones se ejecuten en secuencia.
// Desventaja: Este módulo te obliga a hacer uso del CallBack, por tanto, No se puede hacer uso del sync await.
// Solución: hacer uso de un módulo de Node llamado 'util'.
const pool = mysql.createPool(database);

// Mensajes de error generalizados.
pool.getConnection((err, connection) => {
	if (err) {
		if (err.code === 'PROTOCOL CONNECTION_LOST') {
			console.error('DATABASE CONNECTION WAS CLOSED');
		}
		if (err.code === 'ER_CON_COUNT_ERROR') {
			console.error('DATABASE HAS TO MANY CONNECTIONS');
		}
		if (err.code === 'ECONNREFUSED') {
			console.log('DATABASE CONNECTION WAS REFUSED')
		}
	}
	if (connection) connection.release();
	console.log('DB is Connected');
	return;
});

// Convertir código de Call Back a código de Promesa.
pool.query = promisify(pool.query);

module.exports = pool;