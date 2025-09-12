//import './assets/main.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import Task9 from './Task9.vue'
import router from './router/routerTask9'
import './assets/themeTask9.css'


const app = createApp(Task9)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')

