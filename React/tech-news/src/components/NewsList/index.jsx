import { Component } from "react";
import NewsCard from "../NewsCard";
import "./styles.css";

class NewsList extends Component {
  state = {
    articles: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = async () => {
    try {
      const response = await fetch("http://localhost:3001/articles");
      if (!response.ok) throw new Error("Failed to fetch articles");
      const articles = await response.json();
      this.setState({ articles, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };

  render() {
    const { articles, loading, error } = this.state;

    if (loading) {
      return (
        <div className="news-list-status">
          <p>Loading articles...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="news-list-status">
          <p>Error: {error}</p>
        </div>
      );
    }

    return (
      <div className="news-list">
        {articles.map((article) => (
          <NewsCard key={article.id} {...article} />
        ))}
      </div>
    );
  }
}

export default NewsList;
