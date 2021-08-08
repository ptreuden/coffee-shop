import './Bakery.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const Bakery = ({ setMenusEventsName }) => {

  const [ croissantsHover, setCroissantsHover ] = useState(false);
  const [ tartletsHover, setTartletsHover ] = useState(false);
  const [ muffinsHover, setMuffinsHover ] = useState(false);
  const [ donutsHover, setDonutsHover ] = useState(false);

  const [ fresh, freshInView ] = useInView({
    triggerOnce: true,
    rootMargin: '-50px',
    threshold: 0.8
  });

  const [ bakingTop, bakingTopInView ] = useInView({
    triggerOnce: true,
    rootMargin: '-50px',
    threshold: 0.7
  });

  const [ bakingBottom, bakingBottomInView ] = useInView({
    triggerOnce: true,
    rootMargin: '-50px',
    threshold: 0.7
  });

  const [ croissants, croissantsInView ] = useInView({
    triggerOnce: true,
    rootMargin: '-50px',
    threshold: 0.3
  });

  const [ tartlets, tartletsInView ] = useInView({
    triggerOnce: true,
    rootMargin: '-50px',
    threshold: 0.3
  });

  const [ muffins, muffinsInView ] = useInView({
    triggerOnce: true,
    rootMargin: '-50px',
    threshold: 0.3
  });

  const [ donuts, donutsInView ] = useInView({
    triggerOnce: true,
    rootMargin: '-50px',
    threshold: 0.3
  });


  return(
    <div className='bakery-container'>
      <div className='bakery-header'>
        <h2><span className={`baking ${bakingTopInView ? 'baking-top-showing' : 'baking-top-hidden'}`} ref={bakingTop}>BAKING</span><span className={` fresh ${freshInView ? 'fresh-showing' : 'fresh-hidden'}`} ref={fresh}> FRESH</span></h2>
        <h2><span className={`baking ${bakingBottomInView ? 'baking-bottom-showing' : 'baking-bottom-hidden'}`} ref={bakingBottom}>EVERY MORNING</span></h2>
      </div>
      <div className='bakery-subtext'>
        <p>We bake our pastries fresh each day, ensuring a tasty treat to compliment your favorite coffee.  Some pastry options change with the season, while others are offered year-round.</p>
      </div>
      <div className='popular-pastries'>
        <h3>POPULAR PASTRIES</h3>
      </div>

      <div className='bakery-images-container'>
        <div className={` bakery-type-container croissants-container ${croissantsHover ? 'croissants-container-hover' : 'croissants-container-not-hover'} ${croissantsInView ? 'croissants-container-showing' : 'croissants-container-hidden'}`} onMouseEnter={(e)=> setCroissantsHover(true)} onMouseLeave={(e)=> setCroissantsHover(false)} ref={croissants}>
          <div className={` bakery-type-text ${croissantsHover ? 'croissants-h3-hover' : 'croissants-h3'}`}>
            <h3>CROISSANTS</h3>
          </div>
          {
            croissantsHover ?
            <div className='bakery-details bakery-details-hover croissants-details'>
              <p><span className='bold'>Flavors:</span> Traditional, chocolate, cinnamon sugar, almond, pumpkin spice(seasonal)</p>
            </div>
            :
            <div className='bakery-details bakery-details-not-hover'>
              <p><span className='bold'>Flavors:</span> Traditional, chocolate, cinnamon sugar, almond, pumpkin spice(seasonal)</p>
            </div>
          }
        </div>

        <div className={` bakery-type-container tartlets-container ${tartletsHover ? 'tartlets-container-hover' : 'tartlets-container-not-hover'} ${tartletsInView ? 'tartlets-container-showing' : 'tartlets-container-hidden'}`} onMouseEnter={(e)=> setTartletsHover(true)} onMouseLeave={(e)=> setTartletsHover(false)} ref={tartlets} >
          <div className={` bakery-type-text ${tartletsHover ? 'tartlets-h3-hover' : 'tartlets-h3'}`}>
            <h3>TARTLETS</h3>
          </div>
          {
            tartletsHover ?
            <div className='bakery-details bakery-details-hover tartlets-details'>
              <p><span className='bold'>Flavors:</span> Traditional, blueberry, raspberry, caramel pecan, gingerbread(seasonal)</p>
            </div>
            :
            <div className='bakery-details bakery-details-not-hover'>
              <p><span className='bold'>Flavors:</span> Traditional, blueberry, raspberry, caramel pecan, gingerbread(seasonal)</p>
            </div>
          }
        </div>

        <div className={` bakery-type-container muffins-container ${muffinsHover ? 'muffins-container-hover' : 'muffins-container-not-hover'} ${muffinsInView ? 'muffins-container-showing' : 'muffins-container-hidden'}`} onMouseEnter={(e)=> setMuffinsHover(true)} onMouseLeave={(e)=> setMuffinsHover(false)} ref={muffins}>
          <div className={` bakery-type-text ${muffinsHover ? 'muffins-h3-hover' : 'muffins-h3'}`}>
            <h3>MUFFINS</h3>
          </div>
          {
            muffinsHover ?
            <div className='bakery-details bakery-details-hover muffins-details'>
              <p><span className='bold'>Flavors:</span> Blueberry, chocolate chip, apple cinnamon, banana walnut, chocolate mint chip(seasonal)</p>
            </div>
            :
            <div className='bakery-details bakery-details-not-hover'>
              <p><span className='bold'>Flavors:</span> Blueberry, chocolate chip, apple cinnamon, banana walnut, chocolate mint chip(seasonal)</p>
            </div>
          }
        </div>

        <div className={` bakery-type-container donuts-container ${donutsHover ? 'donuts-container-hover' : 'donuts-container-not-hover'} ${donutsInView ? 'donuts-container-showing' : 'donuts-container-hidden'}`} onMouseEnter={(e)=> setDonutsHover(true)} onMouseLeave={(e)=> setDonutsHover(false)} ref={donuts}>
          <div className={` bakery-type-text ${donutsHover ? 'donuts-h3-hover' : 'donuts-h3'}`}>
            <h3>DONUTS</h3>
          </div>
          {
            donutsHover ?
            <div className='bakery-details bakery-details-hover donuts-details'>
              <p><span className='bold'>Flavors:</span> Glazed cake, fruit-filled, cruller, fritter, sprinkled (all various flavors/fillings)</p>
            </div>
            :
            <div className='bakery-details bakery-details-not-hover'>
              <p><span className='bold'>Flavors:</span> Glazed cake, fruit-filled, cruller, fritter, sprinkled (all various flavors/fillings)</p>
            </div>
          }
        </div>
      </div>
      <div className='pastry-menu-link-container'>
        <div className='pastry-menu-button'>
          <Link to={'/menusEvents'} style={{textDecoration: 'none'}} onClick={(e)=> setMenusEventsName('food')}><p>BAKERY MENU</p></Link>
        </div>
      </div>
    </div>
  );
}

export default Bakery;
