import  './contacto.css';
import git from "../img/github.png"
import linkedin from "../img/linkedin.png"
import { useState } from 'react';
const {
CORREO
} = process.env;
export default function Contacto() {

  const [datos, setDatos] = useState({
    correo: '',
    mensaje: ''
})

 const  handleChangue =(e)=>{
  setDatos({
    ...datos,
    [e.target.name] : e.target.value
})
 }
 const onSubmit=(e)=>{
  e.preventDefault();
  setDatos({
    correo: "",
    mensaje: ""
  })
  alert("Mensaje Enviado con exito!")
 }

    return(
      <div>
      
      <div className='containerContact' >
       
          <form  onSubmit={onSubmit}className='form'>
          <h3 className='pregunta'>Trabajemos juntos 😃​​</h3>
            <div className='inputs'>
            <input className='text-input' id='email' name='correo' value={datos.correo}  required type='email' placeholder='Correo..' onChange={handleChangue}/><br></br>
            <input className='text-input' id='text' name='mensaje' value={datos.mensaje}  required type='text' placeholder='Mensaje..' onChange={handleChangue}/>
            </div>
            <div>
            <input className='btn' type='submit' value='Enviar'/>
            </div>
         <div className='otrosIconos'>
          <a href="https://github.com/Carliitta" target="_blank"> <img className='icon2' src={git} title="github" /></a>
          <a  href="https://www.linkedin.com/in/carla-yamila-rodriguez/" target="_blank"> <img className='icon2'  src={linkedin} title="linkedin" /></a>
         </div>
         </form>
       
     </div>
      </div>
    )
};
