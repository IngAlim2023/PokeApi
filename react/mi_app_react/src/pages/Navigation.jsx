import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div>
      <Link to="/">
        <button>Inicio</button>
      </Link>
      <Link to="/user">
        <button>Usuario</button>
      </Link>
      <Link to="/admin">
        <button>Administrador</button>
      </Link>
      <Link to="/users">
        <button>Usuarios</button>
      </Link>
    </div>
  );
}
