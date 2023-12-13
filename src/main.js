import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia';
import VueAxios from 'vue-axios';
import router from './routes';
import axios from 'axios';

const pinia = createPinia();


const app = createApp(App)
  .use(VueAxios, axios)
  .use(pinia)
  .use(router);

axios.defaults.headers.common['Authorization'] = 'Bearer ad2557761e2401df23b1abb5a9992a43';
app.provide('axios', app.config.globalProperties.axios)
app.mount('#app');