/*STYLE*/
import "./Home.module.css";
/*HOOKS*/
import { useEffect, useState } from "react"; //nos ayud a controlar el ciclo de vida
import { useDispatch, useSelector } from "react-redux";

/*COMPONENTES*/
import NavBar from "../../components/navBar/NavBar";
import Cards from "../../components/cards/Cards";
import SearchBar from "../../components/searchBar/SearchBar";
import { getDogs, getDogsName } from "../../redux/actions";

function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs); //estado global(reducer)
  const [searchString, setSearchString] = useState(""); // estado local que corresponde a la palabra que voy a escribir en la barra de busqueda

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

  useEffect(() => {
    dispatch(getDogs());
    //return(()=>{clearDetail()}) para q delimpie el detalle y se desmonte min 14.51 4to video
  }, [dispatch]);

  return (
    <div>
      <h1>estoy en home</h1>
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <NavBar />
      <Cards allDogs={allDogs} />
    </div>
  );
}

export default Home;
