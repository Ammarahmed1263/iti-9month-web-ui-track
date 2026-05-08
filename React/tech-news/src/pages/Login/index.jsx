import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { useAuthContext } from "../../context/AuthContext";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import toast from "react-hot-toast";

const Login = () => {
  const { login } = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { t } = useTranslation('translation', {keyPrefix: 'login'});

  const validateForm = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = t("email-required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = t("email-invalid");
    }

    if (!password) {
      newErrors.password = t("password-required");
    } else if (password.length < 6) {
      newErrors.password = t("password-too-short");
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    login(email);
    toast.success(t("success", { name: email.split("@")[0] }));
    navigate("/");
  };

  const handleInputChange = (setter, field) => (e) => {
    setter(e.target.value);
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <h1>{t("title")}</h1>
        <p className={styles.subtitle}>{t("description")}</p>

        <form className={styles.newsForm} onSubmit={handleSubmit} noValidate>
          <div className={styles.formGroup}>
            <label htmlFor="email">{t("email")}</label>
            <input
              type="email"
              id="email"
              placeholder={t("email-placeholder")}
              value={email}
              className={errors.email ? styles.inputError : ""}
              onChange={handleInputChange(setEmail, "email")}
            />
            {errors.email && (
              <span className={styles.errorText}>{errors.email}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">{t("password")}</label>
            <input
              type="password"
              id="password"
              placeholder={t("password-placeholder")}
              value={password}
              className={errors.password ? styles.inputError : ""}
              onChange={handleInputChange(setPassword, "password")}
            />
            {errors.password && (
              <span className={styles.errorText}>{errors.password}</span>
            )}
          </div>

          <button type="submit" className={`${styles.submitBtn} btn`}>
            {t("submit")}
          </button>
        </form>

        <div className={styles.authFooter}>
          <p>
            {t("dontHaveAccount")} <Link to="/register">{t("signUp")}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
