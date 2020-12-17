//este paquete esta bueno para gestionar contraseñas o mensajes cifradps

const bcrypt = require('bcrypt');

const password = '1234Segura!';

bcrypt.hash(password, 5 , (error, hash) => {
	console.log(hash);

	bcrypt.compare(password, hash, (error, result) => {
		// console.error(error);
		console.log(result);
	})
} ); //sirve para encriptar la variable, el segundo caracter es cuántas veces se ejecuta el algoritmo

//bcrypt también funciona con promesas en vez de callbacks