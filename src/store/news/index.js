import { newsActions } from './news-actions'

const state = {
  news: []
}

const getters = {
  getNews: state => state.news,
}

const mutations = {
  SET_NEWS: (state, payload) => state.news = payload
}

export const news = {
  state,
  getters,
  mutations,
  actions: {
    ...newsActions
  },
  namespaced: true
}
