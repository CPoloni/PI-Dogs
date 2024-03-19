/*STYLE*/
import style from "./Cards.module.css";
/*COMPONENTE*/
import Card from "../card/Card";

function Cards() {
  return (
    <div className={style.cardsContainer}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Cards;
