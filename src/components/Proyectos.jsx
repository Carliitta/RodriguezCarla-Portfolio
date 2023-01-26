import "../components/proyectos.css"
import clima from "../img/capturaClima.PNG"
import movie from "../img/capuramovies.PNG"
import foods from "../img/capFood.PNG"
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
                                 <img  className="iconitoGit" src={git} title="codigo" />
                               </a>
                            </div>
                        </figure>
                    </a>
                </div>
                <div className="contenedor">
                    <a href="https://pelisdb.netlify.app/" target="_blank">
                        <figure>
                          <img  src={movie} alt="portada"/>
                            <div className="capa">
                                <h3>App pelisDb</h3>
                                <p >
                                    Esta es una app hecha con react.js, utilizando varios hooks 
                                    (useEffect,UseState,UseParams)y rutas con react-router-dom
                                </p>
                                <a href="https://github.com/Carliitta/moviesDB" target="_blank">
                                 <img className="iconitoGit"  src={git} title="codigo" />
                               </a>
                           </div>
                        </figure>
                    </a>
                </div>
                  <div className="contenedor">
                        <a href="https://foodsfullstack.netlify.app/" target="_blank">
                        <figure>
                          <img src={foods} alt="portada"/>
                            <div className="capa">
                                <h3>app Foods</h3>
                                <p >
                                Obtienes una lista de recetas y la posibilidad de creearlas.<br></br>frontEnd(javascript-css-react-redux) y backEnd(node,express,postgres)
                                     
                                </p>
                               <a href="https://github.com/Carliitta/PI-food" target="_blank">
                                 <img className="iconitoGit" src={git} title="codigo" />
                               </a>
                           </div>
                        </figure>
                    </a>
                </div>
           </div>
       
        </div>
    )
};
