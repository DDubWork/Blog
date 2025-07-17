import { createApp } from 'vue'
import App from './App.vue'
import router from './components/router' // your router config file
import './output.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
