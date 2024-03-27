/*STYLE*/
import "./Home.module.css";
/*HOOKS*/
import React, { useEffect, useState } from "react"; //nos ayud a controlar el ciclo de vida
import { useDispatch, useSelector } from "react-redux";

/*COMPONENTES*/
import NavBar from "../../components/navBar/NavBar";
import Cards from "../../components/cards/Cards";
import SearchBar from "../../components/searchBar/SearchBar";

import {
  getDogs,
  getDogsName,
  orderAlp,
  orderWeight,
  filterCreated,
} from "../../redux/actions";

function Home() {
  const dispatch = useDispatch();

  const allDogs = useSelector((state) => state.allDogs); //estado global(reducer)

  const pageSize = 8; //cards que se muestran por paginal
  const [currentPage, setCurrentPage] = useState(1); //estado local, pagina actual

  const [searchString, setSearchString] = useState(""); //estado local, string que voy a buscar

  useEffect(() => {
    dispatch(getDogs());
    //!return(()=>{clearDetail()}) para q delimpie el detalle y se desmonte min 14.51 4to video
  }, [dispatch]);

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
  };

  /*ORDER Y FILTERS*/

  //orden alfabeticamente
  const handleClickOrderAlp = (e) => {
    e.preventDefault();
    dispatch(orderAlp(e.target.value));
  };

  //orden por peso
  const handleClickOrderWeight = (e) => {
    e.preventDefault();
    dispatch(orderWeight(e.target.value));
  };

  //filtro segun origen
  const handleFilterCreated = (e) => {
    e.preventDefault();
    dispatch(filterCreated(e.target.value));
  };

  //filtro temperament

  /*PAGINATION*/

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }; //manejo cambio de pagina

  const startIndex = (currentPage - 1) * pageSize; //indice inicial para pagin
  const endIndex = Math.min(startIndex + pageSize, allDogs.length); //indice final para pagin

  const getCurrentPageNumber = () => {
    return currentPage;
  };

  return (
    <div>
      <div>
        <div>
          <h4>order by name</h4>
          <select
            onChange={(e) => {
              handleClickOrderAlp(e);
            }}
          >
            <option value="asc">A - Z</option>
            <option value="des">Z - A</option>
          </select>
        </div>

        <div>
          <h4>order by weight</h4>
          <select
            onChange={(e) => {
              handleClickOrderWeight(e);
            }}
          >
            <option value="asc">MIN</option>
            <option value="des">MAX</option>
          </select>
        </div>
      </div>

      <div>
        <h4>filter created</h4>
        <select
          onChange={(e) => {
            handleFilterCreated(e);
          }}
        >
          <option value="created">DB</option>
          <option value="dontCreated">API</option>
        </select>
      </div>
      <div>
        <NavBar />
      </div>

      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button>{getCurrentPageNumber()}</button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= allDogs.length}
        >
          Next
        </button>
      </div>

      <div>
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />

        <Cards allDogs={allDogs.slice(startIndex, endIndex)} />
      </div>
    </div>
  );
}

export default Home;
