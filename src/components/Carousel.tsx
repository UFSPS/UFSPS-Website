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
        <img key={currentIndex} loading="lazy" src={images[currentIndex]} alt={`SPS project and event highlight ${currentIndex + 1}`}/>
        <div className="slide_direction">
          <button type="button" className="left" onClick={handlePrevious} aria-label="Previous image">
            <IoIosArrowBack />
          </button>
          <button type="button" className="right" onClick={handleNext} aria-label="Next image">
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <div className="carousel-indicator">
          {images.map((_, index) => (
            <button
              type="button"
              key={index}
              className={`dot ${currentIndex === index ? "active-image" : ""}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Show image ${index + 1}`}
              aria-current={currentIndex === index}
            />
          ))}
      </div>
    </>
  );
};
export default Carousel;
