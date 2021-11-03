require('dotenv').config()
const { leerInput, inquirerMenu, pausa, listarLugares } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async() => {

    /*const texto = await leerInput('Hola: ');
    console.log(texto);*/
    const busquedas = new Busquedas();
    let opt = '';

    do{

        opt = await inquirerMenu();

        switch (opt) {
            case 1:
            //console.log(`Nos mantenemos en el ciclo, opción ${opt}, seleccionada `);

            // Mostramos mensaje
            const terminoBusqueda = await leerInput('Ciudad: ');
            // Buscamos los lugares
            const lugares = await busquedas.ciudad(terminoBusqueda);
            // Seleccionamos un lugar
            const idSeleccionado = await listarLugares(lugares);
            if ( idSeleccionado === '0' ) continue
            const lugarSel = lugares.find( l => l.id == idSeleccionado );
            // Guardar en DB
            busquedas.agregarHistorial(lugarSel.nombre);
            // Clima del lugar
            const clima = await busquedas.climaLugar(lugarSel.lat,lugarSel.lng);
            //console.log({idSeleccionado});
            //console.log(lugarSel);
            console.clear();
            console.log('\nInformación de la ciudad\n'.green);
            console.log('Ciudad:', lugarSel.nombre );
            console.log('Lat:', lugarSel.lat );
            console.log('Lng:', lugarSel.lng );
            console.log('Temperatura:', clima.temp );
            console.log('Mínima:', clima.min );
            console.log('Máxima:', clima.max );
            console.log('Como está el clima?: ', clima.desc)
            break;
        
            case 2:
            //console.log(`Nos mantenemos en el ciclo, opción ${opt}, seleccionada `);
            busquedas.historialCapitalizado.forEach( (lugar, i) => {
                const idx = `${i+1}.`.green;
                console.log( `${idx} ${lugar}` );
            });

            break;
        }

        await pausa();

    }while( opt !== 0 );



}

main();