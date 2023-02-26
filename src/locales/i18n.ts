import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationUA from "./ua.json";
import translationEN from "./en.json";
import { lang } from "../constants/localKeys";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    ua: { translation: translationUA },
  },
  lng: localStorage.getItem(lang) || "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
