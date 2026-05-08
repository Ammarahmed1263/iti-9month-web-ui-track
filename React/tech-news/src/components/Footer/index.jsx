import { memo } from "react";
import SocialIcon from "../SocialIcon";
import "./styles.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer>
      <div className="footer container">
        <div className="footer-newsletter">
          <h2>{t("footer.subscribe")}</h2>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder={t("footer.email-placeholder")}
              name="email"
              required
            />
            <button type="submit" aria-label="Subscribe">
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
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </button>
          </form>
        </div>
        <div className="footer-content">
          <h1 className="footer-logo">
            {t("brand")}
            <span className="brand-dot">.</span>
          </h1>
          <nav>
            <ul className="footer-nav">
              <li>
                <a href="#">{t("footer.about")}</a>
              </li>
              <li>
                <a href="#">{t("footer.features")}</a>
              </li>
              <li>
                <a href="#">{t("footer.categories")}</a>
              </li>
              <li>
                <a href="#">{t("footer.support")}</a>
              </li>
            </ul>
          </nav>
          <div className="footer-socials">
            <SocialIcon name="facebook" color="currentColor" />
            <SocialIcon name="twitter" color="currentColor" />
            <SocialIcon name="linkedin" color="currentColor" />
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            {t("footer.copyright", {
              year: new Date().toLocaleDateString(i18n.language === "ar" ? "ar-u-nu-arab" : i18n.language, {
                year: "numeric",
              }),
            })}
          </p>
          <div className="terms">
            <a href="#">{t("footer.privacy-policy")}</a>
            <a href="#">{t("footer.terms-conditions")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
