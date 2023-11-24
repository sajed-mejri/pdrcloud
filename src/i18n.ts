import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en: require("./locale/en.json"),
    gr: require("./locale/gr.json"),
  },
});

export default i18n;
