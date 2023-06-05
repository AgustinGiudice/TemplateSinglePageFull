import './Footer2.css';

const Footer2 = ({red1, red2, red3, terms, copy}) => {


  return (
    <footer className='footer2'>
        <div>
            <p className='logoFooter2'>Tu<span>Logo</span></p>
        </div>
        <div className='redesFooter2'>
          {red1}
          {red2}
          {red3}
        </div>
        <div className='termsAndCopy'>
            {terms}
            <p className='copy'>{copy}</p>
        </div>
    </footer>
  );
};

export default Footer2;
