import { memo } from "react";
import Carousel from "../Carousel";
import NewsForm from "../NewsForm";
import NewsList from "../NewsList";
import "./styles.css";

const NewsContainer = ({
  news,
  allNews,
  loading,
  error,
  handleVote,
  handleAddNews,
}) => {

  return (
    <main className="container content-grid">
      <div className="area-carousel">
        <Carousel news={allNews} loading={loading} error={error} />
      </div>
      <div className="area-form">
        <NewsForm onAddNews={handleAddNews} />
      </div>
      <div className="area-news-list">
        <NewsList
          news={news}
          loading={loading}
          error={error}
          handleVote={handleVote}
        />
      </div>
    </main>
  );
};

export default memo(NewsContainer);
