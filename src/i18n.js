import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  //   .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    ns: [
      "hero",
      "header",
      "settings",
      "story",
      "skills",
      "projects",
      "contact",
      "footer",
    ],
    defaultNS: "hero",
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;