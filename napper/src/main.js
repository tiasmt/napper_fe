import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let baseUrl = ''
if (process.env.NODE_ENV === 'production') {
   baseUrl = '';
} else {
   baseUrl = 'https://localhost:5001/rest/api/latest';
}

export const apiHost = baseUrl;
// Require dependencies
var VueCookies = require('vue-cookies');
// window.$cookies.config('7d','','',true);


// Tell Vue to use the plugin
Vue.use(VueCookies);

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
