import { Component } from "react";
import NewsCard from "../NewsCard";
import "./styles.css";

class NewsList extends Component {
  render() {
    const { articles, loading, error, onVote } = this.props;

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
          <NewsCard key={article.id} {...article} onVote={onVote}/>
        ))}
      </div>
    );
  }
}

export default NewsList;
