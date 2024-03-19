/*STYLE*/
import "./Home.module.css";
/*COMPONENTES*/
import NavBar from "../../components/navBar/NavBar";
import Cards from "../../components/cards/Cards";
//!import SearchBar from "../../components/searchBar/SearchBar";

function Home() {
  return (
    <div>
      <h1>estoy en home</h1>
      <NavBar />
      <Cards />
    </div>
  );
}

export default Home;
