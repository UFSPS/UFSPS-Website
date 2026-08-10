import './styles/Carousel.css';
import { useState } from 'react';

export interface CarouselImage {
    src: string;
    alt: string;
}

interface CarouselProps {
    images: CarouselImage[];
}

const fmt = (n: number) => String(n).padStart(2, '0');

const Carousel = ({ images }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const count = images.length;
    const current = images[currentIndex];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % count);
    };
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + count) % count);
    };

    return (
        <div className="carousel">
            <div className="carousel-viewport">
                {current && (
                    <img key={currentIndex} loading="lazy" src={current.src} alt={current.alt} />
                )}
            </div>
            <div className="carousel-controls">
                <button
                    type="button"
                    className="carousel-arrow"
                    onClick={handlePrevious}
                    aria-label="Previous image"
                >
                    &larr;
                </button>
                <div className="carousel-indicator">
                    {images.map((image, index) => (
                        <button
                            type="button"
                            key={image.src}
                            className={`dot ${currentIndex === index ? 'dot--active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Show image ${index + 1} of ${count}: ${image.alt}`}
                            aria-current={currentIndex === index}
                        />
                    ))}
                </div>
                <span className="carousel-count mono" aria-hidden="true">
                    {fmt(currentIndex + 1)} / {fmt(count)}
                </span>
                <button
                    type="button"
                    className="carousel-arrow"
                    onClick={handleNext}
                    aria-label="Next image"
                >
                    &rarr;
                </button>
            </div>
        </div>
    );
};

export default Carousel;
