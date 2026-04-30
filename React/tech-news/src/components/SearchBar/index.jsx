import React, { Component } from "react";
import "./styles.css";

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <button type="submit" aria-label="Search">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
        <input type="text" placeholder="Search..." />
      </div>
    );
  }
}

export default SearchBar;
