import React, { useState } from 'react';
import usage from '../images/usage.png';
import usage2 from '../images/usage2.png';
import Carousel from 'react-bootstrap/Carousel';



function Carousell() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    

    return (
     
      <Carousel activeIndex={index} onSelect={handleSelect} className='carouselItem'>
      
         <Carousel.Item className='carouselItem'>
          <img
            className="d-block w-100"
            src={usage}
            alt="First slide"
          />
          
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={usage2}
            alt="Second slide"
          />
        </Carousel.Item> 
        
      </Carousel>
      
    );
  }

export default Carousell;