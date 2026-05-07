import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styles from "./NewsDetails.module.css";

function NewsDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);
    (async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_URL}/articles/${id}`,
          { signal: controller.signal },
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch article: ${response.statusText}`);
        }
        const data = await response.json();
        setArticle(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, [id]);

  if (loading) {
    return (
      <div className={styles.stateContainer}>
        <div className={styles.skeleton}>
          <div className={styles.skeletonCategory} />
          <div className={styles.skeletonTitle} />
          <div className={styles.skeletonMeta} />
          <div className={styles.skeletonImage} />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.stateContainer}>
        <div className={styles.errorBox}>
          <span className={styles.errorIcon}>⚠</span>
          <h2>Failed to load article</h2>
          <p>{error.message}</p>
          <button onClick={() => navigate(-1)} className={`btn ${styles.backBtn}`}>
            ← Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className={styles.stateContainer}>
        <div className={styles.errorBox}>
          <h2>Article not found</h2>
          <Link to="/" className={`btn ${styles.backBtn}`}>← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <article className={styles.articleContainer}>
      <button onClick={() => navigate(-1)} className={styles.backLink}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M5 12l7 7M5 12l7-7"/>
        </svg>
        Back
      </button>

      <header className={styles.articleHeader}>
        <span className={styles.articleCategory}>{article.category}</span>
        <h1 className={styles.articleTitle}>{article.title}</h1>

        <div className={styles.articleMeta}>
          <span>By <strong>{article.author}</strong></span>
          {article.date && <span className={styles.dot}>•</span>}
          {article.date && <span>{article.date}</span>}
          {article.readTime && <span className={styles.dot}>•</span>}
          {article.readTime && <span>{article.readTime} min read</span>}
        </div>
      </header>

      {article.image?.url && (
        <div className={styles.coverWrapper}>
          <img
            src={article.image.url}
            alt={article.image.alt || article.title}
            className={styles.articleCover}
          />
        </div>
      )}

      <div className={styles.articleContent}>
        <p className={styles.description}>{article.description}</p>
        {article.content && <p>{article.content}</p>}
      </div>

      {article.link && (
        <div className={styles.articleFooter}>
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn ${styles.readOriginal}`}
          >
            Read Full Article
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>
      )}
    </article>
  );
}

export default NewsDetails;
