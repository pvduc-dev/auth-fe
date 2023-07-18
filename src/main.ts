import { createApp } from 'vue'
import App from './App.vue'
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
import naive from 'naive-ui'
import * as VueRouter from 'vue-router'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: [],
})

const app = createApp(App);
app.use(naive)
app.use(router);
app.mount('#app')
