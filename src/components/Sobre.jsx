import yo from "../img/yo.jpg"
import css from "../img/css-3.png"
import html from "../img/html.png"
import js from "../img/js.png"
import react from "../img/react.png"
import postgre from "../img/postgre.png"
import node from "../img/node-js.png"

import "../components/Sobre.css"
export default function Sobre() {
    return(
        <div className="divPrincipal">
          <h3 className="h3">Sobre mi:</h3>
        <div className="containerPerfil">
          
            <img className="foto" src={yo} alt="foto" />
            <p className="parrafo">
                Hola 👋​ me llamo Carla Yamila Rodriguez,soy de Argentina,Misiones y tengo 25 años,
                comencé a estudiar programación a los 20 años en la facultad,donde aprendí a utilizar
                SQL Server y el lenguaje de programación C#.<br></br>
                En el año 2022 ingresé al <b>bootcamp de soy Henry,</b>donde desarrollé mis primeros proyectos 
                en el área del desarrollo web fullStack ❤️​<br/>
               
            </p>
        </div>
        <div className="containerIcon">
            <p className="iconp">Tecnologias👉</p>
            <img  className="iconos"alt="" src={css} title="css" />
            <img className="iconos" alt="" src={html} title="html" />
            <img className="iconos" alt="" src={js} title="JavaScript" />
            <img className="iconos" alt="" src={react} title="React" />
            <img className="iconos" alt="" src={node} title="node.js" />
            <img className="iconos" alt="" src={postgre} title="postgreSQL" />
          
        </div>

        </div>
    )
};
