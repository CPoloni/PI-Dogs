/*STYLE*/
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom"; //para mis botones para redirigirme, Uso NavLink en vez de Link para darle estilos
//importar los estilos de vavBar
//importar searchbar

const NavBar = () => {
  return (
    <div className={style.nav}>
      <div>
        <NavLink className={style.button} to="/form">
          CREATE
        </NavLink>
      </div>
      <div>
        <NavLink to="/home">HOME</NavLink>
      </div>
      <div>
        <NavLink to="/adopt">ADOPT</NavLink>
      </div>
    </div>
  );
};
export default NavBar;
