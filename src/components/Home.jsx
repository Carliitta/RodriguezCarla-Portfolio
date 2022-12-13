import React from 'react';
import home from './home.css'
import imagen from "../img/fondo.jpg"
import Sobre from './Sobre';
import Nav from './Nav.jsx';
import Contacto from './Contacto';
import Proyectos from './Proyectos';
import download from "../img/download.png"
import doc from "./doc/Curriculm-vitae-2022.pdf"
export default function Home() {
    return(
        <div>
            <Nav/>
         <section id='inicio'>
                <div className="container">
                    <div className='text'>
                        <h1 className='title'> Hola, </h1>
                        <span className='span'>Soy desarrolladora web;</span>
                      <a href='#contacto'>
                      <button className='btnContacto'>Contacto</button>
                      </a> 
                     
                    </div>
                    <div className='divImg'>
                    <img className='img' src={imagen} alt='imagen'/>

                    </div>
               </div>
               <a href='#sobre' className="arrow-container">
                <div className="arrow"></div>
              
               </a>
        </section>
       
        <section id='sobre'>
            <Sobre/>
        </section>
        <section id='portafolio'>
            <Proyectos/>
        </section>
        <section id='contacto'>
            <Contacto/>
        </section>
        <footer>
            <p className='pie'>Hecho con el💚​por Rodriguez Carla </p>
        </footer>
        </div>
    )
};
