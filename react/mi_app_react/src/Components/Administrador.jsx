import { Buscador } from "./Buscador";
import { Lista } from "./Lista";


export function Administrador() {
  return (
    <div>
        <h1>Administrador de tareas</h1>
        <Buscador/>
        <Lista/>
        <Lista/>
        <Lista/> 
    </div>
    
  )
}