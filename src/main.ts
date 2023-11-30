import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
<<<<<<< HEAD
import 'amfe-flexible'
=======
import 'amfe-flexible' // rem 布局适配
>>>>>>> 0b353613527dc5c491c5f5b8010ee7c501ae3f56

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
