import NewsCard from "../NewsCard";
import "./styles.css";

const NewsList = ({ news, loading, error, handleVote }) => {
  if (loading) {
    return (
      <div className="news-list-status">
        <p>Loading news...</p>
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
      {news.map((article) => (
        <NewsCard key={article.id} {...article} onVote={handleVote} />
      ))}
    </div>
  );
};

export default NewsList;
