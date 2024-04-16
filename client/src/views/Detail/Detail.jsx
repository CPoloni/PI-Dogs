/*STYLE*/
import style from "./Detail.module.css";
/*HOOKS*/
import React, { useEffect } from "react"; //nos ayud a controlar el ciclo de vida
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
/*COMPONENTES*/
import { getDogsId, clearDetail } from "../../redux/actions";
import NavBar from "../../components/navBar/NavBar";
import { NavLink } from "react-router-dom";

function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const dogId = useSelector((state) => state.dogDetail); //estado global(reducer)

  useEffect(() => {
    dispatch(getDogsId(id));
    return () => {
      dispatch(clearDetail()); //desmonto el detalle
    };
  }, [dispatch, id]);

  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div className={style.card}>
        <div className={style.img}>
          <img src={dogId.image} alt="dog" />
        </div>

        <div>
          <div className={style.bred}>
            <h1> {dogId.name}</h1>
          </div>
          <div className={style.cont}>
            <p>Id: {dogId.id}</p>

            <p>Temperament: {dogId.temperament}</p>
            <p>
              Wheight (Kg): {dogId.weight_min} - {dogId.weight_max}
            </p>
            <p>
              Height (Cm): {dogId.height_min} - {dogId.height_max}
            </p>
            <p> Life span: {dogId.life_span}</p>
          </div>
          <div className={style.contbutton}>
            <NavLink to="/home">
              <button className={style.button}>Back</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
