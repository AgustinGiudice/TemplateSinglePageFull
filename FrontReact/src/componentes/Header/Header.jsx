import './Header.css';
import Enlace from '../Enlace/Enlace';
import React, { useState, useEffect } from 'react';
import { BsListUl, BsXLg } from "react-icons/bs";

const Header = ({children, red1, red2, red3}) => {

// MANEJAR EL CAMBIO A HABURGUESA
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

   const handleResize = () => {
     setWindowWidth(window.innerWidth);
   };

   useEffect(() => {
     window.addEventListener('resize', handleResize);
     return () => {
       window.removeEventListener('resize', handleResize);
     };
   }, []);

   const isMobile = windowWidth < 1000;


   // MANEJA LA APERTURA DEL MANU HAMBURGUESA y CAMBIO DE ICONOS

   const [icono, setIcono] = useState(<BsListUl color='white' size={50} />);

   const [isOpen, setIsOpen] = useState(false);


   const toggleMenu = () => {
     setIsOpen(!isOpen);
     if (icono.type === BsListUl) {
      setIcono(<BsXLg  color='white' size={50}/>);
    } else {
      setIcono(<BsListUl color='white' size={50}/>);
    }
   };

  
  return (
    <header className="header">
       <nav>
        {!isMobile ?        
        <div className="nav">
          {children}          
        </div> 
        :<div>
          <div className='hamurguesa'   onClick={toggleMenu}>{icono}
          {isOpen ?<div className="mobile ">
                                  {children}          
                                </div> : ""}                
          </div> 
 
        </div>}

        <div className='redes'>
          {red1}
          {red2}
          {red3}
        </div>
      </nav>
      <p className='logo'>Tu<span>Logo</span></p>
    </header>
  );
};


export default Header;

