import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import { useAuthContext } from "../../context/AuthContext";
import { useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const { t } = useTranslation("translation", { keyPrefix: "register" });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = t("fullName-required");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("email-required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("email-invalid");
    }

    if (!formData.password) {
      newErrors.password = t("password-required");
    } else if (formData.password.length < 6) {
      newErrors.password = t("password-too-short");
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t("confirmPassword-mismatch");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error(t("form-error"));
      return;
    }

    login(formData.email);
    toast.success(t("success", { name: formData.fullName.split(" ")[0] }));
    navigate("/");
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <h1>{t("title")}</h1>
        <p className={styles.subtitle}>{t("description")}</p>

        <form className={styles.newsForm} onSubmit={handleSubmit} noValidate>
          <div className={styles.formGroup}>
            <label htmlFor="fullName">{t("fullName")}</label>
            <input
              type="text"
              id="fullName"
              placeholder={t("fullName-placeholder")}
              value={formData.fullName}
              className={errors.fullName ? styles.inputError : ""}
              onChange={handleInputChange}
            />
            {errors.fullName && <span className={styles.errorText}>{errors.fullName}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">{t("email")}</label>
            <input
              type="email"
              id="email"
              placeholder={t("email-placeholder")}
              value={formData.email}
              className={errors.email ? styles.inputError : ""}
              onChange={handleInputChange}
            />
            {errors.email && <span className={styles.errorText}>{errors.email}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">{t("password")}</label>
            <input
              type="password"
              id="password"
              placeholder={t("password-placeholder")}
              value={formData.password}
              className={errors.password ? styles.inputError : ""}
              onChange={handleInputChange}
            />
            {errors.password && <span className={styles.errorText}>{errors.password}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">{t("confirmPassword")}</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder={t("confirmPassword-placeholder")}
              value={formData.confirmPassword}
              className={errors.confirmPassword ? styles.inputError : ""}
              onChange={handleInputChange}
            />
            {errors.confirmPassword && (
              <span className={styles.errorText}>{errors.confirmPassword}</span>
            )}
          </div>

          <button type="submit" className={`${styles.submitBtn} btn`}>
            {t("submit")}
          </button>
        </form>

        <div className={styles.authFooter}>
          <p>
            {t("alreadyHaveAccount")} <Link to="/login">{t("login")}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
