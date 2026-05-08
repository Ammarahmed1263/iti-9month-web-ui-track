import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import ar from "./locales/ar.json";
import es from "./locales/es.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: en,
      },
      ar: {
        translation: ar,
      },
      es: {
        translation: es,
      },
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "lang",
    },
  });

document.documentElement.dir = i18n.dir();
document.documentElement.lang = i18n.language;

i18n.on("languageChanged", (lng) => {
  document.documentElement.dir = i18n.dir(lng);
  document.documentElement.lang = lng;
});

export default i18n;
