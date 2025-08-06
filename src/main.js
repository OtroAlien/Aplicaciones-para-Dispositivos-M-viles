import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import './assets/styles/global.css'

// Importar Google Fonts (Poppins)
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
document.head.appendChild(link);

Vue.config.productionTip = false

Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
