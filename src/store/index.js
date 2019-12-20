import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: true,
    actions: false,
    subjects: false,
    school: false,
    eatery: false
  },
  mutations: {
    news( state, bool ) {
      state.news = bool;
      state.actions = false;
      state.subjects = false;
      state.school = false;
      state.eatery = false;
    },
    actions( state, bool ) {
      state.news = false;
      state.actions = bool;
      state.subjects = false;
      state.school = false;
      state.eatery = false;
    },
    subjects( state, bool ) {
      state.news = false;
      state.actions = false;
      state.subjects = bool;
      state.school = false;
      state.eatery = false;
    },
    school( state, bool ) {
      state.news = false;
      state.actions = false;
      state.subjects = false;
      state.school = bool;
      state.eatery = false;
    },
    eatery( state, bool ) {
      state.news = false;
      state.actions = false;
      state.subjects = false;
      state.school = false;
      state.eatery = bool;
    },
  },
  actions: {},
  modules: {}
});
