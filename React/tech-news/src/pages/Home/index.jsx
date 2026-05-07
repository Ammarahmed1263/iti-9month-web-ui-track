import Carousel from "../../components/Carousel";
import NewsList from "../../components/NewsList";
import { useNewsContext } from "../../context/NewsContext";
import styles from "./Home.module.css";

function Home() {
  const { news, allNews, loading, error, handleVote } = useNewsContext();

  return (
    <main className={styles.contentGrid}>
      <div className={styles.areaCarousel}>
        <Carousel news={allNews} loading={loading} error={error} />
      </div>

      <div className={styles.areaNewsList}>
        <NewsList
          news={news}
          loading={loading}
          error={error}
          handleVote={handleVote}
        />
      </div>
    </main>
  );
}

export default Home;
