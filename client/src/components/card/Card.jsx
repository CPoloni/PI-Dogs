/*STYLE*/
import style from "./Card.module.css";

import { NavLink } from "react-router-dom";

function Card({ dog }) {
  const { name, image, temperament, weight_min, weight_max, id } = dog;

  return (
    <div className={style.container}>
      <NavLink to={`/home/${id}`}>
        <h4>{name}</h4>
      </NavLink>
      <img className={style.imag} src={image} alt="dog" />
      <h4>{temperament}</h4>
      <p>Wheight min: {weight_min}</p>
      <p>Wheight max: {weight_max}</p>
    </div>
  );
}

export default Card;
