import React, { useState } from 'react';
import './Carousel.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

const images = [
  { id: 1, name: 'Agriculture', image: '/images/agri.webp' },
  { id: 2, name: 'Commercial', image: '/images/com.webp' },
  { id: 3, name: 'Industrial', image: '/images/ind.webp' },
  { id: 4, name: 'Residential', image: '/images/res.webp' },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, images.length - visibleCount));
  };

  const translateX = -(currentIndex * (100 / visibleCount));

  return (
    <div className="carousel-wrapper">
      <button className="nav-btn" onClick={goToPrevious} disabled={currentIndex === 0}>
        ◀
      </button>

      <div className="carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(${translateX}%)` }}
        >
          {images.map((item) => (
            <div className="carousel-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        className="nav-btn"
        onClick={goToNext}
        disabled={currentIndex >= images.length - visibleCount}
      >
        ▶
      </button>
    </div>
  );
}

export default Carousel;
