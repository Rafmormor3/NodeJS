
//setTimeout(() => console.log('Hola mundo'), 1000);

const getUsuarioByID=(id, callbacks)=>{

    const user = {
        id,
        nombre:'Rafa'
    }

    setTimeout( ()=>{
        callbacks(user)
    },1500)
}

getUsuarioByID(10, (usuario)=>{
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});



 














