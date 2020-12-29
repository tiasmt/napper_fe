import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Movies from '../views/Movies.vue'
import Series from '../views/Series.vue'
import Books from '../views/Books.vue'
import Store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/series',
    name: 'Series',
    component: Series
  },
  {
    path: '/books',
    name: 'Books',
    component: Books
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach(() => {
  Store.dispatch("ClearError");
})

export default router
