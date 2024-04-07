/*STYLE*/
import style from "./NavBar.module.css";

//importar los estilos de vavBar
//importar searchbar

const NavBar = () => {
  return (
    // <div className={style.navBar}>
    //   <div className={style.lblMenu}>
    //     <label>
    //       <NavLink className={style.button} to="/">
    //         WEELCOME
    //       </NavLink>
    //     </label>
    //     <label>
    //       <NavLink to="/home">HOME</NavLink>
    //     </label>
    //     <label>
    //       <NavLink className={style.button} to="/form">
    //         NEW DOG
    //       </NavLink>
    //     </label>
    //   </div>
    // </div>
    <header>
      <div className={style.logo}>LOGO</div>
      <nav>
        <a href="/">WEELCOME</a>
        <a href="/home">HOME</a>
        <a href="/form">NEW DOG</a>
      </nav>
    </header>
  );
};
export default NavBar;
