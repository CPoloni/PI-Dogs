/*STYLE*/
import style from "./SearchBar.css";
/*HOOKS*/
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDogsName } from "../../redux/actions";

function SearchBar() {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState("");

  /*SEARCH BY NAME*/
  const handleChange = (e) => {
    //me asigna el target value que va modificando lo q se encuentra dentra de la barra de busqueda
    e.preventDefault();
    setSearchString(e.target.value);
  };

  const handleSubmit = (e) => {
    //cuando le haga click a submit me haga un filtrado de todos los dogs con el nombre que ingrese al imput
    e.preventDefault();
    dispatch(getDogsName(searchString));

    // alerta si el campo esta vacio no puede enviar la busqueda
    if (searchString.trim() === "") {
      alert("Please enter breed name");
      return;
    }
  };

  //si el campo esta vacio, trae todas los dogs
  useEffect(() => {
    if (searchString.trim() === "") {
      dispatch(getDogsName("")); //despacho la action
    }
  }, [searchString, dispatch]);

  return (
    <div className={style.search}>
      <form onSubmit={handleSubmit} className="search">
        <div>
          <input
            type="search"
            onChange={handleChange}
            placeholder="Write a breed name"
          />
        </div>
        <button onClick={handleSubmit} type="submit">
          {" "}
          SEARCH
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
