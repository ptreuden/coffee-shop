import './MenusEvents.css';
import drinkMenu from '../../assets/drinkMenuTall.jpg';
import foodMenu from '../../assets/foodMenuTall.jpg';
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

          {
            // history.go, history.goback not working with safari currently

            // <div className='close'>
            //   <Link to={'/coffee-shop'} onClick={(e)=> history.go(-1)}><p>CLOSE</p></Link>
            // </div>
          }

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
