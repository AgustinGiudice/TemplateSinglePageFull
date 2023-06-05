import './Enlace.css';

const Enlace = ({children, href}) => {
  return (
        <a className='link' href={href}>{children}</a>
  );
};

export default Enlace;
