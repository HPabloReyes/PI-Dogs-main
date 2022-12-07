import React from "react";
import axios from "axios";
import { useState } from "react";
import DeletedMsg from "./DeletedMsg";

export default function PerrosDetailCard({
  id,
  nombre,
  image,
  altura,
  peso,
  peso_maximo,
  peso_minimo,
  temperamento,
  años_de_vida,
  tempC,
}) {
  const [show, setShow] = useState(false);

  const deleted = async function (id) {
    try {
      await axios.delete(`http://localhost:3001/delete/${id}`);
    } catch (e) {
      console.log(e);
    }
  };

  const hanldeSubmit = (id) => {
    deleted(id);
    setShow(true);
  };

  return (
    <div>
      <div>
        {show && (
          <button className="boton_mensaje" onClick={() => setShow(false)}>
            Aceptar
          </button>
        )}
        {show ? <DeletedMsg /> : null}
      </div>
      <div>
        {tempC ? (
          <button className="boton_borrar" onClick={() => hanldeSubmit(id)}>
            X
          </button>
        ) : null}
      </div>
      <h1>{nombre}</h1>
      <p>
        <b> Altura promedio:</b> {altura} {tempC ? "Cm" : null}
      </p>
      <p>
        <b>Peso:</b> {peso_maximo ? peso_minimo : peso}
        {peso_maximo ? "-" : null} {peso_maximo ? peso_maximo : null}Kgs
      </p>
      <p>
        <b>Temperamento: </b> {tempC ? tempC : temperamento}
      </p>
      <p>
        <b>Años de vida: </b> {años_de_vida} {tempC ? "años" : null}
      </p>

      <img src={image} alt={`imagen de perro${id}`} width={500} />
    </div>
  );
}
