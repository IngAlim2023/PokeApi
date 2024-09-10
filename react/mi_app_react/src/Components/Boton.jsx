import { useState } from "react";

export function Boton() {
    const [contador, setContador] = useState(0);
    
  return (
    <div>
      <button onClick={()=>{
        setContador(contador + 1);
      }}> + {contador}</button>
    </div>
  )
}
