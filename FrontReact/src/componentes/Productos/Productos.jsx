import './Productos.css';

const Productos = ({children, titulo}) => {
  
    return (
        <section className='ProductosContainer' id='productos'>
            <h2>{titulo}</h2>
                <div className='fichasContainer'>
                       {children}         
                </div>

        </section>
    );
  };

export default Productos;
