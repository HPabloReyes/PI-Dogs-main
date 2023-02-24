import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "../Navbar/Navbar.css";

export default function Navbar() {
  let show = useSelector((state) => state.show);

  return (
    show && (
      <nav id="menu">
        <div>
          <ul>
            <li>
              <NavLink to={"/home"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/perros"}>Perros</NavLink>
            </li>
            <li>
              <NavLink to={"/create"}>Agregar</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  );
}
