/*STYLE*/
import style from "./Card.module.css";

import { NavLink } from "react-router-dom";

function Card({ dog }) {
  const { name, image, temperament, weight_min, weight_max, id } = dog;

  return (
    <div className={style.card}>
      <div className={style.img}>
        <img src={image} alt="dog" />
      </div>
      <div className={style.cont}>
        <h3>{name}</h3>
        <p>{temperament}</p>
        <p>
          Wheight min: {weight_min}
          <br />
          Wheight max: {weight_max}
        </p>
      </div>
      <div className={style.contbutton}>
        <NavLink to={`/home/${id}`}>
          <button className={style.button}>See more</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Card;
