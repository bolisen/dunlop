const APP_ROTATE = "APP_ROTATE";
const APP_TIP = "APP_TIP";

const state = {
  cubeIndex: 0,
  cubeRotateY: 0,
  cubeRotateYStyle: "translateZ(-100px) rotateY(0deg)",
  isTip: false
};

const actions = {
  changeRotate({ commit }, option) {
    commit(APP_ROTATE, option);
  },
  changeIsTip({ commit }, option) {
    commit(APP_TIP, option);
  }
};

const mutations = {
  [APP_ROTATE](state, action) {
    state.cubeIndex = action.cubeIndex || 0;
    state.cubeRotateY = action.cubeRotateY || 0;
    state.cubeRotateYStyle =
      action.cubeRotateYStyle || "translateZ(-100px) rotateY(0deg)";
  },
  [APP_TIP](state) {
    state.isTip = true;
  }
};

const getters = {};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
