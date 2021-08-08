import './Navbar.css';
import coffeeCup from '../../assets/casabaLogo.png';
import menuIcon from '../../assets/menu-icon.svg';
import { Link } from 'react-router-dom';

const Header = ({ setOverlay, setMenusEventsName }) => {

  const scrollToAbout = () => {
    var aboutSection = document.getElementById('about-section');
    aboutSection.scrollIntoView();
  }

  return(
    <div className='navbar-container'>
      <div className='navbar-menu'>
        <div className='navbar-logo'>
          <Link to='/' style={{textDecoration: 'none'}}><img src={coffeeCup} alt='coffee'/></Link>
        </div>
        <div className='navbar-list'>
          <div className='nav-item dropdown'>
            <p id='menu'>MENU</p>
            <div className='dropdown-content'>
              <Link to={'/drinks'} style={{textDecoration: 'none'}} onClick={(e)=> setMenusEventsName('drinks')}><p className='dropdown-text' id='submenu1'>DRINKS</p></Link>
              <Link to={'/food'} style={{textDecoration: 'none'}} onClick={(e)=> setMenusEventsName('food')}><p className='dropdown-text' id='submenu2'>BAKERY</p></Link>
            </div>
          </div>
          <div className='nav-item'>
            <Link to={'/events'} style={{textDecoration: 'none'}} onClick={(e)=> setMenusEventsName('events')}><p id='events'>EVENTS</p></Link>
          </div>
          <div className='nav-item'>
            <p id='about' onClick={(e)=> scrollToAbout()}>ABOUT</p>
          </div>
        </div>
        <div className='menu-icon' onClick={(e)=> setOverlay(true)}>
          <img src={menuIcon} alt='menu' />
        </div>
      </div>
    </div>
  );
}

export default Header;
