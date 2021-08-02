import './Main.css';
import mainPic from '../../assets/coffeeShopMain.jpg';
import { Parallax } from 'react-parallax';

const Main = () => {
  return(
    <div className='main-container'>
      <Parallax blur={1} bgImage={mainPic} bgImageAlt="cafe image" strength={300}>
        <div className='main-text'>
          <h1>CASABA COFFEE</h1>
          <p>Neighborhood Cafe & Bakery</p>
        </div>
      </Parallax>
    </div>
  );
}

export default Main;
