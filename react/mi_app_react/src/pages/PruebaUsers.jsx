import { useState } from "react";

export function PruebaUsers() {
  const data = [
    {
      id: 1,
      nombre: "Jorge",
      apellido: "Porras",
      telefono: "3117840647",
    },
    {
      id: 2,
      nombre: "Andrea",
      apellido: "Serrano",
      telefono: "3146887947",
    },
    {
      id: 3,
      nombre: "Sandra",
      apellido: "Sandoval",
      telefono: "300710026",
    },
    {
      id: 4,
      nombre: "Lenny",
      apellido: "Pechene",
      telefono: "3137012335",
    },
    {
      id: 5,
      nombre: "Sirley",
      apellido: "Anacona",
      telefono: "31645464654",
    },
  ];

  const [datosUser, setdatosUser] = useState(data);
  const filter = (e) =>{
    if (e.target.value ===''){
        setdatosUser(data)
    }else{
        const datosfilter = datosUser.filter(busqueda =>{
            return busqueda.nombre.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setdatosUser(datosfilter)
    }
  }
  
  return (
    <div>
      <input 
       type="text"
       placeholder="Ingresa nombre usuario"
       onChange={filter}
       />
      {datosUser.map((cliente) => (
        <div key={cliente.id}> 
        <h3>{cliente.nombre} {cliente.apellido} </h3>
        <label>Telefono: {cliente.telefono}</label>
        </div>
      ))}
    </div>
  );
}
