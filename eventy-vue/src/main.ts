import { createApp } from "vue";
import { createPinia } from 'pinia';

import { 
    faSearch,
    faBars,
    faLocationPin,
} from '@fortawesome/free-solid-svg-icons';


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from "./App.vue";
import router from './router'

import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";


// Add Imported Icons
library.add(
    faSearch,
    faBars,
    faLocationPin,
    );

// Create Application With Neccessary Extensions.
const app = createApp(App)
    .use(router)
    .use(createPinia());


// Register Globally Used Components.
app.component("Header", Header);
app.component("Footer", Footer);
app.component('fa', FontAwesomeIcon);


// Mount Application.
app.mount("#app");