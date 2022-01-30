import Vue from 'vue'
import App from './App'

// Import our store/router
import store from '@/store'
import router from '@/router'

// Import our 3rd party libraries
import '@/globals/loaders'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
