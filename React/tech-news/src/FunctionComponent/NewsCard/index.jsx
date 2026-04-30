import React from 'react';
import './styles.css';

const NewsCard = ({ image, title, description, category, author, link }) => {
  return (
    <div className="news-card">
      <div className="news-card-image">
        <img src={image?.url} alt={image?.alt} />
        <span className="news-card-category">{category}</span>
      </div>
      <div className="news-card-content">
        <h3 className="news-card-title">{title}</h3>
        <p className="news-card-desc">
          {description}
        </p>
        <div className="news-card-footer">
          <span className="news-card-author">By {author}</span>
          <a href={link} className="news-card-link">Read More &rarr;</a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
