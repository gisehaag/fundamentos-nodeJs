// https://nodejs.org/dist/latest-v14.x/docs/api/console.html

const { Z_ASCII } = require("zlib");

console.log('algo');

console.info('otra cosa, pero es lo mismo, porque en este caso va al mismo lugar');

console.error('algo'); //se pueden ver los errores con más info
console.warn('algo');

let tabla = [
	{
		a: 1,
		b: 'z',
	},
	{
		a: 2,
		b: 'y',
	}
];
console.log(tabla);
console.table(tabla); //especialmente útil para ver arrays de objetos, porque la tabula hermosamente

console.group('Conversación:'); //sive para agrupar logs de cosas que tienen algo en común, podes anidar todos los niveles que necesites
console.log('hola!');
console.log('blabla blablabla, bla');
console.log('adios!!');
console.groupEnd('Conversación:')

console.log('otra cosa de otra función');

// Se puede crear un contador con:

console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');

// para limpiarlo y empezar de nuevo:

console.countReset('veces');
console.count('veces');
console.count('veces');
console.count('veces');
