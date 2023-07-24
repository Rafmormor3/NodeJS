const empleados=[
    {
        id:1,
        nombre:'Rafa'
    },
    {
        id:2,
        nombre:'Maria'
    },
    {
        id:3,
        nombre:'Antonio'
    }
];

const salarios=[
    {
        id:1,
        salario:1000
    },
    {
        id:2,
        salario:2000
    }
];


const getEmpleado = (id, callback)=>{

    const empleado = empleados.find((e)=>e.id===id);

    if(empleado){
        callback(null, empleado.nombre);
    }else{
        callback(`El empleado con id ${id} no existe`);
    }

}

const getSalario = (id, callback)=>{
    const salar = salarios.find((s)=>s.id===id);

    if(salar){
        callback(null, salar.salario);
    }else{
        callback(`El empleado con id ${id} no tiene salario`);
    }
}

const id = 3;

getEmpleado(id, (err, empleado)=>{
    if(err){
        console.log('ERROR!!!');
        console.log(err);
    }else{
        getSalario(id, (err, salar)=>{
            if(err){
                console.log(err);
            }else{
                console.log(`El empleado: ${empleado}, tiene un salario de: ${salar}`);
            }
        })
    }
})



















