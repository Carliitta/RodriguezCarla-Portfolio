import "../components/proyectos.css"
import clima from "../img/capturaClima.PNG"
import pokemon from "../img/capuraPoke.PNG"
import countries from "../img/capturaContries.PNG"
import video from "../img/video.png"
import git from "../img/github.png"
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
                                <a href="https://github.com/Carliitta/app-clima-react" target="_blank">
                                 <img style={{ width: "35px" ,height:"25px" ,marginRight:"10px",marginTop:"5px"}} src={git} title="codigo" />
                               </a>
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
                                <a href="https://github.com/Carliitta/PokeApi" target="_blank">
                                 <img style={{ width: "35px" ,height:"25px" ,marginRight:"10px",marginTop:"5px"}} src={git} title="codigo" />
                               </a>
                           </div>
                        </figure>
                    </a>
                </div>
                  <div className="contenedor">
                        <figure>
                          <img src={countries} alt="portada"/>
                            <div className="capa">
                                <h3>app Countries</h3>
                                <p >
                                    App de paises utilizando las tecnologias de html-css-react-redux-javascript-node.js en la parte del frontend,
                                    y en la parte del backend express y postgresSql
                                </p>
                               <a href="https://github.com/Carliitta/PI-countries2022" target="_blank">
                                 <img style={{ width: "35px" ,height:"25px" ,marginRight:"10px" ,marginTop:"5px"}} src={git} title="codigo" />
                               </a>
                                <a href="https://drive.google.com/file/d/1fUHSxzFD2bvwNBWzxvlhFn-8CmFwkRfb/view?usp=share_link" target="_blank">
                                <img style={{ width: "35px" ,height:"25px",marginTop:"5px" }} src={video} title="video" />

                                </a>
                           </div>
                        </figure>
                </div>
           </div>
       
        </div>
    )
};
