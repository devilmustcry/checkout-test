import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    id: 0,
    chosenProduct: [],
    products: [{'name': 'macbook-air', 'price': 990}, {'name': 'macbook-pro', 'price': 123}, {'name': 'HP', 'price': 1534}, {'name': 'lol', 'price': 153412}, {'name': 'Spartan', 'price': 15343673}, {'name': 'zzzz', 'price': 68482}, {'name': 'UCP', 'price': 1534}]
  },
  mutations: {
    SET_ID (state, newId) {
      this.state.id = newId
    },
    ADD_PRODUCT (state, product) {
      this.state.chosenProduct.push(product)
    },
    REMOVE_PRODUCT (state, product) {
      this.state.chosenProduct.remove(product)
    }
  },
  actions: {
    setID (context, newId) {
      context.commit('SET_ID', newId)
    },
    addProduct (context, product) {
      context.commit('ADD_PRODUCT', product)
    },
    removeProduct (context, product) {
      context.commit('REMOVE_PRODUCT', product)
    }
  },
  getters: {
    id: state => state.id
  }
})
