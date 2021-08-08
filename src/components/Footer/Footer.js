import './Footer.css';
import Email from '../Email/Email';
import facebookIcon from '../../assets/facebookIcon.svg';
import instagramIcon from '../../assets/instagramIcon.svg';
import { Link } from 'react-router-dom';

const Footer = ({ setMenusEventsName }) => {

  const scrollToAbout = () => {
    var aboutSection = document.getElementById('about-section');
    aboutSection.scrollIntoView();
  }

  return(
    <div className='footer-container'>
      <Email />
      <div className='footer-buffer'></div>
      <div className='footer-menu'>
        <div className='footer-nav-links'>
          <Link to={'/drinks'} style={{textDecoration: 'none'}} onClick={(e)=> setMenusEventsName('drinks')}><p>DRINKS</p></Link>
          <Link to={'/food'} style={{textDecoration: 'none'}} onClick={(e)=> setMenusEventsName('food')}><p>BAKERY</p></Link>
          <Link to={'/events'} style={{textDecoration: 'none'}} onClick={(e)=> setMenusEventsName('events')}><p>EVENTS</p></Link>
          <p onClick={(e)=> scrollToAbout()}>ABOUT</p>
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
