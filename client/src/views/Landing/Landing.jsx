/*STYLE*/
import "./Landing.module.css";

import { NavLink } from "react-router-dom";

function Landing() {
  return (
    <div>
      <h1>WELCOME</h1>
      <button>
        <NavLink to="/home">START</NavLink>
      </button>
    </div>
  );
}

export default Landing;
