import { createApp } from 'vue'

import App from './App.vue'
import { createI18n } from './i18n'
import './styles/main.css'

document.documentElement.classList.add('js')

createApp(App).use(createI18n()).mount('#app')
