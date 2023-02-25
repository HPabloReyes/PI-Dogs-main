import React from "react";
import { NavLink } from "react-router-dom";

import "./Landing.css";

export default function Landing() {
  return (
    <div className="divlanding">
      <div className="contenedor_landing">
        <div className="texto_landing">
          <h1> ¡ Encuentra un amigo !</h1>
        </div>
        <NavLink to={"/perros"}>
          <img
            className="imagen_landing"
            src="https://nupec.com/wp-content/uploads/2021/05/shutterstock_572500255.jpg"
            alt={"landing"}
          />
          <div className="Boton">
            <h1>O</h1>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
