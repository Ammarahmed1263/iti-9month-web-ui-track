import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (lang, { rejectWithValue, signal }) => {
    try {
      const response = await fetch(`${SERVER_URL}/articles?lang=${lang}`, {
        signal,
      });
      if (!response.ok) return rejectWithValue("Failed to fetch articles");

      const data = await response.json();
      return data;
    } catch (error) {
      if (error.name === "AbortError") throw error;
      return rejectWithValue(error);
    }
  },
);

export const syncVotes = createAsyncThunk(
  "news/syncVotes",
  async ({ articleId, votes }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${SERVER_URL}/articles/${articleId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ votes }),
      });
      if (!response.ok) return rejectWithValue("Failed to sync votes");
      return true;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addArticle = createAsyncThunk(
  "news/addArticle",
  async ({ newArticle, lang }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${SERVER_URL}/articles`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...newArticle, lang }),
      });
      if (!response.ok) return rejectWithValue("Failed to add article");

      const savedArticle = await response.json();
      return savedArticle;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const initialState = {
  articles: [],
  error: null,
  isLoading: false,
  searchTerm: "",
  debouncedTerm: "",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setDebouncedTerm: (state, action) => {
      state.debouncedTerm = action.payload;
    },
    optimisticVote: (state, action) => {
      const { id, newUserVote, newTotalVotes } = action.payload;
      const article = state.articles.find((a) => a.id === id);

      if (!article) return;

      article.userVote = newUserVote;
      article.votes = newTotalVotes;
    },
    rollbackVote: (state, action) => {
      const { id, originalVotes, originalUserVote } = action.payload;
      const article = state.articles.find((a) => a.id === id);

      if (!article) return;

      article.votes = originalVotes;
      article.userVote = originalUserVote;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.articles = action.payload.map((a) => ({
          ...a,
          votes: a.votes || 0,
          userVote: 0,
        }));
        state.isLoading = false;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        if (action.meta.aborted) {
          return;
        }

        state.isLoading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(addArticle.fulfilled, (state, action) => {
        state.articles.push({ ...action.payload, userVote: 0 });
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addArticle.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setSearchTerm, setDebouncedTerm, optimisticVote, rollbackVote } =
  newsSlice.actions;

export const selectFilteredNews = (state) => {
  const { articles, debouncedTerm } = state.news;
  if (!debouncedTerm.trim()) return articles;

  const lowerTerm = debouncedTerm.toLowerCase();
  return articles.filter(
    (article) =>
      article.title.toLowerCase().includes(lowerTerm) ||
      article.category.toLowerCase().includes(lowerTerm) ||
      article.author.toLowerCase().includes(lowerTerm),
  );
};

export default newsSlice.reducer;
