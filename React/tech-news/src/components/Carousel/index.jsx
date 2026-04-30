import { Component } from "react";
import Pagination from "../Pagination";
import "./styles.css";

class Carousel extends Component {
  state = {
    slides: [],
    currentIndex: 0,
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.fetchSlides();
    this.startAutoPlay();
  }

  componentWillUnmount() {
    this.stopAutoPlay();
  }

  fetchSlides = async () => {
    try {
      const response = await fetch("http://localhost:3001/articles");
      if (!response.ok) throw new Error("Failed to fetch articles");
      const articles = await response.json();

      const slides = articles.slice(0, 3).map((article) => ({
        id: article.id,
        category: article.category,
        title: article.title,
        description: article.description,
        image: article.image.url,
        link: article.link,
      }));

      this.setState({ slides, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };

  startAutoPlay = () => {
    this.stopAutoPlay();
    this.intervalId = setInterval(() => {
      this.goToNext(); // does NOT call startAutoPlay — no stacking
    }, 2000);
  };

  stopAutoPlay = () => {
    clearInterval(this.intervalId);
  };

  // Pure state logic — no timer side effects
  goToNext = () => {
    this.setState((prev) => ({
      currentIndex: (prev.currentIndex + 1) % prev.slides.length,
    }));
  };

  goToPrev = () => {
    this.setState((prev) => ({
      currentIndex:
        (prev.currentIndex - 1 + prev.slides.length) % prev.slides.length,
    }));
  };

  // User interactions — reset the timer
  nextSlide = () => {
    this.goToNext();
    this.startAutoPlay();
  };

  prevSlide = () => {
    this.goToPrev();
    this.startAutoPlay();
  };

  handleDotClick = (index) => {
    this.setState({ currentIndex: index });
    this.startAutoPlay();
  };

  render() {
    const { slides, currentIndex, loading, error } = this.state;

    if (loading) return <div className="carousel loading">Loading...</div>;
    if (error) return <div className="carousel error">Error: {error}</div>;
    if (slides.length === 0) return null;

    const currentSlide = slides[currentIndex];

    return (
      <div
        className="carousel"
        onMouseEnter={this.stopAutoPlay}
        onMouseLeave={this.startAutoPlay}
      >
        <button
          className="nav-btn left"
          onClick={this.prevSlide}
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
            {/* button wrapping anchor is invalid — use one or the other */}
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

        <button
          className="nav-btn right"
          onClick={this.nextSlide}
          aria-label="Next"
        >
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
            count={slides.length}
            activeIndex={currentIndex}
            handleDotClick={this.handleDotClick}
          />
        </div>
      </div>
    );
  }
}

export default Carousel;
