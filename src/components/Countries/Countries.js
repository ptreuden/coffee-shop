import './Countries.css';
import { useState } from 'react';
import costaRicaImage from '../../assets/costaRica.png';
import kenyaImage from '../../assets/kenya.png';
import sumatraImage from '../../assets/sumatra.png';

const Countries = () => {

  const [ costaRicaHover, setCostaRicaHover ] = useState(false);
  const [ kenyaHover, setKenyaHover ] = useState(false);
  const [ sumatraHover, setSumatraHover ] = useState(false);

  return(
    <div className='countries-container'>
      <div className='countries-header'>
        <h3>SINGLE ORIGIN SPECIALTIES</h3>
      </div>
      <div className='countries-cards-container'>
        <div className='country-container'>
            <div className={` country-inner ${costaRicaHover ? 'costa-rica-hover' : 'costa-rica '}`} onMouseEnter={(e)=> setCostaRicaHover(true)} onMouseLeave={(e)=> setCostaRicaHover(false)}>
              <div className={` stripe ${costaRicaHover ? 'costa-rica-stripe-hover' : 'costa-rica-stripe'}`}></div>

              <div className='costa-rica-text country-text-map'>
                <div className={` country-text ${costaRicaHover ? 'country-text-hover' : 'country-text-not-hover'}`}>
                  <h4>COSTA</h4>
                  <h4>RICAN</h4>
                </div>
                {
                  costaRicaHover ?
                    <div>
                      <div className='country-map country-map-hidden'>
                        <img src={costaRicaImage} alt='costa rica' />
                      </div>
                      <div className='country-specs country-specs-showing'>
                        <div className='spec-line'>
                         <p><span className='bold'>Body: </span>Light</p>
                        </div>
                        <div className='spec-line'>
                         <p><span className='bold'>Tasting Notes: </span></p>
                         <p>Citrus, chocolate</p>
                        </div>
                      </div>
                    </div>
                   :
                   <div>
                     <div className='country-map country-map-showing'>
                       <img src={costaRicaImage} alt='costa rica' />
                     </div>
                     <div className='country-specs country-specs-hidden'>
                        <p><span className='bold'>Body: </span>Light</p>
                     </div>
                   </div>
                }
               </div>
            </div>
          </div>
          <div className='country-container'>
              <div className={` country-inner ${kenyaHover ? 'kenya-hover' : 'kenya '}`} onMouseEnter={(e)=> setKenyaHover(true)} onMouseLeave={(e)=> setKenyaHover(false)}>
                <div className={` stripe ${kenyaHover ? 'kenya-stripe-hover' : 'kenya-stripe'}`}></div>

                <div className='kenya-text country-text-map'>
                  <div className={` country-text ${kenyaHover ? 'country-text-hover' : 'country-text-not-hover'}`}>
                    <div style={{height: '10px'}}></div>
                    <h4>KENYAN</h4>
                  </div>
                  {
                    kenyaHover ?
                      <div>
                        <div className='country-map country-map-hidden'>
                          <img src={kenyaImage} alt='kenya' />
                        </div>
                        <div className='country-specs country-specs-showing'>
                          <div className='spec-line'>
                           <p><span className='bold'>Body: </span>Medium</p>
                          </div>
                          <div className='spec-line'>
                           <p><span className='bold'>Tasting Notes: </span></p>
                           <p>Floral, blackberry</p>
                          </div>
                        </div>
                      </div>
                     :
                     <div>
                       <div className='country-map country-map-showing'>
                         <img src={kenyaImage} alt='kenya' />
                       </div>
                       <div className='country-specs country-specs-hidden'>
                          <p><span className='bold'>Body: </span>Medium</p>
                       </div>
                     </div>
                  }
                 </div>
              </div>
            </div>
            <div className='country-container'>
                <div className={` country-inner ${sumatraHover ? 'sumatra-hover' : 'sumatra '}`} onMouseEnter={(e)=> setSumatraHover(true)} onMouseLeave={(e)=> setSumatraHover(false)}>
                  <div className={` stripe ${sumatraHover ? 'sumatra-stripe-hover' : 'sumatra-stripe'}`}></div>

                  <div className='sumatra-text country-text-map'>
                    <div className={` country-text ${sumatraHover ? 'country-text-hover' : 'country-text-not-hover'}`}>
                      <div style={{height: '10px'}}></div>
                      <h4>SUMATRAN</h4>
                    </div>
                    {
                      sumatraHover ?
                        <div>
                          <div className='country-map country-map-hidden'>
                            <img src={sumatraImage} alt='sumatra' />
                          </div>
                          <div className='country-specs country-specs-showing'>
                            <div className='spec-line'>
                             <p><span className='bold'>Body: </span>Full</p>
                            </div>
                            <div className='spec-line'>
                             <p><span className='bold'>Tasting Notes: </span></p>
                             <p>Spice, earthy</p>
                            </div>
                          </div>
                        </div>
                       :
                       <div>
                         <div className='country-map country-map-showing'>
                           <img src={sumatraImage} alt='sumatra' />
                         </div>
                         <div className='country-specs country-specs-hidden'>
                            <p><span className='bold'>Body: </span>Full</p>
                         </div>
                       </div>
                    }
                   </div>
                </div>
              </div>
      </div>
      <div className='drink-menu-link-container'>
        <div className='drink-menu-button'>
          <a href='#1'>DRINK MENU</a>
        </div>
      </div>
    </div>

  );
}

export default Countries;
