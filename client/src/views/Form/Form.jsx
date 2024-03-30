/*STYLE*/
//import "./Form.module.css";
/*HOOKS*/
import { useState } from "react";

/*COMPONENTS*/
import NavBar from "../../components/navBar/NavBar";
import validate from "../../components/validate/Validate";

function Form() {
  const [input, setInput] = useState({
    name: "",
    height_min: "",
    height_max: "",
    weight_min: "",
    weight_max: "",
    life_span: "",
    image: "",
    temperament: "",
  });

  const [error, setError] = useState({
    name: "",
    height_min: "",
    height_max: "",
    weight_min: "",
    weight_max: "",
    life_span: "",
    image: "",
    temperament: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={""}>
        <div>
          <label>Breed</label>
          <input name="name" onChange={handleChange} />
        </div>

        <div>
          <label>Minimun height</label>
          <input name="height_min" onChange={handleChange} />
        </div>

        <div>
          <label>Maximum weight</label>
          <input name="height_max" onChange={handleChange} />
        </div>

        <div>
          <label>Minimun weight</label>
          <input name="weight_min" onChange={handleChange} />
        </div>

        <div>
          <label>Maximum weight</label>
          <input name="weight_max" onChange={handleChange} />
        </div>

        <div>
          <label>Life span</label>
          <input name="life_span" onChange={handleChange} />
        </div>

        <div>
          <label>Image</label>
          <input name="image" onChange={handleChange} />
        </div>

        <div>
          <label>Temperament</label>
          <input name="temperament" onChange={handleChange} />
        </div>
        {error.name ||
        error.height_min ||
        error.height_max ||
        error.weight_min ||
        error.weight_max ||
        error.life_span ||
        error.image ||
        error.temperament ? null : (
          <button type="submit">SUBMIT</button>
        )}
      </form>
      <div>
        <NavBar />
      </div>
    </div>
  );
}

export default Form;
