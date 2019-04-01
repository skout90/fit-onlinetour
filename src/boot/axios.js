import axios from 'axios'
import _ from 'lodash'

export default ({ app, router, Vue }) => {
  axios.defaults.baseURL = process.env.API
  // axios.defaults.withCredentials = true
  axios.defaults.headers.common['Content-Type'] = 'application/json'

  /**
   * AXIOS 에러 공통 핸들러
   */
  axios.interceptors.response.use(undefined, error => {
    if (_.isEmpty(error.response)) {
      error.response = {
        data: {
          error: 'Server Unavailable',
          message: 'Server Unavailable',
          statusCode: 502
        },
        status: 502,
        statusText: 'Server Unavailable'
      }
    }

    return Promise.resolve(error.response)
  })

  Vue.prototype.$axios = axios
}

export { axios }
