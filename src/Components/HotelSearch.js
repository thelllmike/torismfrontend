import React, { useState} from 'react'
import '../Styles/HotelSearch.css'
import Hotel from './Hotel'
import NavbarHome from './NavBar_home';
import Footer from './Footer' 


const RatingStar = ({ selected, onClick }) => {
  return (
    <div className="rating-star">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={selected >= index + 1 ? 'filled' : ''}
          onClick={() => onClick(index + 1)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

function HotelSearch() {

    const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
  };

  const [selectedDate, setSelectedDate] = useState('');

  function handleDateChange(event) {
    setSelectedDate(event.target.value);
  }

  return (  
    <div className='HotelSearchPage'>
      <NavbarHome />

        <div className="left">
            <h2>Make Reservations</h2>

            <div className="country">
              <label htmlFor="country">Country</label>
              <select id="country" name="country">
                <option value="country1">Country1</option>
                <option value="country2">Country2</option>
                <option value="country3">Country3</option>
              </select>
            </div>  
            <div className="city">
              <label htmlFor="city">City</label>
              <select id="city" name="country">
                <option value="country1">City1</option>
                <option value="country2">City2</option>
                <option value="country3">City3</option>
              </select>
            </div> 
            <div className="room">
              <label htmlFor="room">Room</label>
              <select id="room" name="country">
                <option value="country1">1</option>
                <option value="country2">2</option>
                <option value="country3">3</option>
              </select>
            </div>  
            <div className='checkin'>
              <label htmlFor="datepicker">Check In</label>
              <input
                type="date"
                id="datepicker"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </div> 
            <div className='checkout'>
              <label htmlFor="datepicker">Check Out</label>
              <input
                type="date"
                id="datepicker"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </div> 
      <div className="hotel-star-rating">
      <label htmlFor="hotel-star-rating" className='rate'>Hotel Star Rate</label>
      <div>
        <label className='rating'>
          Five Stars
         </label> 
          <div className="rate-check">
            <input
            type="radio"
            name="rating"
            value="5"
          />
          </div>
      </div>
      <div>
        <label className='rating'>
          Four Stars and Above
         </label> 
          <div className="rate-check">
            <input
            type="radio"
            name="rating"
            value="4"
          />
          </div>
      </div>
      <div>
        <label className='rating'>
          Three Stars and Above
         </label> 
          <div className="rate-check">
            <input
            type="radio"
            name="rating"
            value="3"
          />
          </div>
      </div>
      <div>
        <label className='rating'>
        Two Stars and Above
       </label> 
        <div className="rate-check">
           <input
            type="radio"
            name="rating"
            value="2"
          />
        </div>
      </div>
      <div>
        <label className='rating'>
        One Star and Above
       </label> 
        <div className="rate-check">
            <input
            type="radio"
            name="rating"
            value="1"
            />
        </div>
      </div>
    </div>

    <div className="hotel-room-type">
      <label htmlFor="hotel-room-type" className='room-type'>Room Type</label>
      <div>
        <label className='type-in'>
          Standard
         </label> 
          <div className="type-check">
            <input
            type="radio"
            name="room-type"
          />
          </div>
      </div>
      <div>
        <label className='type-in'>
          Deluxe
         </label> 
          <div className="type-check">
            <input
            type="radio"
            name="room-type"
          />
          </div>
      </div>
      <div>
        <label className='type-in'>
          Executive
         </label> 
          <div className="type-check">
            <input
            type="radio"
            name="room-type"
            />
          </div>
      </div>
    </div>    
    <div className="price-range">
    <div className="currency">
              {/* <label htmlFor="currency">Currency</label> */}
              <select id="currency" name="currency">
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="LKR">LKR</option>
              </select>
    </div>  
      <input type="text" /><br />
      <label htmlFor="">To</label><br />
      <input type="text" />
    </div>    
            <div className="feedback">
              <label htmlFor="feedback">Feedback Rate</label>
            <input type="range" name="" id="" />
            </div>

             
           
            <div className="search-button">
              <button>Search<i class="fa-solid fa-magnifying-glass"></i></button></div>
              
              <div className="advertisement">
              <div className="add">
              <img src="http://www.flightsinternationaluk.co.uk/blog/wp-content/uploads/2013/01/Jetwing-Hotels-in-Sri-Lanka.jpg" alt="" srcset="" />
            </div>
            <hr />
            <div className="add">
              <img src="https://global-uploads.webflow.com/576fd5a8f192527e50a4b95c/5bfe547dc7e7c24e006ed95b_laya%20safari%20resort-min.jpg" alt="" srcset="" />
            </div>
            <hr />
            <div className="add">
              <img src="https://renaesworld.com.au/wp-content/uploads/2018/02/invite-to-paradise-sri-lanka-galle-face-hotel-old-wing-entrance-1080x718.jpg" alt="" srcset="" />
            </div>
            <hr />
            <div className="add">
              <img src="https://d1bv4heaa2n05k.cloudfront.net/user-images/1508847676152/frangapani-GARY-04000_main_1508847744534.jpeg" alt="" srcset="" />
            </div>
            <hr />
            <div className="add">
              <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/03/7a/c5/birds-eye-view.jpg?w=900&h=-1&s=1" alt="" srcset="" />
            </div>
            <hr />
            <div className="add">
              <img src="https://global-uploads.webflow.com/576fd5a8f192527e50a4b95c/5bfe547dc7e7c24e006ed95b_laya%20safari%20resort-min.jpg" alt="" srcset="" />
            </div>
            </div>  
                                     
        </div>

  <div className="right">
  <div className="hotel-details">
    <Hotel
      name="Hotel 1"
      description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, voluptate. Consequatur vero laudantium obcaecati rem at, ab iusto quae est porro ad, sed consequuntur et cupiditate dolor molestiae. Nesciunt, rem!"
      image="http://www.flightsinternationaluk.co.uk/blog/wp-content/uploads/2013/01/Jetwing-Hotels-in-Sri-Lanka.jpg"
    />
  </div>
  <div className="hotel-details">
    <Hotel
      name="Hotel 2"
      description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, voluptate. Consequatur vero laudantium obcaecati rem at, ab iusto quae est porro ad, sed consequuntur et cupiditate dolor molestiae. Nesciunt, rem!"
      image="https://renaesworld.com.au/wp-content/uploads/2018/02/invite-to-paradise-sri-lanka-galle-face-hotel-old-wing-entrance-1080x718.jpg"
    />
  </div>

  <div className="hotel-details">
    <Hotel
      name="Hotel 1"
      description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, voluptate. Consequatur vero laudantium obcaecati rem at, ab iusto quae est porro ad, sed consequuntur et cupiditate dolor molestiae. Nesciunt, rem!"
      image="http://www.flightsinternationaluk.co.uk/blog/wp-content/uploads/2013/01/Jetwing-Hotels-in-Sri-Lanka.jpg"
    />
  </div>
  <div className="hotel-details">
    <Hotel
      name="Hotel 2"
      description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, voluptate. Consequatur vero laudantium obcaecati rem at, ab iusto quae est porro ad, sed consequuntur et cupiditate dolor molestiae. Nesciunt, rem!"
      image="https://d1bv4heaa2n05k.cloudfront.net/user-images/1508847676152/frangapani-GARY-04000_main_1508847744534.jpeg"
    />
  </div>

</div>

<Footer />

    
    </div>
  )
}

export default HotelSearch