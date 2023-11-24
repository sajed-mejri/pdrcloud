import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "en",
  messages: {
    en: {
      hello: "Home",
    },
    fr: {
      hello: "Acceuil",
    },
  },
});

export default i18n;
