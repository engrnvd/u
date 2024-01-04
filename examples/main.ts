import '../u.scss'
import U from '../index'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routes'

const app = createApp(App)

app.use(router)
app.use(U)

app.mount('#app')
