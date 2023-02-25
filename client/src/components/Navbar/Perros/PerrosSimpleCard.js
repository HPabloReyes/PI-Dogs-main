import React from "react";
import { Link } from "react-router-dom";
import "./Perros.css";

export default function PerrosSimpleCard({
  id,
  nombre,
  imagen,
  temperamento,
  peso,
  peso_maximo,
  peso_minimo,
  tempC,
}) {
  return (
    <div className="carta-container">
      <Link className="imagenlink" to={`/details/` + id}>
        <img className="imagen2" src={imagen} alt="recipe_image" />
      </Link>
      <div className="carta-desc">
        <h1>{nombre}</h1>
        <p>
          <b>Peso:</b> {peso_maximo ? peso_minimo : peso}{" "}
          {peso_maximo ? "-" : null} {peso_maximo ? peso_maximo : null}Kgs
        </p>
        <p>
          <b>Temperamento: </b> {tempC ? tempC : temperamento}
        </p>
      </div>
    </div>
  );
}
