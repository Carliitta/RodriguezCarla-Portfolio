import yo from "../img/yo.jpg"
import css from "../img/css-3.png"
import html from "../img/html.png"
import js from "../img/js.png"
import react from "../img/react.png"
import postgre from "../img/postgre.png"
import node from "../img/node-js.png"
import c from "../img/c.png"
import sql from "../img/sql.png"

import "../components/Sobre.css"
export default function Sobre() {
    return(
        <div className="divPrincipal">
          <h3 className="h3">Sobre mi:</h3>
        <div className="containerPerfil">
          
            <img className="foto" src={yo} alt="foto" />
            <p className="parrafo">
                Hola 👋​ me llamo Carla Yamila Rodriguez,tengo 25 años y soy de Argentina,Misiones.
                Comencé a estudiar programación a los 20 años de manera autodidacta y actualmente me encuentro en la etapa final en el
                <b> bootcamp de soy Henry,</b>donde desarrollé mis primeros proyectos 
                en el área del desarrollo web fullStack ❤️​<br/>
            </p>
        </div>
            <p className="iconp">Tecnologias:</p>
        <div className="containerIcon">
              <div className="div-icon-parrafo">
                <img  className="iconos"alt="" src={css} title="css" />
                <p>intermedio</p>
             </div>
             <div className="div-icon-parrafo">
                <img className="iconos" alt="" src={html} title="html" />
                <p>intermedio</p>
             </div>
            <div className="div-icon-parrafo">
                <img className="iconos" alt="" src={js} title="JavaScript" />
                <p>intermedio</p>
            </div>
            <div className="div-icon-parrafo">
                <img className="iconos" alt="" src={react} title="React" />
                <p>intermedio</p>
            </div>
            <div className="div-icon-parrafo">
                <img className="iconos" alt="" src={sql} title="SQL Server" />
                <p>Intermedio</p>
            </div>
            <div className="div-icon-parrafo">
                <img className="iconos" alt="" src={node} title="node.js" />
                <p>Básico</p>
            </div>
            <div className="div-icon-parrafo">
                <img className="iconos" alt="" src={postgre} title="postgreSQL" />
                <p>Básico</p>
            </div>
          
            <div className="div-icon-parrafo">
                <img className="iconos" alt="" src={c} title="C#" />
                <p>Básico</p>
             
            </div>
       
           
        </div>

        </div>
    )
};
