import './MenusEvents.css';
import drinkMenu from '../../assets/drinkMenuTall.png';
import foodMenu from '../../assets/foodMenuTall.png';
import eventsPage from '../../assets/eventsPage.jpg';
import { Link, useHistory } from 'react-router-dom';
import { useEffect } from 'react';

const MenusEvents = ({ menusEventsName }) => {

  const history = useHistory();

  useEffect(() => {
    try {
      // using API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      // fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, []);

  return(
    <div className='menusEvents-container'>
      <div className='menusEvents-inner'>
          <div className='close'>
            <Link to={'/coffee-shop'} onClick={(e)=> history.goBack()}><p>CLOSE</p></Link>
          </div>
          <div className='image-container'>
          {
            menusEventsName === 'drinks' ?
            <img src={drinkMenu} alt='drink menu' />
            :
            (
              menusEventsName === 'food' ?
              <img src={foodMenu} alt='food menu' />
              :
              <img src={eventsPage} alt='events page' />
            )
          }
          </div>
      </div>
    </div>
  );
}

export default MenusEvents;
