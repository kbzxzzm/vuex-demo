import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1
  },
  getters: {
    getstate: function(state) {
      return state.count + 1; //getters相当于vue的computed计算属性
    }
  },
  mutations: {
    add(state, somebody) {
      state.count = state.count + 1 + somebody;
    },
    reduce(state) {
      state.count = state.count - 1;
    }
  },
  actions: {
    //注册actions相当于vue的methods
    addactions(context, somebody) {
      context.commit("add", somebody); //当然，很冗余
    },
    redactions(context) {
      context.commit("reduce");
    }
  },
  modules: {}
});
