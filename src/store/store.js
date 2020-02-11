import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    ageCount: 0,
    products: [
      {name: 'A', price: 4},
      {name: 'B', price: 7},
      {name: 'A', price: 6},
      {name: 'D', price: 0},
      {name: 'f', price: 5},
    ]
  },

})


// mutations: {
//   increment (state) {
//     state.count++
//   }
// }