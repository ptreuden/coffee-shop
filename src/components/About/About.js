import './About.css';
import coffeePour from '../../assets/coffeePour.jpg';
import cityImage from '../../assets/cityDay.jpg';

const About = () => {
  return(
    <div className='about-container'>
      <div className='about-inner'>
        <div className='about-paragraph-container'>
            <h3>ABOUT CASABA</h3>
          <div className='about-paragraph-inner'>
            <img src={coffeePour} alt='coffee pouring' />
            <p>In 2008, Casaba Coffee was created with one thing in mind: quality.  We sought to offer the best coffee drinks, made with the best ingredients, by the best baristas.  So we got to work, forming relationships with coffee growers in countries around the world, coming up with just the right variety of beans.</p>
            <p>Then we hired the best baristas in town, came up with a great menu, and took our coffee public.  For the first few years, we perfected our craft in two mobile coffee trucks, then opened our cafe to offer more drinks, bakery items, and events to our guests.</p>
            <p>We've proudly seen our cafe become a popular destination in the community.  Some of our neighbors come in each day to grab their moring coffee, others stop in to occasionally meet with friends or for one of our in-house events.  If you haven't yet visited our cafe, we welcome you to drop by.</p>
          </div>
        </div>
        <div className='address-hours-container'>
          <h3>LOCATION & CONTACT</h3>
          <div className='address-hours-inner'>
              <div className='parking'>
                <img src={cityImage} alt='coffee pouring' />
                <p>We're conveniently located in the Marion East shopping district, nearby many botique shops, restaurants, and entertainment venues.  We would love to have you include Casaba in your next trip to Marion East!</p>
                <p>There is free parking located on the north and south ends of the district, and the district is very friendly to pedestrians.  Our cafe also has bike racks next to our building.</p>
              </div>
              <div className='address-horizontal-buffer'></div>
              <div className='address-contact-container'>
                <div className='left-side'>
                  <div className='about-address'>
                    <p className='address'>Casaba Coffee</p>
                    <p className='address'>321 Del Boca Vista Dr</p>
                    <p className='address'>Marion FL 34998</p>
                  </div>
                  <div className='about-contact'>
                    <p>442-555-0154</p>
                    <p>con<span className='obfuscate'>obfuscation</span>tact@casaba<span className='obfuscate'>obfuscation</span>coffee.com</p>
                  </div>
                </div>
                <div className='address-vertical-buffer'></div>
                <div className='right-side'>
                  <div className='hours-container'>
                    <h4>Hours</h4>
                    <p>Mon-Fri: 6 - 6</p>
                    <p>Sat: 8 - 10</p>
                    <p>Sun: 8 - 4</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
