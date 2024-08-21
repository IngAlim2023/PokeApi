const personas = [];
let nombre = document.getElementById("nombre");
let iden = document.getElementById("iden");
let dir = document.getElementById("dir");
let crear = document.getElementById("create");
let tabla = document.getElementById("body-table");
let actulizacion = document.getElementById("actualizacion");

//Modal dialog
let dialModal = document.getElementById("diaModal");
let closeDialog = document.getElementById("cloDialog");

//Actualización de campo:

let nombreModal = document.getElementById("nombreModal");
let ideModal = document.getElementById("idenModal");
let dirModal = document.getElementById("dirModal");
let cloM = document.getElementById("closeMod");

//Modal para agregar persona:
let formAgregar = document.getElementById("formulario");
let modalAgregar = document.getElementById("persoNuevo");
let closeModal = document.getElementById("cerrar");

modalAgregar.addEventListener('click', ()=>{
        
    formAgregar.style.display = "block";

});

closeModal.addEventListener('click', ()=>{
    formAgregar.style.display = "none";
})

//Cerrar el dialog de actualizacion:
closeDialog.addEventListener('click', ()=>{
    nombreModal.value = "";
    ideModal.value = "";
    dirModal.value = "";
    dialModal.close();
})

crear.addEventListener("click", ()=>{
    if (!nombre.value == "" && !iden.value =="" && !dir.value ==""){
        tabla.innerHTML = "";
        const persona = {
            "nombre" : nombre.value,
            "iden" : iden.value,
            "dir" : dir.value,
        };
        personas.push(persona);
        renderTabla();
        nombre.value = "";
        iden.value = "";
        dir.value = "";
        formAgregar.style.display = "none";  
    } else {
        alert("Campos vacios");
    }
  
});

let eliminar = (idenPersona) =>{
    const busqueda = personas.findIndex((names)=> names.iden === idenPersona);
    personas.splice(busqueda,1);
    renderTabla();

};
let actulizarCampo = (index, name, identi , direccion) =>{
    
    nombreModal.value = name;
    ideModal.value = identi;
    dirModal.value = direccion;
    indexActualizar = index;
    
} 

cloM.addEventListener("click", ()=>{
    if (!nombreModal.value == "" && !ideModal.value =="" && !dirModal.value ==""){
        personas[indexActualizar] = {
            "nombre" : nombreModal.value,
            "iden" : ideModal.value,
            "dir" : dirModal.value,
        };
        nombreModal.value = "";
        ideModal.value = "";
        dirModal.value ="";
        renderTabla();
        dialModal.close();
    }else{
        alert("campos vacios.");
    }
    
    
})

actulizacion.addEventListener("click", () =>{
    renderTabla();
});


//Atualizacion de tabla:
let renderTabla = () =>{
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
        botonEliminar.className = "btn btn-outline-danger me-3"
        botonEliminar.onclick=function llamadoEliminar() {
            eliminar(p.iden);
        }
        const botonActualizar=document.createElement('button')
        botonActualizar.textContent="Actualizar"
        botonActualizar.className = "btn btn-outline-info me-3"
        botonActualizar.onclick=function llamaActualizar() {
            dialModal.showModal();
            let buscaActual = personas.findIndex((names)=> names.iden === p.iden);
            actulizarCampo(buscaActual, p.nombre, p.iden, p.dir);            
            
        }
        col3.appendChild(botonActualizar);

        col3.appendChild(botonEliminar);
        fila.appendChild(col);
        fila.appendChild(col1);
        fila.appendChild(col2);
        fila.appendChild(col3);
        tabla.appendChild(fila);    
    });
}