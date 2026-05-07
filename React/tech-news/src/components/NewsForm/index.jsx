import { useState, memo } from "react";
import toast from "react-hot-toast";
import "./styles.css";

const NewsForm = ({ onAddNews }) => {
  const [state, setState] = useState({
    title: "",
    description: "",
    author: "",
    category: "technology",
    img: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, author, category, img } = state;

    if (!title.trim() || !description.trim() || !author.trim() || !img.trim()) {
      toast.error("Please fill in all fields!");
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

    setState({
      title: "",
      description: "",
      author: "",
      category: "technology",
      img: "",
    });
  };

  const { title, description, author, img } = state;
  const isFormInvalid =
    !title.trim() || !description.trim() || !author.trim() || !img.trim();

  return (
    <div className="news-form-container">
      <div className="news-form-header">
        <h2>Submit Article</h2>
        <p>Share the latest tech news with the community.</p>
      </div>
      <form className="news-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Article Title</label>
          <input
            name="title"
            value={state.title}
            onChange={handleChange}
            type="text"
            id="title"
            placeholder="Enter headline"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            value={state.description}
            onChange={handleChange}
            id="description"
            placeholder="Enter description"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              name="author"
              value={state.author}
              onChange={handleChange}
              type="text"
              id="author"
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              value={state.category}
              onChange={handleChange}
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
            value={state.img}
            onChange={handleChange}
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
};

export default memo(NewsForm);
