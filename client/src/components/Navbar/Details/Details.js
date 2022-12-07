import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails, ShowNav } from "../../../actions";
import PerrosDetailCard from "./PerrosDetailCard";
import "./Details.css";

export default function Details(props) {
  let params = props.match.params.id;
  let detail = useSelector((state) => state.detail);
  console.log(detail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(params));
  }, [dispatch, params]);

  useEffect(() => {
    dispatch(ShowNav());
  }, [dispatch]);

  return (
    <div className="principal">
      {detail.length > 0 ? (
        detail.map((r) => {
          return (
            <div className="carta">
              <PerrosDetailCard
                key={r.id}
                id={r.id}
                nombre={r.nombre}
                image={r.imagen}
                altura={r.altura}
                peso={r.peso}
                peso_maximo={r.peso_maximo}
                peso_minimo={r.peso_minimo}
                temperamento={r.temperamento}
                años_de_vida={r.años_de_vida}
                tempC={
                  r.temperamentos
                    ? r.temperamentos.map((e) => {
                        return e.nombre + ", ";
                      })
                    : null
                }
              />
            </div>
          );
        })
      ) : (
        <img
          src="https://i.gifer.com/origin/52/52e4bb28d095ff93d3a4019d43d628bc.gif"
          alt={"imagen de carga"}
        />
      )}
    </div>
  );
}
