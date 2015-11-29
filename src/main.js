import Vue from 'vue'
import VueRouter from 'vue-router'

require("../semantic/dist/semantic.css");
var jQuery;
var $ = jQuery = window.jQuery = require("../node_modules/jquery/dist/jquery.min.js")
window.jQuery = $; // Assure it's available globally.
var s = require("../semantic/dist/semantic.min.js");
window.semantic = s;

Vue.config.debug = true
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
  }
})

router.start(require('./app'), '#app')
