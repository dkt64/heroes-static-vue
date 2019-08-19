import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

import HeroesList from './components/ListOfHeroes'
import EditHero from './components/SingleHero'

Vue.config.productionTip = false

Vue.use(Router)
Vue.use(Vuex)

axios.defaults.baseURL = "http://localhost:8080/"

var heroes = []
var hero = {ID:0, Name:"", Desc:""}
heroes[0] = hero

const routes = [
  { path: '/', name: "main", component: HeroesList },
  { path: '/heroes', name: "list_of_heroes", component: HeroesList},
  { path: '/hero/:id', name: "edit_hero", component: EditHero},
  { path: '/hero/new_hero', name: "new_hero", component: EditHero},
]

const router = new Router({ mode: 'history', routes })

const store = new Vuex.Store({
  state: {
    heroes,
    hero
  }
})

// eslint-disable-next-line
console.log("App Start...");

new Vue({
  render: h => h(App),
  router,
  store,
  axios
}).$mount('#app')
