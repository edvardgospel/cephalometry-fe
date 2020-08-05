import Vue from 'vue'
import App from './App.vue'
import 'es6-promise/auto'
import { store } from './resources/store/store.js'
import VueKeepScrollPosition from 'vue-keep-scroll-position'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')

Vue.use(VueKeepScrollPosition)