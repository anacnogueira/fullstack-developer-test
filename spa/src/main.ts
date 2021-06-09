import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'http://guide-121-api.test/api/'

createApp(App).use(VueAxios, axios).use(store).use(router).mount('#app')
