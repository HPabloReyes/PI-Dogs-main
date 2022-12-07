import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, ShowNav } from "../../../actions";
import {
  Formulario,
  Label,
  Input,
  LeyendaError,
  Inputboton,
  ContenedorBoton,
  Select,
  Option,
} from "./elementos/Formulario";
import "./Create.css";
import Createdmsg from "./Createdmsg";

export default function Create() {
  let estadoTemperamentos = useSelector((state) => state.temperamentos);
  //console.log(estadoTemperamentos);
  const dispach = useDispatch();

  useEffect(() => {
    dispach(getTemperaments());
  }, [dispach]);

  useEffect(() => {
    dispach(ShowNav());
  });

  let [input, setInput] = React.useState({
    nombre: "",
    peso_maximo: "",
    peso_minimo: "",
    altura: "",
    años_de_vida: "",
    temperamento: [],
  });

  let [formError, setformError] = React.useState({});

  // Con esta funcion se validan los cambios en el estado y los valores en el FORM

  function validate(input) {
    let errores = {};

    if (!input.nombre) errores.nombre = "El nombre del perro es requerido";
    else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(input.nombre))
      errores.nombre = "El nombre no puede contener numeros";
    else if (!/^[0-9_\s]{1,16}$/.test(input.peso_maximo))
      errores.peso_maximo = "El peso no puede incluir letras";
    else if (!/^[0-9_\s]{1,16}$/.test(input.peso_minimo))
      errores.peso_minimo = "El peso no puede incluir letras";
    else if (!/^[0-9_\s]{1,16}$/.test(input.altura))
      errores.altura = "La altura no puede incluir letras";
    else if (!/^[0-9_\s]{1,40}$/.test(input.años_de_vida))
      errores.años_de_vida = "Los años de vida no pueden ser letras ";

    return errores;
  }

  let handleChange = (e) => {
    setInput((input) => {
      const newInput = {
        ...input,
        [e.target.name]: e.target.value,
      };
      const errores = validate(newInput);
      setformError(errores);

      return newInput;
    });
  };

  // Esta es la ruta que hace la peticion POST en el back
  const post = async function (input) {
    try {
      await axios({
        url: "http://localhost:3001/dogs",
        method: "POST",
        data: input,
      });
      //console.log(input);
      return true;
    } catch (e) {
      console.log(e);
    }
  };

  // Esta funcion controla lo que sucede una vez que se presiona el boton submit en el FORM
  const hanldeSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    post(input);
    setInput({
      nombre: "",
      peso_maximo: "",
      peso_minimo: "",
      altura: "",
      años_de_vida: "",
    });
    setShow(true);
  };

  const handleTemperamento = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      temperamento: Array.from(
        new Set([...input.temperamento, e.target.value])
      ),
    });
  };

  const [show, setShow] = useState(false);

  return (
    <div>
      <div>
        {show && (
          <button className="boton_mensaje" onClick={() => setShow(false)}>
            Aceptar
          </button>
        )}
        {show && <Createdmsg />}
      </div>
      <div className="titulo">
        <p>Ingrese nuevo perro</p>
      </div>
      <img
        className="imagen_de_fondo"
        src="http://cdn11.overnature.net/5120/683-amanecer-en-el-bosque-de-invierno.jpg"
        alt="fondo de formulario"
      />
      <Formulario onSubmit={(e) => hanldeSubmit(e)}>
        <div>
          <Label>
            <b>Nombre: </b>
          </Label>
          <div>
            <Input
              type={"text"}
              name={"nombre"}
              value={input.nombre}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {formError.nombre && <LeyendaError>{formError.nombre}</LeyendaError>}
        </div>
        <div>
          <Label>
            <b>Peso maximo: </b>
          </Label>
          <Input
            type={"text"}
            name={"peso_maximo"}
            value={input.peso_maximo}
            onChange={(e) => handleChange(e)}
          />
          {formError.peso_maximo && (
            <LeyendaError>{formError.peso_maximo}</LeyendaError>
          )}
        </div>
        <div>
          <Label>
            <b>Peso minimo: </b>
          </Label>
          <Input
            type={"text"}
            name={"peso_minimo"}
            value={input.peso_minimo}
            onChange={(e) => handleChange(e)}
          />
          {formError.peso_minimo && (
            <LeyendaError>{formError.peso_minimo}</LeyendaError>
          )}
        </div>
        <div>
          <Label>
            <b>Altura: </b>
          </Label>

          <Input
            type={"text"}
            name={"altura"}
            value={input.altura}
            onChange={(e) => handleChange(e)}
          />
          {formError.altura && <LeyendaError>{formError.altura}</LeyendaError>}
        </div>
        <div>
          <Label>
            <b>Años de vida: </b>
          </Label>

          <Input
            type={"text"}
            name={"años_de_vida"}
            value={input.años_de_vida}
            onChange={(e) => handleChange(e)}
          />
          {formError.años_de_vida && (
            <LeyendaError>{formError.años_de_vida}</LeyendaError>
          )}
        </div>
        <div>
          <Label>
            <b>Temperamento</b>
          </Label>
          <Select
            name="temperamento"
            value={input.temperamento}
            onChange={handleTemperamento}
          >
            {estadoTemperamentos.map((e) => {
              return <Option value={e.id}>{e.nombre}</Option>;
            })}
          </Select>
        </div>
        <ContenedorBoton>
          <Inputboton
            type={"submit"}
            value={"CREATE"}
            disabled={Object.entries(formError).length === 1}
          />
        </ContenedorBoton>
      </Formulario>
    </div>
  );
}
