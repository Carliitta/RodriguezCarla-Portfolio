import "../components/Nav.css"
import menu from "../img/menu.png"
import download from "../img/download.png"
import Home from "./Home";
import doc from "./doc/sql.txt"
export default function Nav() {

    return(
        <nav className="nav">
        <div className="containerNav">
         
        <label htmlFor="menu" className="nav_label">
            <img src={menu} alt="menu" className="nav_img" />
        </label>
        <input type="checkbox" id="menu" className="nav_input"/>
        <div className="nav_menu">
            <a href="#inicio" className="nav_item">Inicio
            </a><a href="#sobre" className="nav_item">Sobre mi
            </a><a href="#portafolio" className="nav_item">Portafolio
            </a><a href={doc} download="Curriculum-Vitae-Rodriguez-Carla" className="nav_item">Descargar CV</a>
        </div>
        </div>

        </nav>
    )
};
