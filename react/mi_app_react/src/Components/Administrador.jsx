import { Boton } from "./Boton";
import { Buscador } from "./Buscador";
import { Lista } from "./Lista";
import { Titulo } from "./Titulo";


export function Administrador() {
  const tarea = [
    {id:1, nombre:'HacerBD', completa: true},
    {id:2, nombre:'Hacer backeng', completa: true},
    {id:3, nombre:'Hacer Forntend', completa: false},
    {id:4, nombre:'Hacer Deploy', completa: false}
  ]
  //Hacer el contador de tareas completadas
  const taresListas = tarea.filter(task => task.completa);
  return (
    <div>
        <h1>Administrador de tareas</h1>
        <Titulo cantidad={taresListas.length} total={tarea.length}/>
        <Buscador/>
        {tarea.map((task)=>(
          <Lista nombre={task.nombre} />
        ))
          
        }
        
        <Boton/>
    </div>
    
  )
}