
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routerGlobal.js'

// import './assets/themeTask9.css'


const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

app.mount('#app')

