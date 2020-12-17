let nombre = process.env.NOMBRE || 'sin nombre'; //de esa manera accede a variable de entonrno
// Le mando por consola antes de la ejecución del archivo NOMBRE=Gise
let web = process.env.MI_WEB || 'No tiene web'

// Las variables de entorno como NOMBRE o WEB se escriben en mayúsculas y los espacios
// con guion bajo

console.log('Holis ' + nombre);
console.log('Mi web es: ' + web);

// Una herramienta similar a nodemon pero para cuando se trabaja en
// produccion es PM2, no se utiliza en desrrollo, sirve para monitorear el código

// se instala como npm install -g pm2, se inicia con pm2 start "nombre_archivo.js" y
// se detiene con pm2 stop

