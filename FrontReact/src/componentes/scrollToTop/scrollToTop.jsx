import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './scrollToTop.css';

const scrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const yOffset = window.pageYOffset;
    if (yOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <button
          className="scroll-to-top-button"
          onClick={scrollToTop}
          title="Scroll to Top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default scrollToTop;
