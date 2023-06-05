import './ImageWithScrollAnimation.css';
import React, { useEffect, useState } from 'react';

const ImageWithScrollAnimation = ({ src, alt, texto }) => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const element = document.getElementById('image');
        if (element) {
          const position = element.getBoundingClientRect(); //Calculamos la posición del elemento en relación con la ventana 
          const windowHeight = window.innerHeight;
  
          if (position.top <= windowHeight * 0.9) {
            setIsVisible(true);
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className='imgContainer'>
        <img
          id="image"
          className={`image ${isVisible ? 'visible' : ''}`}
          src={src}
          alt={alt}
        />     
        <div className='textoImg'>{texto}</div>   
      </div>

    );
  };

export default ImageWithScrollAnimation;
