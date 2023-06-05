import './FichaProducto.css';
import ImageWithScrollAnimation from '../ImageWithScrollAnimation/ImageWithScrollAnimation';
import imagen1 from '../../assets/img/img1.png'


const FichaProducto = ({nomProducto, texto1, texto2, imagen,textoImg, alt}) => {
  
    return (
        <section className='FichaProducto'>
            <div className='imgFicha'>
                <ImageWithScrollAnimation texto={textoImg} src={imagen} alt={alt} />
            </div>
            <div>
                <h3>{nomProducto}</h3>
                <p>{texto1}</p>
                <p>{texto2}</p>
            </div>
        </section>
    );
  };

export default FichaProducto;
