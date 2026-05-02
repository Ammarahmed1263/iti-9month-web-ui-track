import VotingSection from "../VotingSection";
import "./styles.css";

const NewsCard = ({
      id,
      image,
      title,
      description,
      category,
      author,
      link,
      votes,
      userVote,
      onVote,
    }) => {

    return (
      <div className="news-card">
        <div className="news-card-image">
          <img src={image?.url} alt={image?.alt} />
          <span className="news-card-category">{category}</span>
        </div>
        <div className="news-card-content">
          <h3 className="news-card-title">{title}</h3>
          <p className="news-card-desc">{description}</p>
          <div className="news-card-footer">
            <VotingSection
              votes={votes}
              userVote={userVote}
              upvote={() => onVote(id, 1)}
              downvote={() => onVote(id, -1)}
            />
            <div className="news-card-info">
              <span className="news-card-author">By {author}</span>
              <a href={link} className="news-card-link">
                Read More{" "}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 12H20M20 12L14 6M20 12L14 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default NewsCard;
