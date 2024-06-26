import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./plugins/router";
// import { createPinia } from "pinia";
// import router from "./router";

const app = createApp(App);
app.use(vuetify);
// app.use(createPinia());
app.use(router);

app.mount("#app");
