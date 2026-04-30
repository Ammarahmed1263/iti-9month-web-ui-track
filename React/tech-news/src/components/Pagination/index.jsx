import React, { Component } from "react";
import "./styles.css";

class Pagination extends Component {
  render() {
    return (
      <div className="pagination">
        {Array.from({ length: this.props.count }).map((_, index) => {
          return (
            <span
              key={index}
              className={
                "dot " + (index === this.props.activeIndex ? "active" : "")
              }
              onClick={() => this.props.handleDotClick(index)}
            ></span>
          );
        })}
      </div>
    );
  }
}

export default Pagination;
