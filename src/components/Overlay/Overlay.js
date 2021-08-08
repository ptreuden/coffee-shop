import './Overlay.css';
import { useState } from 'react';
import{ Link } from 'react-router-dom';
import exitIcon from '../../assets/exitIcon.svg';
import backIcon from '../../assets/backIcon.svg';
import forwardIcon from '../../assets/forwardIcon.svg';

const Overlay = ({ setOverlay, overlay, overlayScroll, hideOverlayShowMenu }) => {

  const [ subMenu, setSubMenu ] = useState(false);

  return(
    <div className={`overlay-container ${overlay ? 'overlay-appear' : 'overlay-disappear'} ${subMenu ? 'overlay-sub' : 'overlay-main'}`}>
    {
      subMenu ?
      <div className='icon-container sub-menu'>
        <img src={backIcon} alt='exit' className='back' onClick={() => setSubMenu(false)}/>
        <img src={exitIcon} alt='exit' className='exit' onClick={() => setOverlay(false)}/>
      </div>
      :
      <div className='icon-container main-menu'>
        <img src={exitIcon} alt='exit' className='exit' onClick={() => setOverlay(false)}/>
      </div>
    }
      <div className='overlay-menus'>
        <div className='overlay-main-menu'>
          <div className='menu-item text-menu'>
            <p onClick={() => setSubMenu(true)}>MENU</p>
            <img src={forwardIcon} alt='forward' onClick={() => setSubMenu(true)}/>
          </div>
          <div className='menu-item'>
            <Link to={'/menusEvents'} style={{textDecoration: 'none'}} onClick={(e)=> hideOverlayShowMenu('events')}><p>EVENTS</p></Link>
          </div>
          <div className='menu-item'>
            <Link to={'/'} style={{textDecoration: 'none'}} onClick={(e) => overlayScroll()}><p>ABOUT</p></Link>
          </div>
        </div>
        <div className='overlay-submenu'>
        <div className='menu-item'>
          <Link to={'/menusEvents'} style={{textDecoration: 'none'}} onClick={(e)=> hideOverlayShowMenu('drinks')}><p>DRINKS</p></Link>
        </div>
        <div className='menu-item'>
          <Link to={'/menusEvents'} style={{textDecoration: 'none'}} onClick={(e)=> hideOverlayShowMenu('food')}><p>BAKERY</p></Link>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Overlay;
