import Vue from "vue";
import Vuex from "vuex";
import app from "./store/app";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app: {
      namespaced: true,
      modules: {
        store: app
      }
    }
  }
});
