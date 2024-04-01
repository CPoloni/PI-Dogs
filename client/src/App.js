/*STYLE*/
import "./App.css";
/*COMPONENTES TO RENDER*/
import Detail from "./views/Detail/Detail";
import Form from "./views/Form/Form";
import FormAdopt from "./views/FormAdopt/FormAdopt";
import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";

/*HOOKS*/
import { Route, Routes } from "react-router-dom";

function App() {
  //const location = useLocation(); // retorna informacion de la posicion dentro de las rutas de la app. lo traigo para indicarle que muestre la navbar en todas las rutas diferentes a landing
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/home/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
        <Route path="/adopt" element={<FormAdopt />} />
      </Routes>
    </div>
  );
}

export default App;
