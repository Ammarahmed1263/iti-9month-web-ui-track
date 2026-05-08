import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";

export function useNews() {
  const { i18n } = useTranslation();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    (async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/articles?lang=${i18n.language}`, {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Failed to fetch articles");
        const data = await response.json();

        const formattedNews = data.map((article) => ({
          ...article,
          votes: article.votes || 0,
          userVote: 0,
        }));

        setNews(formattedNews);
        setLoading(false);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
          setLoading(false);
        }
      }
    })();

    return () => {
      controller.abort();
    };
  }, [i18n.language]);

  const handleVote = useCallback(
    async (id, type) => {
      const article = news.find((a) => a.id === id);
      if (!article) return;
      const isTogglingOff = article.userVote === type;
      const newUserVote = isTogglingOff ? 0 : type;
      const voteChange = isTogglingOff ? -type : type - article.userVote;
      const newTotalVotes = article.votes + voteChange;

      setNews((prevNews) =>
        prevNews.map((a) =>
          a.id === id
            ? { ...a, votes: newTotalVotes, userVote: newUserVote }
            : a,
        ),
      );

      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_URL}/articles/${id}`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ votes: newTotalVotes }),
          },
        );

        if (!response.ok) throw new Error("Server error");
      } catch (err) {
        console.error("Failed to sync vote, rolling back:", err);
        setNews((prevNews) =>
          prevNews.map((item) =>
            item.id === id
              ? { ...item, votes: article.votes, userVote: article.userVote }
              : item,
          ),
        );
        toast.error("Failed to save your vote. Please check your connection.");
      }
    },
    [news],
  );

  const handleAddNews = useCallback(async (newArticle) => {
    try {
      const articleWithLang = { ...newArticle, lang: i18n.language };
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/articles`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(articleWithLang),
      });

      if (!response.ok) throw new Error("Failed to save article");

      const savedArticle = await response.json();

      setNews((prevNews) => [...prevNews, { ...savedArticle, userVote: 0 }]);
      toast.success("Article published successfully!");
    } catch (err) {
      toast.error("Error saving article: " + err.message);
    }
  }, [i18n.language]);

  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  const filteredNews = useMemo(() => {
    if (!debouncedTerm.trim()) return news;

    const lowerTerm = debouncedTerm.toLowerCase();
    return news.filter(
      (article) =>
        article.title.toLowerCase().includes(lowerTerm) ||
        article.category.toLowerCase().includes(lowerTerm) ||
        article.author.toLowerCase().includes(lowerTerm),
    );
  }, [news, debouncedTerm]);

  return {
    news: filteredNews,
    allNews: news,
    searchTerm,
    loading,
    error,
    handleVote,
    handleAddNews,
    handleSearch,
  };
}
