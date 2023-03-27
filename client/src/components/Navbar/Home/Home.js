import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ShowNav } from "../../../actions";
import "../Home/Home.css";

export default function Home() {
  const dispach = useDispatch();

  useEffect(() => {
    dispach(ShowNav());
  }, [dispach]);

  return (
    <div className="principal2">
      <div id="about">
        <div className="derecha">
          <img className="yo" src="yo.png" alt="Fondo Home" />
        </div>
        <div className="izquierda">
          <h1> Hola Mundo ! </h1>
          <h2>My nombre es Hugo Pablo Reyes González</h2>
          <p>
            La aplicación en la que te encuentras actualmente fue la primera
            aplicación que desarrolle para poner a prueba mis habilidades como
            desarrollador web Full Stack. Integra conocimientos en teconologias
            como:<br></br>
            <br></br>
            <b>
              | | SQL || Node || Express || React || Redux || HTML || CSS || JS
              | |
            </b>
          </p>
          <p>
            Si bien la aplicación al momento de su despliegue ya cumple con los
            requisitos para funcionar haciendo peticiones actualizando bases de
            datos y renderizando información alimentándose a su vez de una API
            externa personalmente aun no la considero como una APP finalizada,
            pero al ser la primera aplicación que desarrolle decidí mantenerla
            de forma que se viera lo más similar a la versión que entregue
            cuando aprobé el proyecto.
          </p>
          <p>
            Tambien puedes seguirme en mis redes sociales y acceder a algunos de
            mis otros proyectos:
          </p>
          <div>
            <img
              src="https://i.gifer.com/origin/52/52e4bb28d095ff93d3a4019d43d628bc.gif"
              alt="imagen de fondo "
            ></img>
          </div>
        </div>
        <div className="contenedoritems">
          <div className="itembox">
            <a
              href="https://3dseller.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="d3"
                src="3dSeller.jpg"
                alt="imagen proyecto 3DSeller"
                width={500}
              ></img>
              <h4>Gestor de servicios - 3D Seller</h4>
            </a>
          </div>
          <div className="itembox">
            <a
              href="https://www.linkedin.com/in/pablo-reyes-69b32b248/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="d3"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEUKZsL///8AZME7eMgAWb7i6fUAXL/Az+oAYsFjj9B1m9QAYMBGgswAVr0AXb8AWr5ZjdBWh80ZbMTO3PCzx+drl9T2+f2Ssd7G1u0dbsXF1e3w9fs2dsfl7ffV4fIocsaApNmowOSMrNyrw+Wbt+AAUryFqNr2AL+0AAADz0lEQVR4nO3ca1+qMACAcZiA5ATMW+a98vT9P+LROkXiNruMLXae/2v1xyOy6QCjCAAAAAAAAAAAAAAAAAAAALBGnPjeiPbkZSJ36/W4qmSQlbIYTTfxyXx72CXBNYpkv4o/mAwDayx7m7hhWoWUWM2afUebcTiJ5UAReDweo1AS5VAZeNyLgXxQhZxrCo/Hou+NsyJ70AXGcS+EnSgifWC8SHxvngXyzlAYhzCeJqmp8FH63r4fE8IUGC+6P9YI3VTxatP9AzFXz/bvCt8b+GNyT2HX5aov3UEVip4xMO3+SBNlxsJp6Xv7fq5amApn3Z/xzQfivAzgW1tUrPSFDwF8SM1zfiDLisUk5KPwREjN5/QpgKnilbhXrmP0uz/bvxPR9jLwEFDgacm7+Ut/c5v53ijLSvHw4WhMB0Xue4usE2U1vOtv03Qy3e+S8PpeCJlVSZKVgcyCAIDfT+SyrI6Ok0+As4+QVbGbHabLxWTRf7qb7YrMa6XIdZpbpX3k2QPzSuyXjV8rk8dd4i1SjG90bs+3SQx1D7yvH5gnt0vlr830ufK06mNYMW2cl8nUm370/laIYmQ4W3covSwaGAob68FZ/1phudOuiLyYDwoPu9FeoSiejX0nE+H+Z4u1QiHNO/DVfOh8hdJWYT42LLx+NHN9XtlSoVxrL8tpGjheILFTqFmvU7txO6RaKZT5Jz+ir9xeiWSl8M9nBpnayunVqzYKh9eniXNTl8vpVvbhFwOP74nDadFG4RdGmbeXdriibqPwG2budqKnQofXQHgqjIfOhlNfhX1nX958FcaZq53ordDZOXRvhVNXX8DtF87TNP3EDLlyNZpaLlwOxkWSJIWYXX20q4vIrRY+jat/S4tCVmPjBWXuDkSLhave2V02ojDeBxAfHK1n2CvcZs1vYhcXQJxZOhpqrBWqvofpr7fSPOE3F84vTgKcXvze9AxHvy9sFY6U40Zleo6jMxmWChfqHWK8n8PRdGGpULe4lBiWqHZdKtzqRg3TkxwtudkpfNbN3tKwSNWpQu0hJQyrVF0q3GgHftPNcV0qXOp/sBdhFBou6jcMpl0qNNxrmlz8XUMnC/fBFw7067uGG40ptITCGoVqFLaPwhqFahS2j8IahWoUto/CGoVqFLaPwhqFahS2j8IahWoUto/CGoVqFLaPwhqFahS2j8IahWoUto/CGoVqFLaPwlqAhc1/4NHfx2Qq9H7lXhT1dNaNf1HqDc/djt4YrroXa+3rtx1Wb4PWlQfq/zPrWy8PAAAAAAAAAAAAAAAAAAAA4D/0F5lQSZ+5G/qbAAAAAElFTkSuQmCC"
                alt="imagen Linkedin"
                width={500}
              ></img>
              <h4>Mi Linkedin</h4>
            </a>
          </div>
          <div className="itembox">
            <a
              href="https://github.com/HPabloReyes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="d3"
                src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
                alt="Imagen GitHub"
                width={500}
              ></img>
              <h4>Mi GitHub</h4>
            </a>
          </div>
          <div className="itembox">
            <a
              href="https://rhino-gym-x2ar.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="d3"
                src="https://static.vecteezy.com/system/resources/thumbnails/000/539/318/small/hand_with_a_dumbbell.jpg"
                alt="Imagen GYM"
                width={500}
              ></img>
              <h4>Rhino GYM</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
