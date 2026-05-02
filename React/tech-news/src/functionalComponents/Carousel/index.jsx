import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import "./styles.css";

const Carousel = ({ news, loading, error }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = news.slice(0, 3).map((article) => ({
    id: article.id,
    category: article.category,
    title: article.title,
    description: article.description,
    image: article.image.url,
    author: article.author,
    link: article.link,
  }));
  const slidesCount = slides.length;

  useEffect(() => {
    if (isPaused || slidesCount === 0) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesCount);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [isPaused, slidesCount]);

  const nextSlide = () => {
    if (slidesCount === 0) return;
    setCurrentIndex((prev) => (prev + 1) % slidesCount);
  };

  const prevSlide = () => {
    if (slidesCount === 0) return;
    setCurrentIndex((prev) => (prev - 1 + slidesCount) % slidesCount);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  if (loading) return <div className="carousel loading">Loading...</div>;
  if (error) return <div className="carousel error">Error: {error}</div>;
  if (slidesCount === 0) return null;

  const currentSlide = slides[currentIndex];

  return (
    <div
      className="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <button
        className="nav-btn left"
        onClick={prevSlide}
        aria-label="Previous"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 12H4M4 12L10 6M4 12L10 18"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="slide">
        <div className="slide-content">
          <span className="slide-category">{currentSlide.category}</span>
          <h2 className="slide-title">{currentSlide.title}</h2>
          <p className="slide-description">{currentSlide.description}</p>
          <a
            className="slide-btn"
            href={currentSlide.link}
            target="_blank"
            rel="noreferrer"
          >
            Read Article
          </a>
        </div>
        <div className="slide-image-wrapper">
          <img
            src={currentSlide.image}
            alt={currentSlide.title}
            className="slide-image"
          />
        </div>
      </div>

      <button className="nav-btn right" onClick={nextSlide} aria-label="Next">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 12H20M20 12L14 6M20 12L14 18"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="carousel-pagination">
        <Pagination
          count={slidesCount}
          activeIndex={currentIndex}
          handleDotClick={handleDotClick}
        />
      </div>
    </div>
  );
};

export default Carousel;
