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

  fetchSlides = async () => {
    try {
      const response = await fetch("http://localhost:3001/articles");
      if (!response.ok) throw new Error("Failed to fetch articles");
      const articles = await response.json();
      
      const slides = articles.slice(0, 3).map(article => ({
        id: article.id,
        category: article.category,
        title: article.title,
        description: article.description,
        image: article.image.url,
        link: article.link
      }));
      this.setState({ slides, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };

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

  nextSlide = (restart = true) => {
    this.setState((prev) => ({
      currentIndex: (prev.currentIndex + 1) % prev.slides.length,
    }));

    if (restart) this.startAutoPlay();
  };

  prevSlide = () => {
    this.setState((prev) => ({
      currentIndex:
        (prev.currentIndex - 1 + prev.slides.length) % prev.slides.length,
    }));

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
      <div className="carousel" onMouseEnter={this.stopAutoPlay} onMouseLeave={this.startAutoPlay}>
        <div className="carousel-inner">
          <div className="slide-content">
            <span className="slide-category">{currentSlide.category}</span>
            <h2 className="slide-title">{currentSlide.title}</h2>
            <p className="slide-description">{currentSlide.description}</p>
            <button className="slide-btn"><a href={currentSlide.link}>Read Article</a></button>
          </div>
          <div className="slide-image-wrapper">
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              className="slide-image"
            />
          </div>
        </div>

        <button className="carousel-control prev" onClick={this.prevSlide}>
          &#10094;
        </button>
        <button className="carousel-control next" onClick={() => this.nextSlide(false)}>
          &#10095;
        </button>

        <Pagination 
          total={slides.length} 
          current={currentIndex} 
          onChange={this.handleDotClick} 
        />
      </div>
    );
  }
}

export default Carousel;
