import React, { useState } from 'react';
import axios from 'axios';
import './Formulario.css'
import ClipLoader from "react-spinners/ClipLoader";
import swal from 'sweetalert';


const Formulario = ({titulo, parrafo1, parrafo2}) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [sending, setSending] = useState(false);


  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSending(true);
      await axios.post('http://localhost:3001/enviar-correo', {
        nombre,
        correo,
        asunto,
        mensaje,
      });
      swal({
        title: "Mail Enviado Correctamente",
        text: "Gracias por Contactarnos!",
        icon: "success"
      });
      setSending(false);

      // Restablecer los campos del formulario después de enviar
      setNombre('');
      setCorreo('');
      setAsunto('');
      setMensaje('');

    } catch (error) {
      console.error('Error al enviar el correo:', error);
      swal({
        title: "Ocurrio Un Problema",
        text: "Vuelve a intentarlo mas tarde!",
        icon: "error"
      });
      setSending(false);
    }
  };

  return (
    <div className='FormContainer' id='contacto'>
      <div className='textoForm'>
        <h3>{titulo}</h3>      
        <p>{parrafo1}</p>  
        <p>{parrafo2}</p>
      </div>

      <div className='FormForm'>
        <form onSubmit={handleSubmit}>
          <div className='nombreCorreo'>
            <div >
              <label htmlFor="nombre"></label>
              <input
              required
                type="text"
                id="nombre"
                placeholder='Nombre'
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="correo"></label>
              <input
              required
                type="email"
                id="correo"
                placeholder='Tu Correo'
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>          
          </div>
          
          <div>
            <label htmlFor="asunto"></label>
            <input
            required
              type="text"
              id="asunto"
              placeholder='Asunto del Correo'
              value={asunto}
              onChange={(e) => setAsunto(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="mensaje"></label>
            <textarea
            required
              id="mensaje"
              placeholder='Dejanos tu mensaje'
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">{sending ?  <ClipLoader
        color={"#c78a30"}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />: 'Enviar'}</button>
        </form>          
      </div>
 



    </div>
    
  );
};

export default Formulario;
