import { Component } from "react";
import "./styles.css";

class NewsForm extends Component {
  state = {
    title: "",
    description: "",
    author: "",
    category: "technology",
    img: "",
  };

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onAddNews } = this.props;
    const { title, description, author, category, img } = this.state;

    if (!title.trim() || !description.trim() || !author.trim() || !img.trim()) {
      alert("Please fill in all fields!");
      return;
    }

    const newArticle = {
      id: Date.now(),
      title: title,
      description: description,
      author: author,
      category: category.toUpperCase(),
      image: {
        url: img,
        alt: title,
      },
      link: "#",
      votes: 0,
      userVote: 0,
    };

    onAddNews(newArticle);

    this.setState({
      title: "",
      description: "",
      author: "",
      category: "technology",
      img: "",
    });
  };

  render() {
    const { title, description, author, img } = this.state;
    const isFormInvalid =
      !title.trim() || !description.trim() || !author.trim() || !img.trim();

    return (
      <div className="news-form-container">
        <div className="news-form-header">
          <h2>Submit Article</h2>
          <p>Share the latest tech news with the community.</p>
        </div>
        <form className="news-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Article Title</label>
            <input
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              type="text"
              id="title"
              placeholder="Enter headline"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              id="description"
              placeholder="Enter description"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                name="author"
                value={this.state.author}
                onChange={this.handleChange}
                type="text"
                id="author"
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                name="category"
                value={this.state.category}
                onChange={this.handleChange}
                id="category"
              >
                <option value="technology">Technology</option>
                <option value="design">Design</option>
                <option value="business">Business</option>
                <option value="ai">AI & ML</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="img">Cover Image</label>
            <input
              name="img"
              value={this.state.img}
              onChange={this.handleChange}
              type="url"
              id="img"
              placeholder="Enter image url"
            />
          </div>

          <button type="submit" className="submit-btn" disabled={isFormInvalid}>
            Publish Article
          </button>
        </form>
      </div>
    );
  }
}

export default NewsForm;
