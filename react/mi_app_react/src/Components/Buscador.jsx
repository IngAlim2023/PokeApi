import { useState } from "react"

export function Buscador() {
    const [valor, setValor] = useState('');
  return (
    <>
         <input  type="text" placeholder="Ingresa tarea:" 
         value={valor}
         onChange={(e) =>{
            setValor(e.target.value)
            console.log(valor)
         }}/>
    </>
  )
}

