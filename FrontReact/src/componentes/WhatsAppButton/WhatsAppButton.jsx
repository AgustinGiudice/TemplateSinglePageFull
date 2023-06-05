import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = ({numeroTelefono}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleButtonClick = () => {
    window.location.href = `https://api.whatsapp.com/send?phone=${numeroTelefono}`;
  };

  return (
    <div
      className={`whatsapp-button ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleButtonClick}
    >
      <FaWhatsapp className="whatsapp-icon" />
      <div className={`tooltip ${isHovered ? 'show' : ''}`}>
        Envianos un WhatsApp
      </div>
    </div>
  );
};

export default WhatsAppButton;
