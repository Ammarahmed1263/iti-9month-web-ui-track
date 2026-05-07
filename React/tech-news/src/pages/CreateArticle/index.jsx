import { useNewsContext } from "../../context/NewsContext";
import NewsForm from "../../components/NewsForm";
import styles from "./CreateArticle.module.css";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

function CreateArticle() {
  const { handleAddNews } = useNewsContext();
  const navigate = useNavigate();

  const handleAddArticle = useCallback(
    (newArticle) => {
      handleAddNews(newArticle);
      navigate("/");
    },
    [handleAddNews, navigate],
  );

  return (
    <div className={styles.areaForm}>
      <NewsForm onAddNews={handleAddArticle} />
    </div>
  );
}

export default CreateArticle;
