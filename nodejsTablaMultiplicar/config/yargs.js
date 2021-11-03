const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type:'number',
        demandOption: true,
        describe: 'base de la multiplicación'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'específica si queremos mostrar la tabla por consola'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        default: 10,
        describe: 'punto de parada para la tabla de multiplicar'
    })
    .check((argv,options) => {
        if (isNaN(argv.b)){
            throw 'La base tiene que ser un número';
        }
        return true;
    })
    .argv;

module.exports = argv;