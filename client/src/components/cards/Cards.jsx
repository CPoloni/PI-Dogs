/*STYLE*/
import style from "./Cards.module.css";
/*COMPONENTE*/
import Card from "../card/Card";

function Cards({ allDogs }) {
  const dogList = allDogs;

  return (
    <div className={style.cardsContainer}>
      {dogList?.map((dog) => (
        <Card dog={dog} />
      ))}
    </div>
  );
}

export default Cards;
