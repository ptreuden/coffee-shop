import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import Beans from '../Beans/Beans';
import Countries from '../Countries/Countries';
import Bakery from '../Bakery/Bakery';
import Events from '../Events/Events';
import About from '../About/About';
import Footer from '../Footer/Footer';

const HomePage = ({ setOverlay, setMenusEventsName }) => {
  return(
    <div>
      <Navbar setOverlay={setOverlay} setMenusEventsName={setMenusEventsName}/>
      <Main />
      <Beans />
      <Countries setMenusEventsName={setMenusEventsName}/>
      <Bakery setMenusEventsName={setMenusEventsName}/>
      <Events setMenusEventsName={setMenusEventsName}/>
      <About />
      <Footer setMenusEventsName={setMenusEventsName}/>
    </div>
  );
}

export default HomePage;
