import { createStore } from "vuex";

export default createStore({
  state() {
    return{
      travel: {}
    }
  },
  getters: {
    travelInfo(state){
      return state.travel
    }
  },
  mutations: {},
  actions: {},
  modules: {},
});
