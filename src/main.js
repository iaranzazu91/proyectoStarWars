import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import People from './components/People.vue'
import Films from './components/Films.vue'
import Planets from './components/Planets.vue'
import Starships from './components/Starships.vue'
import Vehicles from './components/Vehicles.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/portfolio-item.css'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/films', name: 'films', component: Films },
  { path: '/People', name: 'people', component: People },
  { path: '/planets', name: 'planets', component: Planets },
  { path: '/starships', name: 'starships', component: Starships },
  { path: '/vehicles', name: 'vehicles', component: Vehicles }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
