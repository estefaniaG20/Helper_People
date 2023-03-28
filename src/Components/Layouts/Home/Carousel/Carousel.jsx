import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Job1 from '../Carousel/imagen/Job1.jpg';
import Job2 from '../Carousel/imagen/Job2.jpg';
import Job3 from '../Carousel/imagen/Job3.jpg';
import Job4 from '../Carousel/imagen/Job4.jpg';
import Job5 from '../Carousel/imagen//Job5.jpg';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='carousel'>
    <Carousel activeIndex={index} onSelect={handleSelect}  className="carousel-bootstrap">
      <Carousel.Item>
        <img
          className="img"
          src={Job1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img"
          src={Job2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img"
          src={Job3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img"
          src={Job4}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img"
          src={Job5}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ControlledCarousel



