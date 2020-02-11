import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    ageCount: 0,
    products: [
      {name: 'A', price: 4},
      {name: 'B', price: 7},
      {name: 'o', price: 6},
      {name: 'D', price: 0},
      {name: 'f', price: 5},
    ],
    address: '1 road'
  },
  mutations: {
    updateAddress (state, address) {
      state.address = address
    }
  }

})


// mutations: {
//   increment (state) {
//     state.count++
//   }
// }