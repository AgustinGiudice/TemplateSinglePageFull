import { useState } from 'react'
import './App.css'
import Formulario from './componentes/Formulario/Formulario'
import Nosotros from './componentes/Nosotros/Nosotros'
import Header from './componentes/Header/Header'
import Enlace from './componentes/Enlace/Enlace'
import ImageWithScrollAnimation from './componentes/ImageWithScrollAnimation/ImageWithScrollAnimation'
import Ubicacion from './componentes/Ubicacion/Ubicacion'
import WhatsAppButton from './componentes/WhatsAppButton/WhatsAppButton'
import Footer from './componentes/Footer/Footer'
import Footer2 from './componentes/Footer2/Footer2'
import { GrTwitter, GrFacebookOption,GrInstagram } from "react-icons/gr";
import imagen1 from './assets/img/img1.png'
import ScrollToTopButton from './componentes/scrollToTop/scrollToTop'
import Productos from './componentes/Productos/Productos'
import FichaProducto from './componentes/FichaProducto/FichaProducto'

function App() {

  return (
    <>
    <Header red1={<Enlace href="#"><GrTwitter/></Enlace>}
            red2={<Enlace href="#"><GrFacebookOption/></Enlace>}
            red3={<Enlace href="#"><GrInstagram/></Enlace>}
    
    >
      <Enlace href="#nosotros">Nosotros</Enlace>
      <Enlace href="#productos">Productos</Enlace>
      <Enlace href="#ubicacion">Ubicacion</Enlace>
      <Enlace href="#contacto">Contacto</Enlace>
    </Header>
    <Nosotros>
      <ImageWithScrollAnimation texto="texto de prueba" src={imagen1} alt="imagen uno"/>
      <ImageWithScrollAnimation texto="texto de prueba" src={imagen1} alt="imagen uno"/>
      <ImageWithScrollAnimation texto="texto de prueba" src={imagen1} alt="imagen uno"/>
    </Nosotros>
    <Productos titulo="Nestros Productos">
      <FichaProducto 
      imagen={imagen1}
      textoImg="texto superpuesto"
      alt="imagen 1"
        nomProducto="Producto"
        texto1="Doloremque expedita possimus"
        texto2="Lorem ipsum dolor sit amet consectetur adipisicing elit. doloremque expedita possimus dicta fugit animi, molestias optio minima repellat modi ipsa omnise"
      /> 
      <FichaProducto 
      imagen={imagen1}
      textoImg="texto superpuesto"
      alt="imagen 1"
        nomProducto="Producto"
        texto1="Nisi doloribus, doloremque expedita possimus"
        texto2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi doloribus, doloremque expedita possimus dicta fugit animi, molestias optio minima repellat modi ipsa omnise"
      /> 
      <FichaProducto 
      imagen={imagen1}
      textoImg="texto superpuesto"
      alt="imagen 1"
        nomProducto="Producto"
        texto1="Doloremque expedita possimus"
        texto2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi doloribus, doloremque expedita possimus dicta fugit animi, molestias optio minima repellat modi ipsa omnise"
      /> 
      <FichaProducto 
      imagen={imagen1}
      textoImg="texto superpuesto"
      alt="imagen 1"
        nomProducto="Producto"
        texto1="Doloremque expedita possimus"
        texto2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi doloribus, doloremque expedita possimus dicta fugit animi, molestias optio minima repellat modi ipsa omnise"
      /> 
      <FichaProducto 
      imagen={imagen1}
      textoImg="texto superpuesto"
      alt="imagen 1"
        nomProducto="Producto"
        texto1="Doloremque expedita possimus"
        texto2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi doloribus, doloremque expedita possimus dicta fugit animi, molestias optio minima repellat modi ipsa omnise"
      /> 
            <FichaProducto 
      imagen={imagen1}
      textoImg="texto superpuesto"
      alt="imagen 1"
        nomProducto="Producto"
        texto1="Doloremque expedita possimus"
        texto2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi doloribus, doloremque expedita possimus dicta fugit animi, molestias optio minima repellat modi ipsa omnise"
      /> 
            <FichaProducto 
      imagen={imagen1}
      textoImg="texto superpuesto"
      alt="imagen 1"
        nomProducto="Producto"
        texto1="Doloremque expedita possimus"
        texto2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi doloribus, doloremque expedita possimus dicta fugit animi, molestias optio minima repellat modi ipsa omnise"
      />       <FichaProducto 
      imagen={imagen1}
      textoImg="texto superpuesto"
      alt="imagen 1"
        nomProducto="Producto"
        texto1="Doloremque expedita possimus"
        texto2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi doloribus, doloremque expedita possimus dicta fugit animi, molestias optio minima repellat modi ipsa omnise"
      /> 
    </Productos>
    <Ubicacion 
      titulo1="Donde Encontrarnos"
      parrafo1="Av. Luis María Campos 901, C1426 CABA"  
      mapa="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14750.70924470387!2d-58.44892926517797!3d-34.57008511150177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5b8e8b96507%3A0x9da41a3a9ce76b3a!2sEl%20Solar!5e0!3m2!1ses!2sar!4v1685156296906!5m2!1ses!2sar"
      titulo2="Horarios"
      parrafo2="Lunes a Viernes - 9:00 a 22:30"
      parrafo3="Sábados y Domingos - 19:00 a 00:00"
    />
    <Formulario 
      titulo="Contactanos"
      parrafo1="¿Cómo podemos ayudarte?"
      parrafo2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi doloribus, doloremque expedita possimus dicta fugit animi, molestias optio minima repellat modi ipsa omnis, totam itaque perspiciatis sit atque quod cupiditate."
    />
    <WhatsAppButton numeroTelefono="123456789"></WhatsAppButton>
    <ScrollToTopButton></ScrollToTopButton>

    <Footer red1={<Enlace href="#"><GrTwitter/></Enlace>}
            red2={<Enlace href="#"><GrFacebookOption/></Enlace>}
            red3={<Enlace href="#"><GrInstagram/></Enlace>}
    
    >
      <Enlace href="#">Home</Enlace>
      <Enlace href="#">Nosotros</Enlace>
      <Enlace href="#">Productos</Enlace>
      <Enlace href="#">Ubicacion</Enlace>
      <Enlace href="#">Contacto</Enlace>
    </Footer> 

    {/* <Footer2
    red1={<Enlace href="#"><GrFacebookOption/></Enlace>}
    red2={<Enlace href="#"><GrTwitter/></Enlace>}
    red3={<Enlace href="#"><GrInstagram/></Enlace>}
    terms={<Enlace href="#">Terminos y Condiciones</Enlace>}
    copy="Copyright © 1999-2023 NombreEmpresa"
    /> */}
    </>
  )
}

export default App
