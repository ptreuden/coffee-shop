import './Footer.css';
import Email from '../Email/Email';
import facebookIcon from '../../assets/facebookIcon.svg';
import instagramIcon from '../../assets/instagramIcon.svg';

const Footer = () => {

  return(
    <div className='footer-container'>
      <Email />
      <div className='footer-buffer'></div>
      <div className='footer-menu'>
        <div className='footer-nav-links'>
          <p>DRINKS</p>
          <p>BAKERY</p>
          <p>EVENTS</p>
          <p>ABOUT</p>
        </div>
        <div className='footer-social-links'>
          <img src={facebookIcon} alt='facebook icon' />
          <img src={instagramIcon} alt='instagram icon' />
        </div>
      </div>
        <div className='image-credits-link'>
          <p>Images provided by Unsplash.com, Iconfinder.com, Flaticon.com, Freevectormaps.com, and Pngegg.com</p>
        </div>
    </div>
  );
}

export default Footer;
