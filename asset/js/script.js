const btn = document.querySelector('#agregarTarea') //botón
const tarea = document.querySelector('#nuevaTarea') //input
let listaTarea = document.querySelector('#tareas') //ul
let total =  document.querySelector('#totalGlobal')// Tareas total
let realizadas = document.querySelector('#totalRealizada') //Tareas Listas


let tareasId = [
    {id: 1, nombre:"Pasear al Gato",completada:false},
    {id: 2, nombre:"Sacar las pulgas al Gato",completada:false},
    {id: 3, nombre:"Bañar al Gato",completada:false},
]; //Areglo de Tareas

console.log(tareasId)//Solo verificando que está bien declarado


let totalGlobal = 0 // Inicializador Total Tareas 
let totalRealizadas = 0  // Inicializador Total Tareas Realizadas


// Cargando Tareas
const cargarTarea = () =>{
    let template = ''
    tareasId.forEach((i) => {
        template += ` <li class="li_edit ${i.completada ? 'completada' : ''}"> ${i.id} <span>&nbsp;&nbsp;&nbsp;&nbsp;</span> ${i.nombre} <input type="checkbox" ${i.completada ? 'checked' : ''} onclick="estadoCheckbox(${i.id})" name="marcar"> <button class="btn_2" onclick="borrarTarea(${i.id})"> X </button></li>`;
    });
    listaTarea.innerHTML = template; 
    contadorTareas()
}

//Agregando Tareas

btn.addEventListener('click', () =>{
    if(tarea.value === '') { return 
    }
    let idContador = tareasId[tareasId.length -1].id +1;
    let nuevaTarea = {
            id: idContador,
            nombre: tarea.value,
            completeda:false,
        };
        tareasId.push(nuevaTarea)
        tarea.value = ''
        cargarTarea()
        estadoCheckbox()
    });

    // Función para borrar las tareas
function borrarTarea(id) {
    let tareaaBorrar = tareasId.findIndex((i) => {
        return (i.id) === (id)
    });
    tareasId.splice(tareaaBorrar,1);
    cargarTarea();
}

//Función para cambiar estado del checkbox

const estadoCheckbox = (id) => {
    const check = tareasId.find((i) => i.id === id);
        if (check) {
            check.completada = !check.completada;
            totalRealizadas++
            cargarTarea();
        } 
}

//Contando y pintando las tareas globales y realizadas

const contadorTareas = () => {
    let totalRealizadas = tareasId.filter(tarea => tarea.completada).length 
    realizadas.innerHTML = totalRealizadas;
    totalGlobal = tareasId.length;
    total.innerHTML = totalGlobal;
}
cargarTarea()
