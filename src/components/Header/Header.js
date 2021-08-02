import './Header.css';
import coffeeCup from '../../assets/casabaLogo.png';
import menuIcon from '../../assets/menu-icon.svg';

const Header = ({ setOverlay }) => {

  return(
    <div className='header-container'>
      <div className='header-menu'>
        <div className='header-logo'>
          <img src={coffeeCup} alt='coffee'/>
        </div>
        <div className='header-list'>
          <div className='nav-item dropdown'>
            <p id='menu'>MENU</p>
            <div className='dropdown-content'>
              <p className='dropdown-text' id='submenu1'>DRINKS</p>
              <p className='dropdown-text' id='submenu2'>BAKERY</p>
            </div>
          </div>
          <div className='nav-item'>
            <p id='events'>EVENTS</p>
          </div>
          <div className='nav-item'>
            <p id='about'>ABOUT</p>
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
