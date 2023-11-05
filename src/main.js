import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

// vue3는 bootstrap 못써서 vue2 검토해야함
const app = createApp(App)
createApp(App).mount('#app')
app.use(BootstrapVue3)
app.use(router)
app.mount('#app')
