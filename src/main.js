//import './assets/main.css'

import { createApp } from 'vue'
import Task8 from './Task8.vue'
import router from './router/routertask8.js'
import './assets/themeTask8.css'


const app = createApp(Task8)

app.use(router)
app.mount('#app')

