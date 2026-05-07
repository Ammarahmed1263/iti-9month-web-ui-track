import { Component } from "react";
import Carousel from "../Carousel";
import NewsForm from "../NewsForm";
import NewsList from "../NewsList";
import "./styles.css";

class NewsContainer extends Component {
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
      const response = await fetch(`${import.meta.env.SERVER_URL}/articles`);
      if (!response.ok) throw new Error("Failed to fetch articles");
      const data = await response.json();

      const articles = data.map((article) => ({
        ...article,
        votes: article.votes || 0,
        userVote: 0,
      }));

      this.setState({ articles, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };

  handleVote = async (id, type) => {
    const article = this.state.articles.find((article) => article.id === id);
    if (!article) return;

    const isTogglingOff = article.userVote === type;
    const newUserVote = isTogglingOff ? 0 : type;
    const voteChange = isTogglingOff ? -type : type - article.userVote;
    const newTotalVotes = article.votes + voteChange;

    this.setState({
      articles: this.state.articles.map((article) =>
        article.id === id
          ? { ...article, votes: newTotalVotes, userVote: newUserVote }
          : article,
      ),
    });

    try {
      const response = await fetch(
        `${import.meta.env.SERVER_URL}/articles/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ votes: newTotalVotes }),
        },
      );

      if (!response.ok) throw new Error("Server error");
    } catch (error) {
      console.error("Failed to sync vote, rolling back:", error);

      this.setState({
        articles: this.state.articles.map((item) =>
          item.id === id
            ? { ...item, votes: article.votes, userVote: article.userVote }
            : item,
        ),
      });

      alert("Failed to save your vote. Please check your connection.");
    }
  };

  handleAddNews = async (newArticle) => {
    try {
      const response = await fetch(`${import.meta.env.SERVER_URL}/articles`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newArticle),
      });

      if (!response.ok) throw new Error("Failed to save article");

      const savedArticle = await response.json();

      this.setState({
        articles: [...this.state.articles, { ...savedArticle, userVote: 0 }],
      });
    } catch (error) {
      alert("Error saving article: " + error.message);
    }
  };

  render() {
    return (
      <main className="container content-grid">
        <div className="area-carousel">
          <Carousel {...this.state} />
        </div>
        <div className="area-form">
          <NewsForm onAddNews={this.handleAddNews} />
        </div>
        <div className="area-news-list">
          <NewsList {...this.state} onVote={this.handleVote} />
        </div>
      </main>
    );
  }
}

export default NewsContainer;
