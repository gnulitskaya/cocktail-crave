import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// регистрация UI компонентов
// Object.values(components).forEach(component => {
//     app.component(component.name, component)
// })

app.use(createPinia())
app.use(router)

app.mount('#app')
