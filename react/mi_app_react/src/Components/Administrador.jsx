import { Boton } from "./Boton";
import { Buscador } from "./Buscador";
import { Lista } from "./Lista";
import { Titulo } from "./Titulo";


export function Administrador() {
  return (
    <div>
        <h1>Administrador de tareas</h1>
        <Titulo cantidad={2} total={8}/>
        <Buscador/>
        <Lista/>
        <Lista/>
        <Lista/>
        <Boton/>
    </div>
    
  )
}