import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    id: 0,
    chosenProduct: [],
    products: [{'id': 0, 'name': 'macbook-air', 'price': 990}, {'id': 1, 'name': 'macbook-pro', 'price': 123}, {'id': 2, 'name': 'HP', 'price': 1534}, {'id': 3, 'name': 'lol', 'price': 153412}, {'id': 4, 'name': 'Spartan', 'price': 15343673}, {'id': 5, 'name': 'zzzz', 'price': 68482}, {'id': 6, 'name': 'UCP', 'price': 1534}]
  },
  mutations: {
    SET_ID (state, newId) {
      this.state.id = newId
    },
    ADD_PRODUCT (state, product) {
      this.state.chosenProduct.push(product)
    },
    REMOVE_PRODUCT (state, productId) {
      this.state.products.map(product => {
        if (product.id === productId) {
          this.state.chosenProduct.remove(product)
        }
      })
    }
  },
  actions: {
    setID (context, newId) {
      context.commit('SET_ID', newId)
    },
    addProduct (context, product) {
      context.commit('ADD_PRODUCT', product)
    },
    removeProduct (context, productId) {
      context.commit('REMOVE_PRODUCT', productId)
    }
  },
  getters: {
    id: state => state.id
  }
})
