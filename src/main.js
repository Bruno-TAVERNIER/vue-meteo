import { createApp } from 'vue'
import App from './App.vue'

/* pour les API */
import axios from "axios";
import VueAxios from "vue-axios";
createApp(App).use(VueAxios, axios).mount("#app");