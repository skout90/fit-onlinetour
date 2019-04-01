import { axios } from 'boot/axios'
import { returnSuccess, returnFail } from '../helper/model-helper'

export const newsActions = {
  selectNews: async ({ commit }) => {
    const res = await axios.get('/news/1.json')

    if (res.status < 400) {
      commit('SET_NEWS', res.data)
      return returnSuccess(res)
    } else {
      return returnFail(res)
    }
  },
}
