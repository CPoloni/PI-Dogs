/*STYLE*/
import style from "./Landing.module.css";

import { NavLink } from "react-router-dom";

function Landing() {
  return (
    <div className={style.body}>
      <div>
        <NavLink to="/home">
          <button className={style.button}>WELCOME</button>
        </NavLink>
      </div>

      <div className={style.textLeft}>
        <h1>DOG APP</h1>
      </div>
      <div className={style.textContainer}></div>

      <div className={style.text}>
        <h1>
          * This application was designed for you who, like us, love dogs, and
          want to know everything about them.
          <br></br>* We invite you to collaborate to include those we still need
          to know.
        </h1>
      </div>
    </div>
  );
}

export default Landing;
