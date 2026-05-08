import { useState, memo } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import "./styles.css";

const NewsForm = ({ onAddNews }) => {
  const { t } = useTranslation("translation", { keyPrefix: "addArticle" });
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
      toast.error(t("toast.error"));
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
        <h2>{t("title")}</h2>
        <p>{t("description")}</p>
      </div>
      <form className="news-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">{t("articleTitle")}</label>
          <input
            name="title"
            value={state.title}
            onChange={handleChange}
            type="text"
            id="title"
            placeholder={t("articleTitle-placeholder")}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">{t("articleDescription")}</label>
          <textarea
            name="description"
            value={state.description}
            onChange={handleChange}
            id="description"
            placeholder={t("articleDescription-placeholder")}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="author">{t("author")}</label>
            <input
              name="author"
              value={state.author}
              onChange={handleChange}
              type="text"
              id="author"
              placeholder={t("author-placeholder")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">{t("category")}</label>
            <select
              name="category"
              value={state.category}
              onChange={handleChange}
              id="category"
            >
              <option value="technology">{t("categories.technology")}</option>
              <option value="design">{t("categories.design")}</option>
              <option value="business">{t("categories.business")}</option>
              <option value="ai">{t("categories.ai")}</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="img">{t("coverImage")}</label>
          <input
            name="img"
            value={state.img}
            onChange={handleChange}
            type="url"
            id="img"
            placeholder={t("coverImage-placeholder")}
          />
        </div>

        <button type="submit" className="submit-btn" disabled={isFormInvalid}>
          {t("submit")}
        </button>
      </form>
    </div>
  );
};

export default memo(NewsForm);
