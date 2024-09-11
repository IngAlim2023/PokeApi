import { useState } from "react";
import { Boton } from "./Boton";
import { Buscador } from "./Buscador";
import { Lista } from "./Lista";
import { Titulo } from "./Titulo";


export function Administrador() {
  const tarea = [
    {id:1, nombre:'Hacer BD', completa: true},
    {id:2, nombre:'Hacer backeng', completa: true},
    {id:3, nombre:'Hacer Forntend', completa: false},
    {id:4, nombre:'Hacer Deploy', completa: false}
  ]
  //Hacer el contador de tareas completadas
  const taresListas = tarea.filter(task => task.completa);
  
  //Buscador: retorno de el valor del Buscador: 
  const [buscador, setBuscador] = useState('');
  
  //Seteada la variable buscador el componente Buscador envia la información y se filtra en tareas, creando un nuevo array de objetos
  const tareas = tarea.filter((task) =>
    task.nombre.toLowerCase().includes(buscador.toLowerCase())    
  );
  
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mt-3">
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Administrador de tareas</h1>
        <Titulo cantidad={taresListas.length} total={tarea.length}/>
        {/* Le pasamos al buscador los parametros para setear lo que queremos buscar -> estos los utiliza la constante tareas, que en realidas es un array de objetos */}
        <Buscador buscador={buscador} setBuscador={setBuscador}/>
        {tareas.map((task)=>(
          <Lista key={task.id} nombre={task.nombre}/>
        ))
          
        }
        
        <Boton/>
    </div>
    
  )
}