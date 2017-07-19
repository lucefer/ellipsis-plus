import Vue from 'vue'
import App from './index.vue'
import routes from './route'
import ellipsisPlus from '../index'
import VueRouter from 'vue-router'

document.addEventListener('DOMContentLoaded', function() {
  if (window.FastClick) window.FastClick.attach(document.body)
}, false)


Vue.component(ellipsisPlus.name, ellipsisPlus)
Vue.use(VueRouter)

const router = new VueRouter({
  // base: __dirname,
  routes
})

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App),
  router
})
