import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNewsContext } from "../../context/NewsContext";
import SearchBar from "../SearchBar";
import { useAuthContext } from "../../context/AuthContext";
import "./styles.css";

const Header = () => {
  const { searchTerm, handleSearch } = useNewsContext();
  const { userEmail, logout } = useAuthContext();

  const handleLogout = () => {
    logout();
    toast.success("See you next time!");
  };

  return (
    <header>
      <div className="container header-content">
        <h1 className="logo">
          <Link to="/">
            INNOVATE<span className="brand-dot">.</span>
          </Link>
        </h1>

        <nav className="main-nav">
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/#">Categories</Link>
            </li>
            <li>
              <Link to="/#">About</Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <SearchBar searchTerm={searchTerm} onChange={handleSearch} />

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
                  Write
                </Link>
                <div className="user-profile">
                  <span className="avatar">
                    {userEmail.charAt(0).toUpperCase()}
                  </span>
                  <button onClick={handleLogout} className="btn-logout">
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="btn-login">
                  Login
                </Link>
                <Link to="/register" className="btn-register">
                  Register
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
