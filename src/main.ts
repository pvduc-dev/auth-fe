import { createApp } from 'vue'
import App from './App.vue'
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
import './styles/tailwind.css'
import naive from 'naive-ui'

const app = createApp(App);
app.use(naive)
app.mount('#app')
