const fs = require('fs');
const argv = require('./config/yargs');
const colors = require('colors');

const { crearArchivo } = require('./helpers/multiplicar');

console.clear();
//const base = 3;
//console.log(argv);

crearArchivo(argv.b, argv.l, argv.h)
.then( nombreArchivo => console.log(nombreArchivo.rainbow,'creado') )
.catch( err => console.log(err) );



