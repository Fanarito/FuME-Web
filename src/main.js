/* global __DEV__ */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Revue from 'revue'
import store from './store'

window.source = "http://fanarito.duckdns.org";

if (__DEV__) {
  window.ReduxStore = store
}
Vue.use(Revue, { store })
Vue.use(VueRouter)
const router = new VueRouter()
router.map({
  '/': {
    component: require('./views/home')
  },
  '/shows': {
    component: require('./views/shows')
  },
  '/shows/:id': {
    name: 'showdetail',
    component: require('./views/showDetail')
  },
  '/movies': {
    component: require('./views/movies')
  },
  '/movies/:id': {
    name: 'moviedetail',
    component: require('./views/movieDetail')
  }
})

router.start(require('./app'), '#app')
