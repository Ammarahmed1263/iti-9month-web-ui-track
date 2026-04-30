import React from "react";
import SearchBar from "../SearchBar";
import "./styles.css";

const Header = () => {
  return (
    <header>
      <div className="container header-content">
        <nav>
          <ul className="nav-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">Feature</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>

        <h1 className="logo">INNOVATE<span className="brand-dot">.</span></h1>

        <div className="header-search">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
