import { createApp } from "vue";
import { createPinia } from 'pinia'

import App from "./App.vue";
import router from './router'

import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


createApp(App)
    .use(router)
    .use(createPinia())
    .mount("#app");
