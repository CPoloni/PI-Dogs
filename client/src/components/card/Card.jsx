/*STYLE*/
import style from "./Card.module.css";

function Card({ dog }) {
  const { name, image, temperament, weight_min, weight_max } = dog;

  return (
    <div className={style.container}>
      <h4>{name}</h4>
      <img src={image.url} alt="dog" />
      <h4>{temperament}</h4>
      <p>{weight_min}</p>
      <p>{weight_max}</p>
    </div>
  );
}

export default Card;
