import { createApp } from 'vue'
import App from './App.vue'
import store from './store'


import  BootstrapVue3  from 'bootstrap-vue-3'
import  BootstrapVueIcons  from 'bootstrap-vue-3'

import mitt from 'mitt'
const emitter = mitt();

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App);
app.config.globalProperties.emitter= emitter;
app.use (store);
app.use (BootstrapVue3);
app.use (BootstrapVueIcons);
app.mount('#app')
