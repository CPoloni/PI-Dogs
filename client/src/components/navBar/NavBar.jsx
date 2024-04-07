/*STYLE*/
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={style.wrapper}>
      <div>
        <div className={style.logo}>DOG APP</div>
        <nav>
          <a href="/">WEELCOME</a>
          <a href="/home">HOME</a>
          <a href="/form">NEW DOG</a>
        </nav>
      </div>
    </header>
  );
};
export default NavBar;
