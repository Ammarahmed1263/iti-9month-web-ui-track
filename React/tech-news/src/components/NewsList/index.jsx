import NewsCard from "../NewsCard";
import { useTranslation } from "react-i18next";
import "./styles.css";

const NewsList = ({ news, loading, error, handleVote }) => {
  const { t } = useTranslation("translation", { keyPrefix: "newsList" });
  if (loading) {
    return (
      <div className="news-list-status">
        <p>{t("loading")}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="news-list-status">
        <p>{t("error", { error })}</p>
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
