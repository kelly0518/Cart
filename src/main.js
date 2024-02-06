import { createApp } from 'vue'
import {createPinia} from 'pinia'
import { productsStore } from '@/stores/product'

import App from './App.vue'
import router from './router'

const vueApp = createApp(App)
const pinia = createPinia()

pinia.use(productsStore);

vueApp.use(createPinia());
// vueApp.use(pinia);
vueApp.use(router);

vueApp.mount('#app');

