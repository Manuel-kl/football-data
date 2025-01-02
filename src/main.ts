import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router";
import "./assets/tailwind.css";

library.add(faUserSecret);

const pinia = createPinia();

createApp(App)
  .use(router)
  .use(ElementPlus)
  .use(pinia)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
