/*STYLE*/
import "./Landing.module.css";

import { NavLink } from "react-router-dom";

function Landing() {
  return (
    <div>
      <button>
        <NavLink to="/home">INGRESE</NavLink>
      </button>
    </div>
  );
}

export default Landing;
