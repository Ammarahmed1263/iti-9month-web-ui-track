import { useTranslation } from "react-i18next";
import "./styles.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button
        className={`lang-btn ${i18n.language.startsWith("en") ? "active" : ""}`}
        onClick={() => changeLanguage("en")}
        title="English"
      >
        EN
      </button>
      <button
        className={`lang-btn ${i18n.language.startsWith("ar") ? "active" : ""}`}
        onClick={() => changeLanguage("ar")}
        title="Arabic"
        dir="rtl"
      >
       ع
      </button>
      <button
        className={`lang-btn ${i18n.language.startsWith("es") ? "active" : ""}`}
        onClick={() => changeLanguage("es")}
        title="Spanish"
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher;
