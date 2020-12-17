/**
 * con este modulo nos vamos a traer toda la info del sist operativo:
 *	para trabajar con interfases de bajo nivel
 * documentacion en https://nodejs.org/dist/latest-v14.x/docs/api/os.html
 */

const os = require('os');

console.log(os.arch()); // para conocer la arquitectura del sist operativo

console.log(os.platform()); // cual es el sist operativo? win? linux? android?

console.log(os.cpus()); // info de los procesadores
console.log(os.cpus().length); //  cuántos procesadores?

console.log(os.constants);


const SIZE = 1024;
function kb(bytes) {return bytes / SIZE }
function mb(bytes) {return kb(bytes) / SIZE }
function gb(bytes) {return mb(bytes) / SIZE }

console.log(os.freemem());  //memoria libre
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem())); // memoria libre en gb

console.log(gb(os.totalmem())); // memoria total en gb

console.log(os.homedir()); //cual es el directorio raiz del usuario
console.log(os.tmpdir()); //cual es el directorio para temporarios

console.log(os.hostname()); //cuando estas trabajando con servidores
console.log(os.networkInterfaces()); //me trae todas las interfases de red



