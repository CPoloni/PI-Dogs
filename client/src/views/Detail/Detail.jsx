/*STYLE*/
import "./Detail.module.css";
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

  // return (
  //   <div>
  //     <NavBar />
  //     {dogId ? (
  //       ((<h1>estoy en detail</h1>),
  //       (<img src={dogId.image} alt="dog" />),
  //       (
  //         <NavLink to="/home">
  //           <button>Back</button>
  //         </NavLink>
  //       ))
  //     ) : (

  //   </div>
  // );
  return (
    <div>
      <NavBar />
      <div>
        <h1>Id: {dogId.id}</h1>
        <h1> Breed: {dogId.name}</h1>
        <img src={dogId.image} alt="dog" />
        <p> Temperament: {dogId.temperament}</p>
        <p> Wheight min: {dogId.weight_min}</p>
        <p> Wheight max: {dogId.weight_max}</p>
        <p> Height min: {dogId.height_min}</p>
        <p> Height max: {dogId.height_max}</p>
        <p> Life span: {dogId.life_span}</p>
      </div>
      <div>
        <NavLink to="/home">
          <button>Back</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Detail;
