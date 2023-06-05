import React, { useEffect, useState } from 'react';
import './Nosotros.css';

const Nosotros = ({children}) => {

  const handleClick = () => {
    const section = document.getElementById('productos');
    section.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <main className='nosotrosContainer' id='nosotros'>
      <h1>Nosotros</h1>
      <p>met consectetur adipisicing elit. Distinctio rem sunt ab laboriosam, conseq  Distinctio rem sunt ab laboriosam.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio rem repellendus excepturi, culpa nulla ab nihil aspernatur velit in quae explicabo dolor quidem illum totam doloribus. Inventore sint quo at. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima quas est voluptate vitae? Fuga ipsam facere quo praesentium eos explicabo et dolorum sunt ab laboriosam, consequuntur similique natus voluptatum maxime.</p>
      <div className='imagenes'>
        {children}
      </div>
        <button onClick={handleClick}>Ver Más</button>
    </main>
  );
};

export default Nosotros;
