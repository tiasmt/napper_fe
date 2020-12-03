import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let baseUrl = ''
if (process.env.NODE_ENV === 'production') {
   baseUrl = '';
} else {
   baseUrl = 'https://localhost:5001/rest/api/latest';
}

export const apiHost = baseUrl;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
