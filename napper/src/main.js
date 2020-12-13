import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'

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


// Tell Vue to use the plugin
Vue.use(VueCookies);

Vue.use(Vuex);
const store = new Vuex.Store({
   state: {
     isAuthenticated: false
   }
 });

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
