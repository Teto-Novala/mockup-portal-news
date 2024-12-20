import "./assets/main.css";
// Supports weights 200-900
import "@fontsource-variable/nunito-sans/full.css";
import "@fontsource/poppins";
import "@fontsource/ibm-plex-serif";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
