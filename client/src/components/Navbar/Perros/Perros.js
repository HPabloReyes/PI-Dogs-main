import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PerrosSimpleCard from "./PerrosSimpleCard";
import { getDogs, cleanDetails, ShowNav } from "../../../actions";
import "./Perros.css";

//#region Funciones ordenamiento, filtros y paginado
export default function Perros() {
  let estadoPerros = useSelector((state) => state.perros);
  console.log(estadoPerros);

  const dispach = useDispatch();

  useEffect(() => {
    dispach(ShowNav());
  }, [dispach]);

  useEffect(() => {
    dispach(getDogs());
  }, [dispach]);

  useEffect(() => {
    return dispach(cleanDetails());
  }, [dispach]);

  const [current, setCurrent] = useState(0);
  const [orden, setOrden] = useState(2);

  const tarjetasXPag = () => {
    if (orden === 1) {
      estadoPerros.sort((a, b) => {
        if (a.nombre.toLowerCase() === b.nombre.toLowerCase()) return 0;
        if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) return -1;
        return 1;
      });
      return estadoPerros.slice(current, current + 8);
    } else if (orden === 0) {
      estadoPerros.sort((a, b) => {
        if (a.nombre.toLowerCase() === b.nombre.toLowerCase()) return 0;
        if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) return 1;
        return -1;
      });
      return estadoPerros.slice(current, current + 8);
    } else if (orden === 3) {
      estadoPerros.sort((a, b) => {
        if (Number(a.peso[0]) === Number(b.peso[0])) return 0;
        if (Number(a.peso[0]) < Number(b.peso[0])) return -1;
        if (a.peso[0] === "NaN") return -1;

        return 1;
      });
      return estadoPerros.slice(current, current + 8);
    } else if (orden === 4) {
      estadoPerros.sort((a, b) => {
        if (a.peso[0] === "NaN") a.peso[0] = "0";
        if (a.peso[1] === undefined) {
          a.peso[1] = "-";
          a.peso[2] = a.peso[0];
        }
        if (Number(a.peso[2]) === Number(b.peso[2])) return 0;
        if (Number(a.peso[2]) < Number(b.peso[2])) return 1;
        return -1;
      });
      return estadoPerros.slice(current, current + 8);
    }
    if (search !== "") {
      const filtrados = estadoPerros.filter((dog) =>
        dog.nombre.toLowerCase().includes(search.toLowerCase())
      );
      return filtrados.slice(current, current + 8);
    }
    if (searchR !== "") {
      const filtrados2 = estadoPerros.filter((dog) =>
        dog.temperamento?.toLowerCase().includes(searchR.toLowerCase())
      );
      console.log(filtrados2);
      return filtrados2.slice(current, current + 8);
    } else {
      return estadoPerros.slice(current, current + 8);
    }
  };
  const nextPage = () => {
    if (
      estadoPerros.filter((dog) => dog.nombre.includes(search)).length >
      current + 8
    )
      setCurrent(current + 8);
  };

  const prevPage = () => {
    if (current > 0) setCurrent(current - 8);
  };

  const sortA = () => {
    setCurrent(0);
    setOrden(1);
  };
  const sortZ = () => {
    setCurrent(0);
    setOrden(0);
  };

  const sortPesoMin = () => {
    setCurrent(0);
    setOrden(3);
  };
  const sortPesoMax = () => {
    setCurrent(0);
    setOrden(4);
  };

  const [search, setSearch] = useState("");
  const [searchR, setSearchR] = useState("");

  const onSearchChange = ({ target }) => {
    setCurrent(0);
    setOrden(2);
    setSearch(target.value);
  };

  const onSearchRace = ({ target }) => {
    setCurrent(0);
    setOrden(2);
    setSearchR(target.value);
  };
  //#endregion

  return (
    <>
      <div id="principal">
        <img
          className="imagen_de_fondo"
          src="https://c.wallhere.com/photos/4e/91/1920x1200_px_landscape_nature_sky-734989.jpg!d"
          alt="fondo de formulario"
        ></img>
        <div>
          <div id="contenedor_botones">
            <button onClick={sortPesoMax}>Pesados a Ligeros</button>
            <button onClick={sortPesoMin}>Ligeros a Pesados</button>
            <button onClick={sortA}> Aa/Zz </button>
            <button onClick={sortZ}> Zz/Aa </button>
          </div>
        </div>
        <div className="caja_buscadores">
          <input
            className="buscador"
            type="text"
            placeholder="Buscar perro por Temperamento"
            value={searchR}
            onChange={onSearchRace}
          />
          <input
            className="buscador"
            type="text"
            placeholder="Buscar Perro por Raza"
            value={search}
            onChange={onSearchChange}
          />
        </div>
        <div id="contenedor_botones">
          <button className="anterior" onClick={prevPage}>
            Pagina Anterior
          </button>
          <button className="siguiente" onClick={nextPage}>
            Pagina Siguiente
          </button>
        </div>
        <div className="contenedor-principal">
          {estadoPerros.length > 0 ? (
            tarjetasXPag().map((p) => {
              return (
                <PerrosSimpleCard
                  key={p.id}
                  id={p.id}
                  nombre={p.nombre}
                  imagen={p.imagen}
                  temperamento={p.temperamento}
                  peso={p.peso}
                  peso_maximo={p.peso_maximo}
                  peso_minimo={p.peso_minimo}
                  tempC={
                    p.temperamentos
                      ? p.temperamentos.map((e) => {
                          return e.nombre + ", ";
                        })
                      : null
                  }
                />
              );
            })
          ) : (
            <div className="imagencarga">
              <img
                src="https://i.gifer.com/origin/52/52e4bb28d095ff93d3a4019d43d628bc.gif"
                alt={"imagen de carga"}
              />
            </div>
          )}
        </div>
        <div id="contenedor_botones">
          <button className="anterior" onClick={prevPage}>
            Pagina Anterior
          </button>
          <button className="siguiente" onClick={nextPage}>
            Pagina Siguiente
          </button>
        </div>
      </div>
    </>
  );
}
