const fs = require('fs');
require('colors');

const crearArchivo = async( base = 5, listar = false, h = 10) => {

    try{

        let salida = '';
    
        for ( let i=1; i<=h; i++ ){
            salida += `${base} x ${i} = ${base*i}\n`;
        }

        if (listar){
            console.log('======================');
            console.log(`Tabla del ${base}`);
            console.log('======================');
            console.log(salida.blue);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        return `tabla-${base}.txt`;

    }catch(error){
        throw error;
    }

}

module.exports = {
    crearArchivo
}


 // FIRST console.log(`${base} x ${i} = ${base*i}`);
 /*SECOND fs.writeFile(`tabla-${base}.txt`,salida, (err) => {
        if (err) throw err;

        console.log(`tabla-${base}.txt creada!!!`);
        });*/