require('colors');


const mostrarMenu = ()=>{

    console.clear();
    console.log('======================'.yellow);
    console.log('Seleccione una opción'.blue);
    console.log('======================\n'.yellow);

    console.log(`${'1.'.blue} Crear tareas.`);
    console.log(`${'2.'.blue} Listar tareas.`);
    console.log(`${'3.'.blue} Listar tareas completadas.`);
    console.log(`${'4.'.blue} Listar tareas pendientes.`);
    console.log(`${'5.'.blue} Completar tarea(s).`);
    console.log(`${'6.'.blue} Borrar tarea.`);
    console.log(`${'0.'.blue} Salir.\n`);

    const readline=require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    readline.question('Seleccione una opcion: ', (opcion)=>{
        readline.close();
    })

}

const pausa = ()=>{
    const readline=require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    readline.question(`\nPresione ${'ENTER'.yellow} para continuar.\n `, (opcion)=>{
        readline.close();
    })
}

module.exports = {
    mostrarMenu,
    pausa
}