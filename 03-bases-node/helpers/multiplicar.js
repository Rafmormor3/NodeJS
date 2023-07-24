
const fs = require('fs');
const color = require('colors');

const crearArchivo = async (base=5, bandera=true, hasta=10)=>{

let salida='';
let consola='';


try{
    if(bandera){

        console.log('==============='.green)
        console.log(`  Tabla del ${base} `)
        console.log('==============='.green)
    
        for (let i=1; i<=hasta; i++){
            consola+=base + 'x' + i + '='+ `${base*i}`+'\n';
            salida+= base.toString().yellow + 'x'.blue + i.toString().red + '='.blue+ `${base*i}`.magenta+'\n' ;
        }  
        
        
    }else{
        salida='';
        consola='';
    }    

    console.log(salida);
    fs.writeFileSync(`./salida/tabla-${base}.txt`,consola);
    return(`tabla-${base}.txt`);

}catch(err){
    throw err;
}

}

module.exports={
    crearArchivo
}