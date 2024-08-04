import React, { useState } from 'react';
import './Carousel.css'; // Import the CSS file

const Carousel = () => {
  const slides = [
    {
      images: [
        'https://via.placeholder.com/400x400.png?text=Image+1',
        'https://via.placeholder.com/200x200.png?text=Image+2',
        'https://via.placeholder.com/200x200.png?text=Image+3',
      ],
      text: 'Stand out with a\ncustom budget-\nfriendly design.',
      description: 'Give your business card a professional finish. Fill out a quick brief to receive concepts from our in-house designer within 24 hours.',
      button: 'Work With Designer',
    },
    {
      images: [
        'https://via.placeholder.com/400x400.png?text=Image+4',
        'https://via.placeholder.com/200x200.png?text=Image+5',
        'https://via.placeholder.com/200x200.png?text=Image+6',
      ],
      text: 'Slide 2 Description',
      description: 'Second slide description goes here.',
      button: 'Discover',
    },
    {
      images: [
        'https://via.placeholder.com/400x400.png?text=Image+7',
        'https://via.placeholder.com/200x200.png?text=Image+8',
        'https://via.placeholder.com/200x200.png?text=Image+9',
      ],
      text: 'Slide 3 Description',
      description: 'Third slide description goes here.',
      button: 'Get Started',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-content">
        <div className="carousel-text">
          <h1>{slides[currentIndex].text}</h1>
          <p>{slides[currentIndex].description}</p>
          <button>{slides[currentIndex].button}</button>
        </div>
        <div className="carousel-images">
          {slides[currentIndex].images.map((image, index) => (
            <div key={index} className={index === 0 ? "image-large" : "image-small"}>
              <img
                src={image}
                alt={`Slide ${currentIndex + 1} - Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousels;
