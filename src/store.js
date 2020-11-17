import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isProd: process.env.NODE_ENV === "production"
  },
  mutations: {},
  actions: {},
  getters: {}
})