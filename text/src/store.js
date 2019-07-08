import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: localStorage.getItem('city') || '郑州'
  },
  mutations: {
    currentCity (state, city) {
      state.city = city
      localStorage.setItem('city', city)
    }
  },
  actions: {
    change (ctx, city) {
      // console.log(ctx, city)
      ctx.commit('currentCity', city)
    }
  }
})
