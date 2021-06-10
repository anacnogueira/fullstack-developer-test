import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap/dist/css/bootstrap.css'

axios.defaults.baseURL = process.env.VUE_APP_ROOT_URL

createApp(App).use(VueAxios, axios).use(store).use(router).mount('#app')
