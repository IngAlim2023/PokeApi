import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export function Navigation() {

  const notify = () => toast.success('Vamos')
  return (
    <div>
      <Link to="/">
        <button onClick={notify}>Inicio</button>
      </Link>
      <Link to="/user">
        <button onClick={notify}>Usuario</button>
      </Link>
      <Link to="/admin">
        <button onClick={notify}>Administrador</button>
      </Link>
      <Link to="/users">
        <button onClick={notify}>Usuarios</button>
      </Link>
    </div>
  );
}
