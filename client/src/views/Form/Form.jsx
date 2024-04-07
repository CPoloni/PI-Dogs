/*STYLE*/
import style from "./Form.module.css";
/*HOOKS*/
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Link } from "react-router-dom";
/*COMPONENTS*/
import NavBar from "../../components/navBar/NavBar";
import validate from "../../components/validate/Validate";
import { getTemperament, createDog } from "../../redux/actions";

function Form() {
  const temperaments = useSelector((state) => state.temperaments);
  const dispatch = useDispatch();

  /*ESTADOS*/
  // estado local con los valores de cada uno de los input, al principio estan seteados como un string vacio
  const [input, setInput] = useState({
    name: "",
    height_min: "",
    height_max: "",
    weight_min: "",
    weight_max: "",
    life_span: "",
    image: "",
    temperament: [],
  });
  //! ver esta funcion
  const [redirectToHome, setRedirectToHome] = useState(false); //Redirige a home una vez completo el formulario

  const [error, setError] = useState({}); //Redirige a home una vez completo el formulario

  /*MANEJADORES DE EVENTOS*/
  //si hay un input hay un handlechange para q se setee el valor del input

  const handleInput = (e) => {
    setInput({
      //actualizo estado input
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      //validolos datos ingresados
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleTemp = (e) => {
    const { value } = e.target;
    if (input.temperament.includes(value)) {
      return alert("Temperament was already selected");
    }
    if (value === "all") {
      //ver que hace esto
      return;
    }
    setInput({
      //actualizo estado input
      ...input,
      temperament: [...input.temperament, value],
    });
    setError(
      //validolos datos ingresados
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleDeleteTemp = (d) => {
    setInput({
      ...input,
      temperament: input.temperament.filter((temp) => temp !== d), // seteo en el estado de temp seleccioandos todos los temp q NO sean iguales al que quiero borrar
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createDog(input));
    alert("Dog was successfully created");
    setInput({
      name: "",
      height_min: "",
      height_max: "",
      weight_min: "",
      weight_max: "",
      life_span: "",
      image: "",
      temperament: [],
    });
    setError({});
    setRedirectToHome(true);
  };

  useEffect(() => {
    dispatch(getTemperament()); // Carga todos los temperamentos cuando el componente se monta
  }, [dispatch]);

  return (
    <div className={style.form}>
      <div>
        <NavBar />
      </div>

      {redirectToHome && <Navigate to="/home" />}

      <form className={style.container}>
        <div>
          <label>Breed</label>
          <input name="name" value={input.name} onChange={handleInput} />
          <span>{error.name}</span>
        </div>
        <br />

        <div>
          <label>Minimun height</label>
          <input
            name="height_min"
            value={input.height_min}
            onChange={handleInput}
          />
          <span>{error.height_min}</span>
        </div>
        <br />

        <div>
          <label>Maximum weight</label>
          <input
            name="height_max"
            value={input.height_max}
            onChange={handleInput}
          />
          <span>{error.height_max}</span>
        </div>
        <br />

        <div>
          <label>Minimun weight</label>
          <input
            name="weight_min"
            value={input.weight_min}
            onChange={handleInput}
          />
          <span>{error.weight_min}</span>
        </div>
        <br />

        <div>
          <label>Maximum weight</label>
          <input
            name="weight_max"
            value={input.weight_max}
            onChange={handleInput}
          />
          <span>{error.weight_max}</span>
        </div>
        <br />

        <div>
          <label>Life span</label>
          <input
            name="life_span"
            value={input.life_span}
            onChange={handleInput}
          />
          <span>{error.life_span}</span>
        </div>
        <br />

        <div>
          <label>URL Image</label>
          <input
            type="url"
            name="image"
            value={input.image}
            onChange={handleInput}
          />
          <span>{error.image}</span>
        </div>
        <br />

        <div>
          <label>Temperament</label>
          <select name="temperament" onChange={handleTemp}>
            <option value="all"></option>
            {temperaments.map((temp) => {
              return <option value={temp.name}>{temp.name}</option>;
            })}
          </select>
          <div>
            {input.temperament.map((d) => (
              <div key={d}>
                {temperaments.find((temp) => temp.name === d)?.name}
                <button onClick={() => handleDeleteTemp(d)}>X</button>
              </div>
            ))}
          </div>
        </div>

        <br />

        <button
          type="submit"
          onClick={handleSubmit}
          disabled={
            error.name ||
            error.height_min ||
            error.height_max ||
            error.weight_min ||
            error.weight_max ||
            error.life_span ||
            error.image ||
            !input.temperament.length ||
            !input.name
          }
        >
          CREATE NEW DOG
        </button>
        <Link to="/home">
          <button>BACK TO HOME</button>
        </Link>
      </form>
    </div>
  ); // desactivar boton CREATED SI HAY ERRORES
} //!poner la navbar otra vez

export default Form;
