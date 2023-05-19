import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 0,
  },
  mutations: {
    decrement: (state) => state.counter--,
    increment: (state, num) => (state.counter = state.counter + num),
  },
  getters: {
    counter: (state) => state.counter,
  },
  actions: {
    decrement: (context) => {
      context.commit("decrement");
    },
    increment: (context) => {
      setTimeout(() => {
        context.commit("increment", 5);
      }, 500);
    },
  },
});

export { store };
