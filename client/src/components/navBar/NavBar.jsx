import { NavLink } from "react-router-dom"; //para mis botones para redirigirme, Uso NavLink en vez de Link para darle estilos
//importar los estilos de vavBar
//importar searchbar

const NavBar = () => {
  return (
    <div>
      <div>
        <NavLink to="/form">CREATE</NavLink>
      </div>
      <div>
        <NavLink to="/home">HOME</NavLink>
      </div>
    </div>
  );
};
export default NavBar;
