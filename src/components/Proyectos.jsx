import "../components/proyectos.css"
import clima from "../img/capturaClima.PNG"
import pokemon from "../img/capuraPoke.PNG"
export default function Proyectos() {
    return(
        <div className="divProyectos">
           <h1 className="titleProyects">Algunos de mis Proyectos:</h1>
           <div className="proyectos">
                <div className="contenedor">
                    <a href="https://climaweb.netlify.app/" target="_blank" >
                        <figure>
                            <img   src={clima} alt="portada" />
                            <div className="capa">
                                <h3>App del Clima</h3>
                                <p >
                                Una app simple del clima con un buscador,que nos permite traer ciudades 
                                haciendo peticiones a una api externa.
                                Tecnologias utilizadas: React,Javascript,css,node</p>
                            </div>
                        </figure>
                    </a>
                </div>
                <div className="contenedor">
                    <a href="https://get-pokemones.netlify.app/" target="_blank">
                        <figure>
                          <img  src={pokemon} alt="portada"/>
                            <div className="capa">
                                <h3>App PokeApi</h3>
                                <p >
                                    Esta es una app hecha con react.js y redux utilizando varios hooks 
                                    (useEffect,UseState,UseParams)y las rutas con react-router-dom
                                </p>
                           </div>
                        </figure>
                    </a>
                </div>
           </div>
       
        </div>
    )
};
