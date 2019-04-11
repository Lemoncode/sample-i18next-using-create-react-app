import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import XHR from "i18next-xhr-backend";
import backend from "i18next-xhr-backend";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(XHR)
  .use(backend)
  .init({
    lng: "en",
    fallbackLng: "en", // use en if detected lng is not available
    load: "currentOnly",
    react: {
      wait: true
    },
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    },
    backend: {
      loadPath: "/locales/{{lng}}.json"
    },
    debug: true,
  });

export default i18n;
