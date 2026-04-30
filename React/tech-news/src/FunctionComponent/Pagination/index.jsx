import React from "react";
import "./styles.css";

const Pagination = ({ count, activeIndex, handleDotClick }) => {
  return (
    <div className="pagination">
      {Array.from({ length: count }).map((_, index) => {
        return (
          <span
            key={index}
            className={
              "dot " + (index === activeIndex ? "active" : "")
            }
            onClick={() => handleDotClick(index)}
          ></span>
        );
      })}
    </div>
  );
};

export default Pagination;
