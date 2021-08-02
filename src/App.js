import Overlay from './components/Overlay/Overlay';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Beans from './components/Beans/Beans';
import Countries from './components/Countries/Countries';
import Bakery from './components/Bakery/Bakery';
import Events from './components/Events/Events';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import './App.css';


const App = () => {

  const [ overlay, setOverlay ] = useState(false);

  return (
    <div className="app-container">
      {
        overlay &&
        <Overlay setOverlay={setOverlay} overlay={overlay}/>
      }
      <Header setOverlay={setOverlay}/>
      <Main />
      <Beans />
      <Countries />
      <Bakery />
      <Events />
      <About />
      <Footer />
    </div>
  );
}

export default App;
