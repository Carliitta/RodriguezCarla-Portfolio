import  './contacto.css';
import git from "../img/github.png"
import linkedin from "../img/linkedin.png"
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import email from "../img/email.png"
const {
CORREO
} = process.env;
export default function Contacto() {

  const [datos, setDatos] = useState({
    correo: '',
    mensaje: '',
    nombre:''
})

 const  handleChangue =(e)=>{
  setDatos({
    ...datos,
    [e.target.name] : e.target.value
})
 }
 const onSubmit=(e)=>{
  e.preventDefault();

  emailjs.sendForm('service_tlj70rh','template_sl0sssj',e.target,"5tQa0-InFt1IQcAkc")
  .then((result) => {
    console.log(result.text)
  }, (error) => {
      console.log(error.text);
  });
  
  setDatos({
    correo: "",
    mensaje: "",
    nombre:""
  })
  alert("Mensaje Enviado con exito!")
 }

    return(
   
      
      <div className='containerContact' >
       
          <form  onSubmit={onSubmit}className='form'>
            <img className='imgMje' src={email} />
          <h3 className='pregunta'>Enviame un mensaje ​​</h3>
            <div className='inputs'>
            <input className='text-input' id='text' name='nombre' value={datos.nombre}  required type='text' placeholder='Nombre..' onChange={handleChangue}/>
            <input className='text-input' id='email' name='correo' value={datos.correo}  required type='email' placeholder='Correo..' onChange={handleChangue}/><br></br>
            <textarea name='mensaje' id="text" cols="30" rows="10" value={datos.mensaje} required type='text' placeholder='Mensaje..' onChange={handleChangue}></textarea>

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
      
    )
};


