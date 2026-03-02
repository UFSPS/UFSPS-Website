import './styles/Carousel.css';
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


interface ImageList {
    images: string[];
}

const Carousel = ({ images }: ImageList) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
    };
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
        );
    };
    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
    <>
      <div className="carousel-images">
        <img key={currentIndex} loading="lazy" src={images[currentIndex]}/>
        <div className="slide_direction">
          <div className="left" onClick={handlePrevious}>
            <IoIosArrowBack />
          </div>
          <div className="right" onClick={handleNext}>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
      <div className="carousel-indicator">
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentIndex === index ? "active-image" : ""}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
      </div>
    </>
  );
};
export default Carousel;