const state = {
  isDrawerOpen: false,
}

const getters = {
  getIsDrawerOpen: state => state.isDrawerOpen
}

const mutations = {
  SET_IS_DRAWER_OPEN: (state, payload) => state.isDrawerOpen = payload
}

const actions = {}

export const layout = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}
