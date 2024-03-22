/*STYLE*/
import style from "./SearchBar.css";

function SearchBar({ handleChange, handleSubmit }) {
  return (
    <div className={style.search}>
      <form onChange={handleChange}>
        <input placeholder="busqueda" />
        <button onClick={handleSubmit}> BUSCAR</button>
      </form>
    </div>
  );
}

export default SearchBar;
