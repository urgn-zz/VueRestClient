// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: Routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
