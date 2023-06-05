import './Footer.css';

const Footer = ({children, red1, red2, red3}) => {


  return (
    <footer>

        <div>
            <nav className='enlacesFooter'>
                {children}
            </nav>
        </div>
        <div>
            <p className='logoFooter'>Tu<span>Logo</span></p>
        </div>
        <div className='redesFooter'>
            {red1}
            {red2}
            {red3}
        </div>
    </footer>
  );
};

export default Footer;
