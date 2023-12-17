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

axios.defaults.baseURL = 'http://192.168.1.18:3000'
axios.defaults.headers.common['Authorization'] = `Bearer ${import.meta.env.VITE_API_TOKEN}`;
app.provide('axios', app.config.globalProperties.axios)
app.mount('#app');