import './Beans.css';
import coffeeBeans from '../../assets/coffeeBeans.png';
import { useInView } from 'react-intersection-observer';

const Beans = () => {

  const [ beansHeader, beansHeaderInView ] = useInView({
    triggerOnce: true,
    rootMargin: '-50px',
    threshold: 0.4
  });

  const [ beansImg, beansImageInView ] = useInView({
      triggerOnce: true,
      rootMargin: '-100px 0px',
      threshold: 0.9
  });

  const [ subText, subTextInView ] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px',
    threshold: 0.6
  });

  const [ upperBuffer, upperBufferInView ] = useInView({
    triggerOnce: true,
    rootMargin: '-170px 0px',
    threshold: 0.8
  })


  return(
    <div className='beans-container'>
      <div className='beans-h2-image'>
        <div className={` ${beansHeaderInView ? 'beans-h2 beans-h2-showing' : 'beans-h2 beans-h2-hidden'}`} ref={beansHeader} >
          <h2>WE HAVE THE BEANS.</h2>
        </div>
        <div className={` ${beansImageInView ? 'beans-image beans-image-showing' : 'beans-image beans-image-hidden'}`} ref={beansImg} >
          <img src={coffeeBeans} alt='coffee beans' />
        </div>
      </div>
      <div className={` ${upperBufferInView ? 'beans-subtext-upper-buffer beans-upper-buffer-showing' : 'beans-subtext-upper-buffer beans-upper-buffer-hidden'}`} ref={upperBuffer}></div>
        <div className={` ${subTextInView ? 'beans-subtext beans-subtext-showing' : 'beans-subtext beans-subtext-hidden'}`} ref={subText}>
          <h3>SUPERIOR QUALITY</h3>
          <p>Great coffee starts with great beans.  At Casaba Coffee, we source our beans only from the best independent growers in the world, each putting quality over quantity and utilizing the best organic techniques.  You can taste the results with every sip.</p>
        </div>
        <div className='beans-subtext-lower-buffer'></div>
    </div>
  );
}

export default Beans;
