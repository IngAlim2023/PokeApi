import { useState } from "react"

// con los props que pasamos en Administador el buscador procede a realizar la busqueda y setear el valor de buscador:
export function Buscador(props) {
  return (
    <>
         <input  type="text" placeholder="Ingresa tarea:" 
         value={props.buscador}
         onChange={(e) =>{
            props.setBuscador(e.target.value)
         }}/>
    </>
  )
}

