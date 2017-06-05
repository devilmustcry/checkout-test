import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    id: 0
  },
  mutations: {
    SET_ID (state, newId) {
      this.state.id = newId
    }
  },
  actions: {
    setID (context, newId) {
      context.commit('SET_ID', newId)
    }
  },
  getters: {
    id: state => state.id
  }
})
