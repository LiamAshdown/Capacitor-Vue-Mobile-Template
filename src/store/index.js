import Vue from 'vue'
import Vuex from 'vuex'

import createdPersistedState from 'vuex-persistedstate'

// Modules
import authModule from './modules/auth'

Vue.use(Vuex)

const dataStore = createdPersistedState({
  key: 'persist',
})

const store = new Vuex.Store({
  strict: true,
  modules: {
    auth: authModule
  },
  plugins: [dataStore],
})

export default store
