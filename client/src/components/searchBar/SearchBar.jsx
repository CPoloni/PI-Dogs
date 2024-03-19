/*STYLE*/
import style from "./SearchBar.css";

function SearchBar() {
  return (
    <div className={style.search}>
      <input placeholder="busqueda" />
      <button>BUSCAR</button>
    </div>
  );
}

export default SearchBar;
