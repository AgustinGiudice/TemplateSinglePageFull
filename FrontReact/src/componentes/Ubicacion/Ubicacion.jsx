import './Ubicacion.css';

const Ubicacion = ({titulo1, parrafo1, mapa, titulo2,parrafo2,parrafo3}) => {
  return (
    <section className='ubicacionContainer' id='ubicacion'>
      <div className='ubicacionInfo'>
        <h2 className='titulo1'>{titulo1}</h2>
        <p className='direccion'>{parrafo1}</p>             
      </div>

      <div className='ubicacionMapa'>
        <iframe src={mapa} width="1000" height="400" className='mapa' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className='ubicacionInfo'>
        <h2 className='titulo2'>{titulo2}</h2>
        <p>{parrafo2}</p>  
        <p>{parrafo3}</p>  
      </div>
    </section>
  );
};

export default Ubicacion;
