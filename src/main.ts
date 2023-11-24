import BootstrapVue from "bootstrap-vue-next";
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";
import { createApp } from "vue";
import { createPinia } from "pinia";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/global.scss";

import App from "./App.vue";
import router from "./router";

import i18n from "../i18n";

const app = createApp(App);

app
  .use(createPinia())
  .use(router)
  .use(BootstrapVue)
  .use(BootstrapIconsPlugin)
  .use(i18n);

app.mount("#app");
