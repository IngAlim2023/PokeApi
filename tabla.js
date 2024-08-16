const personas = [];
let nombre = document.getElementById("nombre");
let iden = document.getElementById("iden");
let dir = document.getElementById("dir");
let crear = document.getElementById("create");
let tabla = document.getElementById("body-table");
let actulizacion = document.getElementById("actializacion");

crear.addEventListener("click", ()=>{
    if (!nombre.value == "" && !iden.value =="" && !dir.value ==""){
        tabla.innerHTML = "";
        const persona = {
            "nombre" : nombre.value,
            "iden" : iden.value,
            "dir" : dir.value,
        };
        personas.push(persona);
        personas.forEach(p => {
            const fila=document.createElement('tr');
            const col=document.createElement('td');
            col.textContent=p.nombre;
            const col1=document.createElement('td');
            col1.textContent=p.iden;
            const col2=document.createElement('td');
            col2.textContent=p.dir;
            const col3=document.createElement('td');
            const botonEliminar=document.createElement('button')
            botonEliminar.textContent="Eliminar"
            botonEliminar.className = "btn btn-outline-danger mb-3"
            botonEliminar.onclick=function llamadoEliminar() {
                eliminar(p.nombre);
            }
            const botonActualizar=document.createElement('button')
            botonActualizar.textContent="Actualizar"
            botonActualizar.className = "btn btn-outline-info mb-3"
            botonActualizar.onclick=function Actualizar() {
                console.log("")                
            }
            col3.appendChild(botonActualizar);

            col3.appendChild(botonEliminar);
            fila.appendChild(col);
            fila.appendChild(col1);
            fila.appendChild(col2);
            fila.appendChild(col3);
            tabla.appendChild(fila);    
        });
        nombre.value = "";
        iden.value = "";
        dir.value = "";    
    } else {
        alert("Campos vacios");
    }
    
    
  
});

let eliminar = (nombrePersona) =>{
    const busqueda = personas.findIndex((names)=> names.nombre == nombrePersona);
    personas.splice(busqueda,1);
    console.log(busqueda);
};

actulizacion.addEventListener("click", () =>{
    tabla.innerHTML = "";

    personas.forEach(p => {
        const fila=document.createElement('tr');
        const col=document.createElement('td');
        col.textContent=p.nombre;
        const col1=document.createElement('td');
        col1.textContent=p.iden;
        const col2=document.createElement('td');
        col2.textContent=p.dir;
        const col3=document.createElement('td');
        const botonEliminar=document.createElement('button')
        botonEliminar.textContent="Eliminar"
        botonEliminar.className = "btn btn-outline-danger mb-3"
        botonEliminar.onclick=function llamadoEliminar() {
            eliminar(p.nombre);
        }
        const botonActualizar=document.createElement('button')
        botonActualizar.textContent="Actualizar"
        botonActualizar.className = "btn btn-outline-info mb-3"
        botonActualizar.onclick=function Actualizar() {
            console.log("")                
        }
        col3.appendChild(botonActualizar);

        col3.appendChild(botonEliminar);
        fila.appendChild(col);
        fila.appendChild(col1);
        fila.appendChild(col2);
        fila.appendChild(col3);
        tabla.appendChild(fila);    
    });
});
