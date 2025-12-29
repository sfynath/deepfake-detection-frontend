import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '../router'
import ToastService from 'primevue/toastservice';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { createPinia } from 'pinia';

createApp(App)
    .use(router)
    .use(ToastService)
    .use(PrimeVue, {
        theme: {
            preset: Aura
        }
    })
    .use(createPinia())
    .mount('#app')