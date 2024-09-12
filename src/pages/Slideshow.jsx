import React from 'react';
import { Carousel } from 'antd';

const Slideshow = () => {
  const images = [
    '/hackoverflow4.jpg', 
    '/hackoverflow5.jpg',
    '/hackoverflow6.jpg',
    '/hackoverflow7.jpg',
  ];

  return (
    <div className="carousel-container m-auto h-auto py-12 md:py-24 text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">SRKR CODING CLUB EVENTS</h2>

      {/* Carousel with autoplay, fade effect, and autoplay speed */}
      <Carousel autoplay autoplaySpeed={2500} effect="fade">
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full md:w-2/4 h-auto max-h-48 md:max-h-96 mx-auto object-cover rounded-xl shadow-2xl"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slideshow;
