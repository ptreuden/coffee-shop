import Overlay from './components/Overlay/Overlay';
import HomePage from './components/HomePage/HomePage';
import MenusEvents from './components/MenusEvents/MenusEvents';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';


const App = () => {

  const [ overlay, setOverlay ] = useState(false);
  const [ menusEventsName, setMenusEventsName ] = useState('');

  const overlayScroll = () => {
    setOverlay(false);
    setTimeout( () => {
      const about = document.getElementById('about-section');
      about.scrollIntoView();
    }, 250)
  }

  const hideOverlayShowMenu = (name) => {
    setOverlay(false);
    setMenusEventsName(name);
  }

  return (
    <Router>
      <div className='app-container'>
        {
          overlay ?
          <Overlay setOverlay={setOverlay} overlay={overlay} overlayScroll={overlayScroll} hideOverlayShowMenu={hideOverlayShowMenu}/>
          :
          <div>
            <Switch>
              <Route exact path='/drinks'>
                <MenusEvents menusEventsName={menusEventsName} />
              </Route>
              <Route exact path='/food'>
                <MenusEvents menusEventsName={menusEventsName} />
              </Route>
              <Route exact path='/events'>
                <MenusEvents menusEventsName={menusEventsName} />
              </Route>
              <Route path='/'>
                <HomePage setOverlay={setOverlay} setMenusEventsName={setMenusEventsName} />
              </Route>
            </Switch>
          </div>
        }
      </div>
    </Router>
  );
}

export default App;
