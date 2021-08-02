import './Events.css';

const Events = () => {
  return(
    <div className='events-container'>
          <div className='events-text-container'>
            <div className='events-header'>
              <h2>WE EVEN DO EVENTS.</h2>
            </div>
            <div className='events-subtext-upper-buffer'></div>
            <div className='events-subtext'>
              <p>Our backroom provides an intimate setting for a variety of events. We host live music, coffee tastings, company meet-ups, and more.</p>
            </div>
            <div className='events-subtext-lower-buffer'></div>
            <div className='events-button-container'>
              <div className='events-link-container'>
                <div className='events-link-button'>
                  <a href='#1'>CALENDAR</a>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}

export default Events;
