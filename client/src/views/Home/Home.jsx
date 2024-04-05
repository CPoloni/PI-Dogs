/*STYLE*/
import style from "./Home.module.css";
/*HOOKS*/
import React, { useEffect, useState } from "react"; //nos ayud a controlar el ciclo de vida
import { useDispatch, useSelector } from "react-redux";

/*COMPONENTES*/
import NavBar from "../../components/navBar/NavBar";
import Cards from "../../components/cards/Cards";
import SearchBar from "../../components/searchBar/SearchBar";

import {
  getDogs,
  orderAlp,
  orderWeight,
  filterCreated,
  filterTemperam,
  getTemperament,
} from "../../redux/actions";

function Home() {
  const dispatch = useDispatch();

  const allDogs = useSelector((state) => state.allDogs); //estado global(reducer)
  //!ver poner en reducer el orrdenamiento alfab
  // odeno alfabeticamente temperaments para desplegable
  const temperaments = useSelector((state) => state.temperaments).sort(
    (a, b) => {
      return a - b;
    }
  );

  const pageSize = 8; //cards que se muestran por paginal

  /*STATES*/
  const [currentPage, setCurrentPage] = useState(1); //estado local, pagina actual

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperament());
  }, [dispatch]);

  /*ORDER*/

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

  /*FILTERS*/
  //filtro segun origen
  const handleFilterCreated = (e) => {
    e.preventDefault();
    dispatch(filterCreated(e.target.value));
  };

  //filtro temperament
  const handleFilterTemp = (e) => {
    e.preventDefault();
    dispatch(filterTemperam(e.target.value));
  };

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
    <div className={style.boy}>
      <div>
        <NavBar />
      </div>
      <div>
        <SearchBar />
      </div>
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
            <option value="asc">MIN </option>
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
          <option value="all">ALL DOGS</option>
          <option value="created">CREATED BY USERS</option>
          <option value="api">API DOGS</option>
        </select>
      </div>

      <div>
        <h4>filter by temperament</h4>
        <select
          onChange={(e) => {
            handleFilterTemp(e);
          }}
        >
          <option value="all">ALL </option>
          {temperaments.map((temp) => {
            return (
              <option value={temp.name} key={temp.name}>
                {temp.name}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <Cards allDogs={allDogs.slice(startIndex, endIndex)} />
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
    </div>
  );
}

export default Home;
