import { Component } from "react";
import "./styles.css";

class NewsForm extends Component {
  render() {
    return (
      <div className={`news-form-container ${this.props.className || ""}`}>
        <div className="news-form-header">
          <h2>Submit Article</h2>
          <p>Share the latest tech news with the community.</p>
        </div>
        <form className="news-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="title">Article Title</label>
            <input type="text" id="title" placeholder="Enter headline" />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" placeholder="Enter description" />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input type="text" id="author" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select id="category">
                <option value="technology">Technology</option>
                <option value="design">Design</option>
                <option value="business">Business</option>
                <option value="ai">AI & ML</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="img">Cover Image</label>
            <input type="file" id="img" accept="image/*" className="file-input" />
          </div>

          <button type="submit" className="submit-btn">Publish Article</button>
        </form>
      </div>
    );
  }
}

export default NewsForm;
