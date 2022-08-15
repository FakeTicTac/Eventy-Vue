import { createApp } from "vue";
import { createPinia } from 'pinia'


import App from "./App.vue";
import router from './router'

import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";


// Create Application With Neccessary Extensions.
const app = createApp(App)
    .use(router)
    .use(createPinia())


// Register Globally Used Components.
app.component("Header", Header)
app.component("Footer", Footer)


// Mount Application.
app.mount("#app");