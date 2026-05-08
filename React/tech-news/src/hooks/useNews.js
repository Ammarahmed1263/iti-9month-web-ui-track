import { useCallback } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNews,
  addArticle,
  syncVotes,
  setSearchTerm,
  setDebouncedTerm,
  optimisticVote,
  rollbackVote,
  selectFilteredNews,
} from "../store/slices/newsSlice";

export function useNews() {
  const { i18n, t } = useTranslation();
  const dispatch = useDispatch();
  const { articles, isLoading, error, searchTerm } = useSelector(
    (state) => state.news,
  );

  const filteredNews = useSelector(selectFilteredNews);

  const handleVote = useCallback(
    async (id, type) => {
      const article = articles.find((a) => a.id === id);
      if (!article) return;

      const isTogglingOff = article.userVote === type;
      const newUserVote = isTogglingOff ? 0 : type;
      const voteChange = isTogglingOff ? -type : type - article.userVote;
      const newTotalVotes = article.votes + voteChange;

      dispatch(optimisticVote({ id, newUserVote, newTotalVotes }));

      try {
        await dispatch(
          syncVotes({ articleId: id, votes: newTotalVotes }),
        ).unwrap();
        toast.success(t("voting.success"));
      } catch (err) {
        dispatch(
          rollbackVote({
            id,
            originalVotes: article.votes,
            originalUserVote: article.userVote,
          }),
        );
        toast.error(t("voting.error"));
      }
    },
    [articles, dispatch, t],
  );

  const handleAddNews = useCallback(
    async (newArticle) => {
      try {
        await dispatch(
          addArticle({ newArticle, lang: i18n.language }),
        ).unwrap();
        toast.success(t("article.published"));
      } catch (err) {
        toast.error(t("article.error"));
      }
    },
    [dispatch, i18n.language, t],
  );

  const handleSearch = useCallback((term) => {
    dispatch(setSearchTerm(term));
  }, []);

  return {
    news: filteredNews,
    allNews: articles,
    searchTerm,
    loading: isLoading,
    error,
    handleVote,
    handleAddNews,
    handleSearch,
  };
}
