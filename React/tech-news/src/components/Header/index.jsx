import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNewsContext } from "../../context/NewsContext";
import SearchBar from "../SearchBar";
import { useAuthContext } from "../../context/AuthContext";
import ThemeSwitcher from "../ThemeSwitcher";
import LanguageSwitcher from "../LanguageSwitcher";
import "./styles.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { searchTerm, handleSearch } = useNewsContext();
  const { userEmail, logout } = useAuthContext();
  const { t } = useTranslation();

  const handleLogout = () => {
    logout();
    toast.success(t("header.logout-success"));
  };

  return (
    <header>
      <div className="container header-content">
        <h1 className="logo">
          <Link to="/">
            {t("brand")}
            <span className="brand-dot">.</span>
          </Link>
        </h1>

        <nav className="main-nav">
          <ul className="nav-list">
            <li>
              <Link to="/">{t("header.home")}</Link>
            </li>
            <li>
              <Link to="/#">{t("header.categories")}</Link>
            </li>
            <li>
              <Link to="/#">{t("header.about")}</Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <SearchBar
            searchTerm={searchTerm}
            onChange={handleSearch}
            placeholder={t("header.searchPlaceholder")}
          />

          <ThemeSwitcher />
          <LanguageSwitcher />

          <div className="auth-actions">
            {userEmail ? (
              <>
                <Link to="/create-article" className="btn-write">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                  {t("header.write")}
                </Link>
                <div className="user-profile">
                  <span className="avatar">
                    {userEmail.charAt(0).toUpperCase()}
                  </span>
                  <button onClick={handleLogout} className="btn-logout">
                    {t("header.logout")}
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="btn-login">
                  {t("header.login")}
                </Link>
                <Link to="/register" className="btn-register">
                  {t("header.register")}
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
