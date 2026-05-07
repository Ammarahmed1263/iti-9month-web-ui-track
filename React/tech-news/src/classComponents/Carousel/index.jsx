import { Component } from "react";
import Pagination from "../Pagination";
import "./styles.css";

class Carousel extends Component {
  state = {
    currentIndex: 0,
  };

  componentDidMount() {
    this.startAutoPlay();
  }

  componentWillUnmount() {
    this.stopAutoPlay();
  }

  startAutoPlay = () => {
    this.stopAutoPlay();
    this.intervalId = setInterval(() => {
      this.nextSlide(true); 
    }, 2000);
  };

  stopAutoPlay = () => {
    clearInterval(this.intervalId);
  };

  nextSlide = (fromAuto = false) => {
    const slidesCount = Math.min(this.props.articles.length, 3);

    if (slidesCount === 0) return;

    this.setState({
      currentIndex: (this.state.currentIndex + 1) % slidesCount,
    });

    if (!fromAuto) this.startAutoPlay();
  };

  prevSlide = () => {
    const slidesCount = Math.min(this.props.articles.length, 3);

    if (slidesCount === 0) return;

    this.setState({
      currentIndex: (this.state.currentIndex - 1 + slidesCount) % slidesCount,
    });
  };



  handleDotClick = (index) => {
    this.setState({ currentIndex: index });
    this.startAutoPlay();
  };

  render() {
    const { articles, loading, error } = this.props;
    const { currentIndex } = this.state;

    const slides = articles.slice(0, 3).map((article) => ({
      id: article.id,
      category: article.category,
      title: article.title,
      description: article.description,
      image: article.image.url,
      author: article.author,
      link: article.link,
    }));

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
